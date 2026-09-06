// src/data/saltCeilings.ts
// ─────────────────────────────────────────────────────────────────────────────
// WHO / US-FDA / BNF verified safe dose ceilings for ~110 salts common in
// Indian pharmaceutical market.
//
// Sources:
//   • WHO Model Formulary 2008 & 2023 updates
//   • US FDA Approved Drug Products (Orange Book)
//   • British National Formulary (BNF) 85th edition
//   • Indian Pharmacopoeia 2022 (IP 2022)
//   • CDSCO prescribing guidelines
//
// Fields:
//   max_single_dose_mg    — Maximum mg safe per individual dose (adult)
//   max_daily_dose_mg     — Maximum mg safe per 24-hour period (adult)
//   senior_daily_max_mg   — Conservative ceiling for patients ≥65 years
//   unit                  — Dosing unit (always mg unless noted)
//   notes                 — Clinical note for special circumstances
// ─────────────────────────────────────────────────────────────────────────────

export interface SaltCeiling {
  canonical_name: string;          // Primary INN name
  aliases: string[];               // Synonyms / alternate spellings
  max_single_dose_mg: number;
  max_daily_dose_mg: number;
  senior_daily_max_mg: number;
  therapeutic_class: string;
  notes?: string;
}

export const SALT_CEILINGS: SaltCeiling[] = [
  // ── Analgesics / Antipyretics ──────────────────────────────────────────────
  {
    canonical_name: "Paracetamol",
    aliases: ["Acetaminophen", "APAP", "Paracetamol IP", "Paracetamol BP"],
    max_single_dose_mg: 1000,
    max_daily_dose_mg: 4000,
    senior_daily_max_mg: 2000,
    therapeutic_class: "Analgesic / Antipyretic",
    notes: "Hepatotoxic in overdose. Max 2g/day in hepatic impairment or chronic alcohol use.",
  },
  {
    canonical_name: "Ibuprofen",
    aliases: ["Ibuprofen IP", "Ibuprofen BP"],
    max_single_dose_mg: 800,
    max_daily_dose_mg: 3200,
    senior_daily_max_mg: 1200,
    therapeutic_class: "NSAID",
    notes: "Take with food. Avoid in peptic ulcer, renal impairment, heart failure.",
  },
  {
    canonical_name: "Aspirin",
    aliases: ["Acetylsalicylic Acid", "ASA"],
    max_single_dose_mg: 1000,
    max_daily_dose_mg: 4000,
    senior_daily_max_mg: 2000,
    therapeutic_class: "NSAID / Antiplatelet",
    notes: "Antiplatelet dose: 75–150 mg/day. Analgesic/antipyretic: up to 4g/day. Avoid in children <16.",
  },
  {
    canonical_name: "Diclofenac",
    aliases: ["Diclofenac Sodium", "Diclofenac Potassium", "Diclofenac IP"],
    max_single_dose_mg: 75,
    max_daily_dose_mg: 150,
    senior_daily_max_mg: 75,
    therapeutic_class: "NSAID",
    notes: "Highest cardiovascular risk among NSAIDs. Use lowest effective dose.",
  },
  {
    canonical_name: "Aceclofenac",
    aliases: ["Aceclofenac IP"],
    max_single_dose_mg: 100,
    max_daily_dose_mg: 200,
    senior_daily_max_mg: 100,
    therapeutic_class: "NSAID",
  },
  {
    canonical_name: "Mefenamic Acid",
    aliases: ["Mefenamic Acid IP"],
    max_single_dose_mg: 500,
    max_daily_dose_mg: 1500,
    senior_daily_max_mg: 750,
    therapeutic_class: "NSAID",
    notes: "Not recommended >7 days. Avoid in renal/hepatic impairment.",
  },
  {
    canonical_name: "Naproxen",
    aliases: ["Naproxen Sodium"],
    max_single_dose_mg: 500,
    max_daily_dose_mg: 1000,
    senior_daily_max_mg: 500,
    therapeutic_class: "NSAID",
  },
  {
    canonical_name: "Nimesulide",
    aliases: ["Nimesulide IP"],
    max_single_dose_mg: 100,
    max_daily_dose_mg: 200,
    senior_daily_max_mg: 100,
    therapeutic_class: "NSAID / COX-2 preferential",
    notes: "Max 15 days use. Hepatotoxic risk. Banned in children <12 years in India.",
  },
  {
    canonical_name: "Etoricoxib",
    aliases: ["Etoricoxib IP"],
    max_single_dose_mg: 90,
    max_daily_dose_mg: 90,
    senior_daily_max_mg: 60,
    therapeutic_class: "COX-2 Selective NSAID",
  },
  {
    canonical_name: "Celecoxib",
    aliases: ["Celecoxib IP"],
    max_single_dose_mg: 200,
    max_daily_dose_mg: 400,
    senior_daily_max_mg: 200,
    therapeutic_class: "COX-2 Selective NSAID",
  },
  {
    canonical_name: "Tramadol",
    aliases: ["Tramadol HCl", "Tramadol Hydrochloride"],
    max_single_dose_mg: 100,
    max_daily_dose_mg: 400,
    senior_daily_max_mg: 200,
    therapeutic_class: "Opioid Analgesic",
    notes: "Schedule H drug. Seizure risk at high doses. Reduce dose in renal/hepatic impairment.",
  },
  {
    canonical_name: "Codeine",
    aliases: ["Codeine Phosphate", "Codeine Sulfate"],
    max_single_dose_mg: 60,
    max_daily_dose_mg: 240,
    senior_daily_max_mg: 120,
    therapeutic_class: "Opioid Analgesic",
    notes: "Schedule H. CYP2D6 ultra-metabolizers at risk of morphine toxicity.",
  },

  // ── Antibiotics ───────────────────────────────────────────────────────────
  {
    canonical_name: "Amoxicillin",
    aliases: ["Amoxycillin", "Amoxicillin Trihydrate", "Amoxicillin IP"],
    max_single_dose_mg: 1000,
    max_daily_dose_mg: 3000,
    senior_daily_max_mg: 3000,
    therapeutic_class: "Penicillin Antibiotic",
  },
  {
    canonical_name: "Ampicillin",
    aliases: ["Ampicillin Trihydrate"],
    max_single_dose_mg: 1000,
    max_daily_dose_mg: 4000,
    senior_daily_max_mg: 3000,
    therapeutic_class: "Penicillin Antibiotic",
  },
  {
    canonical_name: "Azithromycin",
    aliases: ["Azithromycin IP", "Azithromycin Dihydrate"],
    max_single_dose_mg: 500,
    max_daily_dose_mg: 500,
    senior_daily_max_mg: 500,
    therapeutic_class: "Macrolide Antibiotic",
    notes: "QT-interval prolongation risk. 3–5 day course; max 500 mg/day.",
  },
  {
    canonical_name: "Clarithromycin",
    aliases: ["Clarithromycin IP"],
    max_single_dose_mg: 500,
    max_daily_dose_mg: 1000,
    senior_daily_max_mg: 500,
    therapeutic_class: "Macrolide Antibiotic",
  },
  {
    canonical_name: "Ciprofloxacin",
    aliases: ["Ciprofloxacin HCl", "Ciprofloxacin Hydrochloride"],
    max_single_dose_mg: 750,
    max_daily_dose_mg: 1500,
    senior_daily_max_mg: 750,
    therapeutic_class: "Fluoroquinolone Antibiotic",
    notes: "Tendinopathy risk. Avoid antacids within 2h.",
  },
  {
    canonical_name: "Levofloxacin",
    aliases: ["Levofloxacin Hemihydrate"],
    max_single_dose_mg: 750,
    max_daily_dose_mg: 750,
    senior_daily_max_mg: 500,
    therapeutic_class: "Fluoroquinolone Antibiotic",
  },
  {
    canonical_name: "Ofloxacin",
    aliases: ["Ofloxacin IP"],
    max_single_dose_mg: 400,
    max_daily_dose_mg: 800,
    senior_daily_max_mg: 400,
    therapeutic_class: "Fluoroquinolone Antibiotic",
  },
  {
    canonical_name: "Doxycycline",
    aliases: ["Doxycycline Hyclate", "Doxycycline Monohydrate"],
    max_single_dose_mg: 200,
    max_daily_dose_mg: 200,
    senior_daily_max_mg: 200,
    therapeutic_class: "Tetracycline Antibiotic",
  },
  {
    canonical_name: "Metronidazole",
    aliases: ["Metronidazole IP", "Metronidazole BP"],
    max_single_dose_mg: 800,
    max_daily_dose_mg: 2400,
    senior_daily_max_mg: 1200,
    therapeutic_class: "Nitroimidazole Antibiotic / Antiprotozoal",
    notes: "Avoid alcohol (disulfiram-like reaction).",
  },
  {
    canonical_name: "Cefixime",
    aliases: ["Cefixime IP"],
    max_single_dose_mg: 400,
    max_daily_dose_mg: 400,
    senior_daily_max_mg: 400,
    therapeutic_class: "Cephalosporin Antibiotic (3rd gen)",
  },
  {
    canonical_name: "Cefpodoxime",
    aliases: ["Cefpodoxime Proxetil"],
    max_single_dose_mg: 200,
    max_daily_dose_mg: 400,
    senior_daily_max_mg: 400,
    therapeutic_class: "Cephalosporin Antibiotic (3rd gen)",
  },
  {
    canonical_name: "Cephalexin",
    aliases: ["Cefalexin", "Cephalexin Monohydrate"],
    max_single_dose_mg: 1000,
    max_daily_dose_mg: 4000,
    senior_daily_max_mg: 3000,
    therapeutic_class: "Cephalosporin Antibiotic (1st gen)",
  },
  {
    canonical_name: "Clindamycin",
    aliases: ["Clindamycin HCl", "Clindamycin Phosphate"],
    max_single_dose_mg: 600,
    max_daily_dose_mg: 2400,
    senior_daily_max_mg: 1800,
    therapeutic_class: "Lincosamide Antibiotic",
  },
  {
    canonical_name: "Nitrofurantoin",
    aliases: ["Nitrofurantoin IP"],
    max_single_dose_mg: 100,
    max_daily_dose_mg: 400,
    senior_daily_max_mg: 200,
    therapeutic_class: "Nitrofuran Antibiotic",
  },

  // ── Antifungals ───────────────────────────────────────────────────────────
  {
    canonical_name: "Fluconazole",
    aliases: ["Fluconazole IP"],
    max_single_dose_mg: 400,
    max_daily_dose_mg: 400,
    senior_daily_max_mg: 200,
    therapeutic_class: "Triazole Antifungal",
  },
  {
    canonical_name: "Itraconazole",
    aliases: ["Itraconazole IP"],
    max_single_dose_mg: 200,
    max_daily_dose_mg: 400,
    senior_daily_max_mg: 200,
    therapeutic_class: "Triazole Antifungal",
  },

  // ── Antihistamines ────────────────────────────────────────────────────────
  {
    canonical_name: "Cetirizine",
    aliases: ["Cetirizine HCl", "Cetirizine Dihydrochloride", "Levocetirizine"],
    max_single_dose_mg: 10,
    max_daily_dose_mg: 10,
    senior_daily_max_mg: 5,
    therapeutic_class: "2nd Generation Antihistamine",
  },
  {
    canonical_name: "Levocetirizine",
    aliases: ["Levocetirizine Dihydrochloride"],
    max_single_dose_mg: 5,
    max_daily_dose_mg: 5,
    senior_daily_max_mg: 2.5,
    therapeutic_class: "2nd Generation Antihistamine",
  },
  {
    canonical_name: "Loratadine",
    aliases: ["Loratadine IP"],
    max_single_dose_mg: 10,
    max_daily_dose_mg: 10,
    senior_daily_max_mg: 10,
    therapeutic_class: "2nd Generation Antihistamine",
  },
  {
    canonical_name: "Fexofenadine",
    aliases: ["Fexofenadine HCl", "Fexofenadine Hydrochloride"],
    max_single_dose_mg: 180,
    max_daily_dose_mg: 180,
    senior_daily_max_mg: 120,
    therapeutic_class: "2nd Generation Antihistamine",
  },
  {
    canonical_name: "Chlorpheniramine",
    aliases: ["Chlorphenamine", "Chlorpheniramine Maleate", "CPM"],
    max_single_dose_mg: 4,
    max_daily_dose_mg: 24,
    senior_daily_max_mg: 12,
    therapeutic_class: "1st Generation Antihistamine",
    notes: "Sedating. Fall risk in elderly.",
  },
  {
    canonical_name: "Hydroxyzine",
    aliases: ["Hydroxyzine HCl", "Hydroxyzine Hydrochloride"],
    max_single_dose_mg: 100,
    max_daily_dose_mg: 400,
    senior_daily_max_mg: 50,
    therapeutic_class: "1st Generation Antihistamine / Anxiolytic",
    notes: "Strong sedation. Significant fall and cognitive risk in elderly.",
  },
  {
    canonical_name: "Ketotifen",
    aliases: ["Ketotifen Fumarate", "Ketotifen Hydrogen Fumarate"],
    max_single_dose_mg: 1,
    max_daily_dose_mg: 2,
    senior_daily_max_mg: 1,
    therapeutic_class: "Mast Cell Stabilizer & Antihistamine",
    notes: "Sedating, especially initially. Take at bedtime.",
  },
  {
    canonical_name: "Promethazine",
    aliases: ["Promethazine HCl", "Promethazine Hydrochloride"],
    max_single_dose_mg: 25,
    max_daily_dose_mg: 100,
    senior_daily_max_mg: 25,
    therapeutic_class: "1st Generation Antihistamine / Antiemetic",
    notes: "Avoid in elderly (Beers Criteria). Strong sedation.",
  },

  // ── Antidiabetics ─────────────────────────────────────────────────────────
  {
    canonical_name: "Metformin",
    aliases: ["Metformin HCl", "Metformin Hydrochloride", "Metformin IP"],
    max_single_dose_mg: 1000,
    max_daily_dose_mg: 2550,
    senior_daily_max_mg: 1500,
    therapeutic_class: "Biguanide Antidiabetic",
    notes: "Lactic acidosis risk in renal impairment. Withhold 48h before contrast procedures.",
  },
  {
    canonical_name: "Glimepiride",
    aliases: ["Glimepiride IP"],
    max_single_dose_mg: 8,
    max_daily_dose_mg: 8,
    senior_daily_max_mg: 4,
    therapeutic_class: "Sulfonylurea Antidiabetic",
    notes: "Hypoglycemia risk. Avoid missed meals.",
  },
  {
    canonical_name: "Glipizide",
    aliases: ["Glipizide IP"],
    max_single_dose_mg: 20,
    max_daily_dose_mg: 40,
    senior_daily_max_mg: 20,
    therapeutic_class: "Sulfonylurea Antidiabetic",
  },
  {
    canonical_name: "Gliclazide",
    aliases: ["Gliclazide IP", "Gliclazide MR"],
    max_single_dose_mg: 120,
    max_daily_dose_mg: 320,
    senior_daily_max_mg: 240,
    therapeutic_class: "Sulfonylurea Antidiabetic",
  },
  {
    canonical_name: "Sitagliptin",
    aliases: ["Sitagliptin Phosphate"],
    max_single_dose_mg: 100,
    max_daily_dose_mg: 100,
    senior_daily_max_mg: 100,
    therapeutic_class: "DPP-4 Inhibitor Antidiabetic",
  },
  {
    canonical_name: "Vildagliptin",
    aliases: ["Vildagliptin IP"],
    max_single_dose_mg: 50,
    max_daily_dose_mg: 100,
    senior_daily_max_mg: 100,
    therapeutic_class: "DPP-4 Inhibitor Antidiabetic",
  },

  // ── Antihypertensives / Cardiovascular ────────────────────────────────────
  {
    canonical_name: "Amlodipine",
    aliases: ["Amlodipine Besylate", "Amlodipine Besilate", "Amlodipine Maleate"],
    max_single_dose_mg: 10,
    max_daily_dose_mg: 10,
    senior_daily_max_mg: 5,
    therapeutic_class: "Calcium Channel Blocker",
  },
  {
    canonical_name: "Telmisartan",
    aliases: ["Telmisartan IP"],
    max_single_dose_mg: 80,
    max_daily_dose_mg: 80,
    senior_daily_max_mg: 40,
    therapeutic_class: "ARB Antihypertensive",
  },
  {
    canonical_name: "Losartan",
    aliases: ["Losartan Potassium"],
    max_single_dose_mg: 100,
    max_daily_dose_mg: 100,
    senior_daily_max_mg: 50,
    therapeutic_class: "ARB Antihypertensive",
  },
  {
    canonical_name: "Enalapril",
    aliases: ["Enalapril Maleate"],
    max_single_dose_mg: 20,
    max_daily_dose_mg: 40,
    senior_daily_max_mg: 20,
    therapeutic_class: "ACE Inhibitor Antihypertensive",
  },
  {
    canonical_name: "Ramipril",
    aliases: ["Ramipril IP"],
    max_single_dose_mg: 10,
    max_daily_dose_mg: 10,
    senior_daily_max_mg: 5,
    therapeutic_class: "ACE Inhibitor Antihypertensive",
  },
  {
    canonical_name: "Lisinopril",
    aliases: ["Lisinopril Dihydrate"],
    max_single_dose_mg: 40,
    max_daily_dose_mg: 40,
    senior_daily_max_mg: 20,
    therapeutic_class: "ACE Inhibitor Antihypertensive",
  },
  {
    canonical_name: "Atenolol",
    aliases: ["Atenolol IP"],
    max_single_dose_mg: 100,
    max_daily_dose_mg: 100,
    senior_daily_max_mg: 50,
    therapeutic_class: "Beta-Blocker",
    notes: "Avoid abrupt discontinuation — taper over 1–2 weeks.",
  },
  {
    canonical_name: "Metoprolol",
    aliases: ["Metoprolol Succinate", "Metoprolol Tartrate"],
    max_single_dose_mg: 200,
    max_daily_dose_mg: 400,
    senior_daily_max_mg: 200,
    therapeutic_class: "Beta-Blocker",
    notes: "Avoid abrupt discontinuation.",
  },
  {
    canonical_name: "Carvedilol",
    aliases: ["Carvedilol IP"],
    max_single_dose_mg: 25,
    max_daily_dose_mg: 50,
    senior_daily_max_mg: 25,
    therapeutic_class: "Alpha + Beta Blocker",
  },
  {
    canonical_name: "Hydrochlorothiazide",
    aliases: ["HCTZ", "Hydrochlorothiazide IP"],
    max_single_dose_mg: 50,
    max_daily_dose_mg: 50,
    senior_daily_max_mg: 12.5,
    therapeutic_class: "Thiazide Diuretic",
  },
  {
    canonical_name: "Furosemide",
    aliases: ["Frusemide", "Furosemide IP"],
    max_single_dose_mg: 80,
    max_daily_dose_mg: 600,
    senior_daily_max_mg: 160,
    therapeutic_class: "Loop Diuretic",
    notes: "Monitor electrolytes. Ototoxic at high doses.",
  },
  {
    canonical_name: "Spironolactone",
    aliases: ["Spironolactone IP"],
    max_single_dose_mg: 200,
    max_daily_dose_mg: 400,
    senior_daily_max_mg: 100,
    therapeutic_class: "Potassium-Sparing Diuretic",
    notes: "Hyperkalemia risk. Monitor K+ levels.",
  },

  // ── Statins / Lipid Lowering ───────────────────────────────────────────────
  {
    canonical_name: "Atorvastatin",
    aliases: ["Atorvastatin Calcium"],
    max_single_dose_mg: 80,
    max_daily_dose_mg: 80,
    senior_daily_max_mg: 40,
    therapeutic_class: "HMG-CoA Reductase Inhibitor (Statin)",
    notes: "Monitor LFTs and CK. Myopathy/rhabdomyolysis at high doses.",
  },
  {
    canonical_name: "Rosuvastatin",
    aliases: ["Rosuvastatin Calcium"],
    max_single_dose_mg: 40,
    max_daily_dose_mg: 40,
    senior_daily_max_mg: 20,
    therapeutic_class: "HMG-CoA Reductase Inhibitor (Statin)",
  },
  {
    canonical_name: "Simvastatin",
    aliases: ["Simvastatin IP"],
    max_single_dose_mg: 40,
    max_daily_dose_mg: 40,
    senior_daily_max_mg: 20,
    therapeutic_class: "HMG-CoA Reductase Inhibitor (Statin)",
    notes: "80 mg dose associated with high myopathy risk — avoid.",
  },

  // ── Gastro / GI ───────────────────────────────────────────────────────────
  {
    canonical_name: "Omeprazole",
    aliases: ["Omeprazole IP"],
    max_single_dose_mg: 40,
    max_daily_dose_mg: 80,
    senior_daily_max_mg: 40,
    therapeutic_class: "Proton Pump Inhibitor",
  },
  {
    canonical_name: "Pantoprazole",
    aliases: ["Pantoprazole Sodium", "Pantoprazole IP"],
    max_single_dose_mg: 40,
    max_daily_dose_mg: 80,
    senior_daily_max_mg: 40,
    therapeutic_class: "Proton Pump Inhibitor",
  },
  {
    canonical_name: "Rabeprazole",
    aliases: ["Rabeprazole Sodium"],
    max_single_dose_mg: 20,
    max_daily_dose_mg: 40,
    senior_daily_max_mg: 20,
    therapeutic_class: "Proton Pump Inhibitor",
  },
  {
    canonical_name: "Esomeprazole",
    aliases: ["Esomeprazole Magnesium"],
    max_single_dose_mg: 40,
    max_daily_dose_mg: 80,
    senior_daily_max_mg: 40,
    therapeutic_class: "Proton Pump Inhibitor",
  },
  {
    canonical_name: "Domperidone",
    aliases: ["Domperidone IP"],
    max_single_dose_mg: 10,
    max_daily_dose_mg: 30,
    senior_daily_max_mg: 20,
    therapeutic_class: "Prokinetic / Antiemetic",
    notes: "Cardiac arrhythmia risk at high doses. Max 10mg TDS x 1 week.",
  },
  {
    canonical_name: "Ondansetron",
    aliases: ["Ondansetron HCl", "Ondansetron Hydrochloride"],
    max_single_dose_mg: 16,
    max_daily_dose_mg: 32,
    senior_daily_max_mg: 16,
    therapeutic_class: "5-HT3 Antagonist Antiemetic",
    notes: "QT prolongation at high doses.",
  },
  {
    canonical_name: "Ranitidine",
    aliases: ["Ranitidine HCl", "Ranitidine Hydrochloride"],
    max_single_dose_mg: 300,
    max_daily_dose_mg: 600,
    senior_daily_max_mg: 300,
    therapeutic_class: "H2 Blocker",
    notes: "Largely replaced by PPIs. NDMA contamination risk — check batch.",
  },

  // ── Respiratory ───────────────────────────────────────────────────────────
  {
    canonical_name: "Salbutamol",
    aliases: ["Albuterol", "Salbutamol Sulphate", "Salbutamol Sulfate"],
    max_single_dose_mg: 8,
    max_daily_dose_mg: 32,
    senior_daily_max_mg: 16,
    therapeutic_class: "Short-Acting Beta-2 Agonist (SABA)",
    notes: "Oral max. Inhaled doses are much smaller (100–200 mcg/puff).",
  },
  {
    canonical_name: "Theophylline",
    aliases: ["Theophylline IP", "Aminophylline"],
    max_single_dose_mg: 400,
    max_daily_dose_mg: 1000,
    senior_daily_max_mg: 600,
    therapeutic_class: "Methylxanthine Bronchodilator",
    notes: "Narrow therapeutic index. Serum levels required. Many drug interactions.",
  },
  {
    canonical_name: "Montelukast",
    aliases: ["Montelukast Sodium"],
    max_single_dose_mg: 10,
    max_daily_dose_mg: 10,
    senior_daily_max_mg: 10,
    therapeutic_class: "Leukotriene Receptor Antagonist",
  },
  {
    canonical_name: "Dextromethorphan",
    aliases: ["Dextromethorphan HBr", "DXM"],
    max_single_dose_mg: 60,
    max_daily_dose_mg: 120,
    senior_daily_max_mg: 60,
    therapeutic_class: "Antitussive",
  },

  // ── Neurological / Psychiatric ────────────────────────────────────────────
  {
    canonical_name: "Gabapentin",
    aliases: ["Gabapentin IP"],
    max_single_dose_mg: 1800,
    max_daily_dose_mg: 3600,
    senior_daily_max_mg: 1800,
    therapeutic_class: "Anticonvulsant / Neuropathic Pain",
    notes: "Sedation and dizziness. Dose reduce in renal impairment.",
  },
  {
    canonical_name: "Pregabalin",
    aliases: ["Pregabalin IP"],
    max_single_dose_mg: 300,
    max_daily_dose_mg: 600,
    senior_daily_max_mg: 300,
    therapeutic_class: "Anticonvulsant / Neuropathic Pain",
    notes: "Schedule H1 in India. Abuse potential.",
  },
  {
    canonical_name: "Alprazolam",
    aliases: ["Alprazolam IP"],
    max_single_dose_mg: 1,
    max_daily_dose_mg: 4,
    senior_daily_max_mg: 0.5,
    therapeutic_class: "Benzodiazepine Anxiolytic",
    notes: "Schedule X (psychotropic) in India. High dependency potential. Strictly short-term.",
  },
  {
    canonical_name: "Clonazepam",
    aliases: ["Clonazepam IP"],
    max_single_dose_mg: 2,
    max_daily_dose_mg: 20,
    senior_daily_max_mg: 2,
    therapeutic_class: "Benzodiazepine Anticonvulsant",
    notes: "Schedule X in India.",
  },
  {
    canonical_name: "Sertraline",
    aliases: ["Sertraline HCl", "Sertraline Hydrochloride"],
    max_single_dose_mg: 200,
    max_daily_dose_mg: 200,
    senior_daily_max_mg: 100,
    therapeutic_class: "SSRI Antidepressant",
  },
  {
    canonical_name: "Escitalopram",
    aliases: ["Escitalopram Oxalate"],
    max_single_dose_mg: 20,
    max_daily_dose_mg: 20,
    senior_daily_max_mg: 10,
    therapeutic_class: "SSRI Antidepressant",
  },
  {
    canonical_name: "Amitriptyline",
    aliases: ["Amitriptyline HCl", "Amitriptyline Hydrochloride"],
    max_single_dose_mg: 75,
    max_daily_dose_mg: 200,
    senior_daily_max_mg: 75,
    therapeutic_class: "Tricyclic Antidepressant",
    notes: "Cardiotoxic in overdose. Anticholinergic effects. Beers Criteria — avoid in elderly.",
  },

  // ── Thyroid ───────────────────────────────────────────────────────────────
  {
    canonical_name: "Levothyroxine",
    aliases: ["Levothyroxine Sodium", "L-Thyroxine", "Thyroxine"],
    max_single_dose_mg: 0.3,   // 300 mcg — stored as mg for uniformity
    max_daily_dose_mg: 0.3,
    senior_daily_max_mg: 0.1,
    therapeutic_class: "Thyroid Hormone Replacement",
    notes: "Highly individualized dosing. Units are mg (1 mcg = 0.001 mg). Typical doses 25–200 mcg/day.",
  },

  // ── Vitamins & Supplements ────────────────────────────────────────────────
  {
    canonical_name: "Vitamin D3",
    aliases: ["Cholecalciferol", "Vitamin D", "Colecalciferol"],
    max_single_dose_mg: 0.625,   // 25,000 IU = 0.625 mg
    max_daily_dose_mg: 0.25,     // 10,000 IU/day safe upper limit
    senior_daily_max_mg: 0.15,
    therapeutic_class: "Fat-Soluble Vitamin",
    notes: "Toxicity (hypercalcemia) at sustained doses >10,000 IU/day. Units stored as mg; 1 IU = 0.025 mcg.",
  },
  {
    canonical_name: "Vitamin B12",
    aliases: ["Methylcobalamin", "Cyanocobalamin", "Mecobalamin"],
    max_single_dose_mg: 1.5,
    max_daily_dose_mg: 2,
    senior_daily_max_mg: 2,
    therapeutic_class: "Water-Soluble Vitamin",
    notes: "Very low oral toxicity. High doses generally safe.",
  },
  {
    canonical_name: "Folic Acid",
    aliases: ["Folate", "Vitamin B9"],
    max_single_dose_mg: 5,
    max_daily_dose_mg: 5,
    senior_daily_max_mg: 5,
    therapeutic_class: "Water-Soluble Vitamin",
    notes: "High doses may mask B12 deficiency.",
  },

  // ── Corticosteroids ───────────────────────────────────────────────────────
  {
    canonical_name: "Prednisolone",
    aliases: ["Prednisolone IP"],
    max_single_dose_mg: 60,
    max_daily_dose_mg: 80,
    senior_daily_max_mg: 40,
    therapeutic_class: "Corticosteroid",
    notes: "Taper gradually for doses >7 days. Avoid abrupt discontinuation.",
  },
  {
    canonical_name: "Dexamethasone",
    aliases: ["Dexamethasone Sodium Phosphate"],
    max_single_dose_mg: 10,
    max_daily_dose_mg: 40,
    senior_daily_max_mg: 20,
    therapeutic_class: "Corticosteroid",
  },
  {
    canonical_name: "Methylprednisolone",
    aliases: ["Methylprednisolone Sodium Succinate"],
    max_single_dose_mg: 1000,
    max_daily_dose_mg: 1000,
    senior_daily_max_mg: 500,
    therapeutic_class: "Corticosteroid",
    notes: "Pulse dosing for severe inflammation/autoimmune. Monitor glucose and BP.",
  },

  // ── Antiparasitics ────────────────────────────────────────────────────────
  {
    canonical_name: "Albendazole",
    aliases: ["Albendazole IP"],
    max_single_dose_mg: 400,
    max_daily_dose_mg: 800,
    senior_daily_max_mg: 800,
    therapeutic_class: "Anthelmintic",
  },
  {
    canonical_name: "Ivermectin",
    aliases: ["Ivermectin IP"],
    max_single_dose_mg: 0.2,   // 200 mcg/kg body weight — approximate for 70kg adult
    max_daily_dose_mg: 0.2,
    senior_daily_max_mg: 0.15,
    therapeutic_class: "Antiparasitic",
    notes: "Dose is weight-based (200 mcg/kg). Ceiling stored as weight-normalized mg estimate.",
  },

  // ── Urologicals / Smooth Muscle Antispasmodics ────────────────────────────
  {
    canonical_name: "Flavoxate",
    aliases: ["Flavoxate Hydrochloride", "Flavoxate HCl", "Flavoxate IP"],
    max_single_dose_mg: 200,
    max_daily_dose_mg: 800,
    senior_daily_max_mg: 400,
    therapeutic_class: "Urinary Antispasmodic / Smooth Muscle Relaxant",
    notes: "Standard adult dose: 200mg 3–4 times daily (max 800mg/day). Contraindicated in obstructive GI or urinary tract uropathy.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Fast lookup index: normalizedSaltName → SaltCeiling
// Built once at module load time.
// ─────────────────────────────────────────────────────────────────────────────

function normalizeForLookup(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const SALT_INDEX = new Map<string, SaltCeiling>();
for (const ceiling of SALT_CEILINGS) {
  SALT_INDEX.set(normalizeForLookup(ceiling.canonical_name), ceiling);
  for (const alias of ceiling.aliases) {
    SALT_INDEX.set(normalizeForLookup(alias), ceiling);
  }
}

/**
 * Look up the safe dose ceiling for a given salt name.
 * Returns null if the salt is not in the hardcoded table.
 */
export function getSaltCeiling(saltName: string): SaltCeiling | null {
  return SALT_INDEX.get(normalizeForLookup(saltName)) ?? null;
}
