// src/routes/health.ts
// Health check and keep-alive ping endpoint (UptimeRobot / cron-job.org)

import { Router, Request, Response } from "express";
import { MASTER_MEDICINE_CATALOG } from "../data/seedCatalog.js";

export const healthRouter = Router();

healthRouter.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    service: "SimplePharmaAPI",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
    uptime_seconds: Math.floor(process.uptime()),
    medicines_indexed: MASTER_MEDICINE_CATALOG.length,
    free_tier_status: "ready",
  });
});
