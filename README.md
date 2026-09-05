# SimplePharmaAPI 💊🇮🇳

> **Free, standalone Indian medicine search, composition finder, overdose checker & clinical safety API.**  
> 248,611 active medicines across 5 datasets. Zero external database accounts. Self-hosted on Render.

**Live API:** https://simple-pharma-api.onrender.com  
**Version:** 1.1.0 · **Status:** ![Health](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsimple-pharma-api.onrender.com%2Fapi%2Fhealth&query=status&label=API&color=green)

---

## 🗄️ What's Inside — 5 Real Datasets

| # | Dataset | Records | Source | Notes |
|:--|:--------|--------:|:-------|:------|
| **1** | **Indian Commercial Brands** | ~246,000 | junioralive/Indian-Medicine-Dataset (Kaggle) | Discontinued medicines filtered out. Brands, manufacturers, prices, composition. |
| **2** | **PMBJP Jan Aushadhi Generics** | 2,479 | Pradhan Mantri Bhartiya Janaushadhi Pariyojana (GOI) | Official government generic drugs with subsidised MRP pricing. |
| **3** | **CDSCO Approved FDCs** | 65 | DCGI Gazette (Central Drugs Standard Control Organisation) | DCGI-approved Fixed Dose Combinations across all major therapeutic areas. |
| **4** | **RxNorm / INN Synonyms** | 90+ | WHO INN + US FDA RxNorm | International name ↔ USAN mappings with RxCUI codes (e.g. Paracetamol ↔ Acetaminophen). |
| **5** | **Chrono-Pharmacology Rules** | Curated | WHO Model Formulary, BNF, IP 2022 | Food-timing, dose ceilings, senior maximums, critical medication flags. |

> **Total: 248,611 active medicines** — discontinued SKUs are excluded from results.

### Data Quality Transparency

Every `/api/medicines/lookup` response includes an `is_clinical_data_estimated` field:

| Value | Meaning |
|:------|:--------|
| `false` | Food rules, dose ceilings, and FDA reference verified against real pharmacopeia data |
| `true` | Rule-based class estimate — correct directionally, but not individually verified |

**149,253 of 248,611 medicines** (60%) have `is_clinical_data_estimated: false`.

---

## 📋 API Reference

### All Endpoints

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `GET` | `/api/health` | Service status, version, dataset breakdown |
| `GET` | `/api/medicines/search` | Fuzzy autocomplete across all datasets |
| `GET` | `/api/medicines/lookup` | Full clinical spec for one medicine |
| `GET` | `/api/medicines/composition` | Active ingredient breakdown |
| `GET` | `/api/medicines/by-salt` | Find all brands containing a given chemical |
| `GET` | `/api/safety/medicine-analysis` | DDI + contraindication safety check |
| `GET` `POST` | `/api/safety/overdose-check` | Combined dose overdose risk checker |

---

## 💡 Workflow Examples

### 1 · Search (Autocomplete / Fuzzy)

```http
GET /api/medicines/search?q=mastifen&limit=5
```

| Param | Type | Required | Default | Description |
|:------|:----:|:--------:|:-------:|:------------|
| `q` | string | ✅ | — | Brand name, generic, salt, strength (e.g. `dolo 650`) |
| `limit` | number | — | 10 | Max results (cap: 50) |
| `source` | string | — | all | Filter: `1mg_commercial`, `pmbjp_jan_aushadhi`, `cdsco_fdc` |

```json
{
  "query": "mastifen",
  "total": 1,
  "results": [
    {
      "id": "comm-135750",
      "brand_name": "Mastifen 1mg Tablet",
      "generic_name": "Ketotifen",
      "strength": "1 mg",
      "dosage_form": "tablet",
      "manufacturer": "East West Pharma",
      "therapeutic_class": "Mast Cell Stabilizer & Antihistamine",
      "price_inr": 45.1,
      "source": "1mg_commercial"
    }
  ]
}
```

---

### 2 · Lookup (Full Clinical Spec)

```http
GET /api/medicines/lookup?name=Dolo%20650
```

```json
{
  "input": "Dolo 650",
  "brand_name": "Dolo 650 Tablet",
  "generic_name": "Paracetamol",
  "active_ingredients": [
    { "salt": "Paracetamol", "strength": 650, "unit": "mg" }
  ],
  "dosage_form": "tablet",
  "food_relation": "after",
  "food_badge": "🍽️ After Food",
  "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
  "recommended_frequency": "3x",
  "frequency_label": "3x SOS After Food",
  "is_critical": false,
  "price_inr": 30.0,
  "dosage_and_bounds": {
    "standard_schedule": "650 mg 3x SOS After Food with meals/after food",
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000
  },
  "fda_monograph": {
    "found": true,
    "application_number": "ANDA075010",
    "source": "US FDA National Drug Code & Label Repository"
  },
  "is_clinical_data_estimated": false,
  "source": "1mg_commercial"
}
```

> **`is_clinical_data_estimated: false`** — Paracetamol is in the verified reference table with a real FDA ANDA number.

---

### 3 · Composition Finder

```http
GET /api/medicines/composition?name=Combiflam
```

```json
{
  "input": "Combiflam",
  "brand_name": "Combiflam Tablet",
  "generic_name": "Ibuprofen + Paracetamol",
  "dosage_form": "tablet",
  "composition_summary": "Ibuprofen 400mg + Paracetamol 325mg",
  "active_ingredients": [
    { "salt": "Ibuprofen",   "strength": 400, "unit": "mg" },
    { "salt": "Paracetamol", "strength": 325, "unit": "mg" }
  ],
  "is_fixed_dose_combination": true,
  "source": "1mg_commercial"
}
```

---

### 4 · Find All Brands by Salt (Reverse Lookup)

```http
GET /api/medicines/by-salt?salt=Metformin&limit=10
```

| Param | Type | Required | Default | Description |
|:------|:----:|:--------:|:-------:|:------------|
| `salt` | string | ✅ | — | Active ingredient / chemical name |
| `limit` | number | — | 20 | Max results (cap: 100) |
| `source` | string | — | all | Filter by dataset |

```json
{
  "salt_query": "Metformin",
  "total": 10,
  "results": [
    {
      "brand_name": "Glycomet 500 Tablet",
      "generic_name": "Metformin",
      "strength": "500 mg",
      "dosage_form": "tablet",
      "manufacturer": "USV Ltd",
      "price_inr": 18.5,
      "source": "1mg_commercial"
    }
  ]
}
```

---

### 5 · Polypharmacy Overdose Safety Check ⚠️

Check if combining multiple medicines creates a dangerous cumulative dose of any active salt.

#### GET (quick — comma-separated)
```http
GET /api/safety/overdose-check?medicines=Dolo650,Calpol500,Combiflam
```

#### POST (recommended — handles names with spaces)
```http
POST /api/safety/overdose-check
Content-Type: application/json

{ "medicines": ["Dolo 650", "Calpol 500", "Combiflam"] }
```

**Limits:** 2–10 medicines per request.

```json
{
  "medicines_checked": ["Dolo 650", "Calpol 500", "Combiflam"],
  "medicines_resolved": 3,
  "unresolved_medicines": [],
  "salt_aggregation": [
    {
      "salt": "Paracetamol",
      "contributed_by": ["Dolo 650 Tablet", "Calpol 500mg Tablet", "Combiflam Tablet"],
      "is_duplicate_across_medicines": true,
      "total_combined_mg": 1475,
      "max_safe_single_dose_mg": 1000,
      "max_safe_daily_dose_mg": 4000,
      "senior_daily_max_mg": 2000,
      "ceiling_source": "hardcoded_reference",
      "risk_level": "WARNING",
      "message": "⚠️ WARNING: Combined Paracetamol dose is 1475.0 mg — exceeds safe single-dose limit of 1000 mg.",
      "clinical_notes": "Hepatotoxic in overdose. Max 2g/day in hepatic impairment."
    },
    {
      "salt": "Ibuprofen",
      "contributed_by": ["Combiflam Tablet"],
      "is_duplicate_across_medicines": false,
      "total_combined_mg": 400,
      "max_safe_single_dose_mg": 800,
      "risk_level": "SAFE",
      "message": "✅ SAFE: Combined Ibuprofen dose is 400.0 mg — within safe limit of 800 mg."
    }
  ],
  "overall_risk": "WARNING",
  "risk_flags": ["OVERDOSE_RISK_PARACETAMOL", "DUPLICATE_SALT_PARACETAMOL", "HAS_DUPLICATE_SALTS"],
  "unique_salts_found": 2,
  "has_duplicate_salts": true,
  "disclaimer": "⚠️ MEDICAL DISCLAIMER: Informational analysis only. Not a substitute for professional medical advice."
}
```

**Risk Levels:**

| Level | Icon | Meaning |
|:------|:----:|:--------|
| `SAFE` | ✅ | Combined dose within safe limits |
| `CAUTION` | 🟡 | Within 80% of limit, or same salt in multiple medicines |
| `WARNING` | ⚠️ | Combined dose exceeds single-dose safe limit |
| `DANGER` | ⛔ | >150% of safe limit — do NOT take simultaneously |
| `UNKNOWN` | ❔ | Salt not in reference database — consult pharmacist |

**Ceiling data sources (3-tier):**
1. `hardcoded_reference` — ~110 salts, WHO/FDA/BNF verified, instant
2. `medicines_db` — MAX daily ceiling from 248k records
3. `UNKNOWN` — exotic/investigational compounds

---

### 6 · Jan Aushadhi Generic Alternatives

Find subsidised government generic equivalents (save up to 80%):

```http
GET /api/medicines/search?q=Aceclofenac&source=pmbjp_jan_aushadhi
```

---

### 7 · Safety Analysis (DDI + Contraindications)

```http
GET /api/safety/medicine-analysis?drug=Aspirin&conditions=Asthma&active_meds=Ibuprofen
```

| Param | Type | Required | Description |
|:------|:----:|:--------:|:------------|
| `drug` | string | ✅ | Medicine to evaluate |
| `active_meds` | string | — | Comma-separated current medications |
| `conditions` | string | — | Comma-separated patient conditions |

---

## 📱 Code Integration

### Flutter / Dart

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class PharmaService {
  static const _base = 'https://simple-pharma-api.onrender.com';

  // 1. Search
  static Future<List<Map<String, dynamic>>> search(String q) async {
    final res = await http.get(Uri.parse('$_base/api/medicines/search?q=${Uri.encodeComponent(q)}&limit=8'));
    return List<Map<String, dynamic>>.from(jsonDecode(res.body)['results']);
  }

  // 2. Full clinical spec
  static Future<Map<String, dynamic>?> lookup(String name) async {
    final res = await http.get(Uri.parse('$_base/api/medicines/lookup?name=${Uri.encodeComponent(name)}'));
    return res.statusCode == 200 ? jsonDecode(res.body) : null;
  }

  // 3. Composition
  static Future<Map<String, dynamic>?> composition(String name) async {
    final res = await http.get(Uri.parse('$_base/api/medicines/composition?name=${Uri.encodeComponent(name)}'));
    return res.statusCode == 200 ? jsonDecode(res.body) : null;
  }

  // 4. Find all brands by salt
  static Future<List<Map<String, dynamic>>> bySalt(String salt, {int limit = 20}) async {
    final res = await http.get(Uri.parse('$_base/api/medicines/by-salt?salt=${Uri.encodeComponent(salt)}&limit=$limit'));
    return List<Map<String, dynamic>>.from(jsonDecode(res.body)['results']);
  }

  // 5. Overdose check
  static Future<Map<String, dynamic>?> overdoseCheck(List<String> medicines) async {
    final res = await http.post(
      Uri.parse('$_base/api/safety/overdose-check'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'medicines': medicines}),
    );
    return res.statusCode == 200 ? jsonDecode(res.body) : null;
  }
}
```

### JavaScript / React / Next.js

```javascript
const BASE = "https://simple-pharma-api.onrender.com";

export const pharmaAPI = {
  search:       (q, limit = 8)     => fetch(`${BASE}/api/medicines/search?q=${encodeURIComponent(q)}&limit=${limit}`).then(r => r.json()).then(d => d.results),
  lookup:       (name)             => fetch(`${BASE}/api/medicines/lookup?name=${encodeURIComponent(name)}`).then(r => r.json()),
  composition:  (name)             => fetch(`${BASE}/api/medicines/composition?name=${encodeURIComponent(name)}`).then(r => r.json()),
  bySalt:       (salt, limit = 20) => fetch(`${BASE}/api/medicines/by-salt?salt=${encodeURIComponent(salt)}&limit=${limit}`).then(r => r.json()).then(d => d.results),
  overdoseCheck: (medicines)       => fetch(`${BASE}/api/safety/overdose-check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ medicines }),
  }).then(r => r.json()),
};

// Example usage:
const results = await pharmaAPI.search("dolo 650");
const spec    = await pharmaAPI.lookup("Telma 40");
const risk    = await pharmaAPI.overdoseCheck(["Dolo 650", "Calpol 500", "Combiflam"]);
console.log(risk.overall_risk); // "WARNING"
```

### Python

```python
import requests

BASE = "https://simple-pharma-api.onrender.com"

# Search
res = requests.get(f"{BASE}/api/medicines/search", params={"q": "dolo 650"}).json()
print(res["results"][0]["brand_name"])  # Dolo 650 Tablet

# Composition
comp = requests.get(f"{BASE}/api/medicines/composition", params={"name": "Combiflam"}).json()
print(comp["composition_summary"])  # Ibuprofen 400mg + Paracetamol 325mg

# Find brands by salt
brands = requests.get(f"{BASE}/api/medicines/by-salt", params={"salt": "Metformin", "limit": 5}).json()
print(f"Found {brands['total']} Metformin brands")

# Overdose check
risk = requests.post(
    f"{BASE}/api/safety/overdose-check",
    json={"medicines": ["Dolo 650", "Calpol 500", "Combiflam"]}
).json()
print(f"Overall risk: {risk['overall_risk']}")
for salt in risk["salt_aggregation"]:
    print(f"  {salt['salt']}: {salt['total_combined_mg']}mg → {salt['risk_level']}")
```

### cURL

```bash
BASE="https://simple-pharma-api.onrender.com"

# Health (shows dataset breakdown + data quality info)
curl "$BASE/api/health"

# Search
curl "$BASE/api/medicines/search?q=mastifen"

# Lookup (shows is_clinical_data_estimated + real FDA number)
curl "$BASE/api/medicines/lookup?name=Dolo%20650"

# Composition
curl "$BASE/api/medicines/composition?name=Combiflam"

# Find all brands with a salt
curl "$BASE/api/medicines/by-salt?salt=Metformin&limit=10"

# All Jan Aushadhi generics for a salt
curl "$BASE/api/medicines/by-salt?salt=Metformin&source=pmbjp_jan_aushadhi"

# Safety analysis
curl "$BASE/api/safety/medicine-analysis?drug=Aspirin&conditions=Asthma"

# Overdose check — GET (no spaces in names)
curl "$BASE/api/safety/overdose-check?medicines=Dolo650,Calpol500,Combiflam"

# Overdose check — POST (recommended, handles spaces)
curl -X POST "$BASE/api/safety/overdose-check" \
  -H "Content-Type: application/json" \
  -d '{"medicines": ["Dolo 650", "Calpol 500", "Combiflam"]}'
```

---

## 🌐 Deploying on Render

### One-Click (Blueprint)

1. Fork this repo on GitHub
2. [Render Dashboard](https://dashboard.render.com/) → **New +** → **Blueprint**
3. Connect your fork — Render auto-reads `render.yaml`
4. Add `GEMINI_API_KEY` under Environment Variables *(optional — only needed for AI fallback)*
5. Click **Apply**

### Manual Web Service

| Setting | Value |
|:--------|:------|
| Runtime | `Node` |
| Build Command | `npm install --include=dev && npm run build` |
| Start Command | `npm run start` |
| Instance Type | **Free ($0/mo)** |
| Region | `Singapore` |
| Health Check Path | `/api/health` |

**Environment Variables:**

| Key | Required | Description |
|:----|:--------:|:------------|
| `NODE_ENV` | ✅ | `production` |
| `GEMINI_API_KEY` | — | Google AI Studio key (enables AI fallback for exotic medicines) |
| `GEMINI_MODEL` | — | Defaults to `gemini-flash-latest` |

### Keep Alive (Free Tier)

Render free tier spins down after 15 min inactivity (~30s cold start). Prevent it with a free uptime monitor:

1. [cron-job.org](https://cron-job.org) or [UptimeRobot](https://uptimerobot.com) (both free)
2. Monitor URL: `https://simple-pharma-api.onrender.com/api/health`
3. Interval: **every 10 minutes**

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Dev mode (hot-reload via ts-node)
npm run dev

# Build production bundle + rebuild medicines.db
npm run build

# Start production server
npm run start

# Rebuild only the SQLite catalog (after changing data/ files)
python3 scripts/build_sqlite_catalog.py
```

---

## 🏗️ Architecture

```
Request
  └── Express Router (app.ts)
        ├── /api/medicines/search    → dbService.searchMedicines()   [FTS5 SQLite]
        ├── /api/medicines/lookup    → dbService.lookupMedicineInCatalog()
        │                            → aiResolver.resolveWithGemini() [AI fallback]
        ├── /api/medicines/composition → dbService.lookupMedicineInCatalog()
        ├── /api/medicines/by-salt   → dbService.searchBySalt()
        ├── /api/safety/medicine-analysis → fdaService + Gemini
        └── /api/safety/overdose-check → overdoseChecker.checkCombinedDoseOverdose()
                                          ├── Tier 1: saltCeilings.ts (110 salts, instant)
                                          ├── Tier 2: medicines.db MAX query
                                          └── Tier 3: UNKNOWN (consult pharmacist)

Data Layer: data/medicines.db (SQLite, ~178 MB, 248,611 rows, FTS5 indexed)
  ├── source: 1mg_commercial      (246,068 active brand SKUs)
  ├── source: pmbjp_jan_aushadhi  (2,479 government generics)
  └── source: cdsco_fdc           (64 DCGI-approved FDCs)
```

---

## ⚠️ Medical Disclaimer

This API provides **informational** pharmaceutical data for research, app development, and educational purposes. It is **NOT** a substitute for professional medical advice, clinical decision support, or licensed pharmacist consultation. Always verify dosing with a qualified healthcare professional before clinical use.

---

## 📄 License

MIT — free for everyone to use, fork, and host.
