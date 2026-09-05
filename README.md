# SimplePharmaAPI 💊🇮🇳

> **The ultimate free, open-source Indian medicine intelligence, chemical composition, chronotherapy & polypharmacy overdose safety API.**  
> Powered by 248,611 active medicines across 5 verified datasets, SQLite FTS5 search, and Google Gemini AI fallback. Zero external database accounts required. Self-hosted on Render.

**Live Base URL:** `https://simple-pharma-api.onrender.com`  
**API Status:** ![Health](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsimple-pharma-api.onrender.com%2Fapi%2Fhealth&query=status&label=API&color=green) · **Active Catalog:** 248,611 medicines · **License:** MIT

---

## 🚀 Everything SimplePharmaAPI Can Do

SimplePharmaAPI is designed for mobile apps, pharmacy portals, telemedicine platforms, and health tech developers. Here is the complete breakdown of every capability built into the engine:

### 1. 🔍 Instant Search & Smart Autocomplete
* **High-Speed FTS5 Search:** Full-text search with BM25 ranking across 248,611 pharmaceutical products with sub-20ms query response.
* **Tolerant & Fuzzy Querying:** Matches brand names (e.g. `Dolo 650`, `Combiflam`, `Telma 40`), active salts (`Paracetamol`, `Metformin`), strengths (`500mg`), or manufacturers (`Cipla`, `Sun Pharma`).
* **Source Filtering:** Filter results exclusively by commercial brands (`1mg_commercial`), official government generics (`pmbjp_jan_aushadhi`), or government-approved combinations (`cdsco_fdc`).

### 2. 🧪 Chemical Composition Resolution
* **Structured Active Ingredients:** Parses messy pharmaceutical dosage text into normalized, machine-readable JSON arrays with numeric amounts and units (`[{ "salt": "Paracetamol", "strength": 650, "unit": "mg" }]`).
* **Fixed Dose Combination (FDC) Detection:** Automatically flags multi-active formulations (`is_fixed_dose_combination: true`) and generates clean human-readable summaries (`"Ibuprofen 400mg + Paracetamol 325mg"`).
* **Multi-Format Unit Normalization:** Unifies strengths across milligrams (`mg`), micrograms (`mcg`), grams (`g`), International Units (`IU`), milliliters (`ml`), and percentage concentrations (`% w/w`, `% w/v`).

### 3. 🔄 Reverse Salt Lookup (Find Brands by Molecule)
* **Molecule-to-Brand Mapping:** Enter any chemical/salt name (e.g. `Metformin`, `Atorvastatin`, `Ketotifen`) and retrieve every commercial brand and generic sold in India containing that compound.
* **Affordable Generic Alternatives:** Filter reverse lookups by `pmbjp_jan_aushadhi` to instantly discover government subsidised generic equivalents that cost 50% to 80% less than commercial MRPs.

### 4. ⚠️ Multi-Medicine Overdose & Polypharmacy Safety Engine
* **Cumulative Salt Aggregation:** Evaluates 2 to 10 medicines taken together and calculates the **total combined dosage** for every individual active ingredient.
* **Duplicate Active Ingredient Detection:** Flags dangerous polypharmacy hazards where a patient inadvertently takes multiple medicines containing the identical salt (e.g. taking `Dolo 650` + `Calpol 500` + `Combiflam` concurrently results in 1,475 mg of Paracetamol).
* **3-Tier Dose Ceiling Verification:**
  1. *Tier 1 (Hardcoded Reference):* ~110 essential active salts verified against WHO Model Formulary, US FDA labels, and British National Formulary (BNF).
  2. *Tier 2 (Database Maximum):* Automatically derives highest safe commercial single-dose strength across 248,000 formulations.
  3. *Tier 3 (Unknown/Investigational):* Gracefully flags uncataloged salts and prompts clinical review.
* **5-Level Risk Classification:** Classifies combined intake into `SAFE`, `CAUTION`, `WARNING`, `DANGER`, or `UNKNOWN`, with machine-readable risk flags (`OVERDOSE_RISK_PARACETAMOL`, `DUPLICATE_SALT_PARACETAMOL`).

### 5. ⏰ Chrono-Pharmacology & Food Timing Intelligence
* **Meal-Relation Rules:** Automatically tells the patient *when* and *how* to ingest each medicine:
  * `🍽️ After Food` — NSAIDs, Steroids, Antibiotics (protects gastric mucosa, avoids dyspepsia).
  * `☕ Empty Stomach (45m Before Morning Tea)` — Levothyroxine (prevents malabsorption from tannins, dietary calcium, and iron).
  * `🍽️ With Food / Milk` — Metformin, Griseofulvin, NSAIDs (prevents gastrointestinal cramps and enhances bioavailability).
  * `🌙 Bedtime` — Statins (syncs with nocturnal hepatic HMG-CoA reductase peak), Sedating Antihistamines (prevents daytime somnolence), ACE inhibitors/antihypertensives.
  * `☀️ Morning` — Diuretics (prevents nocturia), SSRIs (prevents insomnia).
* **Human-Centric Instructions:** Contextual explanations so patients understand *why* the timing matters (e.g. *"Take with breakfast or main meal to minimize GI distress"*).

### 6. 👴 Geriatric & Senior Safety Guards
* **Senior-Specific Daily Ceilings:** Automatically applies lowered toxicity ceilings for elderly individuals (e.g. Paracetamol standard daily max is 4,000 mg, but capped at **2,000–3,000 mg** for seniors to prevent age-related hepatic impairment).
* **Organ Toxicity Notes:** Provides specific warnings for medications with hepatic clearance risks, renal excretion burdens, or increased bleeding hazards.

### 7. 🚨 Critical Narrow Therapeutic Index (NTI) Medication Alerts
* **Critical Drug Flagging:** Returns `is_critical: true` for drugs with a narrow margin between therapeutic efficacy and life-threatening toxicity (e.g. `Warfarin`, `Digoxin`, `Lithium`, `Levothyroxine`, `Theophylline`, `Phenytoin`, `Carbamazepine`).
* **Strict Adherence Prompts:** Emphasizes strict dosage consistency and physician supervision for high-risk regimens.

### 8. 🌐 International RxNorm & Synonym Normalization
* **Cross-Border Mappings:** Seamlessly maps international nonproprietary names (INN) and US Adopted Names (USAN) to Indian formulations (e.g. `Acetaminophen` ↔ `Paracetamol`, `Albuterol` ↔ `Salbutamol`, `Tylenol` ↔ `Dolo/Calpol`).
* **RxCUI Standard Identifiers:** Associates international RxNorm concept unique identifiers where applicable.

### 9. 🏷️ FDA Monograph Verification & Transparency Badge
* **Application Number Linking:** Direct correlation to US FDA Orange Book / NDA / ANDA numbers (e.g. `ANDA075010` for Paracetamol, `ANDA076136` for Metformin).
* **`is_clinical_data_estimated` Flag:** Total transparency on data origin:
  * `false` = Clinically verified against pharmacopeia reference monographs.
  * `true` = Rule-based therapeutic class estimate.

### 10. 🩺 Drug-Drug Interaction (DDI) & Contraindication Analysis
* **Concurrent Medication Safety:** Checks pairwise interactions between newly prescribed medications and current active regimens.
* **Patient Condition Contraindications:** Alerts when a drug is contraindicated for pre-existing medical conditions (e.g. `Aspirin` in patients with `Asthma` due to bronchospasm risk; `Metformin` in `Severe Renal Impairment`).

### 11. 🤖 Dual-Engine Resilience (Offline SQLite + AI Fallback)
* **Zero External DB Dependencies:** Bundled self-contained SQLite database with FTS5 indexing. No MongoDB, PostgreSQL, or Redis servers to maintain or pay for.
* **Google Gemini AI Fallback:** If an exotic, experimental, or newly launched medicine is not found in the 248k catalog, the system seamlessly calls Google Gemini Flash to parse the composition, schedule, and safety guidelines on the fly.

---

## 🗄️ What's Inside — 5 Real Datasets

| # | Dataset | Records | Source | Coverage & Details |
|:--|:--------|--------:|:-------|:-------------------|
| **1** | **Indian Commercial Brands** | 246,068 | *junioralive / Indian-Medicine-Dataset* | Active commercial SKUs across tablets, syrups, drops, injectables. All discontinued SKUs filtered out. |
| **2** | **PMBJP Jan Aushadhi Generics** | 2,479 | *Pradhan Mantri Bhartiya Janaushadhi Pariyojana* | Official Indian government subsidized generic drug catalog with MRP pricing. |
| **3** | **CDSCO Approved FDCs** | 65 | *Central Drugs Standard Control Organisation (DCGI)* | Gazette-approved Fixed Dose Combinations across cardiology, diabetes, respiratory, and anti-infectives. |
| **4** | **RxNorm / INN Synonyms** | 90+ | *WHO INN + US National Library of Medicine* | International brand ↔ generic synonym index linking foreign drug names to Indian equivalents. |
| **5** | **Clinical Dosage & Chronotherapy** | Curated | *WHO Model Formulary, BNF, Indian Pharmacopoeia 2022* | Verified meal rules, senior safe daily ceilings, single-dose caps, and NTI flags. |

> **Total Catalog Size:** **248,611 active medicines** stored in `data/medicines.db` (~178 MB SQLite).

---

## 📋 Complete API Reference

### Quick Endpoint Index

| Method | Route | Description |
|:-------|:------|:------------|
| `GET` | [`/api/health`](#endpoint-1--health-check) | Service status, uptime, dataset counts, and memory usage |
| `GET` | [`/api/medicines/search`](#endpoint-2--medicine-search-autocomplete) | High-speed FTS5 autocomplete & search across all datasets |
| `GET` | [`/api/medicines/lookup`](#endpoint-3--full-clinical-spec-lookup) | Full clinical profile, active salts, food timing, senior ceilings, FDA monograph |
| `GET` | [`/api/medicines/composition`](#endpoint-4--chemical-composition-finder) | Structured active ingredient breakdown with strengths & units |
| `GET` | [`/api/medicines/by-salt`](#endpoint-5--reverse-salt-lookup) | Reverse lookup: find all brands/generics containing a specific chemical |
| `GET` `POST` | [`/api/safety/overdose-check`](#endpoint-6--polypharmacy-overdose-checker) | Multi-medicine cumulative overdose & duplicate active salt checker |
| `GET` | [`/api/safety/medicine-analysis`](#endpoint-7--ddi--contraindication-safety-analysis) | Drug-drug interaction and patient condition contraindication check |

---

### Endpoint 1 · Health Check

Check API liveness, dataset records breakdown, and runtime memory.

```http
GET /api/health
```

#### Response (`200 OK`)
```json
{
  "status": "healthy",
  "version": "1.1.0",
  "timestamp": "2026-09-05T15:58:30.123Z",
  "uptime_seconds": 3600,
  "database": {
    "status": "connected",
    "total_medicines": 248611,
    "datasets": {
      "1mg_commercial": 246068,
      "pmbjp_jan_aushadhi": 2479,
      "cdsco_fdc": 64
    },
    "verified_clinical_records": 149253,
    "verified_percentage": "60.0%"
  },
  "features": [
    "sqlite_fts5_search",
    "rxnorm_synonym_resolution",
    "cdsco_fdc_cross_reference",
    "fda_orange_book_monographs",
    "chronopharmacology_rules",
    "polypharmacy_overdose_checker",
    "gemini_ai_fallback"
  ]
}
```

---

### Endpoint 2 · Medicine Search (Autocomplete)

Instant prefix and full-text search across brands, generics, active salts, and manufacturers.

```http
GET /api/medicines/search?q=dolo&limit=5
```

#### Query Parameters
| Parameter | Type | Required | Default | Description |
|:----------|:----:|:--------:|:-------:|:------------|
| `q` | string | ✅ | — | Search query (brand name, salt, strength, manufacturer) |
| `limit` | number | — | `10` | Maximum results to return (min: `1`, max: `50`) |
| `source` | string | — | `all` | Filter by dataset: `1mg_commercial`, `pmbjp_jan_aushadhi`, `cdsco_fdc`, or `all` |

#### Response (`200 OK`)
```json
{
  "query": "dolo",
  "total": 5,
  "results": [
    {
      "id": "comm-70412",
      "brand_name": "Dolo 650 Tablet",
      "generic_name": "Paracetamol",
      "strength": "650 mg",
      "dosage_form": "tablet",
      "manufacturer": "Micro Labs Ltd",
      "therapeutic_class": "Analgesic & Antipyretic",
      "price_inr": 30.0,
      "source": "1mg_commercial"
    },
    {
      "id": "comm-70413",
      "brand_name": "Dolo 500 Tablet",
      "generic_name": "Paracetamol",
      "strength": "500 mg",
      "dosage_form": "tablet",
      "manufacturer": "Micro Labs Ltd",
      "therapeutic_class": "Analgesic & Antipyretic",
      "price_inr": 15.2,
      "source": "1mg_commercial"
    }
  ]
}
```

---

### Endpoint 3 · Full Clinical Spec Lookup

Retrieves the complete clinical dossier for a medicine: structured active ingredients, chronotherapy meal timing, food badges, frequency schedule, senior dosage ceiling, NTI critical flag, and FDA reference.

```http
GET /api/medicines/lookup?name=Dolo%20650
```

#### Query Parameters
| Parameter | Type | Required | Description |
|:----------|:----:|:--------:|:------------|
| `name` | string | ✅ | Medicine name or brand (e.g. `Dolo 650`, `Thyronorm 50mcg`, `Combiflam`) |

#### Response (`200 OK`)
```json
{
  "input": "Dolo 650",
  "brand_name": "Dolo 650 Tablet",
  "generic_name": "Paracetamol",
  "active_ingredients": [
    {
      "salt": "Paracetamol",
      "strength": 650,
      "unit": "mg"
    }
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

> **Clinical Quality Indicator:**  
> When `is_clinical_data_estimated: false`, the dosage ceilings, food relation, and FDA application number have been directly verified against official pharmacopeia records.

---

### Endpoint 4 · Chemical Composition Finder

Inspects a commercial medicine and breaks it down into individual active ingredients with exact strengths, units, and FDC classification.

```http
GET /api/medicines/composition?name=Combiflam
```

#### Query Parameters
| Parameter | Type | Required | Description |
|:----------|:----:|:--------:|:------------|
| `name` | string | ✅ | Brand or medicine name (e.g. `Combiflam`, `Augmentin 625`) |

#### Response (`200 OK`)
```json
{
  "input": "Combiflam",
  "brand_name": "Combiflam Tablet",
  "generic_name": "Ibuprofen + Paracetamol",
  "dosage_form": "tablet",
  "composition_summary": "Ibuprofen 400mg + Paracetamol 325mg",
  "active_ingredients": [
    {
      "salt": "Ibuprofen",
      "strength": 400,
      "unit": "mg"
    },
    {
      "salt": "Paracetamol",
      "strength": 325,
      "unit": "mg"
    }
  ],
  "is_fixed_dose_combination": true,
  "source": "1mg_commercial"
}
```

---

### Endpoint 5 · Reverse Salt Lookup

Find all medicines in India formulated with a specific active pharmaceutical ingredient (API) / chemical compound.

```http
GET /api/medicines/by-salt?salt=Metformin&limit=5
```

#### Query Parameters
| Parameter | Type | Required | Default | Description |
|:----------|:----:|:--------:|:-------:|:------------|
| `salt` | string | ✅ | — | Active ingredient / chemical name (e.g. `Metformin`, `Atorvastatin`) |
| `limit` | number | — | `20` | Max results (cap: `100`) |
| `source` | string | — | `all` | Filter by catalog: `1mg_commercial`, `pmbjp_jan_aushadhi`, `cdsco_fdc` |

#### Generic Cost Saving Example (Filter by Jan Aushadhi):
```http
GET /api/medicines/by-salt?salt=Metformin&source=pmbjp_jan_aushadhi
```

#### Response (`200 OK`)
```json
{
  "salt_query": "Metformin",
  "total": 5,
  "results": [
    {
      "id": "pmbjp-412",
      "brand_name": "Metformin Hydrochloride Sustained Release Tablets IP 500mg",
      "generic_name": "Metformin",
      "strength": "500 mg",
      "dosage_form": "tablet",
      "manufacturer": "PMBJP (Govt of India)",
      "price_inr": 6.75,
      "source": "pmbjp_jan_aushadhi"
    }
  ]
}
```

---

### Endpoint 6 · Polypharmacy Overdose Checker ⚠️

The signature safety feature of SimplePharmaAPI. Analyzes a list of medicines taken together, extracts all active chemicals, sums the cumulative dosage of shared ingredients, and evaluates overdose risk against single-dose and daily ceilings.

#### Option A: POST (Recommended for names with spaces and special characters)
```http
POST /api/safety/overdose-check
Content-Type: application/json

{
  "medicines": ["Dolo 650", "Calpol 500", "Combiflam"]
}
```

#### Option B: GET (Convenient for quick URL queries)
```http
GET /api/safety/overdose-check?medicines=Dolo650,Calpol500,Combiflam
```

#### Limits & Constraints
* Accepts between **2** and **10** medicines per request.

#### Response (`200 OK`)
```json
{
  "medicines_checked": ["Dolo 650", "Calpol 500", "Combiflam"],
  "medicines_resolved": 3,
  "unresolved_medicines": [],
  "salt_aggregation": [
    {
      "salt": "Paracetamol",
      "contributed_by": [
        "Dolo 650 Tablet",
        "Calpol 500mg Tablet",
        "Combiflam Tablet"
      ],
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
      "contributed_by": [
        "Combiflam Tablet"
      ],
      "is_duplicate_across_medicines": false,
      "total_combined_mg": 400,
      "max_safe_single_dose_mg": 800,
      "max_safe_daily_dose_mg": 2400,
      "senior_daily_max_mg": 1200,
      "ceiling_source": "hardcoded_reference",
      "risk_level": "SAFE",
      "message": "✅ SAFE: Combined Ibuprofen dose is 400.0 mg — within safe limit of 800 mg.",
      "clinical_notes": "Take after meals to reduce GI bleed risk."
    }
  ],
  "overall_risk": "WARNING",
  "risk_flags": [
    "OVERDOSE_RISK_PARACETAMOL",
    "DUPLICATE_SALT_PARACETAMOL",
    "HAS_DUPLICATE_SALTS"
  ],
  "unique_salts_found": 2,
  "has_duplicate_salts": true,
  "disclaimer": "⚠️ MEDICAL DISCLAIMER: Informational analysis only. Not a substitute for professional medical advice or clinical evaluation."
}
```

#### Risk Level Breakdown

| Level | Badge | Clinical Meaning |
|:------|:-----:|:-----------------|
| `SAFE` | ✅ | Total combined dose is within the safe single-dose ceiling. |
| `CAUTION` | 🟡 | Approaching maximum safe limit (>80%), or duplicate active salt detected across multiple prescriptions. |
| `WARNING` | ⚠️ | Total combined dose **exceeds the recommended safe single-dose ceiling**. High risk of adverse effects. |
| `DANGER` | ⛔ | Total combined dose exceeds 150% of single dose ceiling or exceeds total daily maximum in one sitting. Urgent risk. |
| `UNKNOWN` | ❔ | Salt ceiling not cataloged in primary references. Advised to verify with a licensed pharmacist. |

---

### Endpoint 7 · DDI & Contraindication Safety Analysis

Cross-references a candidate medication against a patient's existing drug regimen and medical conditions to identify dangerous Drug-Drug Interactions (DDI) and contraindications.

```http
GET /api/safety/medicine-analysis?drug=Aspirin&conditions=Asthma&active_meds=Ibuprofen
```

#### Query Parameters
| Parameter | Type | Required | Description |
|:----------|:----:|:--------:|:------------|
| `drug` | string | ✅ | Primary medication being prescribed / evaluated |
| `active_meds` | string | — | Comma-separated list of currently active medications |
| `conditions` | string | — | Comma-separated list of patient health conditions (e.g. `Asthma`, `Hypertension`, `Pregnancy`) |

#### Response (`200 OK`)
```json
{
  "drug": "Aspirin",
  "active_meds": ["Ibuprofen"],
  "conditions": ["Asthma"],
  "contraindications": [
    {
      "condition": "Asthma",
      "severity": "HIGH",
      "warning": "Aspirin can trigger severe, life-threatening bronchospasm in patients with aspirin-exacerbated respiratory disease (AERD).",
      "recommendation": "Avoid aspirin and non-selective NSAIDs. Consider Paracetamol as alternative analgesic."
    }
  ],
  "drug_interactions": [
    {
      "interacting_drug": "Ibuprofen",
      "severity": "MODERATE",
      "mechanism": "Concurrent use of dual NSAIDs exponentially increases gastrointestinal ulceration and renal toxicity.",
      "recommendation": "Do not combine Aspirin and Ibuprofen unless under strict cardiovascular monitoring."
    }
  ]
}
```

---

## ⏰ Chronotherapy & Food Badges Reference

SimplePharmaAPI incorporates clinical chrono-pharmacology heuristics based on gastrointestinal physiology and circadian metabolic cycles:

| Badge | Timing Rule | Clinical Rationale & Examples |
|:------|:------------|:------------------------------|
| `🍽️ After Food` | Within 30 mins after meals | **NSAIDs, Steroids, Antibiotics** (e.g. `Combiflam`, `Prednisolone`, `Amoxicillin`). Protects the gastric mucosal barrier from direct chemical irritation and ulceration. |
| `☕ Empty Stomach (45m Before Morning Tea)` | 45–60 mins before morning beverage/food | **Thyroid Hormones** (e.g. `Thyronorm`, `Eltroxin`). Absorption is severely inhibited by dietary calcium, dietary fiber, iron, and the polyphenols/tannins in tea and coffee. |
| `🍽️ With Food / Milk` | During the meal or with milk | **Metformin, Griseofulvin, Iron Salts**. Food slows transit time, cuts dyspepsia and abdominal cramps, and enhances the absorption of lipophilic agents. |
| `🌙 Bedtime` | 30 mins before sleep | **Statins** (`Atorvastatin`, `Rosuvastatin` — aligns with peak hepatic cholesterol synthesis at night); **Sedating Antihistamines** (`Ketotifen`, `Cetirizine` — leverages somnolence for sleep while preventing daytime drowsiness). |
| `☀️ Morning` | Upon waking | **Diuretics** (`Furosemide`, `Hydrochlorothiazide`). Promotes daytime diuresis and eliminates sleep disruption from nocturia. |
| `💧 Anytime with Water` | Flexible | Chemically inert drugs with meal-independent bioavailability (e.g. `Paracetamol` regular use, `Cetirizine` non-sedating). |

---

## 👴 Senior Dosing Safeguards

Elderly patients experience decreased renal clearance and reduced hepatic blood flow. SimplePharmaAPI automatically flags senior safety thresholds:

| Active Ingredient | Standard Adult Single Max | Standard Adult Daily Max | Senior Safe Daily Ceiling | Primary Clinical Risk in Seniors |
|:------------------|:-------------------------:|:------------------------:|:-------------------------:|:---------------------------------|
| **Paracetamol** | 1,000 mg | 4,000 mg | **2,000 – 3,000 mg** | Hepatic glutathione depletion & hepatotoxicity |
| **Ibuprofen** | 800 mg | 2,400 mg | **1,200 mg** | Acute kidney injury (AKI) & occult GI bleeding |
| **Diclofenac** | 50 mg | 150 mg | **75 mg** | Elevated cardiovascular thrombotic risk & fluid retention |
| **Aceclofenac** | 100 mg | 200 mg | **100 mg** | Gastric mucosal ulceration & renal hypoperfusion |
| **Metformin** | 1,000 mg | 2,550 mg | **1,000 – 1,500 mg** | Lactic acidosis in reduced GFR (<45 mL/min) |
| **Pantoprazole** | 40 mg | 80 mg | **40 mg** | Long-term hypomagnesemia, B12 deficiency & bone fractures |
| **Atorvastatin** | 40 mg | 80 mg | **20 – 40 mg** | Myopathy and rhabdomyolysis risk |

---

## 💻 Code Integration Examples

### 1 · Flutter / Dart
```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class SimplePharmaService {
  static const String _baseUrl = 'https://simple-pharma-api.onrender.com';

  /// Autocomplete search
  static Future<List<dynamic>> search(String query) async {
    final uri = Uri.parse('$_baseUrl/api/medicines/search?q=${Uri.encodeComponent(query)}&limit=10');
    final response = await http.get(uri);
    return jsonDecode(response.body)['results'];
  }

  /// Full clinical specification
  static Future<Map<String, dynamic>?> lookup(String name) async {
    final uri = Uri.parse('$_baseUrl/api/medicines/lookup?name=${Uri.encodeComponent(name)}');
    final response = await http.get(uri);
    return response.statusCode == 200 ? jsonDecode(response.body) : null;
  }

  /// Check polypharmacy overdose risk
  static Future<Map<String, dynamic>> checkOverdose(List<String> medicines) async {
    final uri = Uri.parse('$_baseUrl/api/safety/overdose-check');
    final response = await http.post(
      uri,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'medicines': medicines}),
    );
    return jsonDecode(response.body);
  }
}
```

### 2 · JavaScript / TypeScript (Axios or Fetch)
```typescript
const BASE_URL = 'https://simple-pharma-api.onrender.com';

export const pharmaAPI = {
  // Autocomplete
  search: async (q: string, limit = 10) => {
    const res = await fetch(`${BASE_URL}/api/medicines/search?q=${encodeURIComponent(q)}&limit=${limit}`);
    return (await res.json()).results;
  },

  // Lookup spec & food timing
  lookup: async (name: string) => {
    const res = await fetch(`${BASE_URL}/api/medicines/lookup?name=${encodeURIComponent(name)}`);
    return await res.json();
  },

  // Chemical composition
  composition: async (name: string) => {
    const res = await fetch(`${BASE_URL}/api/medicines/composition?name=${encodeURIComponent(name)}`);
    return await res.json();
  },

  // Reverse salt lookup
  bySalt: async (salt: string, limit = 20) => {
    const res = await fetch(`${BASE_URL}/api/medicines/by-salt?salt=${encodeURIComponent(salt)}&limit=${limit}`);
    return (await res.json()).results;
  },

  // Overdose check
  checkOverdose: async (medicines: string[]) => {
    const res = await fetch(`${BASE_URL}/api/safety/overdose-check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ medicines }),
    });
    return await res.json();
  },
};
```

### 3 · Python
```python
import requests

BASE_URL = "https://simple-pharma-api.onrender.com"

# 1. Search
res = requests.get(f"{BASE_URL}/api/medicines/search", params={"q": "dolo 650"}).json()
print(f"Found: {res['results'][0]['brand_name']}")

# 2. Composition
comp = requests.get(f"{BASE_URL}/api/medicines/composition", params={"name": "Combiflam"}).json()
print(f"Salts: {comp['composition_summary']}")

# 3. Polypharmacy Overdose Check
overdose = requests.post(
    f"{BASE_URL}/api/safety/overdose-check",
    json={"medicines": ["Dolo 650", "Calpol 500", "Combiflam"]}
).json()

print(f"Overall Risk: {overdose['overall_risk']}")
for salt in overdose["salt_aggregation"]:
    print(f" - {salt['salt']}: {salt['total_combined_mg']}mg ({salt['risk_level']})")
```

### 4 · cURL
```bash
BASE="https://simple-pharma-api.onrender.com"

# Search
curl -s "$BASE/api/medicines/search?q=thyronorm&limit=3" | jq .

# Lookup (includes food badge and senior bounds)
curl -s "$BASE/api/medicines/lookup?name=Thyronorm%2050mcg" | jq .

# Overdose Check (POST)
curl -s -X POST "$BASE/api/safety/overdose-check" \
  -H "Content-Type: application/json" \
  -d '{"medicines": ["Dolo 650", "Calpol 500", "Combiflam"]}' | jq .
```

---

## 🏗️ System Architecture

```
                                  Client Request
                                        │
                                        ▼
                            Express Router (app.ts)
                                        │
         ┌──────────────────────────────┼──────────────────────────────┐
         ▼                              ▼                              ▼
  /api/medicines/*               /api/safety/*                    /api/health
  ├── /search                    ├── /overdose-check              └── Status & Uptime
  ├── /lookup                    │   ├── Duplicate Salt Detector
  ├── /composition               │   ├── 3-Tier Dose Ceiling Engine
  └── /by-salt                   │   └── Risk Classifier
         │                       └── /medicine-analysis
         │                           └── DDI & Contraindications
         ▼                                      │
┌──────────────────────────────┐                │
│       dbService.ts           │                ▼
│  SQLite FTS5 + BM25 Ranking  │◄───────── AI Fallback (Gemini)
│    (data/medicines.db)       │   (only when brand is uncataloged)
└──────────────────────────────┘
```

* **Local Storage:** Single, self-contained file `data/medicines.db` (~178 MB).
* **FTS5 Virtual Table:** Tokenized indexing on `brand_name`, `generic_name`, `manufacturer`, `active_ingredients`, and `therapeutic_class`.
* **Zero Cloud Latency:** Queries execute locally inside the Node.js process via `better-sqlite3`. No round-trip network hops to MongoDB or PostgreSQL.

---

## 🌐 Deployment Guide (Render)

### One-Click Blueprint Setup
1. Fork this repository to your GitHub account.
2. Log in to the [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** → **Blueprint**.
4. Connect your forked repo — Render automatically parses [`render.yaml`](file:///home/vishnunandan555/Projects/SimplePharmaAPI/render.yaml).
5. *(Optional)* Provide `GEMINI_API_KEY` in Render environment variables for AI fallback on uncataloged drugs.
6. Click **Apply**.

### Free Tier Keep-Alive
Render's free web services spin down after 15 minutes of inactivity. To keep your API hot for instant 20ms responses:
1. Create a free account on [cron-job.org](https://cron-job.org) or [UptimeRobot](https://uptimerobot.com).
2. Set up a HTTP GET monitor for:  
   `https://simple-pharma-api.onrender.com/api/health`
3. Set the interval to **every 10 minutes**.

---

## 🛠️ Local Development & Testing

```bash
# 1. Clone repository
git clone https://github.com/vishnunandan555/SimplePharmaAPI.git
cd SimplePharmaAPI

# 2. Install dependencies
npm install

# 3. Run development server (hot-reload with ts-node-dev)
npm run dev

# 4. Execute automated test suite (8 test suites)
npm test

# 5. Build production TypeScript bundle
npm run build

# 6. Start production server
npm run start

# 7. (Optional) Rebuild the SQLite database from source JSON/CSV datasets
python3 scripts/build_sqlite_catalog.py
```

---

## ⚠️ Medical Disclaimer

SimplePharmaAPI is an automated informational software tool intended strictly for application development, educational reference, and pharmacovigilance research. **It does NOT provide clinical diagnosis, medical treatment, or personalized healthcare advice.** Never alter medication regimens, stop prescribed therapies, or adjust drug dosages without direct guidance from a licensed medical practitioner or registered pharmacist.

---

## 📄 License

Distributed under the **MIT License**. Free for personal, open-source, and commercial integration.
