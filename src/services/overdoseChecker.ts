// src/services/overdoseChecker.ts
// ─────────────────────────────────────────────────────────────────────────────
// Polypharmacy Overdose / Combined Dose Safety Engine
//
// Algorithm:
//   1. Resolve each medicine name → active_ingredients via dbService
//   2. Aggregate total mg per salt across ALL provided medicines
//   3. Compare totals against:
//         a. saltCeilings.ts hardcoded table  (~110 common salts, instant)
//         b. medicines.db MAX(max_daily_ceiling_mg) per generic  (~1ms)
//         c. (future) OpenFDA label API for exotic salts
//   4. Flag duplicates (same salt in multiple medicines)
//   5. Return structured per-salt risk report + overall risk level
// ─────────────────────────────────────────────────────────────────────────────

import { lookupMedicineInCatalog, getMaxDailyMgFromDb } from "./dbService.js";
import { getSaltCeiling } from "../data/saltCeilings.js";

// ── Types ─────────────────────────────────────────────────────────────────────

export type RiskLevel = "SAFE" | "CAUTION" | "WARNING" | "DANGER" | "UNKNOWN";

export interface ResolvedMedicine {
  input_name: string;
  resolved_brand: string;
  resolved_generic: string;
  active_ingredients: Array<{ salt: string; strength: number; unit: string }>;
  found: boolean;
}

export interface SaltAggregation {
  salt: string;
  /** Which medicines contributed this salt */
  contributed_by: string[];
  /** Is this salt present in more than one medicine in the list? */
  is_duplicate_across_medicines: boolean;
  /** Total mg of this salt from the combined dose (one dose of each medicine) */
  total_combined_mg: number;
  /** Per-dose safe ceiling (adult). Null if unknown. */
  max_safe_single_dose_mg: number | null;
  /** Per-day safe ceiling (adult). Null if unknown. */
  max_safe_daily_dose_mg: number | null;
  /** Per-day conservative ceiling for seniors (≥65). Null if unknown. */
  senior_daily_max_mg: number | null;
  /** Source of the ceiling data */
  ceiling_source: "hardcoded_reference" | "medicines_db" | "unknown";
  /** Risk level for this specific salt */
  risk_level: RiskLevel;
  /** Human-readable clinical message */
  message: string;
  /** Additional clinical note from the reference table */
  clinical_notes?: string;
}

export interface OverdoseCheckResponse {
  /** List of medicine names as submitted */
  medicines_checked: string[];
  /** How many were resolved to known entries */
  medicines_resolved: number;
  /** Which could not be resolved */
  unresolved_medicines: string[];
  /** Full resolution details per medicine */
  resolved_details: ResolvedMedicine[];
  /** Per-salt aggregation and risk assessment */
  salt_aggregation: SaltAggregation[];
  /** Highest risk level across all salts */
  overall_risk: RiskLevel;
  /** Machine-readable risk flags */
  risk_flags: string[];
  /** Total unique salts found across all medicines */
  unique_salts_found: number;
  /** Whether any salt appears in more than one medicine (dose stacking) */
  has_duplicate_salts: boolean;
  /** Legal disclaimer — always present */
  disclaimer: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const RISK_RANK: Record<RiskLevel, number> = {
  UNKNOWN: 0,
  SAFE: 1,
  CAUTION: 2,
  WARNING: 3,
  DANGER: 4,
};

function higherRisk(a: RiskLevel, b: RiskLevel): RiskLevel {
  return RISK_RANK[a] >= RISK_RANK[b] ? a : b;
}

function normalizeUnit(strength: number, unit: string): number {
  // Normalise everything to mg for comparison
  const u = unit.toLowerCase().trim();
  if (u === "mcg" || u === "µg" || u === "ug") return strength / 1000;
  if (u === "g") return strength * 1000;
  // Default: already mg
  return strength;
}

function assessRisk(
  totalMg: number,
  ceiling: SaltAggregation
): { risk_level: RiskLevel; message: string } {
  const singleDoseCeiling = ceiling.max_safe_single_dose_mg;
  const dailyCeiling = ceiling.max_safe_daily_dose_mg;
  const isDuplicate = ceiling.is_duplicate_across_medicines;

  if (singleDoseCeiling === null && dailyCeiling === null) {
    return {
      risk_level: "UNKNOWN",
      message: `No safe dose ceiling found for ${ceiling.salt}. Ceiling data unavailable — consult a pharmacist.`,
    };
  }

  const pct = singleDoseCeiling ? (totalMg / singleDoseCeiling) * 100 : null;

  if (singleDoseCeiling && totalMg > singleDoseCeiling * 1.5) {
    return {
      risk_level: "DANGER",
      message: `⛔ DANGER: Combined ${ceiling.salt} dose is ${totalMg.toFixed(1)} mg — ${Math.round(totalMg / singleDoseCeiling * 100 - 100)}% above the safe single-dose ceiling of ${singleDoseCeiling} mg. Do NOT take these medicines simultaneously.`,
    };
  }
  if (singleDoseCeiling && totalMg > singleDoseCeiling) {
    return {
      risk_level: "WARNING",
      message: `⚠️ WARNING: Combined ${ceiling.salt} dose is ${totalMg.toFixed(1)} mg — exceeds safe single-dose limit of ${singleDoseCeiling} mg. Avoid taking all these medicines at the same time.`,
    };
  }
  if (singleDoseCeiling && totalMg > singleDoseCeiling * 0.8) {
    return {
      risk_level: "CAUTION",
      message: `🟡 CAUTION: Combined ${ceiling.salt} dose is ${totalMg.toFixed(1)} mg — within 20% of the single-dose ceiling (${singleDoseCeiling} mg).${isDuplicate ? " Same salt found in multiple medicines — review with your doctor." : ""}`,
    };
  }
  if (isDuplicate) {
    return {
      risk_level: "CAUTION",
      message: `🟡 CAUTION: ${ceiling.salt} is present in multiple medicines. Combined dose ${totalMg.toFixed(1)} mg is within safe limits, but dose stacking risk should be reviewed with a doctor.`,
    };
  }
  return {
    risk_level: "SAFE",
    message: `✅ SAFE: Combined ${ceiling.salt} dose is ${totalMg.toFixed(1)} mg — within safe single-dose limit${singleDoseCeiling ? ` of ${singleDoseCeiling} mg` : ""}.`,
  };
}

// ── Main Function ─────────────────────────────────────────────────────────────

/**
 * checkCombinedDoseOverdose
 *
 * Given a list of medicine names, resolves each one, sums up the active
 * ingredient doses by salt, and returns a structured overdose risk report.
 *
 * @param medicineNames  Array of medicine brand/generic names (2–10 recommended)
 */
export async function checkCombinedDoseOverdose(
  medicineNames: string[]
): Promise<OverdoseCheckResponse> {
  // ── Step 1: Resolve each medicine ─────────────────────────────────────────
  const resolvedDetails: ResolvedMedicine[] = [];
  const unresolvedMedicines: string[] = [];

  for (const name of medicineNames) {
    const lookup = lookupMedicineInCatalog(name);
    if (lookup) {
      resolvedDetails.push({
        input_name: name,
        resolved_brand: lookup.brand_name,
        resolved_generic: lookup.generic_name,
        active_ingredients: lookup.active_ingredients,
        found: true,
      });
    } else {
      resolvedDetails.push({
        input_name: name,
        resolved_brand: name,
        resolved_generic: name,
        active_ingredients: [],
        found: false,
      });
      unresolvedMedicines.push(name);
    }
  }

  // ── Step 2: Aggregate salt totals ─────────────────────────────────────────
  // saltMap key = normalized salt name
  const saltMap = new Map<
    string,
    {
      salt: string;           // Display name (first seen)
      totalMg: number;
      contributors: string[]; // Brand names that contain this salt
    }
  >();

  for (const med of resolvedDetails) {
    if (!med.found) continue;
    for (const ing of med.active_ingredients) {
      const normalizedSalt = ing.salt.toLowerCase().replace(/[^a-z0-9]/g, "");
      const mg = normalizeUnit(ing.strength, ing.unit);
      const existing = saltMap.get(normalizedSalt);
      if (existing) {
        existing.totalMg += mg;
        existing.contributors.push(med.resolved_brand);
      } else {
        saltMap.set(normalizedSalt, {
          salt: ing.salt,
          totalMg: mg,
          contributors: [med.resolved_brand],
        });
      }
    }
  }

  // ── Step 3: Ceiling lookup + risk assessment per salt ──────────────────────
  const saltAggregations: SaltAggregation[] = [];
  let overallRisk: RiskLevel = "SAFE";
  const riskFlags: string[] = [];
  let hasDuplicate = false;

  for (const [, saltData] of saltMap) {
    const isDuplicate = saltData.contributors.length > 1;
    if (isDuplicate) hasDuplicate = true;

    // Tier 1: hardcoded reference table
    const hardcoded = getSaltCeiling(saltData.salt);
    let maxSingleDose: number | null = hardcoded?.max_single_dose_mg ?? null;
    let maxDailyDose: number | null = hardcoded?.max_daily_dose_mg ?? null;
    let seniorMax: number | null = hardcoded?.senior_daily_max_mg ?? null;
    let ceilingSource: SaltAggregation["ceiling_source"] = hardcoded ? "hardcoded_reference" : "unknown";
    let clinicalNotes = hardcoded?.notes;

    // Tier 2: fallback to medicines.db MAX daily ceiling if not in hardcoded table
    if (maxDailyDose === null) {
      try {
        const dbMax = await getMaxDailyMgFromDb(saltData.salt);
        if (dbMax !== null) {
          maxDailyDose = dbMax;
          // Use 50% as a rough single-dose estimate when we only have daily
          maxSingleDose = Math.round(dbMax / 2);
          ceilingSource = "medicines_db";
        }
      } catch {}
    }

    const agg: SaltAggregation = {
      salt: saltData.salt,
      contributed_by: saltData.contributors,
      is_duplicate_across_medicines: isDuplicate,
      total_combined_mg: parseFloat(saltData.totalMg.toFixed(4)),
      max_safe_single_dose_mg: maxSingleDose,
      max_safe_daily_dose_mg: maxDailyDose,
      senior_daily_max_mg: seniorMax,
      ceiling_source: ceilingSource,
      risk_level: "UNKNOWN",
      message: "",
      clinical_notes: clinicalNotes,
    };

    const { risk_level, message } = assessRisk(saltData.totalMg, agg);
    agg.risk_level = risk_level;
    agg.message = message;

    saltAggregations.push(agg);
    overallRisk = higherRisk(overallRisk, risk_level);

    // Collect machine-readable flags
    if (risk_level === "DANGER") riskFlags.push(`DANGER_DOSE_${saltData.salt.toUpperCase().replace(/\s/g, "_")}`);
    if (risk_level === "WARNING") riskFlags.push(`OVERDOSE_RISK_${saltData.salt.toUpperCase().replace(/\s/g, "_")}`);
    if (isDuplicate) riskFlags.push(`DUPLICATE_SALT_${saltData.salt.toUpperCase().replace(/\s/g, "_")}`);
  }

  if (unresolvedMedicines.length > 0) riskFlags.push("SOME_MEDICINES_UNRESOLVED");
  if (hasDuplicate) riskFlags.push("HAS_DUPLICATE_SALTS");

  // If all salts are SAFE but some are unresolved, bump to CAUTION
  if (overallRisk === "SAFE" && unresolvedMedicines.length > 0) {
    overallRisk = "CAUTION";
  }

  return {
    medicines_checked: medicineNames,
    medicines_resolved: resolvedDetails.filter((r) => r.found).length,
    unresolved_medicines: unresolvedMedicines,
    resolved_details: resolvedDetails,
    salt_aggregation: saltAggregations,
    overall_risk: overallRisk,
    risk_flags: riskFlags,
    unique_salts_found: saltMap.size,
    has_duplicate_salts: hasDuplicate,
    disclaimer:
      "⚠️ MEDICAL DISCLAIMER: This tool provides informational dose-stacking analysis only. It is NOT a substitute for professional medical advice, diagnosis, or treatment. Always consult a licensed physician or pharmacist before combining medications. Do not make clinical decisions based solely on this output.",
  };
}
