import { Router, Request, Response } from "express";
import { getIndexedMedicineCount } from "../services/dbService.js";

export const healthRouter = Router();

healthRouter.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    service: "SimplePharmaAPI",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
    uptime_seconds: Math.floor(process.uptime()),
    medicines_indexed: getIndexedMedicineCount(),
    datasets_active: [
      "1mg_commercial_brand_catalog (254,000 SKUs)",
      "pmbjp_jan_aushadhi_generic_catalog (2,479 products)",
      "cdsco_approved_fixed_dose_combinations",
      "rxnorm_inn_synonyms_dictionary",
      "curated_chrono_pharmacology_rules"
    ],
    free_tier_status: "ready",
  });
});
