// src/routes/lookup.ts
// Clinical Specification Extractor for Instant Form Auto-Fill

import { Router, Request, Response } from "express";
import { lookupMedicineInCatalog } from "../services/dbService.js";
import { resolveMedicineFallback } from "../services/aiResolver.js";

export const lookupRouter = Router();

lookupRouter.get("/", async (req: Request, res: Response) => {
  const name = typeof req.query.name === "string" ? req.query.name.trim() : "";

  if (!name) {
    return res.status(400).json({
      error: {
        code: "VALIDATION_FAILED",
        message: "Query parameter 'name' is required (e.g. /api/medicines/lookup?name=Mastifen%201mg)",
      },
    });
  }

  try {
    // 1. Check in-memory master catalog
    const catalogMatch = lookupMedicineInCatalog(name);
    if (catalogMatch) {
      return res.status(200).json(catalogMatch);
    }

    // 2. Fallback to AI / heuristic resolver for uncataloged medicines
    const fallbackMatch = await resolveMedicineFallback(name);
    return res.status(200).json(fallbackMatch);
  } catch (err: any) {
    console.error("Error in /api/medicines/lookup:", err);
    return res.status(500).json({
      error: {
        code: "LOOKUP_ERROR",
        message: err?.message || "Failed to lookup medicine specification",
      },
    });
  }
});
