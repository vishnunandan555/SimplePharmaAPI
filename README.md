# SimplePharmaAPI 💊🇮🇳

> **100% Free, Standalone Indian Medicine Search, Clinical Specifications, and Safety Engine.**  
> Pre-bundled with **256,470+ Indian medicines & SKUs**. Zero external database accounts required.

---

## ⚡ Multi-Database Architecture

SimplePharmaAPI acts as an intelligent federated search engine querying across **5 pre-downloaded, complementary pharmaceutical datasets** simultaneously in under 5ms:

| # | Dataset | Records | Description | Source Tag |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Commercial Indian Brands** | ~254,000 SKUs | Complete trade catalog (*Dolo, Augmentin, Mastifen, Telma, Pantop*) with manufacturers, formulations, and market prices. | `1mg_commercial` |
| **2** | **PMBJP Jan Aushadhi Generics** | 2,479 products | Official Government of India generic formulations with subsidized MRP pricing (e.g. ₹ 8 to ₹ 22). | `pmbjp_jan_aushadhi` |
| **3** | **CDSCO Approved Combinations** | Curated FDCs | Central Drugs Standard Control Organisation (DCGI Gazette) approved Fixed Dose Combinations with rational indications. | `cdsco_fdc` |
| **4** | **RxNorm & INN Synonyms** | Standard mapping | International Nonproprietary Names (INN) ↔ USAN cross-nomenclature (*Paracetamol ↔ Acetaminophen*, *Salbutamol ↔ Albuterol*). | `rxnorm_synonyms` |
| **5** | **MedEase Chrono-Pharmacology** | Clinical Rules | Curated meal/food relation rules, senior daily maximums, critical medication flags, and drug-drug interactions. | `clinical_rules` |

---

## 💡 How to Use: Core Workflows & Examples

### Workflow 1: Search-As-You-Type Autocomplete
When a user types into a medicine search bar, call `/api/medicines/search`. The engine performs multi-tier fuzzy matching across brands, generics, and common typos in **sub-5ms**:

```http
GET /api/medicines/search?q=mastifen&limit=5
```

#### Query Parameters:
| Parameter | Type | Required | Default | Description |
| :--- | :---: | :---: | :---: | :--- |
| `q` | `string` | **Yes** | `""` | Search query (brand name, generic name, salt, or strength e.g. `dolo 650`, `pantop`, `metformin`) |
| `limit` | `number` | No | `10` | Maximum number of results to return (capped at 50) |
| `source` | `string` | No | *all* | Filter by dataset: `1mg_commercial`, `pmbjp_jan_aushadhi`, or `cdsco_fdc` |

#### Response:
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

### Workflow 2: Instant Form Auto-Fill (Clinical Specs)
When a user selects a medicine from search results or types a full name, call `/api/medicines/lookup` to auto-populate all clinical, scheduling, and safety fields in **under 2ms**:

```http
GET /api/medicines/lookup?name=Mastifen%201mg
```

#### Fields Returned for Auto-Fill:
- **Brand & Generic Names**: Standardized nomenclature.
- **Active Ingredients**: Array with parsed salts, strengths, and units.
- **Dosage Form**: `tablet`, `capsule`, `syrup`, `inhaler`, etc.
- **Food Relation**: `empty_stomach`, `after`, `with_meals`, or `with_or_without_food`.
- **Food Badge & Instructions**: User-facing badge text (e.g. `🌙 With Food / At Bedtime`) and detailed patient instructions.
- **Dose Schedule & Ceilings**: Standard schedule, elderly safe daily bound (`senior_safe_ceiling_mg`), and maximum daily limit (`max_daily_ceiling_mg`).
- **FDA / CDSCO Monograph**: Regulatory approval code and source repository.

#### Response:
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

### Workflow 3: Finding Affordable Jan Aushadhi Generic Alternatives
To help patients save up to 80% on prescription costs, pass `source=pmbjp_jan_aushadhi` to search specifically across official government generics:

```http
GET /api/medicines/search?q=Aceclofenac&source=pmbjp_jan_aushadhi
```

#### Response:
```json
{
  "query": "Aceclofenac",
  "total": 3,
  "results": [
    {
      "id": "pmbjp-253974",
      "brand_name": "Jan Aushadhi Aceclofenac 100mg and Paracetamol 325mg Tablets",
      "generic_name": "Aceclofenac 100mg and Paracetamol 325mg Tablets",
      "strength": "1 unit",
      "dosage_form": "tablet",
      "manufacturer": "PMBJP (Pradhan Mantri Bhartiya Janaushadhi Pariyojana)",
      "therapeutic_class": "Analgesic/Antipyretic/Anti-Inflammatory",
      "price_inr": 10,
      "source": "pmbjp_jan_aushadhi"
    }
  ]
}
```
*(Notice the price is **₹ 10** compared to commercial brand alternatives which sell for ₹ 90 - ₹ 110!)*

---

### Workflow 4: Patient Safety, DDI & Contraindication Analysis
Before prescribing or confirming an elder's medication, call `/api/safety/medicine-analysis` to detect drug interactions against active medications and chronic disease contraindications:

```http
GET /api/safety/medicine-analysis?drug=Aspirin&conditions=Asthma&active_meds=Ibuprofen
```

#### Query Parameters:
| Parameter | Type | Required | Description |
| :--- | :---: | :---: | :--- |
| `drug` | `string` | **Yes** | Medicine name to evaluate (e.g. `Aspirin`, `Telmisartan`) |
| `active_meds` | `string` | No | Comma-separated list of medicines patient is already taking (e.g. `Ibuprofen,Metformin`) |
| `conditions` | `string` | No | Comma-separated list of chronic conditions (e.g. `Asthma,Peptic Ulcer`) |

#### Response:
```json
{
  "input_name": "Aspirin",
  "normalized_generic": "aspirin",
  "fda_label_found": true,
  "interactions_with_active_regimen": [
    {
      "drug_a": "Aspirin",
      "drug_b": "Ibuprofen",
      "severity": "critical",
      "clinical_effect": "Synergistic gastrointestinal ulceration, severe mucosal bleeding, and additive renal impairment.",
      "recommendation": "Avoid concurrent use of multiple NSAIDs. Use paracetamol for analgesia where appropriate."
    }
  ],
  "food_and_timing": {
    "timing_rule": "with_or_without_food",
    "badge_label": "💊 With or Without Food",
    "instruction": "May be administered with or without food. Maintain a consistent daily routine."
  },
  "condition_contraindications": [
    {
      "condition": "Asthma",
      "severity": "critical",
      "explanation": "Contraindicated: NSAIDs trigger acute bronchospasm and severe respiratory crises in patients with reactive airway disease (AERD).",
      "fda_quote": "Aspirin-sensitive asthma: serious and potentially fatal bronchospasm reported in patients with asthma."
    }
  ]
}
```

---

## 📱 Code Integration Cheatsheets

### 1. Flutter / Dart
```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class PharmaService {
  static const String baseUrl = 'https://<your-render-service>.onrender.com';

  // 1. Search medicines
  static Future<List<Map<String, dynamic>>> search(String query) async {
    final url = Uri.parse('$baseUrl/api/medicines/search?q=${Uri.encodeComponent(query)}&limit=8');
    final res = await http.get(url);
    if (res.statusCode == 200) {
      final data = jsonDecode(res.body);
      return List<Map<String, dynamic>>.from(data['results']);
    }
    return [];
  }

  // 2. Auto-fill clinical specs
  static Future<Map<String, dynamic>?> lookup(String medicineName) async {
    final url = Uri.parse('$baseUrl/api/medicines/lookup?name=${Uri.encodeComponent(medicineName)}');
    final res = await http.get(url);
    if (res.statusCode == 200) {
      return jsonDecode(res.body);
    }
    return null;
  }
}
```

### 2. JavaScript / React / Next.js
```javascript
const BASE_URL = "https://<your-render-service>.onrender.com";

// Search Autocomplete Hook
export async function searchMedicines(query) {
  const res = await fetch(`${BASE_URL}/api/medicines/search?q=${encodeURIComponent(query)}&limit=6`);
  const data = await res.json();
  return data.results || [];
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

BASE_URL = "https://<your-render-service>.onrender.com"

# Search
res = requests.get(f"{BASE_URL}/api/medicines/search", params={"q": "dolo 650"})
print("Top Result:", res.json()["results"][0])

# Lookup
specs = requests.get(f"{BASE_URL}/api/medicines/lookup", params={"name": "Mastifen 1mg"}).json()
print("Food Rule:", specs["food_badge"])
```

### 4. cURL
```bash
# 1. Health check
curl "https://<your-service>.onrender.com/api/health"

# 2. Search commercial brands
curl "https://<your-service>.onrender.com/api/medicines/search?q=telma%2040"

# 3. Search Jan Aushadhi generic catalog
curl "https://<your-service>.onrender.com/api/medicines/search?q=metformin&source=pmbjp_jan_aushadhi"

# 4. Clinical Spec Lookup
curl "https://<your-service>.onrender.com/api/medicines/lookup?name=Thyronorm%2050mcg"

# 5. Safety Analysis
curl "https://<your-service>.onrender.com/api/safety/medicine-analysis?drug=Aspirin&conditions=Asthma"
```

---

## 🌐 How to Host on Render (Step-by-Step Guide)

You can deploy SimplePharmaAPI to Render in under 60 seconds.

### Step 1: Push Code to Your GitHub
```bash
git add .
git commit -m "feat: complete standalone SimplePharmaAPI with 256k medicines"
git push origin main
```

---

### Step 2: Choose Deployment Method on Render

#### Option A: Using "Blueprint" (Recommended — Zero Configuration)
1. Go to your [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** in the top-right corner and select **Blueprint**.
3. Connect your GitHub account and select the **`SimplePharmaAPI`** repository.
4. Render automatically detects [`render.yaml`](file:///home/vishnunandan555/Projects/SimplePharmaAPI/render.yaml) and pre-fills all configuration:
   - **Runtime**: `Node`
   - **Plan**: `Free` ($0/mo)
   - **Region**: `Singapore` (nearest to India for low latency)
   - **Build Command**: `npm install --include=dev && npm run build`
   - **Start Command**: `npm run start`
   - **Health Check Path**: `/api/health`
5. *(Optional)* Under Environment Variables, set your `GEMINI_API_KEY`.
6. Click **Apply**. Render will build and deploy the API automatically.

---

#### Option B: Using "Web Service" (Manual Setup)
If you click **New +** ➔ **Web Service**:
1. Select your **`SimplePharmaAPI`** repository.
2. Fill in the following fields:
   | Setting | Value to Choose | Why |
   | :--- | :--- | :--- |
   | **Name** | `simple-pharma-api` | Your public URL will be `https://simple-pharma-api.onrender.com` |
   | **Region** | `Singapore` | Lowest latency for users in India & Asia |
   | **Branch** | `main` | Production branch |
   | **Runtime** | `Node` | Node.js environment |
   | **Build Command** | `npm install --include=dev && npm run build` | Builds the SQLite catalog and compiles TypeScript |
   | **Start Command** | `npm run start` | Boots the Express server |
   | **Instance Type** | **Free ($0/month)** | 100% free tier with 512 MB RAM |
3. Under **Advanced**, set:
   - **Health Check Path**: `/api/health`
4. Under **Environment Variables**, add:
   - `NODE_ENV` = `production`
   - `GEMINI_API_KEY` = `your_google_ai_studio_key` *(optional, for uncataloged brand resolution)*
   - `GEMINI_MODEL` = `gemini-flash-latest` *(optional, defaults to active free tier)*
5. Click **Create Web Service**.

---

### Step 3: Keep Your Service Awake 24/7 for Free

Render's free tier spins down after 15 minutes of inactivity. To keep your API hot 24/7 with zero cold starts:
1. Sign up for free on [cron-job.org](https://cron-job.org/) or [UptimeRobot](https://uptimerobot.com/).
2. Create a new HTTP monitor:
   - **URL**: `https://<your-service-name>.onrender.com/api/health`
   - **Execution interval**: Every 10 minutes.
3. **Result**: Your API stays permanently warm and responds in sub-10ms around the clock!

---

## 🛠️ Local Development & Testing

```bash
# Install dependencies
npm install

# Run in development mode with hot-reload
npm run dev

# Run automated integration tests (8/8 tests pass)
npm test

# Build production bundle and build SQLite catalog
npm run build

# Start production server
npm run start
```

---

## 📄 License

MIT — 100% free and open for everyone to use, modify, and host.
