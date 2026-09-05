// src/app.ts
// Express application setup, middleware, and route mounting

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import compression from "compression";

import { healthRouter } from "./routes/health.js";
import { searchRouter } from "./routes/search.js";
import { lookupRouter } from "./routes/lookup.js";
import { safetyRouter } from "./routes/safety.js";

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
      safety: "GET /api/safety/medicine-analysis?drug={drug_name}&active_meds={med1,med2}&conditions={cond1,cond2}",
    },
    sample_queries: [
      "/api/medicines/search?q=mastifen",
      "/api/medicines/search?q=dolo%20650",
      "/api/medicines/lookup?name=Mastifen%201mg",
      "/api/medicines/lookup?name=Telma%2040",
      "/api/safety/medicine-analysis?drug=Aspirin&conditions=Asthma",
    ],
  });
});

// Mount API routes
app.use("/api/health", healthRouter);
app.use("/api/medicines/search", searchRouter);
app.use("/api/medicines/lookup", lookupRouter);
app.use("/api/safety", safetyRouter);

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
