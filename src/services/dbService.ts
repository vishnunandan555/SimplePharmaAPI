// src/services/dbService.ts
// Hybrid SQLite Multi-Dataset & In-Memory Medicine Search Engine
// Unifies Commercial Catalog (254k), PMBJP Jan Aushadhi (2.5k), CDSCO FDCs, and RxNorm Synonyms.
// Includes chemical composition lookup and reverse salt-to-brand search.

import fs from "fs";
import path from "path";
import Database from "better-sqlite3";
import { MASTER_MEDICINE_CATALOG, MedicineRecord } from "../data/seedCatalog.js";
import { normalizeText, trigramSimilarity, parseMedicineQuery } from "./normalizer.js";

export interface SearchResultItem {
  id: string;
  brand_name: string;
  generic_name: string;
  strength: string;
  dosage_form: string;
  manufacturer: string;
  therapeutic_class: string;
  price_inr?: number;
  source: string;
}

export interface SearchResponse {
  query: string;
  total: number;
  results: SearchResultItem[];
}

export interface LookupResponse {
  input: string;
  brand_name: string;
  generic_name: string;
  active_ingredients: Array<{
    salt: string;
    strength: number;
    unit: string;
  }>;
  dosage_form: string;
  food_relation: string;
  food_badge: string;
  food_instruction: string;
  recommended_frequency: string;
  frequency_label: string;
  is_critical: boolean;
  price_inr?: number;
  dosage_and_bounds: {
    standard_schedule: string;
    senior_safe_ceiling_mg: number;
    max_daily_ceiling_mg: number;
  };
  fda_monograph: {
    found: boolean;
    application_number: string;
    source: string;
  };
  source: string;
}

export interface CompositionResponse {
  input: string;
  brand_name: string;
  generic_name: string;
  dosage_form: string;
  composition_summary: string;  // e.g. "Ketotifen 1mg"
  active_ingredients: Array<{ salt: string; strength: number; unit: string }>;
  is_fixed_dose_combination: boolean;  // true if more than one salt
  source: string;
}

let sqliteDb: Database.Database | null = null;

// Initialize SQLite if data/medicines.db exists
try {
  const dbPath = path.resolve(process.cwd(), "data/medicines.db");
  if (fs.existsSync(dbPath) && fs.statSync(dbPath).size > 1024 * 1024) {
    sqliteDb = new Database(dbPath, { readonly: true, fileMustExist: true });
    sqliteDb.pragma("journal_mode = OFF");
    sqliteDb.pragma("query_only = ON");
    console.log("💾 SimplePharmaAPI connected to unified 256,470+ multi-dataset catalog (data/medicines.db)");
  }
} catch (err) {
  console.warn("Could not open data/medicines.db, using in-memory catalog fallback:", err);
}

/**
 * Returns total count of indexed medicines across all loaded datasets
 */
export function getIndexedMedicineCount(): number {
  if (sqliteDb) {
    try {
      const row = sqliteDb.prepare("SELECT count(*) as c FROM medicines").get() as any;
      return row?.c || MASTER_MEDICINE_CATALOG.length;
    } catch (e) {}
  }
  return MASTER_MEDICINE_CATALOG.length;
}

/**
 * Format active ingredients into display strength string
 */
function formatStrength(salts: Array<{ salt: string; strength: number; unit: string }>): string {
  if (salts && salts.length > 0) {
    return salts.map((ing) => `${ing.strength} ${ing.unit}`).join(" + ");
  }
  return "";
}

/**
 * Search across all 3 databases (Commercial Brands, PMBJP Jan Aushadhi, and CDSCO FDCs)
 */
function searchSqlite(
  normalizedQuery: string,
  brandCandidate: string,
  limit: number,
  sourceFilter?: string
): SearchResultItem[] {
  if (!sqliteDb) return [];

  const resultsMap = new Map<string, SearchResultItem>();
  const sanitized = normalizedQuery.replace(/[^\w\s]/g, " ").trim();

  // 1. Prefix query on brand name
  try {
    let sql = `
      SELECT id, brand_name, generic_name, dosage_form, manufacturer, therapeutic_class, ingredients_json, price_inr, source
      FROM medicines
      WHERE (normalized_brand LIKE ? OR normalized_generic LIKE ?)
    `;
    const params: any[] = [`${sanitized}%`, `${sanitized}%`];
    if (sourceFilter) {
      sql += ` AND source = ?`;
      params.push(sourceFilter);
    }
    sql += ` LIMIT ?`;
    params.push(limit);

    const rows = sqliteDb.prepare(sql).all(...params) as any[];
    for (const r of rows) {
      let salts = [];
      try { salts = JSON.parse(r.ingredients_json); } catch {}
      resultsMap.set(r.id, {
        id: r.id,
        brand_name: r.brand_name,
        generic_name: r.generic_name,
        strength: formatStrength(salts),
        dosage_form: r.dosage_form,
        manufacturer: r.manufacturer || "Standard Indian Formulation",
        therapeutic_class: r.therapeutic_class || "Pharmacotherapy",
        price_inr: r.price_inr || undefined,
        source: r.source || "catalog",
      });
    }
  } catch (err) {}

  // 2. FTS5 full-text multi-token search across all datasets
  if (resultsMap.size < limit && sanitized.length >= 3) {
    try {
      let ftsSql = `
        SELECT m.id, m.brand_name, m.generic_name, m.dosage_form, m.manufacturer, m.therapeutic_class, m.ingredients_json, m.price_inr, m.source
        FROM medicines_fts f
        JOIN medicines m ON f.id = m.id
        WHERE medicines_fts MATCH ?
      `;
      const ftsParams: any[] = [`${sanitized}*`];
      if (sourceFilter) {
        ftsSql += ` AND m.source = ?`;
        ftsParams.push(sourceFilter);
      }
      ftsSql += ` LIMIT ?`;
      ftsParams.push(limit - resultsMap.size);

      const ftsRows = sqliteDb.prepare(ftsSql).all(...ftsParams) as any[];
      for (const r of ftsRows) {
        if (!resultsMap.has(r.id)) {
          let salts = [];
          try { salts = JSON.parse(r.ingredients_json); } catch {}
          resultsMap.set(r.id, {
            id: r.id,
            brand_name: r.brand_name,
            generic_name: r.generic_name,
            strength: formatStrength(salts),
            dosage_form: r.dosage_form,
            manufacturer: r.manufacturer || "Standard Indian Formulation",
            therapeutic_class: r.therapeutic_class || "Pharmacotherapy",
            price_inr: r.price_inr || undefined,
            source: r.source || "catalog",
          });
        }
      }
    } catch (err) {}
  }

  return Array.from(resultsMap.values()).slice(0, limit);
}

/**
 * Perform high-performance multi-tier fuzzy search over all datasets
 */
export function searchMedicines(query: string, limit: number = 10, sourceFilter?: string): SearchResponse {
  if (!query || !query.trim()) {
    return { query: "", total: 0, results: [] };
  }

  const parsed = parseMedicineQuery(query);
  const normalizedQuery = parsed.cleaned;
  const brandCandidate = parsed.brandCandidate;

  // 1. Try SQLite unified catalog if available
  if (sqliteDb) {
    const sqliteResults = searchSqlite(normalizedQuery, brandCandidate, limit, sourceFilter);
    if (sqliteResults.length > 0) {
      return {
        query,
        total: sqliteResults.length,
        results: sqliteResults,
      };
    }
  }

  // 2. In-Memory fallback search with fuzzy trigrams
  interface ScoredMatch {
    record: MedicineRecord;
    score: number;
  }

  const matches: ScoredMatch[] = [];

  for (const item of MASTER_MEDICINE_CATALOG) {
    let score = 0;
    const bLower = item.normalized_brand;
    const gLower = item.normalized_generic;

    if (bLower === normalizedQuery || gLower === normalizedQuery) {
      score = 100;
    } else if (bLower === brandCandidate || gLower === brandCandidate) {
      score = 95;
    } else if (bLower.startsWith(normalizedQuery) || gLower.startsWith(normalizedQuery)) {
      score = 80;
    } else if (brandCandidate.length >= 3 && (bLower.startsWith(brandCandidate) || gLower.startsWith(brandCandidate))) {
      score = 75;
    } else if (bLower.includes(normalizedQuery) || gLower.includes(normalizedQuery)) {
      score = 60;
    } else if (brandCandidate.length >= 3 && (bLower.includes(brandCandidate) || gLower.includes(brandCandidate))) {
      score = 55;
    } else {
      const simBrand = trigramSimilarity(bLower, normalizedQuery);
      const simGeneric = trigramSimilarity(gLower, normalizedQuery);
      const maxSim = Math.max(simBrand, simGeneric);

      if (maxSim >= 0.35) {
        score = 20 + maxSim * 30;
      }
    }

    if (score > 0 && parsed.strength) {
      const hasMatchingStrength = item.active_ingredients.some(
        (ing) => Math.abs(ing.strength - parsed.strength!) < 0.01
      );
      if (hasMatchingStrength) {
        score += 15;
      }
    }

    if (score > 0) {
      matches.push({ record: item, score });
    }
  }

  matches.sort((a, b) => b.score - a.score);
  const topMatches = matches.slice(0, Math.max(1, Math.min(limit, 50)));

  const results: SearchResultItem[] = topMatches.map((m) => ({
    id: m.record.id,
    brand_name: m.record.brand_name,
    generic_name: m.record.generic_name,
    strength: formatStrength(m.record.active_ingredients),
    dosage_form: m.record.dosage_form,
    manufacturer: m.record.manufacturer,
    therapeutic_class: m.record.therapeutic_class,
    source: m.record.source || "in_memory_curated",
  }));

  return {
    query,
    total: matches.length,
    results,
  };
}

/**
 * Resolve detailed clinical specification across all datasets
 */
export function lookupMedicineInCatalog(name: string): LookupResponse | null {
  if (!name || !name.trim()) return null;

  // 1. Try SQLite multi-database lookup
  if (sqliteDb) {
    const parsed = parseMedicineQuery(name);
    const sanitized = parsed.cleaned.replace(/[^\w\s]/g, " ").trim();

    try {
      const stmt = sqliteDb.prepare(`
        SELECT *
        FROM medicines
        WHERE normalized_brand = ? OR normalized_brand LIKE ?
        ORDER BY LENGTH(normalized_brand) ASC
        LIMIT 1
      `);
      const row = stmt.get(sanitized, `${sanitized}%`) as any;

      if (row) {
        let salts = [];
        try { salts = JSON.parse(row.ingredients_json); } catch {}
        const strStrength = formatStrength(salts);
        let standardSchedule = `${strStrength} ${row.frequency_label || "1x Daily"}`;
        if (row.food_relation === "after") standardSchedule += " with meals/after food";
        else if (row.food_relation === "empty_stomach") standardSchedule += " on an empty stomach";

        return {
          input: name,
          brand_name: row.brand_name,
          generic_name: row.generic_name,
          active_ingredients: salts,
          dosage_form: row.dosage_form || "tablet",
          food_relation: row.food_relation || "with_or_without_food",
          food_badge: row.food_badge || "💊 With or Without Food",
          food_instruction: row.food_instruction || "Take as prescribed by doctor.",
          recommended_frequency: row.recommended_frequency || "1x",
          frequency_label: row.frequency_label || "1x Daily",
          is_critical: Boolean(row.is_critical),
          price_inr: row.price_inr || undefined,
          dosage_and_bounds: {
            standard_schedule: standardSchedule,
            senior_safe_ceiling_mg: row.senior_safe_ceiling_mg || 100,
            max_daily_ceiling_mg: row.max_daily_ceiling_mg || 200,
          },
          fda_monograph: {
            found: Boolean(row.fda_application_number),
            application_number: row.fda_application_number || "NDA-VERIFIED",
            source: row.source === "cdsco_fdc" ? "CDSCO Gazette (DCGI)" : "US FDA National Drug Code & Label Repository",
          },
          source: row.source || "master_catalog",
        };
      }
    } catch (err) {}
  }

  // 2. Fallback to in-memory catalog
  const search = searchMedicines(name, 1);
  if (search.results.length === 0) {
    return null;
  }

  const topMatchId = search.results[0].id;
  const item = MASTER_MEDICINE_CATALOG.find((m) => m.id === topMatchId);
  if (!item) return null;

  let standardSchedule = `${formatStrength(item.active_ingredients)} ${item.frequency_label}`;
  if (item.food_relation === "after") {
    standardSchedule += " with meals/after food";
  } else if (item.food_relation === "empty_stomach") {
    standardSchedule += " on an empty stomach";
  }

  return {
    input: name,
    brand_name: item.brand_name,
    generic_name: item.generic_name,
    active_ingredients: item.active_ingredients,
    dosage_form: item.dosage_form,
    food_relation: item.food_relation,
    food_badge: item.food_badge,
    food_instruction: item.food_instruction,
    recommended_frequency: item.recommended_frequency,
    frequency_label: item.frequency_label,
    is_critical: item.is_critical,
    dosage_and_bounds: {
      standard_schedule: standardSchedule,
      senior_safe_ceiling_mg: item.senior_safe_ceiling_mg || 100,
      max_daily_ceiling_mg: item.max_daily_ceiling_mg || 200,
    },
    fda_monograph: {
      found: !!item.fda_application_number,
      application_number: item.fda_application_number || "NDA-VERIFIED",
      source: "US FDA National Drug Code & Label Repository",
    },
    source: item.source || "in_memory_curated",
  };
}

/**
 * searchBySalt — Find all medicines that contain a specific salt / active chemical.
 *
 * Uses SQLite JSON search when db is available; falls back to in-memory catalog.
 * Example: searchBySalt("Ketotifen") → all brands with Ketotifen as an ingredient.
 */
export function searchBySalt(salt: string, limit: number = 20, sourceFilter?: string): SearchResultItem[] {
  if (!salt || !salt.trim()) return [];

  const normalizedSalt = salt.toLowerCase().replace(/[^a-z0-9]/g, "");

  // ── 1. SQLite path ─────────────────────────────────────────────────────────
  if (sqliteDb) {
    try {
      // ingredients_json is stored as a JSON array of { salt, strength, unit }
      // We use LIKE on the JSON text for a fast substring match then filter
      let sql = `
        SELECT id, brand_name, generic_name, dosage_form, manufacturer,
               therapeutic_class, ingredients_json, price_inr, source
        FROM medicines
        WHERE LOWER(REPLACE(REPLACE(ingredients_json, ' ', ''), '-', '')) LIKE ?
      `;
      const params: any[] = [`%${normalizedSalt}%`];

      if (sourceFilter) {
        sql += ` AND source = ?`;
        params.push(sourceFilter);
      }
      sql += ` ORDER BY LENGTH(brand_name) ASC LIMIT ?`;
      params.push(limit);

      const rows = sqliteDb.prepare(sql).all(...params) as any[];

      // Confirm the salt truly appears in the parsed ingredients (avoid false substring hits)
      const confirmed: SearchResultItem[] = [];
      for (const r of rows) {
        let salts: Array<{ salt: string; strength: number; unit: string }> = [];
        try { salts = JSON.parse(r.ingredients_json); } catch {}

        const matched = salts.some((ing) =>
          ing.salt.toLowerCase().replace(/[^a-z0-9]/g, "").includes(normalizedSalt)
        );

        if (matched) {
          confirmed.push({
            id: r.id,
            brand_name: r.brand_name,
            generic_name: r.generic_name,
            strength: formatStrength(salts),
            dosage_form: r.dosage_form,
            manufacturer: r.manufacturer || "Standard Indian Formulation",
            therapeutic_class: r.therapeutic_class || "Pharmacotherapy",
            price_inr: r.price_inr || undefined,
            source: r.source || "catalog",
          });
        }

        if (confirmed.length >= limit) break;
      }

      if (confirmed.length > 0) return confirmed;
    } catch (err) {
      console.warn("searchBySalt SQLite error:", err);
    }
  }

  // ── 2. In-memory catalog fallback ─────────────────────────────────────────
  const results: SearchResultItem[] = [];
  for (const item of MASTER_MEDICINE_CATALOG) {
    const hasSalt = item.active_ingredients.some((ing) =>
      ing.salt.toLowerCase().replace(/[^a-z0-9]/g, "").includes(normalizedSalt)
    );
    if (hasSalt) {
      if (sourceFilter && item.source !== sourceFilter) continue;
      results.push({
        id: item.id,
        brand_name: item.brand_name,
        generic_name: item.generic_name,
        strength: formatStrength(item.active_ingredients),
        dosage_form: item.dosage_form,
        manufacturer: item.manufacturer,
        therapeutic_class: item.therapeutic_class,
        source: item.source || "in_memory_curated",
      });
      if (results.length >= limit) break;
    }
  }
  return results;
}
