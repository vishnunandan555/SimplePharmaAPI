// src/index.ts
// Server bootstrapper for Render and local development

import { app } from "./app.js";
import { config } from "./config/env.js";
import { MASTER_MEDICINE_CATALOG } from "./data/seedCatalog.js";

const server = app.listen(config.port, () => {
  console.log("==================================================");
  console.log(`🚀 SimplePharmaAPI is running on port ${config.port}`);
  console.log(`💊 Pre-loaded ${MASTER_MEDICINE_CATALOG.length} Indian medicines & chrono-rules`);
  console.log(`🌐 Health check: http://localhost:${config.port}/api/health`);
  console.log(`🔍 Search:       http://localhost:${config.port}/api/medicines/search?q=mastifen`);
  console.log(`📋 Lookup:       http://localhost:${config.port}/api/medicines/lookup?name=Mastifen%201mg`);
  console.log("==================================================");
});

// Handle graceful shutdown for container platforms (Render/Docker)
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully...");
  server.close(() => {
    console.log("Process terminated");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully...");
  server.close(() => {
    console.log("Process terminated");
    process.exit(0);
  });
});
