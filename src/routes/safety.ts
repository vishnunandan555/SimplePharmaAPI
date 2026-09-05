// src/routes/safety.ts
// Live OpenFDA & Clinical Safety Analysis Endpoint

import { Router, Request, Response } from "express";
import { analyzeMedicineSafety } from "../services/fdaService.js";

export const safetyRouter = Router();

safetyRouter.get("/medicine-analysis", async (req: Request, res: Response) => {
  const drug = typeof req.query.drug === "string" ? req.query.drug.trim() : "";

  if (!drug) {
    return res.status(400).json({
      error: {
        code: "VALIDATION_FAILED",
        message: "Query parameter 'drug' is required (e.g. /api/safety/medicine-analysis?drug=Aspirin)",
      },
    });
  }

  const activeMedsParam = typeof req.query.active_meds === "string" ? req.query.active_meds : "";
  const conditionsParam = typeof req.query.conditions === "string" ? req.query.conditions : "";

  const activeMeds = activeMedsParam
    ? activeMedsParam.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  const conditions = conditionsParam
    ? conditionsParam.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  try {
    const analysis = await analyzeMedicineSafety(drug, activeMeds, conditions);
    return res.status(200).json(analysis);
  } catch (err: any) {
    console.error("Error in /api/safety/medicine-analysis:", err);
    return res.status(500).json({
      error: {
        code: "ANALYSIS_ERROR",
        message: err?.message || "Failed to perform clinical safety analysis",
      },
    });
  }
});
