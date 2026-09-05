# SimplePharmaAPI 💊🇮🇳

> **100% Free, Standalone Indian Medicine Search, Clinical Specifications, and Safety Engine.**  
> Pre-bundled with **253,970+ Indian medicines & SKUs**. Zero external database accounts required.

---

## ⚡ Key Highlights

- **Pre-Bundled Master Dataset (253,970+ Medicines)**: Includes the full commercial Indian catalog (*Augmentin, Dolo 650, Calpol, Mastifen, Telma, Pantop, Pan-D, Pantocid DSR, Shelcal, Ecosprin, Thyronorm, Glycomet, Januvia, Forxiga, Jardiance*, etc.) with salt compositions and manufacturers.
- **Sub-5ms Autocomplete Search**: Multi-tier indexed search with SQLite B-Trees and FTS5 full-text matching to instantly resolve queries and user typos (*"mastifin" ➔ "Mastifen"*).
- **Chrono-Pharmacology Rules Engine**: Auto-computes food timing rules, empty-stomach timing, bedtime guidance, senior safe daily bounds, adult maximum ceilings, and escalation criticality flags.
- **Live OpenFDA & Safety Engine**: Real-time Drug-Drug Interaction (DDI) checking, chronic condition contraindications (e.g., Asthma + NSAIDs/Aspirin bronchospasm detection), and boxed warnings with in-memory TTL caching.
- **Google Gemini Fallback**: Seamless fallback cascade using currently active free-tier models (`gemini-flash-latest`, `gemini-3.5-flash-lite`, `gemini-3.6-flash`) for unlisted novel formulations.
- **Engineered for Render Free Tier**: Memory footprint ~140 MB RSS (well below Render's 512 MB ceiling) and built-in keep-alive endpoint for 24/7 zero cold-start uptime.

---

## 🌐 How to Host on Render (Step-by-Step Guide)

You can deploy SimplePharmaAPI to Render in under 60 seconds.

### Step 1: Push Code to Your GitHub
```bash
git add .
git commit -m "feat: complete standalone SimplePharmaAPI with 250k medicines"
git push origin main
```

---

### Step 2: Choose Deployment Method on Render

#### Option A: Using "Blueprint" (Recommended — Zero Configuration)
1. Go to your [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** in the top-right corner and select **Blueprint**.
3. Connect your GitHub account and select the **`SimplePharmaAPI`** repository.
4. Render will automatically detect [`render.yaml`](file:///home/vishnunandan555/Projects/SimplePharmaAPI/render.yaml) and pre-fill all configuration:
   - **Runtime**: `Node`
   - **Plan**: `Free` ($0/mo)
   - **Region**: `Singapore` (nearest to India for low latency)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Health Check Path**: `/api/health`
5. *(Optional)* Under Environment Variables, set your `GEMINI_API_KEY`.
6. Click **Apply**. Render will build and deploy the API automatically.

---

#### Option B: Using "Web Service" (Manual Setup)
If you prefer creating a Web Service manually:
1. Go to [Render Dashboard](https://dashboard.render.com/) ➔ Click **New +** ➔ Select **Web Service**.
2. Select your **`SimplePharmaAPI`** repository.
3. Configure the following fields:
   | Setting | Value to Choose | Why |
   | :--- | :--- | :--- |
   | **Name** | `simple-pharma-api` | Your public URL will be `https://simple-pharma-api.onrender.com` |
   | **Region** | `Singapore` | Lowest latency for users in India & Asia |
   | **Branch** | `main` | Production branch |
   | **Runtime** | `Node` | Node.js environment |
   | **Build Command** | `npm install && npm run build` | Builds the SQLite catalog and compiles TypeScript |
   | **Start Command** | `npm run start` | Boots the Express server |
   | **Instance Type** | **Free ($0/month)** | 100% free tier with 512 MB RAM |
4. Click **Advanced** and set:
   - **Health Check Path**: `/api/health`
5. Under **Environment Variables**, add:
   - `NODE_ENV` = `production`
   - `GEMINI_API_KEY` = `your_google_ai_studio_key` *(optional, for uncataloged brand resolution)*
   - `GEMINI_MODEL` = `gemini-flash-latest` *(optional, defaults to active free tier)*
6. Click **Create Web Service**.

---

### Step 3: Keep Your Service Awake 24/7 for Free

Render's free tier spins down after 15 minutes of inactivity. To keep your API hot 24/7 with zero cold starts:
1. Sign up for free on [cron-job.org](https://cron-job.org/) or [UptimeRobot](https://uptimerobot.com/).
2. Create a new HTTP monitor:
   - **URL**: `https://<your-service-name>.onrender.com/api/health`
   - **Execution interval**: Every 10 minutes.
3. **Result**: Your API stays permanently warm and responds in sub-10ms around the clock!

---

## 📖 API Documentation & Contracts

### 1. Health & Keep-Alive Check
`GET /api/health`

**Response (`200 OK`)**:
```json
{
  "status": "ok",
  "service": "SimplePharmaAPI",
  "version": "1.0.0",
  "timestamp": "2026-09-05T14:49:26.907Z",
  "uptime_seconds": 3600,
  "medicines_indexed": 253973,
  "free_tier_status": "ready"
}
```

---

### 2. Autocomplete Medicine Search
`GET /api/medicines/search?q=mastifen&limit=5`

**Response (`200 OK`)**:
```json
{
  "query": "mastifen",
  "total": 1,
  "results": [
    {
      "id": "med-135750",
      "brand_name": "Mastifen 1mg Tablet",
      "generic_name": "Ketotifen",
      "strength": "1 mg",
      "dosage_form": "tablet",
      "manufacturer": "East West Pharma",
      "therapeutic_class": "Mast Cell Stabilizer & Antihistamine"
    }
  ]
}
```

---

### 3. Clinical Specification Lookup
`GET /api/medicines/lookup?name=Mastifen%201mg`

**Response (`200 OK`)**:
```json
{
  "input": "Mastifen 1mg",
  "brand_name": "Mastifen 1mg Tablet",
  "generic_name": "Ketotifen",
  "active_ingredients": [
    {
      "salt": "Ketotifen",
      "strength": 1,
      "unit": "mg"
    }
  ],
  "dosage_form": "tablet",
  "food_relation": "after",
  "food_badge": "🌙 With Food / At Bedtime",
  "food_instruction": "Take with food or immediately after dinner / at bedtime to reduce stomach irritation and transient drowsiness.",
  "recommended_frequency": "2x",
  "frequency_label": "2x Morning & Night",
  "is_critical": false,
  "dosage_and_bounds": {
    "standard_schedule": "1 mg 2x Morning & Night with meals/after food",
    "senior_safe_ceiling_mg": 2,
    "max_daily_ceiling_mg": 4
  },
  "fda_monograph": {
    "found": true,
    "application_number": "ANDA204059",
    "source": "US FDA National Drug Code & Label Repository"
  }
}
```

---

### 4. Live Safety & Interaction Analysis
`GET /api/safety/medicine-analysis?drug=Aspirin&conditions=Asthma&active_meds=Ibuprofen`

**Response (`200 OK`)**:
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

## 📱 Client Integration Examples

### cURL
```bash
# Search
curl "https://<your-service>.onrender.com/api/medicines/search?q=dolo%20650"

# Lookup
curl "https://<your-service>.onrender.com/api/medicines/lookup?name=Augmentin%20625"

# Safety Analysis
curl "https://<your-service>.onrender.com/api/safety/medicine-analysis?drug=Aspirin&conditions=Asthma"
```

### Flutter / Dart
```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class SimplePharmaClient {
  final String baseUrl;
  SimplePharmaClient({this.baseUrl = 'https://<your-service>.onrender.com'});

  Future<List<dynamic>> search(String query) async {
    final res = await http.get(Uri.parse('$baseUrl/api/medicines/search?q=${Uri.encodeComponent(query)}&limit=8'));
    if (res.statusCode == 200) {
      final json = jsonDecode(res.body);
      return json['results'];
    }
    return [];
  }

  Future<Map<String, dynamic>?> lookup(String medicineName) async {
    final res = await http.get(Uri.parse('$baseUrl/api/medicines/lookup?name=${Uri.encodeComponent(medicineName)}'));
    if (res.statusCode == 200) {
      return jsonDecode(res.body);
    }
    return null;
  }
}
```

---

## 🛠️ Local Development & Scripts

```bash
# Install dependencies
npm install

# Run in development with hot-reload
npm run dev

# Run automated integration tests (8/8 tests)
npm test

# Build production bundle and SQLite catalog
npm run build

# Start production server
npm run start
```

---

## 📄 License

MIT — Free for everyone to use, modify, and host.
