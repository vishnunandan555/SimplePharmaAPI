// src/routes/composition.ts
// Chemical Composition Finder Endpoints
//
// GET /api/medicines/composition?name={medicine}
//   → Active ingredient breakdown (salts, strengths, units) for any medicine.
//   → Also returns whether it's a Fixed Dose Combination (FDC).
//
// GET /api/medicines/by-salt?salt={chemical}&limit={n}&source={filter}
//   → Reverse lookup: find all brand medicines that contain a given salt / active ingredient.

import { Router, Request, Response } from "express";
import { lookupMedicineInCatalog, searchBySalt, CompositionResponse } from "../services/dbService.js";

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/medicines/composition
// ─────────────────────────────────────────────────────────────────────────────
export const compositionRouter = Router();

compositionRouter.get("/", (req: Request, res: Response) => {
  const name = typeof req.query.name === "string" ? req.query.name.trim() : "";

  if (!name) {
    return res.status(400).json({
      error: {
        code: "MISSING_PARAM",
        message: "Query param 'name' is required. Example: /api/medicines/composition?name=Dolo650",
      },
    });
  }

  const result = lookupMedicineInCatalog(name);

  if (!result) {
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: `No medicine found matching '${name}'. Try /api/medicines/search?q=${encodeURIComponent(name)} first.`,
      },
    });
  }

  const composition: CompositionResponse = {
    input: name,
    brand_name: result.brand_name,
    generic_name: result.generic_name,
    dosage_form: result.dosage_form,
    composition_summary: result.active_ingredients
      .map((i) => `${i.salt} ${i.strength}${i.unit}`)
      .join(" + "),
    active_ingredients: result.active_ingredients,
    is_fixed_dose_combination: result.active_ingredients.length > 1,
    source: result.source,
  };

  return res.status(200).json(composition);
});

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/medicines/by-salt
// ─────────────────────────────────────────────────────────────────────────────
export const bySaltRouter = Router();

bySaltRouter.get("/", (req: Request, res: Response) => {
  const salt = typeof req.query.salt === "string" ? req.query.salt.trim() : "";
  const limit = req.query.limit ? Math.min(parseInt(req.query.limit as string, 10), 100) : 20;
  const source = typeof req.query.source === "string" ? req.query.source.trim() : undefined;

  if (!salt) {
    return res.status(400).json({
      error: {
        code: "MISSING_PARAM",
        message: "Query param 'salt' is required. Example: /api/medicines/by-salt?salt=Ketotifen",
      },
    });
  }

  const results = searchBySalt(salt, limit, source);

  return res.status(200).json({
    salt_query: salt,
    total: results.length,
    results,
  });
});
