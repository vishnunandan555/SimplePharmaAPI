// src/routes/overdose.ts
// ─────────────────────────────────────────────────────────────────────────────
// POST /api/safety/overdose-check
//
// Checks whether combining a set of medicines would result in unsafe cumulative
// doses of any active ingredient (salt-stacking / polypharmacy overdose risk).
//
// Request body (JSON):
//   { "medicines": ["Dolo 650", "Calpol 500", "Combiflam"] }
//
// Also accepts query-param form for simple GET requests:
//   GET /api/safety/overdose-check?medicines=Dolo650,Calpol500,Combiflam
// ─────────────────────────────────────────────────────────────────────────────

import { Router, Request, Response } from "express";
import { checkCombinedDoseOverdose } from "../services/overdoseChecker.js";

export const overdoseRouter = Router();

const MAX_MEDICINES = 10;

function parseMedicineList(raw: unknown): string[] | null {
  if (typeof raw === "string") {
    return raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (Array.isArray(raw)) {
    return (raw as string[]).map((s) => String(s).trim()).filter(Boolean);
  }
  return null;
}

// ── POST handler ─────────────────────────────────────────────────────────────
overdoseRouter.post("/", async (req: Request, res: Response) => {
  const medicines = parseMedicineList(req.body?.medicines);

  if (!medicines || medicines.length === 0) {
    return res.status(400).json({
      error: {
        code: "MISSING_PARAM",
        message:
          "Request body must include a 'medicines' array. Example: { \"medicines\": [\"Dolo 650\", \"Calpol 500\"] }",
      },
    });
  }

  if (medicines.length > MAX_MEDICINES) {
    return res.status(400).json({
      error: {
        code: "TOO_MANY_MEDICINES",
        message: `Maximum ${MAX_MEDICINES} medicines per request. You submitted ${medicines.length}.`,
      },
    });
  }

  if (medicines.length < 2) {
    return res.status(400).json({
      error: {
        code: "NEED_AT_LEAST_TWO",
        message:
          "Please provide at least 2 medicines to check for combined overdose risk. Use /api/medicines/lookup for single medicine information.",
      },
    });
  }

  try {
    const result = await checkCombinedDoseOverdose(medicines);
    const statusCode = result.overall_risk === "DANGER" ? 200 : 200; // Always 200; risk is in body
    return res.status(statusCode).json(result);
  } catch (err: any) {
    console.error("Error in /api/safety/overdose-check:", err);
    return res.status(500).json({
      error: {
        code: "OVERDOSE_CHECK_FAILED",
        message: err?.message || "Failed to perform overdose analysis",
      },
    });
  }
});

// ── GET handler (convenience — comma-separated query param) ───────────────────
overdoseRouter.get("/", async (req: Request, res: Response) => {
  const medicines = parseMedicineList(req.query.medicines);

  if (!medicines || medicines.length < 2) {
    return res.status(400).json({
      error: {
        code: "MISSING_PARAM",
        message:
          "Provide at least 2 medicines via ?medicines=Med1,Med2,Med3 or use POST with a JSON body for complex queries.",
      },
      example: "/api/safety/overdose-check?medicines=Dolo650,Calpol500,Combiflam",
    });
  }

  if (medicines.length > MAX_MEDICINES) {
    return res.status(400).json({
      error: {
        code: "TOO_MANY_MEDICINES",
        message: `Maximum ${MAX_MEDICINES} medicines per request. You submitted ${medicines.length}.`,
      },
    });
  }

  try {
    const result = await checkCombinedDoseOverdose(medicines);
    return res.status(200).json(result);
  } catch (err: any) {
    console.error("Error in GET /api/safety/overdose-check:", err);
    return res.status(500).json({
      error: {
        code: "OVERDOSE_CHECK_FAILED",
        message: err?.message || "Failed to perform overdose analysis",
      },
    });
  }
});
