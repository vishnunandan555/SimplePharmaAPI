// src/app.ts
// Express application setup, middleware, and route mounting

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import compression from "compression";

import { healthRouter } from "./routes/health.js";
import { searchRouter } from "./routes/search.js";
import { lookupRouter } from "./routes/lookup.js";
import { safetyRouter } from "./routes/safety.js";
import { compositionRouter, bySaltRouter } from "./routes/composition.js";
import { overdoseRouter } from "./routes/overdose.js";

export const app = express();

// Security & Performance Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(compression());
app.use(express.json());

// Root documentation & discovery endpoint
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    service: "SimplePharmaAPI",
    description: "100% Free Standalone Indian Medicine Search, Clinical Specifications, and Safety Engine",
    license: "MIT - Free for everyone",
    status: "online",
    endpoints: {
      health: "GET /api/health",
      search: "GET /api/medicines/search?q={query}&limit={limit}",
      lookup: "GET /api/medicines/lookup?name={medicine_name}",
      composition: "GET /api/medicines/composition?name={medicine_name}",
      by_salt: "GET /api/medicines/by-salt?salt={chemical_name}&limit={n}",
      safety_analysis: "GET /api/safety/medicine-analysis?drug={drug}&active_meds={med1,med2}&conditions={cond1,cond2}",
      overdose_check: "POST /api/safety/overdose-check  body: { medicines: [\"Med1\", \"Med2\"] }",
      overdose_check_get: "GET /api/safety/overdose-check?medicines=Med1,Med2,Med3",
    },
    sample_queries: [
      "/api/medicines/search?q=mastifen",
      "/api/medicines/search?q=dolo%20650",
      "/api/medicines/lookup?name=Mastifen%201mg",
      "/api/medicines/composition?name=Dolo650",
      "/api/medicines/by-salt?salt=Ketotifen",
      "/api/medicines/by-salt?salt=Metformin&limit=30",
      "/api/medicines/lookup?name=Telma%2040",
      "/api/safety/medicine-analysis?drug=Aspirin&conditions=Asthma",
      "/api/safety/overdose-check?medicines=Dolo650,Calpol500,Combiflam",
    ],
  });
});

// Mount API routes
app.use("/api/health", healthRouter);
app.use("/api/medicines/search", searchRouter);
app.use("/api/medicines/lookup", lookupRouter);
app.use("/api/medicines/composition", compositionRouter);
app.use("/api/medicines/by-salt", bySaltRouter);
app.use("/api/safety", safetyRouter);
app.use("/api/safety/overdose-check", overdoseRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: `Route '${req.method} ${req.originalUrl}' not found. Check GET / for API documentation.`,
    },
  });
});

// Global error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: err?.message || "An unexpected error occurred",
    },
  });
});
