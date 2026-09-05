// src/services/aiResolver.ts
// AI-Powered and Heuristic Clinical Fallback Resolver for Uncataloged Drugs

import { config } from "../config/env.js";
import { parseMedicineQuery, extractDosageForm, extractStrength, SYNONYM_MAP } from "./normalizer.js";
import { LookupResponse } from "./dbService.js";

/**
 * Resolves an uncataloged medicine using Google Gemini AI or Heuristic Rule Engine
 */
export async function resolveMedicineFallback(medicineName: string): Promise<LookupResponse> {
  const parsed = parseMedicineQuery(medicineName);

  // If Gemini API key is available, attempt AI inference
  if (config.geminiApiKey) {
    try {
      const aiResponse = await resolveWithGemini(medicineName);
      if (aiResponse) {
        return aiResponse;
      }
    } catch (err) {
      console.warn("Gemini AI resolution failed, falling back to heuristic parsing:", err);
    }
  }

  // Heuristic Rule Engine fallback (Zero External Dependencies)
  return resolveWithHeuristics(medicineName, parsed);
}

/**
 * Candidate models prioritized by free availability and latest generation
 */
const CANDIDATE_MODELS = [
  "gemini-flash-latest",
  "gemini-3.5-flash-lite",
  "gemini-3.6-flash",
  "gemini-flash-lite-latest",
];

/**
 * Calls Google Gemini REST API to deduce clinical pharmacology using the latest free tier model
 */
async function resolveWithGemini(medicineName: string): Promise<LookupResponse | null> {
  const apiKey = config.geminiApiKey;
  const modelsToTry = [config.geminiModel, ...CANDIDATE_MODELS].filter(
    (m, idx, arr) => m && arr.indexOf(m) === idx
  );

  const prompt = `You are a clinical pharmacologist specializing in Indian and international pharmaceuticals.
Analyze the following medicine name: "${medicineName}".
Output ONLY a valid JSON object matching this exact TypeScript structure:
{
  "brand_name": string,
  "generic_name": string,
  "active_ingredients": [{"salt": string, "strength": number, "unit": string}],
  "dosage_form": string,
  "food_relation": "before" | "after" | "with_meals" | "with_or_without_food" | "empty_stomach",
  "food_badge": string,
  "food_instruction": string,
  "recommended_frequency": "1x" | "2x" | "3x" | "SOS",
  "frequency_label": string,
  "is_critical": boolean,
  "senior_safe_ceiling_mg": number,
  "max_daily_ceiling_mg": number,
  "fda_application_number": string
}`;

  let lastError: any = null;

  for (const model of modelsToTry) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json" },
        }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!res.ok) {
        lastError = new Error(`Model ${model} returned status ${res.status}`);
        continue;
      }

      const data = (await res.json()) as any;
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) continue;

      const parsedJson = JSON.parse(text);
      return {
        input: medicineName,
        brand_name: parsedJson.brand_name || medicineName,
        generic_name: parsedJson.generic_name || medicineName,
        active_ingredients: Array.isArray(parsedJson.active_ingredients) ? parsedJson.active_ingredients : [],
        dosage_form: parsedJson.dosage_form || "tablet",
        food_relation: parsedJson.food_relation || "with_or_without_food",
        food_badge: parsedJson.food_badge || "💊 With or Without Food",
        food_instruction: parsedJson.food_instruction || "Take as prescribed by doctor.",
        recommended_frequency: parsedJson.recommended_frequency || "1x",
        frequency_label: parsedJson.frequency_label || "1x Daily",
        is_critical: Boolean(parsedJson.is_critical),
        dosage_and_bounds: {
          standard_schedule: `${parsedJson.generic_name || medicineName} ${parsedJson.frequency_label || "1x Daily"}`,
          senior_safe_ceiling_mg: parsedJson.senior_safe_ceiling_mg || 100,
          max_daily_ceiling_mg: parsedJson.max_daily_ceiling_mg || 200,
        },
        fda_monograph: {
          found: Boolean(parsedJson.fda_application_number),
          application_number: parsedJson.fda_application_number || "AI-ESTIMATED",
          source: `Gemini (${model}) Clinical Pharmacopeia Synthesizer`,
        },
      };
    } catch (err) {
      lastError = err;
    }
  }

  if (lastError) {
    console.warn("All candidate Gemini models failed, falling back to heuristics:", lastError?.message);
  }
  return null;
}


/**
 * Heuristic clinical extractor for completely offline, zero-key environments
 */
function resolveWithHeuristics(medicineName: string, parsed: ReturnType<typeof parseMedicineQuery>): LookupResponse {
  const brandLower = parsed.brandCandidate.toLowerCase();
  const genericEquivalent = SYNONYM_MAP[brandLower] || parsed.brandCandidate;
  const strength = parsed.strength || 1;
  const unit = parsed.unit || "mg";
  const dosageForm = parsed.dosageForm || "tablet";

  return {
    input: medicineName,
    brand_name: parsed.brandCandidate || medicineName,
    generic_name: genericEquivalent,
    active_ingredients: [
      {
        salt: genericEquivalent,
        strength,
        unit,
      },
    ],
    dosage_form: dosageForm,
    food_relation: "with_or_without_food",
    food_badge: "💊 With or Without Food",
    food_instruction: "Take with a glass of water as directed by your physician.",
    recommended_frequency: "1x",
    frequency_label: "1x Daily",
    is_critical: false,
    dosage_and_bounds: {
      standard_schedule: `${strength} ${unit} once daily`,
      senior_safe_ceiling_mg: strength * 2,
      max_daily_ceiling_mg: strength * 3,
    },
    fda_monograph: {
      found: false,
      application_number: "UNLISTED",
      source: "SimplePharmaAPI Heuristic Resolver",
    },
  };
}
