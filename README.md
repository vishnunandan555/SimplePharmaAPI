# SimplePharmaAPI 💊🇮🇳

> **100% Free, Standalone Indian Medicine Search, Clinical Specifications, Safety & Overdose Checker.**  
> Pre-bundled with **256,470+ Indian medicines & SKUs**. Zero external database accounts required.

**Live API:** https://simple-pharma-api.onrender.com

---

## ⚡ Multi-Database Architecture

SimplePharmaAPI is an intelligent federated search engine querying across **5 pre-downloaded, complementary pharmaceutical datasets** simultaneously in under 5ms:

| # | Dataset | Records | Description | Source Tag |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Commercial Indian Brands** | ~254,000 SKUs | Complete trade catalog (*Dolo, Augmentin, Mastifen, Telma, Pantop*) with manufacturers, formulations, and market prices. | `1mg_commercial` |
| **2** | **PMBJP Jan Aushadhi Generics** | 2,479 products | Official Government of India generic formulations with subsidized MRP pricing (e.g. ₹ 8 to ₹ 22). | `pmbjp_jan_aushadhi` |
| **3** | **CDSCO Approved Combinations** | Curated FDCs | Central Drugs Standard Control Organisation (DCGI Gazette) approved Fixed Dose Combinations with rational indications. | `cdsco_fdc` |
| **4** | **RxNorm & INN Synonyms** | Standard mapping | International Nonproprietary Names (INN) ↔ USAN cross-nomenclature (*Paracetamol ↔ Acetaminophen*, *Salbutamol ↔ Albuterol*). | `rxnorm_synonyms` |
| **5** | **MedEase Chrono-Pharmacology** | Clinical Rules | Curated meal/food relation rules, senior daily maximums, critical medication flags, and drug-drug interactions. | `clinical_rules` |

---

## 📋 Complete API Reference

### All Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service status, uptime, indexed count |
| `GET` | `/api/medicines/search` | Fuzzy autocomplete search |
| `GET` | `/api/medicines/lookup` | Full clinical spec for one medicine |
| `GET` | `/api/medicines/composition` | Chemical composition / active ingredients |
| `GET` | `/api/medicines/by-salt` | Find all brands containing a given salt |
| `GET` | `/api/safety/medicine-analysis` | DDI + contraindication safety check |
| `GET` `POST` | `/api/safety/overdose-check` | **Combined dose overdose risk checker** |

---

## 💡 Workflow Examples

### Workflow 1: Search-As-You-Type Autocomplete

```http
GET /api/medicines/search?q=mastifen&limit=5
```

**Query Parameters:**
| Parameter | Type | Required | Default | Description |
| :--- | :---: | :---: | :---: | :--- |
| `q` | `string` | **Yes** | `""` | Search query — brand name, generic, salt, or strength (e.g. `dolo 650`) |
| `limit` | `number` | No | `10` | Max results (capped at 50) |
| `source` | `string` | No | *all* | Filter: `1mg_commercial`, `pmbjp_jan_aushadhi`, or `cdsco_fdc` |

**Response:**
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

### Workflow 2: Clinical Spec Auto-Fill (Lookup)

```http
GET /api/medicines/lookup?name=Mastifen%201mg
```

**Response:**
```json
{
  "input": "Mastifen 1mg",
  "brand_name": "Mastifen 1mg Tablet",
  "generic_name": "Ketotifen",
  "active_ingredients": [
    { "salt": "Ketotifen", "strength": 1, "unit": "mg" }
  ],
  "dosage_form": "tablet",
  "food_relation": "after",
  "food_badge": "🌙 With Food / At Bedtime",
  "food_instruction": "Take with food or immediately after dinner / at bedtime to reduce stomach irritation and transient drowsiness.",
  "recommended_frequency": "2x",
  "frequency_label": "2x Morning & Night",
  "is_critical": false,
  "price_inr": 45.1,
  "dosage_and_bounds": {
    "standard_schedule": "1 mg 2x Morning & Night with meals/after food",
    "senior_safe_ceiling_mg": 2,
    "max_daily_ceiling_mg": 4
  },
  "fda_monograph": {
    "found": true,
    "application_number": "ANDA204059",
    "source": "US FDA National Drug Code & Label Repository"
  },
  "source": "1mg_commercial"
}
```

---

### Workflow 3: Chemical Composition Finder

Get the active ingredient breakdown of any medicine:

```http
GET /api/medicines/composition?name=Combiflam
```

**Response:**
```json
{
  "input": "Combiflam",
  "brand_name": "Combiflam Tablet",
  "generic_name": "Ibuprofen + Paracetamol",
  "dosage_form": "tablet",
  "composition_summary": "Ibuprofen 400mg + Paracetamol 325mg",
  "active_ingredients": [
    { "salt": "Ibuprofen", "strength": 400, "unit": "mg" },
    { "salt": "Paracetamol", "strength": 325, "unit": "mg" }
  ],
  "is_fixed_dose_combination": true,
  "source": "1mg_commercial"
}
```

---

### Workflow 4: Find All Brands by Salt (Reverse Lookup)

Find every brand containing a specific active chemical:

```http
GET /api/medicines/by-salt?salt=Metformin&limit=20
```

**Query Parameters:**
| Parameter | Type | Required | Default | Description |
| :--- | :---: | :---: | :---: | :--- |
| `salt` | `string` | **Yes** | — | Active ingredient / chemical name (e.g. `Ketotifen`, `Metformin`) |
| `limit` | `number` | No | `20` | Max results (capped at 100) |
| `source` | `string` | No | *all* | Filter by dataset |

**Response:**
```json
{
  "salt_query": "Metformin",
  "total": 20,
  "results": [
    {
      "brand_name": "Bimet Tablet",
      "generic_name": "Metformin",
      "strength": "500 mg",
      "dosage_form": "tablet",
      "manufacturer": "Aretaeus Pharmaceuticals",
      "price_inr": 18.7,
      "source": "1mg_commercial"
    }
  ]
}
```

---

### Workflow 5: Polypharmacy Overdose Safety Check ⚠️

> **The most powerful feature.** Check if taking multiple medicines together would result in a dangerous combined dose of any active ingredient.

**Scenario:** A patient is prescribed *Dolo 650*, *Calpol 500*, and *Combiflam* — but they all contain Paracetamol. Is this safe?

#### GET (Quick check via query param)
```http
GET /api/safety/overdose-check?medicines=Dolo650,Calpol500,Combiflam
```

#### POST (Recommended — handles names with spaces and special characters)
```http
POST /api/safety/overdose-check
Content-Type: application/json

{
  "medicines": ["Dolo 650", "Calpol 500", "Combiflam"]
}
```

**Response:**
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
      "message": "⚠️ WARNING: Combined Paracetamol dose is 1475.0 mg — exceeds safe single-dose limit of 1000 mg. Avoid taking all these medicines at the same time.",
      "clinical_notes": "Hepatotoxic in overdose. Max 2g/day in hepatic impairment or chronic alcohol use."
    },
    {
      "salt": "Ibuprofen",
      "contributed_by": ["Combiflam Tablet"],
      "is_duplicate_across_medicines": false,
      "total_combined_mg": 400,
      "max_safe_single_dose_mg": 800,
      "max_safe_daily_dose_mg": 3200,
      "senior_daily_max_mg": 1200,
      "ceiling_source": "hardcoded_reference",
      "risk_level": "SAFE",
      "message": "✅ SAFE: Combined Ibuprofen dose is 400.0 mg — within safe single-dose limit of 800 mg."
    }
  ],
  "overall_risk": "WARNING",
  "risk_flags": ["OVERDOSE_RISK_PARACETAMOL", "DUPLICATE_SALT_PARACETAMOL", "HAS_DUPLICATE_SALTS"],
  "unique_salts_found": 2,
  "has_duplicate_salts": true,
  "disclaimer": "⚠️ MEDICAL DISCLAIMER: This tool provides informational dose-stacking analysis only. It is NOT a substitute for professional medical advice, diagnosis, or treatment. Always consult a licensed physician or pharmacist before combining medications."
}
```

**Risk Levels:**

| Level | Icon | Meaning |
| :--- | :---: | :--- |
| `SAFE` | ✅ | Combined dose is within safe limits |
| `CAUTION` | 🟡 | Approaching limit, or same salt in multiple medicines |
| `WARNING` | ⚠️ | Combined dose exceeds single-dose safe limit |
| `DANGER` | ⛔ | Combined dose is >150% of safe limit — do NOT take simultaneously |
| `UNKNOWN` | ❔ | Salt not in reference database — consult pharmacist |

**Ceiling Data Sources (3-tier):**
1. **Hardcoded Reference** (~110 salts, WHO/FDA/BNF verified, instant) — covers 95%+ of Indian market
2. **medicines.db Query** (MAX daily ceiling from 256k records) — fills rare gaps
3. **`UNKNOWN`** — returned for truly exotic/investigational compounds

**Limits:** 2–10 medicines per request. Use POST for names with spaces.

---

### Workflow 6: Jan Aushadhi Generic Alternatives

Save up to 80% by finding government generic equivalents:

```http
GET /api/medicines/search?q=Aceclofenac&source=pmbjp_jan_aushadhi
```

---

### Workflow 7: Patient Safety, DDI & Contraindication Analysis

```http
GET /api/safety/medicine-analysis?drug=Aspirin&conditions=Asthma&active_meds=Ibuprofen
```

**Query Parameters:**
| Parameter | Type | Required | Description |
| :--- | :---: | :---: | :--- |
| `drug` | `string` | **Yes** | Medicine to evaluate (e.g. `Aspirin`) |
| `active_meds` | `string` | No | Comma-separated current medications (e.g. `Ibuprofen,Metformin`) |
| `conditions` | `string` | No | Comma-separated conditions (e.g. `Asthma,Peptic Ulcer`) |

---

## 📱 Code Integration Cheatsheets

### 1. Flutter / Dart

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class PharmaService {
  static const String baseUrl = 'https://simple-pharma-api.onrender.com';

  // Search medicines
  static Future<List<Map<String, dynamic>>> search(String query) async {
    final url = Uri.parse('$baseUrl/api/medicines/search?q=${Uri.encodeComponent(query)}&limit=8');
    final res = await http.get(url);
    if (res.statusCode == 200) {
      final data = jsonDecode(res.body);
      return List<Map<String, dynamic>>.from(data['results']);
    }
    return [];
  }

  // Get chemical composition
  static Future<Map<String, dynamic>?> composition(String medicineName) async {
    final url = Uri.parse('$baseUrl/api/medicines/composition?name=${Uri.encodeComponent(medicineName)}');
    final res = await http.get(url);
    if (res.statusCode == 200) return jsonDecode(res.body);
    return null;
  }

  // Check overdose risk for multiple medicines
  static Future<Map<String, dynamic>?> overdoseCheck(List<String> medicines) async {
    final url = Uri.parse('$baseUrl/api/safety/overdose-check');
    final res = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'medicines': medicines}),
    );
    if (res.statusCode == 200) return jsonDecode(res.body);
    return null;
  }

  // Full clinical spec
  static Future<Map<String, dynamic>?> lookup(String medicineName) async {
    final url = Uri.parse('$baseUrl/api/medicines/lookup?name=${Uri.encodeComponent(medicineName)}');
    final res = await http.get(url);
    if (res.statusCode == 200) return jsonDecode(res.body);
    return null;
  }

  // Find all brands by salt
  static Future<List<Map<String, dynamic>>> bySalt(String salt, {int limit = 20}) async {
    final url = Uri.parse('$baseUrl/api/medicines/by-salt?salt=${Uri.encodeComponent(salt)}&limit=$limit');
    final res = await http.get(url);
    if (res.statusCode == 200) {
      final data = jsonDecode(res.body);
      return List<Map<String, dynamic>>.from(data['results']);
    }
    return [];
  }
}
```

### 2. JavaScript / React / Next.js

```javascript
const BASE_URL = "https://simple-pharma-api.onrender.com";

// Search Autocomplete
export async function searchMedicines(query, limit = 6) {
  const res = await fetch(`${BASE_URL}/api/medicines/search?q=${encodeURIComponent(query)}&limit=${limit}`);
  const data = await res.json();
  return data.results || [];
}

// Chemical Composition
export async function getComposition(name) {
  const res = await fetch(`${BASE_URL}/api/medicines/composition?name=${encodeURIComponent(name)}`);
  return await res.json();
}

// Find All Brands by Salt
export async function findBySalt(salt, limit = 20) {
  const res = await fetch(`${BASE_URL}/api/medicines/by-salt?salt=${encodeURIComponent(salt)}&limit=${limit}`);
  const data = await res.json();
  return data.results || [];
}

// Overdose Risk Check (POST — handles spaces in medicine names)
export async function checkOverdose(medicines) {
  const res = await fetch(`${BASE_URL}/api/safety/overdose-check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ medicines }),
  });
  return await res.json();
}

// Full Clinical Spec Lookup
export async function lookupMedicine(name) {
  const res = await fetch(`${BASE_URL}/api/medicines/lookup?name=${encodeURIComponent(name)}`);
  return await res.json();
}
```

### 3. Python

```python
import requests

BASE_URL = "https://simple-pharma-api.onrender.com"

# Search
results = requests.get(f"{BASE_URL}/api/medicines/search", params={"q": "dolo 650"}).json()
print("Top Result:", results["results"][0]["brand_name"])

# Chemical Composition
comp = requests.get(f"{BASE_URL}/api/medicines/composition", params={"name": "Combiflam"}).json()
print("Composition:", comp["composition_summary"])

# Find all brands by salt
brands = requests.get(f"{BASE_URL}/api/medicines/by-salt", params={"salt": "Metformin", "limit": 10}).json()
print(f"Found {brands['total']} Metformin brands")

# Overdose check (POST)
risk = requests.post(
    f"{BASE_URL}/api/safety/overdose-check",
    json={"medicines": ["Dolo 650", "Calpol 500", "Combiflam"]}
).json()
print("Overall Risk:", risk["overall_risk"])
for salt in risk["salt_aggregation"]:
    print(f"  {salt['salt']}: {salt['total_combined_mg']}mg → {salt['risk_level']}")
```

### 4. cURL

```bash
BASE="https://simple-pharma-api.onrender.com"

# 1. Health check
curl "$BASE/api/health"

# 2. Search
curl "$BASE/api/medicines/search?q=mastifen"

# 3. Chemical composition
curl "$BASE/api/medicines/composition?name=Combiflam"

# 4. Find all brands with Metformin
curl "$BASE/api/medicines/by-salt?salt=Metformin&limit=10"

# 5. Clinical Spec Lookup
curl "$BASE/api/medicines/lookup?name=Telma%2040"

# 6. Safety Analysis (DDI + contraindications)
curl "$BASE/api/safety/medicine-analysis?drug=Aspirin&conditions=Asthma"

# 7. Overdose check (GET — simple)
curl "$BASE/api/safety/overdose-check?medicines=Dolo650,Calpol500,Combiflam"

# 7b. Overdose check (POST — handles spaces, recommended)
curl -X POST "$BASE/api/safety/overdose-check" \
  -H "Content-Type: application/json" \
  -d '{"medicines": ["Dolo 650", "Calpol 500", "Combiflam"]}'
```

---

## 🌐 How to Host on Render (Step-by-Step Guide)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "feat: SimplePharmaAPI with overdose checker"
git push origin main
```

### Step 2: Deploy on Render

#### Option A: Blueprint (Recommended — Zero Config)
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **New +** → **Blueprint**
3. Connect GitHub → select **`SimplePharmaAPI`** repo
4. Render auto-detects [`render.yaml`](file:///home/vishnunandan555/Projects/SimplePharmaAPI/render.yaml) and pre-fills:
   - **Runtime**: `Node` | **Plan**: `Free ($0/mo)` | **Region**: `Singapore`
   - **Build**: `npm install --include=dev && npm run build`
   - **Start**: `npm run start`
5. Add `GEMINI_API_KEY` under Environment Variables (optional)
6. Click **Apply**

#### Option B: Web Service (Manual)

| Setting | Value |
| :--- | :--- |
| **Name** | `simple-pharma-api` |
| **Region** | `Singapore` (lowest latency for India) |
| **Branch** | `main` |
| **Runtime** | `Node` |
| **Build Command** | `npm install --include=dev && npm run build` |
| **Start Command** | `npm run start` |
| **Instance Type** | **Free ($0/month)** |
| **Health Check Path** | `/api/health` |

**Environment Variables:**
| Key | Value | Required |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Yes |
| `GEMINI_API_KEY` | Your Google AI Studio key | Optional |
| `GEMINI_MODEL` | `gemini-flash-latest` | Optional |

### Step 3: Keep Awake 24/7 (Free)

Render free tier sleeps after 15 min inactivity. To prevent cold starts:
1. Sign up at [cron-job.org](https://cron-job.org/) or [UptimeRobot](https://uptimerobot.com/) (both free)
2. Create HTTP monitor → URL: `https://simple-pharma-api.onrender.com/api/health`
3. Set interval: **every 10 minutes**

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run in development mode (hot-reload)
npm run dev

# Run integration tests
npm test

# Build production bundle + SQLite catalog
npm run build

# Start production server
npm run start
```

---

## 📄 License

MIT — 100% free and open for everyone to use, modify, and host.
