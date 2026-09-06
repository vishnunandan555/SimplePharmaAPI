// src/services/normalizer.ts
// Intelligent string normalization, salt parsing, and synonym mapping for Indian & International pharma nomenclature

export interface ParsedMedicineQuery {
  raw: string;
  cleaned: string;
  brandCandidate: string;
  strength?: number;
  unit?: string;
  dosageForm?: string;
}

// INN (International Nonproprietary Name) <-> USAN / Indian synonyms
export const SYNONYM_MAP: Record<string, string> = {
  paracetamol: "acetaminophen",
  acetaminophen: "paracetamol",
  salbutamol: "albuterol",
  albuterol: "salbutamol",
  lignocaine: "lidocaine",
  lidocaine: "lignocaine",
  frusemide: "furosemide",
  furosemide: "frusemide",
  amoxycillin: "amoxicillin",
  amoxicillin: "amoxicillin",
  thyronorm: "levothyroxine",
  eltroxin: "levothyroxine",
  mastifen: "ketotifen",
  dolo: "paracetamol",
  calpol: "paracetamol",
  crocin: "paracetamol",
  glycomet: "metformin",
  cetapin: "metformin",
  telma: "telmisartan",
  telmikind: "telmisartan",
  pantop: "pantoprazole",
  pan: "pantoprazole",
  pantocid: "pantoprazole",
  flavospas: "flavoxate",
  augmentin: "amoxicillin and clavulanate potassium",
  combiflam: "ibuprofen and paracetamol",
};

/**
 * Cleans and normalizes medicine string
 */
export function normalizeText(text: string): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[^\w\s.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extracts dosage form from medicine name if present
 */
export function extractDosageForm(text: string): string {
  const lower = text.toLowerCase();
  if (/\b(tablet|tab|tabs)\b/.test(lower)) return "tablet";
  if (/\b(capsule|cap|caps)\b/.test(lower)) return "capsule";
  if (/\b(syrup|syp|suspension|susp|liquid|solution|elixir)\b/.test(lower)) return "syrup";
  if (/\b(inhaler|rotacap|respule|inhalation|dpi|mdi)\b/.test(lower)) return "inhaler";
  if (/\b(injection|inj|infusion|vial|ampoule)\b/.test(lower)) return "injection";
  if (/\b(drops|eye drop|ear drop|nasal drop)\b/.test(lower)) return "drops";
  if (/\b(ointment|gel|cream|lotion)\b/.test(lower)) return "ointment";
  return "tablet"; // Default for oral chronic care
}

/**
 * Extracts strength value and unit (e.g. 500mg, 1mg, 100mcg, 0.5mg, 1g)
 */
export function extractStrength(text: string): { strength?: number; unit?: string } {
  // Regex for decimal or integer followed by optional space and unit
  const match = text.match(/(\d+(?:\.\d+)?)\s*(mg|mcg|g|iu|ml)\b/i);
  if (match) {
    return {
      strength: parseFloat(match[1]),
      unit: match[2].toLowerCase(),
    };
  }
  // Standalone numbers that often represent mg (e.g., "Dolo 650", "Telma 40", "Pantocid 40")
  const numMatch = text.match(/\b(\d{1,4})\b/);
  if (numMatch) {
    const val = parseFloat(numMatch[1]);
    // Reasonable tablet mg strength range
    if (val >= 1 && val <= 1000) {
      return { strength: val, unit: "mg" };
    }
  }
  return {};
}

/**
 * Parses user medicine query into components
 */
export function parseMedicineQuery(query: string): ParsedMedicineQuery {
  const cleaned = normalizeText(query);
  const dosageForm = extractDosageForm(query);
  const { strength, unit } = extractStrength(query);

  // Remove form words and strength tokens to isolate brand candidate
  let brandCandidate = cleaned
    .replace(/\b(tablet|tab|tabs|capsule|cap|caps|syrup|syp|inhaler|injection|inj|drops)\b/g, "")
    .replace(/(\d+(?:\.\d+)?)\s*(mg|mcg|g|iu|ml)\b/g, "")
    .replace(/\b\d+\b/g, "")
    .trim();

  return {
    raw: query,
    cleaned,
    brandCandidate: brandCandidate || cleaned,
    strength,
    unit,
    dosageForm,
  };
}

/**
 * Calculates trigram set for string
 */
export function getTrigrams(str: string): Set<string> {
  const s = `  ${str.toLowerCase().trim()} `;
  const trigrams = new Set<string>();
  for (let i = 0; i < s.length - 2; i++) {
    trigrams.add(s.substring(i, i + 3));
  }
  return trigrams;
}

/**
 * Calculates Trigram similarity score (Dice coefficient) between two strings
 * Returns a score between 0.0 and 1.0
 */
export function trigramSimilarity(str1: string, str2: string): number {
  if (!str1 || !str2) return 0;
  const s1 = str1.toLowerCase().trim();
  const s2 = str2.toLowerCase().trim();
  if (s1 === s2) return 1.0;

  const tri1 = getTrigrams(s1);
  const tri2 = getTrigrams(s2);
  if (tri1.size === 0 || tri2.size === 0) return 0;

  let intersection = 0;
  for (const t of tri1) {
    if (tri2.has(t)) intersection++;
  }

  return (2.0 * intersection) / (tri1.size + tri2.size);
}
