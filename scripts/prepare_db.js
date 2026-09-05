// scripts/prepare_db.js
// Verifies that data/medicines.db exists; if not, builds it from data/indian_medicine_data.csv.gz

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");
const DB_PATH = path.join(REPO_ROOT, "data", "medicines.db");

if (!fs.existsSync(DB_PATH) || fs.statSync(DB_PATH).size < 1024 * 1024) {
  console.log("⚡ medicines.db not found. Building from pre-bundled master dataset...");
  try {
    execSync("python3 scripts/build_sqlite_catalog.py", {
      cwd: REPO_ROOT,
      stdio: "inherit",
    });
  } catch (err) {
    console.warn("⚠️ Could not build SQLite DB with Python, fallback in-memory catalog will be used:", err.message);
  }
} else {
  const sizeMb = (fs.statSync(DB_PATH).size / (1024 * 1024)).toFixed(2);
  console.log(`✅ medicines.db is ready (${sizeMb} MB)`);
}
