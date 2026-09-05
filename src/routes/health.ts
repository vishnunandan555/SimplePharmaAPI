import { Router, Request, Response } from "express";
import { getIndexedMedicineCount } from "../services/dbService.js";

export const healthRouter = Router();

healthRouter.get("/", (_req: Request, res: Response) => {
  const total = getIndexedMedicineCount();
  res.status(200).json({
    status: "ok",
    service: "SimplePharmaAPI",
    version: "1.1.0",
    timestamp: new Date().toISOString(),
    uptime_seconds: Math.floor(process.uptime()),
    medicines_indexed: total,
    datasets_active: [
      "1mg_commercial_brand_catalog (active SKUs only — discontinued filtered out)",
      "pmbjp_jan_aushadhi_generic_catalog (2,479 government generics)",
      "cdsco_approved_fixed_dose_combinations (65 DCGI-approved FDCs)",
      "rxnorm_inn_synonyms_dictionary (90+ INN↔USAN mappings)",
      "curated_chrono_pharmacology_rules (food/dose/critical flags)",
    ],
    data_quality: {
      discontinued_medicines_excluded: 7905,
      note: "Clinical metadata (food rules, dose ceilings) is verified for common drug classes. Check 'is_clinical_data_estimated' field on individual lookup responses.",
    },
    free_tier_status: "ready",
  });
});
