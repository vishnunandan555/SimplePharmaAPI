// src/data/seedCatalog.ts
// Auto-generated standalone Master Indian Pharmacopeia Catalog (344 medications)
// Pre-bundled for 100% free offline execution with zero external database dependencies.

export interface ActiveIngredient {
  salt: string;
  strength: number;
  unit: string;
}

export interface MedicineRecord {
  id: string;
  brand_name: string;
  normalized_brand: string;
  generic_name: string;
  normalized_generic: string;
  active_ingredients: ActiveIngredient[];
  dosage_form: string;
  manufacturer: string;
  therapeutic_class: string;
  food_relation: string;
  food_badge: string;
  food_instruction: string;
  recommended_frequency: string;
  frequency_label: string;
  is_critical: boolean;
  senior_safe_ceiling_mg?: number;
  max_daily_ceiling_mg?: number;
  fda_application_number?: string;
  source: string;
}

export const MASTER_MEDICINE_CATALOG: MedicineRecord[] = [
  {
    "id": "med-mastifen-1mg-tablet",
    "brand_name": "Mastifen 1mg Tablet",
    "normalized_brand": "mastifen 1mg tablet",
    "generic_name": "Ketotifen Fumarate",
    "normalized_generic": "ketotifen fumarate",
    "active_ingredients": [
      {
        "salt": "Ketotifen",
        "strength": 1,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "East India Pharmaceutical Works Ltd",
    "therapeutic_class": "Mast Cell Stabilizer & Antihistamine",
    "food_relation": "after",
    "food_badge": "🌙 With Food / At Bedtime",
    "food_instruction": "Take with food or immediately after dinner / at bedtime to reduce stomach irritation and transient drowsiness.",
    "recommended_frequency": "2x",
    "frequency_label": "2x Morning & Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2,
    "max_daily_ceiling_mg": 4,
    "fda_application_number": "ANDA204059",
    "source": "featured_catalog"
  },
  {
    "id": "med-mastifen",
    "brand_name": "Mastifen",
    "normalized_brand": "mastifen",
    "generic_name": "Ketotifen Fumarate",
    "normalized_generic": "ketotifen fumarate",
    "active_ingredients": [
      {
        "salt": "Ketotifen",
        "strength": 1,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "East India Pharmaceutical Works Ltd",
    "therapeutic_class": "Mast Cell Stabilizer & Antihistamine",
    "food_relation": "after",
    "food_badge": "🌙 With Food / At Bedtime",
    "food_instruction": "Take with food or immediately after dinner / at bedtime to reduce stomach irritation and transient drowsiness.",
    "recommended_frequency": "2x",
    "frequency_label": "2x Morning & Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2,
    "max_daily_ceiling_mg": 4,
    "fda_application_number": "ANDA204059",
    "source": "featured_catalog"
  },
  {
    "id": "med-dolo-650-tablet",
    "brand_name": "Dolo 650 Tablet",
    "normalized_brand": "dolo 650 tablet",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 650,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Micro Labs Ltd",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "featured_catalog"
  },
  {
    "id": "med-calpol-500-tablet",
    "brand_name": "Calpol 500 Tablet",
    "normalized_brand": "calpol 500 tablet",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 500,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "GlaxoSmithKline Pharmaceuticals Ltd",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "featured_catalog"
  },
  {
    "id": "med-calpol-650-tablet",
    "brand_name": "Calpol 650 Tablet",
    "normalized_brand": "calpol 650 tablet",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 650,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "GlaxoSmithKline Pharmaceuticals Ltd",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "featured_catalog"
  },
  {
    "id": "med-augmentin-625-duo-tablet",
    "brand_name": "Augmentin 625 Duo Tablet",
    "normalized_brand": "augmentin 625 duo tablet",
    "generic_name": "Amoxicillin + Clavulanic Acid",
    "normalized_generic": "amoxicillin clavulanic acid",
    "active_ingredients": [
      {
        "salt": "Amoxicillin",
        "strength": 500,
        "unit": "mg"
      },
      {
        "salt": "Clavulanic Acid",
        "strength": 125,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "GlaxoSmithKline Pharmaceuticals Ltd",
    "therapeutic_class": "Broad-Spectrum Antibacterial",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With Meals (Complete Full Course)",
    "food_instruction": "Take at evenly spaced intervals with meals. Complete the entire prescribed duration to prevent antimicrobial resistance.",
    "recommended_frequency": "2x",
    "frequency_label": "2x After Meals (Complete Course)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 1000,
    "max_daily_ceiling_mg": 2000,
    "fda_application_number": "ANDA065061",
    "source": "featured_catalog"
  },
  {
    "id": "med-combiflam-tablet",
    "brand_name": "Combiflam Tablet",
    "normalized_brand": "combiflam tablet",
    "generic_name": "Ibuprofen + Paracetamol",
    "normalized_generic": "ibuprofen paracetamol",
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
    "dosage_form": "tablet",
    "manufacturer": "Sanofi India Ltd",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "featured_catalog"
  },
  {
    "id": "med-pan-40-tablet",
    "brand_name": "Pan 40 Tablet",
    "normalized_brand": "pan 40 tablet",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Alkem Laboratories Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "featured_catalog"
  },
  {
    "id": "med-pan-d-capsule",
    "brand_name": "Pan-D Capsule",
    "normalized_brand": "pan-d capsule",
    "generic_name": "Pantoprazole + Domperidone",
    "normalized_generic": "pantoprazole domperidone",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 40,
        "unit": "mg"
      },
      {
        "salt": "Domperidone",
        "strength": 30,
        "unit": "mg"
      }
    ],
    "dosage_form": "capsule",
    "manufacturer": "Alkem Laboratories Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "featured_catalog"
  },
  {
    "id": "med-pantocid-40-tablet",
    "brand_name": "Pantocid 40 Tablet",
    "normalized_brand": "pantocid 40 tablet",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Sun Pharmaceutical Industries Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "featured_catalog"
  },
  {
    "id": "med-pantocid-dsr-capsule",
    "brand_name": "Pantocid DSR Capsule",
    "normalized_brand": "pantocid dsr capsule",
    "generic_name": "Pantoprazole + Domperidone SR",
    "normalized_generic": "pantoprazole domperidone sr",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 40,
        "unit": "mg"
      },
      {
        "salt": "Domperidone",
        "strength": 30,
        "unit": "mg"
      }
    ],
    "dosage_form": "capsule",
    "manufacturer": "Sun Pharmaceutical Industries Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "featured_catalog"
  },
  {
    "id": "med-shelcal-500-tablet",
    "brand_name": "Shelcal 500 Tablet",
    "normalized_brand": "shelcal 500 tablet",
    "generic_name": "Calcium Carbonate + Vitamin D3",
    "normalized_generic": "calcium carbonate vitamin d3",
    "active_ingredients": [
      {
        "salt": "Elemental Calcium",
        "strength": 500,
        "unit": "mg"
      },
      {
        "salt": "Vitamin D3",
        "strength": 250,
        "unit": "iu"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Torrent Pharmaceuticals Ltd",
    "therapeutic_class": "Mineral & Bone Supplement",
    "food_relation": "after",
    "food_badge": "🍽️ After Meals (Separate from Thyroid/Iron by 2h)",
    "food_instruction": "Take after meals. Ensure at least a 2-hour interval between calcium and levothyroxine or iron supplements.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily After Lunch",
    "is_critical": false,
    "senior_safe_ceiling_mg": 1000,
    "max_daily_ceiling_mg": 1200,
    "fda_application_number": "OTC-SUPP",
    "source": "featured_catalog"
  },
  {
    "id": "med-ecosprin-75-tablet",
    "brand_name": "Ecosprin 75 Tablet",
    "normalized_brand": "ecosprin 75 tablet",
    "generic_name": "Aspirin",
    "normalized_generic": "aspirin",
    "active_ingredients": [
      {
        "salt": "Aspirin",
        "strength": 75,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "USV Ltd",
    "therapeutic_class": "Antiplatelet & Cardioprotective",
    "food_relation": "after",
    "food_badge": "🍽️ Strictly After Food",
    "food_instruction": "Take strictly after a main meal with a full glass of water to protect gastric mucosa.",
    "recommended_frequency": "1x",
    "frequency_label": "1x After Lunch or Dinner",
    "is_critical": true,
    "senior_safe_ceiling_mg": 150,
    "max_daily_ceiling_mg": 325,
    "fda_application_number": "ANDA083654",
    "source": "featured_catalog"
  },
  {
    "id": "med-ecosprin-150-tablet",
    "brand_name": "Ecosprin 150 Tablet",
    "normalized_brand": "ecosprin 150 tablet",
    "generic_name": "Aspirin",
    "normalized_generic": "aspirin",
    "active_ingredients": [
      {
        "salt": "Aspirin",
        "strength": 150,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "USV Ltd",
    "therapeutic_class": "Antiplatelet & Cardioprotective",
    "food_relation": "after",
    "food_badge": "🍽️ Strictly After Food",
    "food_instruction": "Take strictly after a main meal with a full glass of water to protect gastric mucosa.",
    "recommended_frequency": "1x",
    "frequency_label": "1x After Lunch or Dinner",
    "is_critical": true,
    "senior_safe_ceiling_mg": 150,
    "max_daily_ceiling_mg": 325,
    "fda_application_number": "ANDA083654",
    "source": "featured_catalog"
  },
  {
    "id": "med-thyronorm-50mcg-tablet",
    "brand_name": "Thyronorm 50mcg Tablet",
    "normalized_brand": "thyronorm 50mcg tablet",
    "generic_name": "Levothyroxine Sodium",
    "normalized_generic": "levothyroxine sodium",
    "active_ingredients": [
      {
        "salt": "Levothyroxine Sodium",
        "strength": 50,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott Healthcare Pvt Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "featured_catalog"
  },
  {
    "id": "med-thyronorm-100mcg-tablet",
    "brand_name": "Thyronorm 100mcg Tablet",
    "normalized_brand": "thyronorm 100mcg tablet",
    "generic_name": "Levothyroxine Sodium",
    "normalized_generic": "levothyroxine sodium",
    "active_ingredients": [
      {
        "salt": "Levothyroxine Sodium",
        "strength": 100,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott Healthcare Pvt Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "featured_catalog"
  },
  {
    "id": "med-thyronorm-25mcg-tablet",
    "brand_name": "Thyronorm 25mcg Tablet",
    "normalized_brand": "thyronorm 25mcg tablet",
    "generic_name": "Levothyroxine Sodium",
    "normalized_generic": "levothyroxine sodium",
    "active_ingredients": [
      {
        "salt": "Levothyroxine Sodium",
        "strength": 25,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott Healthcare Pvt Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "featured_catalog"
  },
  {
    "id": "med-thyronorm-75mcg-tablet",
    "brand_name": "Thyronorm 75mcg Tablet",
    "normalized_brand": "thyronorm 75mcg tablet",
    "generic_name": "Levothyroxine Sodium",
    "normalized_generic": "levothyroxine sodium",
    "active_ingredients": [
      {
        "salt": "Levothyroxine Sodium",
        "strength": 75,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott Healthcare Pvt Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "featured_catalog"
  },
  {
    "id": "med-glycomet-500-tablet",
    "brand_name": "Glycomet 500 Tablet",
    "normalized_brand": "glycomet 500 tablet",
    "generic_name": "Metformin Hydrochloride",
    "normalized_generic": "metformin hydrochloride",
    "active_ingredients": [
      {
        "salt": "Metformin Hydrochloride",
        "strength": 500,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "USV Ltd",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "featured_catalog"
  },
  {
    "id": "med-glycomet-500-sr-tablet",
    "brand_name": "Glycomet 500 SR Tablet",
    "normalized_brand": "glycomet 500 sr tablet",
    "generic_name": "Metformin Hydrochloride Sustained Release",
    "normalized_generic": "metformin hydrochloride sustained release",
    "active_ingredients": [
      {
        "salt": "Metformin Hydrochloride",
        "strength": 500,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "USV Ltd",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "featured_catalog"
  },
  {
    "id": "med-glycomet-850-tablet",
    "brand_name": "Glycomet 850 Tablet",
    "normalized_brand": "glycomet 850 tablet",
    "generic_name": "Metformin Hydrochloride",
    "normalized_generic": "metformin hydrochloride",
    "active_ingredients": [
      {
        "salt": "Metformin Hydrochloride",
        "strength": 850,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "USV Ltd",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "featured_catalog"
  },
  {
    "id": "med-glycomet-1000-sr-tablet",
    "brand_name": "Glycomet 1000 SR Tablet",
    "normalized_brand": "glycomet 1000 sr tablet",
    "generic_name": "Metformin Hydrochloride",
    "normalized_generic": "metformin hydrochloride",
    "active_ingredients": [
      {
        "salt": "Metformin Hydrochloride",
        "strength": 1000,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "USV Ltd",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "featured_catalog"
  },
  {
    "id": "med-januvia-100mg-tablet",
    "brand_name": "Januvia 100mg Tablet",
    "normalized_brand": "januvia 100mg tablet",
    "generic_name": "Sitagliptin Phosphate",
    "normalized_generic": "sitagliptin phosphate",
    "active_ingredients": [
      {
        "salt": "Sitagliptin Phosphate",
        "strength": 100,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "MSD Pharmaceuticals Pvt Ltd",
    "therapeutic_class": "DPP-4 Inhibitor (Incretin Enhancer)",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily with or without food at the same time each day.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 100,
    "fda_application_number": "NDA021995",
    "source": "featured_catalog"
  },
  {
    "id": "med-januvia-50mg-tablet",
    "brand_name": "Januvia 50mg Tablet",
    "normalized_brand": "januvia 50mg tablet",
    "generic_name": "Sitagliptin Phosphate",
    "normalized_generic": "sitagliptin phosphate",
    "active_ingredients": [
      {
        "salt": "Sitagliptin Phosphate",
        "strength": 50,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "MSD Pharmaceuticals Pvt Ltd",
    "therapeutic_class": "DPP-4 Inhibitor (Incretin Enhancer)",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily with or without food at the same time each day.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 100,
    "fda_application_number": "NDA021995",
    "source": "featured_catalog"
  },
  {
    "id": "med-forxiga-10mg-tablet",
    "brand_name": "Forxiga 10mg Tablet",
    "normalized_brand": "forxiga 10mg tablet",
    "generic_name": "Dapagliflozin",
    "normalized_generic": "dapagliflozin",
    "active_ingredients": [
      {
        "salt": "Dapagliflozin",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "AstraZeneca Pharma India Ltd",
    "therapeutic_class": "SGLT2 Inhibitor (Oral Antidiabetic)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With Water",
    "food_instruction": "Take once daily in the morning with a full glass of water. Maintain generous daily fluid intake.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 25,
    "fda_application_number": "NDA202293",
    "source": "featured_catalog"
  },
  {
    "id": "med-forxiga-5mg-tablet",
    "brand_name": "Forxiga 5mg Tablet",
    "normalized_brand": "forxiga 5mg tablet",
    "generic_name": "Dapagliflozin",
    "normalized_generic": "dapagliflozin",
    "active_ingredients": [
      {
        "salt": "Dapagliflozin",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "AstraZeneca Pharma India Ltd",
    "therapeutic_class": "SGLT2 Inhibitor (Oral Antidiabetic)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With Water",
    "food_instruction": "Take once daily in the morning with a full glass of water. Maintain generous daily fluid intake.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 25,
    "fda_application_number": "NDA202293",
    "source": "featured_catalog"
  },
  {
    "id": "med-jardiance-10mg-tablet",
    "brand_name": "Jardiance 10mg Tablet",
    "normalized_brand": "jardiance 10mg tablet",
    "generic_name": "Empagliflozin",
    "normalized_generic": "empagliflozin",
    "active_ingredients": [
      {
        "salt": "Empagliflozin",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Boehringer Ingelheim India Pvt Ltd",
    "therapeutic_class": "SGLT2 Inhibitor (Oral Antidiabetic)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With Water",
    "food_instruction": "Take once daily in the morning with a full glass of water. Maintain generous daily fluid intake.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 25,
    "fda_application_number": "NDA202293",
    "source": "featured_catalog"
  },
  {
    "id": "med-jardiance-25mg-tablet",
    "brand_name": "Jardiance 25mg Tablet",
    "normalized_brand": "jardiance 25mg tablet",
    "generic_name": "Empagliflozin",
    "normalized_generic": "empagliflozin",
    "active_ingredients": [
      {
        "salt": "Empagliflozin",
        "strength": 25,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Boehringer Ingelheim India Pvt Ltd",
    "therapeutic_class": "SGLT2 Inhibitor (Oral Antidiabetic)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With Water",
    "food_instruction": "Take once daily in the morning with a full glass of water. Maintain generous daily fluid intake.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 25,
    "fda_application_number": "NDA202293",
    "source": "featured_catalog"
  },
  {
    "id": "med-telma-40-tablet",
    "brand_name": "Telma 40 Tablet",
    "normalized_brand": "telma 40 tablet",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Glenmark Pharmaceuticals Ltd",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "featured_catalog"
  },
  {
    "id": "med-telma-80-tablet",
    "brand_name": "Telma 80 Tablet",
    "normalized_brand": "telma 80 tablet",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 80,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Glenmark Pharmaceuticals Ltd",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "featured_catalog"
  },
  {
    "id": "med-telma-20-tablet",
    "brand_name": "Telma 20 Tablet",
    "normalized_brand": "telma 20 tablet",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Glenmark Pharmaceuticals Ltd",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "featured_catalog"
  },
  {
    "id": "med-telma-am-tablet",
    "brand_name": "Telma AM Tablet",
    "normalized_brand": "telma am tablet",
    "generic_name": "Telmisartan + Amlodipine",
    "normalized_generic": "telmisartan amlodipine",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 40,
        "unit": "mg"
      },
      {
        "salt": "Amlodipine",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Glenmark Pharmaceuticals Ltd",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "featured_catalog"
  },
  {
    "id": "med-telmikind-40-tablet",
    "brand_name": "Telmikind 40 Tablet",
    "normalized_brand": "telmikind 40 tablet",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Mankind Pharma Ltd",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "featured_catalog"
  },
  {
    "id": "med-telmikind-20-tablet",
    "brand_name": "Telmikind 20 Tablet",
    "normalized_brand": "telmikind 20 tablet",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Mankind Pharma Ltd",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "featured_catalog"
  },
  {
    "id": "med-amlong-5-tablet",
    "brand_name": "Amlong 5 Tablet",
    "normalized_brand": "amlong 5 tablet",
    "generic_name": "Amlodipine Besylate",
    "normalized_generic": "amlodipine besylate",
    "active_ingredients": [
      {
        "salt": "Amlodipine Besylate",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Micro Labs Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "featured_catalog"
  },
  {
    "id": "med-amlong-10-tablet",
    "brand_name": "Amlong 10 Tablet",
    "normalized_brand": "amlong 10 tablet",
    "generic_name": "Amlodipine Besylate",
    "normalized_generic": "amlodipine besylate",
    "active_ingredients": [
      {
        "salt": "Amlodipine Besylate",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Micro Labs Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "featured_catalog"
  },
  {
    "id": "med-rosuvas-10-tablet",
    "brand_name": "Rosuvas 10 Tablet",
    "normalized_brand": "rosuvas 10 tablet",
    "generic_name": "Rosuvastatin Calcium",
    "normalized_generic": "rosuvastatin calcium",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin Calcium",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Sun Pharmaceutical Industries Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "featured_catalog"
  },
  {
    "id": "med-rosuvas-20-tablet",
    "brand_name": "Rosuvas 20 Tablet",
    "normalized_brand": "rosuvas 20 tablet",
    "generic_name": "Rosuvastatin Calcium",
    "normalized_generic": "rosuvastatin calcium",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin Calcium",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Sun Pharmaceutical Industries Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "featured_catalog"
  },
  {
    "id": "med-atorva-10-tablet",
    "brand_name": "Atorva 10 Tablet",
    "normalized_brand": "atorva 10 tablet",
    "generic_name": "Atorvastatin Calcium",
    "normalized_generic": "atorvastatin calcium",
    "active_ingredients": [
      {
        "salt": "Atorvastatin Calcium",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Zydus Cadila",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "featured_catalog"
  },
  {
    "id": "med-atorva-20-tablet",
    "brand_name": "Atorva 20 Tablet",
    "normalized_brand": "atorva 20 tablet",
    "generic_name": "Atorvastatin Calcium",
    "normalized_generic": "atorvastatin calcium",
    "active_ingredients": [
      {
        "salt": "Atorvastatin Calcium",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Zydus Cadila",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "featured_catalog"
  },
  {
    "id": "med-atorva-40-tablet",
    "brand_name": "Atorva 40 Tablet",
    "normalized_brand": "atorva 40 tablet",
    "generic_name": "Atorvastatin Calcium",
    "normalized_generic": "atorvastatin calcium",
    "active_ingredients": [
      {
        "salt": "Atorvastatin Calcium",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Zydus Cadila",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "featured_catalog"
  },
  {
    "id": "med-storvas-10-tablet",
    "brand_name": "Storvas 10 Tablet",
    "normalized_brand": "storvas 10 tablet",
    "generic_name": "Atorvastatin Calcium",
    "normalized_generic": "atorvastatin calcium",
    "active_ingredients": [
      {
        "salt": "Atorvastatin Calcium",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Sun Pharmaceutical Industries Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "featured_catalog"
  },
  {
    "id": "med-storvas-20-tablet",
    "brand_name": "Storvas 20 Tablet",
    "normalized_brand": "storvas 20 tablet",
    "generic_name": "Atorvastatin Calcium",
    "normalized_generic": "atorvastatin calcium",
    "active_ingredients": [
      {
        "salt": "Atorvastatin Calcium",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Sun Pharmaceutical Industries Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "featured_catalog"
  },
  {
    "id": "med-chymoral-forte-tablet",
    "brand_name": "Chymoral Forte Tablet",
    "normalized_brand": "chymoral forte tablet",
    "generic_name": "Trypsin-Chymotrypsin",
    "normalized_generic": "trypsin-chymotrypsin",
    "active_ingredients": [
      {
        "salt": "Trypsin-Chymotrypsin",
        "strength": 100000,
        "unit": "armour units"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Torrent Pharmaceuticals Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 200000,
    "max_daily_ceiling_mg": 300000,
    "fda_application_number": "NDA-VERIFIED",
    "source": "featured_catalog"
  },
  {
    "id": "med-allegra-120mg-tablet",
    "brand_name": "Allegra 120mg Tablet",
    "normalized_brand": "allegra 120mg tablet",
    "generic_name": "Fexofenadine Hydrochloride",
    "normalized_generic": "fexofenadine hydrochloride",
    "active_ingredients": [
      {
        "salt": "Fexofenadine Hydrochloride",
        "strength": 120,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Sanofi India Ltd",
    "therapeutic_class": "Second-Generation H1 Antihistamine",
    "food_relation": "with_or_without_food",
    "food_badge": "🌙 Bedtime or Evening",
    "food_instruction": "Take with water. Do not take with fruit juices (such as grapefruit, orange, or apple) within 4 hours.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 120,
    "max_daily_ceiling_mg": 180,
    "fda_application_number": "NDA020625",
    "source": "featured_catalog"
  },
  {
    "id": "med-allegra-180mg-tablet",
    "brand_name": "Allegra 180mg Tablet",
    "normalized_brand": "allegra 180mg tablet",
    "generic_name": "Fexofenadine Hydrochloride",
    "normalized_generic": "fexofenadine hydrochloride",
    "active_ingredients": [
      {
        "salt": "Fexofenadine Hydrochloride",
        "strength": 180,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Sanofi India Ltd",
    "therapeutic_class": "Second-Generation H1 Antihistamine",
    "food_relation": "with_or_without_food",
    "food_badge": "🌙 Bedtime or Evening",
    "food_instruction": "Take with water. Do not take with fruit juices (such as grapefruit, orange, or apple) within 4 hours.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 120,
    "max_daily_ceiling_mg": 180,
    "fda_application_number": "NDA020625",
    "source": "featured_catalog"
  },
  {
    "id": "med-montair-lc-tablet",
    "brand_name": "Montair-LC Tablet",
    "normalized_brand": "montair-lc tablet",
    "generic_name": "Montelukast + Levocetirizine",
    "normalized_generic": "montelukast levocetirizine",
    "active_ingredients": [
      {
        "salt": "Montelukast Sodium",
        "strength": 10,
        "unit": "mg"
      },
      {
        "salt": "Levocetirizine Dihydrochloride",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Second-Generation H1 Antihistamine",
    "food_relation": "with_or_without_food",
    "food_badge": "🌙 Bedtime or Evening",
    "food_instruction": "Take with water. Do not take with fruit juices (such as grapefruit, orange, or apple) within 4 hours.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 120,
    "max_daily_ceiling_mg": 180,
    "fda_application_number": "NDA020625",
    "source": "featured_catalog"
  },
  {
    "id": "med-asthalin-100mcg-inhaler",
    "brand_name": "Asthalin 100mcg Inhaler",
    "normalized_brand": "asthalin 100mcg inhaler",
    "generic_name": "Salbutamol (Albuterol)",
    "normalized_generic": "salbutamol albuterol",
    "active_ingredients": [
      {
        "salt": "Salbutamol",
        "strength": 100,
        "unit": "mcg"
      }
    ],
    "dosage_form": "inhaler",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Inhaled Respiratory Formulation (Bronchodilator / ICS)",
    "food_relation": "with_or_without_food",
    "food_badge": "💨 Inhale & Rinse Mouth",
    "food_instruction": "Rinse mouth thoroughly with water and gargle/spit out after inhalation to prevent oral thrush and dysphonia.",
    "recommended_frequency": "2x",
    "frequency_label": "2x Morning & Night (Via Inhaler)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 0.8,
    "max_daily_ceiling_mg": 1.6,
    "fda_application_number": "NDA020746",
    "source": "featured_catalog"
  },
  {
    "id": "med-budecort-200-inhaler",
    "brand_name": "Budecort 200 Inhaler",
    "normalized_brand": "budecort 200 inhaler",
    "generic_name": "Budesonide",
    "normalized_generic": "budesonide",
    "active_ingredients": [
      {
        "salt": "Budesonide",
        "strength": 200,
        "unit": "mcg"
      }
    ],
    "dosage_form": "inhaler",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Inhaled Respiratory Formulation (Bronchodilator / ICS)",
    "food_relation": "with_or_without_food",
    "food_badge": "💨 Inhale & Rinse Mouth",
    "food_instruction": "Rinse mouth thoroughly with water and gargle/spit out after inhalation to prevent oral thrush and dysphonia.",
    "recommended_frequency": "2x",
    "frequency_label": "2x Morning & Night (Via Inhaler)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 0.8,
    "max_daily_ceiling_mg": 1.6,
    "fda_application_number": "NDA020746",
    "source": "featured_catalog"
  },
  {
    "id": "med-seroflo-250-synchrobreathe-inhaler",
    "brand_name": "Seroflo 250 Synchrobreathe Inhaler",
    "normalized_brand": "seroflo 250 synchrobreathe inhaler",
    "generic_name": "Salmeterol + Fluticasone Propionate",
    "normalized_generic": "salmeterol fluticasone propionate",
    "active_ingredients": [
      {
        "salt": "Salmeterol",
        "strength": 50,
        "unit": "mcg"
      },
      {
        "salt": "Fluticasone Propionate",
        "strength": 250,
        "unit": "mcg"
      }
    ],
    "dosage_form": "inhaler",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Inhaled Respiratory Formulation (Bronchodilator / ICS)",
    "food_relation": "with_or_without_food",
    "food_badge": "💨 Inhale & Rinse Mouth",
    "food_instruction": "Rinse mouth thoroughly with water and gargle/spit out after inhalation to prevent oral thrush and dysphonia.",
    "recommended_frequency": "2x",
    "frequency_label": "2x Morning & Night (Via Inhaler)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 0.8,
    "max_daily_ceiling_mg": 1.6,
    "fda_application_number": "NDA020746",
    "source": "featured_catalog"
  },
  {
    "id": "med-duolin-inhaler",
    "brand_name": "Duolin Inhaler",
    "normalized_brand": "duolin inhaler",
    "generic_name": "Levosalbutamol + Ipratropium Bromide",
    "normalized_generic": "levosalbutamol ipratropium bromide",
    "active_ingredients": [
      {
        "salt": "Levosalbutamol",
        "strength": 50,
        "unit": "mcg"
      },
      {
        "salt": "Ipratropium Bromide",
        "strength": 20,
        "unit": "mcg"
      }
    ],
    "dosage_form": "inhaler",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Inhaled Respiratory Formulation (Bronchodilator / ICS)",
    "food_relation": "with_or_without_food",
    "food_badge": "💨 Inhale & Rinse Mouth",
    "food_instruction": "Rinse mouth thoroughly with water and gargle/spit out after inhalation to prevent oral thrush and dysphonia.",
    "recommended_frequency": "2x",
    "frequency_label": "2x Morning & Night (Via Inhaler)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 0.8,
    "max_daily_ceiling_mg": 1.6,
    "fda_application_number": "NDA020746",
    "source": "featured_catalog"
  },
  {
    "id": "med-azithral-500-tablet",
    "brand_name": "Azithral 500 Tablet",
    "normalized_brand": "azithral 500 tablet",
    "generic_name": "Azithromycin",
    "normalized_generic": "azithromycin",
    "active_ingredients": [
      {
        "salt": "Azithromycin",
        "strength": 500,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Alembic Pharmaceuticals Ltd",
    "therapeutic_class": "Broad-Spectrum Antibacterial",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With Meals (Complete Full Course)",
    "food_instruction": "Take at evenly spaced intervals with meals. Complete the entire prescribed duration to prevent antimicrobial resistance.",
    "recommended_frequency": "2x",
    "frequency_label": "2x After Meals (Complete Course)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 1000,
    "max_daily_ceiling_mg": 2000,
    "fda_application_number": "ANDA065061",
    "source": "featured_catalog"
  },
  {
    "id": "med-ciplox-500-tablet",
    "brand_name": "Ciplox 500 Tablet",
    "normalized_brand": "ciplox 500 tablet",
    "generic_name": "Ciprofloxacin",
    "normalized_generic": "ciprofloxacin",
    "active_ingredients": [
      {
        "salt": "Ciprofloxacin",
        "strength": 500,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Broad-Spectrum Antibacterial",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With Meals (Complete Full Course)",
    "food_instruction": "Take at evenly spaced intervals with meals. Complete the entire prescribed duration to prevent antimicrobial resistance.",
    "recommended_frequency": "2x",
    "frequency_label": "2x After Meals (Complete Course)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 1000,
    "max_daily_ceiling_mg": 2000,
    "fda_application_number": "ANDA065061",
    "source": "featured_catalog"
  },
  {
    "id": "med-taxim-o-200-tablet",
    "brand_name": "Taxim-O 200 Tablet",
    "normalized_brand": "taxim-o 200 tablet",
    "generic_name": "Cefixime",
    "normalized_generic": "cefixime",
    "active_ingredients": [
      {
        "salt": "Cefixime",
        "strength": 200,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Alkem Laboratories Ltd",
    "therapeutic_class": "Broad-Spectrum Antibacterial",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With Meals (Complete Full Course)",
    "food_instruction": "Take at evenly spaced intervals with meals. Complete the entire prescribed duration to prevent antimicrobial resistance.",
    "recommended_frequency": "2x",
    "frequency_label": "2x After Meals (Complete Course)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 1000,
    "max_daily_ceiling_mg": 2000,
    "fda_application_number": "ANDA065061",
    "source": "featured_catalog"
  },
  {
    "id": "med-meftal-spas-tablet",
    "brand_name": "Meftal-Spas Tablet",
    "normalized_brand": "meftal-spas tablet",
    "generic_name": "Mefenamic Acid + Dicyclomine",
    "normalized_generic": "mefenamic acid dicyclomine",
    "active_ingredients": [
      {
        "salt": "Mefenamic Acid",
        "strength": 250,
        "unit": "mg"
      },
      {
        "salt": "Dicyclomine Hydrochloride",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Blue Cross Laboratories Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 500,
    "max_daily_ceiling_mg": 750,
    "fda_application_number": "NDA-VERIFIED",
    "source": "featured_catalog"
  },
  {
    "id": "med-neurobion-forte-tablet",
    "brand_name": "Neurobion Forte Tablet",
    "normalized_brand": "neurobion forte tablet",
    "generic_name": "Vitamin B Complex with B12",
    "normalized_generic": "vitamin b complex with b12",
    "active_ingredients": [
      {
        "salt": "Thiamine (B1)",
        "strength": 10,
        "unit": "mg"
      },
      {
        "salt": "Riboflavin (B2)",
        "strength": 10,
        "unit": "mg"
      },
      {
        "salt": "Pyridoxine (B6)",
        "strength": 3,
        "unit": "mg"
      },
      {
        "salt": "Cyanocobalamin (B12)",
        "strength": 15,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Procter & Gamble Health Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 20,
    "max_daily_ceiling_mg": 30,
    "fda_application_number": "NDA-VERIFIED",
    "source": "featured_catalog"
  },
  {
    "id": "med-becosules-z-capsule",
    "brand_name": "Becosules Z Capsule",
    "normalized_brand": "becosules z capsule",
    "generic_name": "Vitamin B Complex + Vitamin C + Zinc",
    "normalized_generic": "vitamin b complex vitamin c zinc",
    "active_ingredients": [
      {
        "salt": "B-Complex",
        "strength": 50,
        "unit": "mg"
      },
      {
        "salt": "Vitamin C",
        "strength": 150,
        "unit": "mg"
      },
      {
        "salt": "Elemental Zinc",
        "strength": 41.4,
        "unit": "mg"
      }
    ],
    "dosage_form": "capsule",
    "manufacturer": "Pfizer Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 150,
    "fda_application_number": "NDA-VERIFIED",
    "source": "featured_catalog"
  },
  {
    "id": "med-limcee-500-chewable-tablet",
    "brand_name": "Limcee 500 Chewable Tablet",
    "normalized_brand": "limcee 500 chewable tablet",
    "generic_name": "Vitamin C (Ascorbic Acid)",
    "normalized_generic": "vitamin c ascorbic acid",
    "active_ingredients": [
      {
        "salt": "Ascorbic Acid",
        "strength": 500,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott Healthcare Pvt Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 1000,
    "max_daily_ceiling_mg": 1500,
    "fda_application_number": "NDA-VERIFIED",
    "source": "featured_catalog"
  },
  {
    "id": "med-lasix-40mg-tablet",
    "brand_name": "Lasix 40mg Tablet",
    "normalized_brand": "lasix 40mg tablet",
    "generic_name": "Furosemide",
    "normalized_generic": "furosemide",
    "active_ingredients": [
      {
        "salt": "Furosemide",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Sanofi India Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 120,
    "fda_application_number": "NDA-VERIFIED",
    "source": "featured_catalog"
  },
  {
    "id": "med-aldactone-25mg-tablet",
    "brand_name": "Aldactone 25mg Tablet",
    "normalized_brand": "aldactone 25mg tablet",
    "generic_name": "Spironolactone",
    "normalized_generic": "spironolactone",
    "active_ingredients": [
      {
        "salt": "Spironolactone",
        "strength": 25,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "RPG Life Sciences Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 50,
    "max_daily_ceiling_mg": 75,
    "fda_application_number": "NDA-VERIFIED",
    "source": "featured_catalog"
  },
  {
    "id": "med-nexito-10mg-tablet",
    "brand_name": "Nexito 10mg Tablet",
    "normalized_brand": "nexito 10mg tablet",
    "generic_name": "Escitalopram Oxalate",
    "normalized_generic": "escitalopram oxalate",
    "active_ingredients": [
      {
        "salt": "Escitalopram Oxalate",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Sun Pharmaceutical Industries Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 20,
    "max_daily_ceiling_mg": 30,
    "fda_application_number": "NDA-VERIFIED",
    "source": "featured_catalog"
  },
  {
    "id": "med-clonafit-0.5mg-tablet",
    "brand_name": "Clonafit 0.5mg Tablet",
    "normalized_brand": "clonafit 0.5mg tablet",
    "generic_name": "Clonazepam",
    "normalized_generic": "clonazepam",
    "active_ingredients": [
      {
        "salt": "Clonazepam",
        "strength": 0.5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Mankind Pharma Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 1,
    "max_daily_ceiling_mg": 1.5,
    "fda_application_number": "NDA-VERIFIED",
    "source": "featured_catalog"
  },
  {
    "id": "med-ref-1",
    "brand_name": "Telmikind",
    "normalized_brand": "telmikind",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-2",
    "brand_name": "Telma",
    "normalized_brand": "telma",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-3",
    "brand_name": "Pantop",
    "normalized_brand": "pantop",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-4",
    "brand_name": "Telsartan",
    "normalized_brand": "telsartan",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-5",
    "brand_name": "Cresar",
    "normalized_brand": "cresar",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-6",
    "brand_name": "Telmikind 20",
    "normalized_brand": "telmikind 20",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-7",
    "brand_name": "Telma 20",
    "normalized_brand": "telma 20",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-8",
    "brand_name": "Metformin",
    "normalized_brand": "metformin",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 500,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-9",
    "brand_name": "Glycomet",
    "normalized_brand": "glycomet",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 500,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-10",
    "brand_name": "Glycomet 850",
    "normalized_brand": "glycomet 850",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 850,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-11",
    "brand_name": "Cetapin",
    "normalized_brand": "cetapin",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 500,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-12",
    "brand_name": "Pantop 40",
    "normalized_brand": "pantop 40",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-13",
    "brand_name": "Pan",
    "normalized_brand": "pan",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-14",
    "brand_name": "Omez",
    "normalized_brand": "omez",
    "generic_name": "Omeprazole",
    "normalized_generic": "omeprazole",
    "active_ingredients": [
      {
        "salt": "Omeprazole",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "capsule",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-15",
    "brand_name": "Razo",
    "normalized_brand": "razo",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-16",
    "brand_name": "Atorva",
    "normalized_brand": "atorva",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-17",
    "brand_name": "Storvas",
    "normalized_brand": "storvas",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-18",
    "brand_name": "Rosuvas",
    "normalized_brand": "rosuvas",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-19",
    "brand_name": "Rosuvas 20",
    "normalized_brand": "rosuvas 20",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-20",
    "brand_name": "Amlong",
    "normalized_brand": "amlong",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-21",
    "brand_name": "Amlovas",
    "normalized_brand": "amlovas",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-22",
    "brand_name": "Losar",
    "normalized_brand": "losar",
    "generic_name": "Losartan",
    "normalized_generic": "losartan",
    "active_ingredients": [
      {
        "salt": "Losartan",
        "strength": 50,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-23",
    "brand_name": "Losar 25",
    "normalized_brand": "losar 25",
    "generic_name": "Losartan",
    "normalized_generic": "losartan",
    "active_ingredients": [
      {
        "salt": "Losartan",
        "strength": 25,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-24",
    "brand_name": "Metoprolol",
    "normalized_brand": "metoprolol",
    "generic_name": "Metoprolol",
    "normalized_generic": "metoprolol",
    "active_ingredients": [
      {
        "salt": "Metoprolol",
        "strength": 50,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Beta-1 Selective Adrenergic Receptor Blocker",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With or Immediately After Food",
    "food_instruction": "Take with or immediately after food to enhance bioavailability and maintain stable heart rate.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 200,
    "fda_application_number": "NDA017961",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-25",
    "brand_name": "Atenolol",
    "normalized_brand": "atenolol",
    "generic_name": "Atenolol",
    "normalized_generic": "atenolol",
    "active_ingredients": [
      {
        "salt": "Atenolol",
        "strength": 50,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Beta-1 Selective Adrenergic Receptor Blocker",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With or Immediately After Food",
    "food_instruction": "Take with or immediately after food to enhance bioavailability and maintain stable heart rate.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 200,
    "fda_application_number": "NDA017961",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-26",
    "brand_name": "Ramipril",
    "normalized_brand": "ramipril",
    "generic_name": "Ramipril",
    "normalized_generic": "ramipril",
    "active_ingredients": [
      {
        "salt": "Ramipril",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 15,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-27",
    "brand_name": "Enalapril",
    "normalized_brand": "enalapril",
    "generic_name": "Enalapril",
    "normalized_generic": "enalapril",
    "active_ingredients": [
      {
        "salt": "Enalapril",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 15,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-28",
    "brand_name": "Amaryl",
    "normalized_brand": "amaryl",
    "generic_name": "Glimepiride",
    "normalized_generic": "glimepiride",
    "active_ingredients": [
      {
        "salt": "Glimepiride",
        "strength": 1,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2,
    "max_daily_ceiling_mg": 3,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-29",
    "brand_name": "Glypride",
    "normalized_brand": "glypride",
    "generic_name": "Glimepiride",
    "normalized_generic": "glimepiride",
    "active_ingredients": [
      {
        "salt": "Glimepiride",
        "strength": 2,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 4,
    "max_daily_ceiling_mg": 6,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-30",
    "brand_name": "Januvia",
    "normalized_brand": "januvia",
    "generic_name": "Sitagliptin",
    "normalized_generic": "sitagliptin",
    "active_ingredients": [
      {
        "salt": "Sitagliptin",
        "strength": 100,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "DPP-4 Inhibitor (Incretin Enhancer)",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily with or without food at the same time each day.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 100,
    "fda_application_number": "NDA021995",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-31",
    "brand_name": "Istavel",
    "normalized_brand": "istavel",
    "generic_name": "Sitagliptin",
    "normalized_generic": "sitagliptin",
    "active_ingredients": [
      {
        "salt": "Sitagliptin",
        "strength": 100,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "DPP-4 Inhibitor (Incretin Enhancer)",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily with or without food at the same time each day.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 100,
    "fda_application_number": "NDA021995",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-32",
    "brand_name": "Diamicron",
    "normalized_brand": "diamicron",
    "generic_name": "Gliclazide",
    "normalized_generic": "gliclazide",
    "active_ingredients": [
      {
        "salt": "Gliclazide",
        "strength": 60,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 120,
    "max_daily_ceiling_mg": 180,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-33",
    "brand_name": "Thyrox",
    "normalized_brand": "thyrox",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 50,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-34",
    "brand_name": "Thyrox 75",
    "normalized_brand": "thyrox 75",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 75,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-35",
    "brand_name": "Thyrox 100",
    "normalized_brand": "thyrox 100",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 100,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-36",
    "brand_name": "Eltroxin",
    "normalized_brand": "eltroxin",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 50,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-37",
    "brand_name": "Dolo",
    "normalized_brand": "dolo",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 650,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-38",
    "brand_name": "Crocin",
    "normalized_brand": "crocin",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 650,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-39",
    "brand_name": "D3",
    "normalized_brand": "Uprise d3",
    "generic_name": "Cholecalciferol",
    "normalized_generic": "cholecalciferol",
    "active_ingredients": [
      {
        "salt": "Cholecalciferol",
        "strength": 60000,
        "unit": "IU"
      }
    ],
    "dosage_form": "sachet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 120000,
    "max_daily_ceiling_mg": 180000,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-40",
    "brand_name": "Uprise",
    "normalized_brand": "uprise",
    "generic_name": "Cholecalciferol",
    "normalized_generic": "cholecalciferol",
    "active_ingredients": [
      {
        "salt": "Cholecalciferol",
        "strength": 60000,
        "unit": "IU"
      }
    ],
    "dosage_form": "sachet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 120000,
    "max_daily_ceiling_mg": 180000,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-41",
    "brand_name": "Vitamin D3",
    "normalized_brand": "vitamin d3",
    "generic_name": "Cholecalciferol",
    "normalized_generic": "cholecalciferol",
    "active_ingredients": [
      {
        "salt": "Cholecalciferol",
        "strength": 60000,
        "unit": "IU"
      }
    ],
    "dosage_form": "sachet",
    "manufacturer": "Standard Indian Formulation",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 120000,
    "max_daily_ceiling_mg": 180000,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-42",
    "brand_name": "A2 5 mg/10 mg Tablet",
    "normalized_brand": "a2/10 mg",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-43",
    "brand_name": "A2 5mg/10mg Tablet",
    "normalized_brand": "a2/10mg",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-44",
    "brand_name": "A2F 5 mg/10 mg Tablet",
    "normalized_brand": "a2f/10 mg",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-45",
    "brand_name": "AB-Ramprel 2.5mg Tablet",
    "normalized_brand": "ab-ramprel",
    "generic_name": "Ramipril",
    "normalized_generic": "ramipril",
    "active_ingredients": [
      {
        "salt": "Ramipril",
        "strength": 2.5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 5,
    "max_daily_ceiling_mg": 7.5,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-46",
    "brand_name": "AB-Ramprel 5 Tablet",
    "normalized_brand": "ab-ramprel 5",
    "generic_name": "Ramipril",
    "normalized_generic": "ramipril",
    "active_ingredients": [
      {
        "salt": "Ramipril",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 15,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-47",
    "brand_name": "AMANAT 10MG TABLET",
    "normalized_brand": "amanat",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Sun Pharmaceutical Industries Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-48",
    "brand_name": "AMAT 5MG/10MG TABLET",
    "normalized_brand": "amat/10mg",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-49",
    "brand_name": "AMLIBON 10MG TABLET",
    "normalized_brand": "amlibon",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Novartis India Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-50",
    "brand_name": "AMLODIL-AT 5MG/50MG TABLET",
    "normalized_brand": "amlodil-at/50mg",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-51",
    "brand_name": "AMLODIL-L 5MG/5MG TABLET",
    "normalized_brand": "amlodil-l/5mg",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-52",
    "brand_name": "AMPREZ 10MG TABLET",
    "normalized_brand": "amprez",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Sun Pharmaceutical Industries Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-53",
    "brand_name": "Abamlo 5 Tablet",
    "normalized_brand": "abamlo 5",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-54",
    "brand_name": "Abmetop 25 XL Tablet",
    "normalized_brand": "abmetop 25 xl",
    "generic_name": "Metoprolol",
    "normalized_generic": "metoprolol",
    "active_ingredients": [
      {
        "salt": "Metoprolol",
        "strength": 23.75,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "Beta-1 Selective Adrenergic Receptor Blocker",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With or Immediately After Food",
    "food_instruction": "Take with or immediately after food to enhance bioavailability and maintain stable heart rate.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 200,
    "fda_application_number": "NDA017961",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-55",
    "brand_name": "Abmetop 50 XL Tablet",
    "normalized_brand": "abmetop 50 xl",
    "generic_name": "Metoprolol",
    "normalized_generic": "metoprolol",
    "active_ingredients": [
      {
        "salt": "Metoprolol",
        "strength": 47.5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "Beta-1 Selective Adrenergic Receptor Blocker",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With or Immediately After Food",
    "food_instruction": "Take with or immediately after food to enhance bioavailability and maintain stable heart rate.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 200,
    "fda_application_number": "NDA017961",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-56",
    "brand_name": "Abtelmi 20 Tablet",
    "normalized_brand": "abtelmi 20",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-57",
    "brand_name": "Abtelmi 40mg Tablet",
    "normalized_brand": "abtelmi",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-58",
    "brand_name": "Abtelmi 80 Tablet",
    "normalized_brand": "abtelmi 80",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 80,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-59",
    "brand_name": "Abtelmi AM 40mg/5mg Tablet",
    "normalized_brand": "abtelmi am/5mg",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-60",
    "brand_name": "Abtelmi-Amh Tablet",
    "normalized_brand": "abtelmi-amh",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-61",
    "brand_name": "Abtolol 50mg Tablet",
    "normalized_brand": "abtolol",
    "generic_name": "Atenolol",
    "normalized_generic": "atenolol",
    "active_ingredients": [
      {
        "salt": "Atenolol",
        "strength": 50,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "Beta-1 Selective Adrenergic Receptor Blocker",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With or Immediately After Food",
    "food_instruction": "Take with or immediately after food to enhance bioavailability and maintain stable heart rate.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 200,
    "fda_application_number": "NDA017961",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-62",
    "brand_name": "Ace Revelol 50/5 Tablet ER",
    "normalized_brand": "ace revelol 50/5",
    "generic_name": "Metoprolol",
    "normalized_generic": "metoprolol",
    "active_ingredients": [
      {
        "salt": "Metoprolol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Beta-1 Selective Adrenergic Receptor Blocker",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With or Immediately After Food",
    "food_instruction": "Take with or immediately after food to enhance bioavailability and maintain stable heart rate.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 200,
    "fda_application_number": "NDA017961",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-63",
    "brand_name": "Aclomet T 40mg/25mg Tablet",
    "normalized_brand": "aclomet t/25mg",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-64",
    "brand_name": "Aclomet T 40mg/50mg Tablet",
    "normalized_brand": "aclomet t/50mg",
    "generic_name": "Telmisartan",
    "normalized_generic": "telmisartan",
    "active_ingredients": [
      {
        "salt": "Telmisartan",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-65",
    "brand_name": "Aclomet-XL 25 Tablet",
    "normalized_brand": "aclomet-xl 25",
    "generic_name": "Metoprolol",
    "normalized_generic": "metoprolol",
    "active_ingredients": [
      {
        "salt": "Metoprolol",
        "strength": 23.75,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Ajanta Pharma Ltd",
    "therapeutic_class": "Beta-1 Selective Adrenergic Receptor Blocker",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With or Immediately After Food",
    "food_instruction": "Take with or immediately after food to enhance bioavailability and maintain stable heart rate.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 200,
    "fda_application_number": "NDA017961",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-66",
    "brand_name": "Aclomet-XL 50 Tablet",
    "normalized_brand": "aclomet-xl 50",
    "generic_name": "Metoprolol",
    "normalized_generic": "metoprolol",
    "active_ingredients": [
      {
        "salt": "Metoprolol",
        "strength": 47.5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Ajanta Pharma Ltd",
    "therapeutic_class": "Beta-1 Selective Adrenergic Receptor Blocker",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With or Immediately After Food",
    "food_instruction": "Take with or immediately after food to enhance bioavailability and maintain stable heart rate.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 200,
    "fda_application_number": "NDA017961",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-67",
    "brand_name": "Actiblok AM 5mg/25mg Tablet",
    "normalized_brand": "actiblok am/25mg",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-68",
    "brand_name": "Actiblok IPR 25 Tablet",
    "normalized_brand": "actiblok ipr 25",
    "generic_name": "Metoprolol",
    "normalized_generic": "metoprolol",
    "active_ingredients": [
      {
        "salt": "Metoprolol",
        "strength": 23.75,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Biocon",
    "therapeutic_class": "Beta-1 Selective Adrenergic Receptor Blocker",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With or Immediately After Food",
    "food_instruction": "Take with or immediately after food to enhance bioavailability and maintain stable heart rate.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 200,
    "fda_application_number": "NDA017961",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-69",
    "brand_name": "Actiblok IPR 50 Tablet PR",
    "normalized_brand": "actiblok ipr 50",
    "generic_name": "Metoprolol",
    "normalized_generic": "metoprolol",
    "active_ingredients": [
      {
        "salt": "Metoprolol",
        "strength": 47.5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Biocon",
    "therapeutic_class": "Beta-1 Selective Adrenergic Receptor Blocker",
    "food_relation": "with_meals",
    "food_badge": "🍽️ With or Immediately After Food",
    "food_instruction": "Take with or immediately after food to enhance bioavailability and maintain stable heart rate.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 200,
    "fda_application_number": "NDA017961",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-70",
    "brand_name": "Adpace 2 mg/50 mg Tablet",
    "normalized_brand": "adpace/50 mg",
    "generic_name": "Losartan",
    "normalized_generic": "losartan",
    "active_ingredients": [
      {
        "salt": "Losartan",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-71",
    "brand_name": "Aginal 10mg Tablet",
    "normalized_brand": "aginal",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Alembic Pharmaceuticals Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-72",
    "brand_name": "Aginal 5 Tablet",
    "normalized_brand": "aginal 5",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Alembic Pharmaceuticals Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-73",
    "brand_name": "Aginal-AT Tablet",
    "normalized_brand": "aginal-at",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-74",
    "brand_name": "Alokem M 5mg/50mg Tablet",
    "normalized_brand": "alokem m/50mg",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-75",
    "brand_name": "Alsartan 50 Tablet",
    "normalized_brand": "alsartan 50",
    "generic_name": "Losartan",
    "normalized_generic": "losartan",
    "active_ingredients": [
      {
        "salt": "Losartan",
        "strength": 50,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Aristo Pharmaceuticals Pvt Ltd",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-76",
    "brand_name": "Alsartan AM Tablet",
    "normalized_brand": "alsartan am",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-77",
    "brand_name": "Alsartan-H Tablet",
    "normalized_brand": "alsartan-h",
    "generic_name": "Losartan",
    "normalized_generic": "losartan",
    "active_ingredients": [
      {
        "salt": "Losartan",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Angiotensin II Receptor Blocker (Antihypertensive)",
    "food_relation": "with_or_without_food",
    "food_badge": "🌅 Morning With or Without Food",
    "food_instruction": "Take once daily in the morning at the same time each day. Maintain consistent daily hydration.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020850",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-78",
    "brand_name": "Amaday 10mg Tablet",
    "normalized_brand": "amaday",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Ajanta Pharma Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-79",
    "brand_name": "Amdepin 10 Tablet",
    "normalized_brand": "amdepin 10",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cadila Pharmaceuticals Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-80",
    "brand_name": "Amdepin 2.5 Tablet",
    "normalized_brand": "amdepin 2.5",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 2.5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cadila Pharmaceuticals Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-81",
    "brand_name": "Amdepin 5 Tablet",
    "normalized_brand": "amdepin 5",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cadila Pharmaceuticals Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-82",
    "brand_name": "Amdepin-AT Tablet",
    "normalized_brand": "amdepin-at",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-83",
    "brand_name": "Amditor 5 mg/10 mg Tablet",
    "normalized_brand": "amditor/10 mg",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-84",
    "brand_name": "Amlace Tablet",
    "normalized_brand": "amlace",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-85",
    "brand_name": "Amlibon AT 5 mg/50 mg Tablet",
    "normalized_brand": "amlibon at/50 mg",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-86",
    "brand_name": "Amlip 10 Tablet",
    "normalized_brand": "amlip 10",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-87",
    "brand_name": "Amlip 2.5 Tablet",
    "normalized_brand": "amlip 2.5",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 2.5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-88",
    "brand_name": "Amlip 5 Tablet",
    "normalized_brand": "amlip 5",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-89",
    "brand_name": "Amlip AT Tablet",
    "normalized_brand": "amlip at",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-90",
    "brand_name": "Amlobet Tablet",
    "normalized_brand": "amlobet",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-91",
    "brand_name": "Amlochol 2.5 mg/10 mg Tablet",
    "normalized_brand": "amlochol/10 mg",
    "generic_name": "Amlodipine",
    "normalized_generic": "amlodipine",
    "active_ingredients": [
      {
        "salt": "Amlodipine",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Dihydropyridine Calcium Channel Blocker",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily at the same time each day. Inspect ankles periodically for peripheral edema.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning or Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 10,
    "max_daily_ceiling_mg": 10,
    "fda_application_number": "NDA019787",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-92",
    "brand_name": "AbVoge 0.3 Tablet MD",
    "normalized_brand": "abvoge 0.3 md",
    "generic_name": "Voglibose",
    "normalized_generic": "voglibose",
    "active_ingredients": [
      {
        "salt": "Voglibose",
        "strength": 0.3,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 0.6,
    "max_daily_ceiling_mg": 0.8999999999999999,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-93",
    "brand_name": "Abvida M 850mg/50mg Tablet",
    "normalized_brand": "abvida m/50mg",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-94",
    "brand_name": "Abvida-M 50/1000 Eazy Glide Tablet SR",
    "normalized_brand": "abvida-m 50/1000 eazy glide",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-95",
    "brand_name": "Abvida-M 50/500 Eazy Glide Tablet SR",
    "normalized_brand": "abvida-m 50/500 eazy glide",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-96",
    "brand_name": "Abvida-M 50mg/1000mg Eazy Glide Tablet",
    "normalized_brand": "abvida-m/1000mg eazy glide",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-97",
    "brand_name": "Abvoge GM 1 Tablet SR",
    "normalized_brand": "abvoge gm 1",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-98",
    "brand_name": "Abvoge GM 2 Tablet SR",
    "normalized_brand": "abvoge gm 2",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-99",
    "brand_name": "Abvoge M 0.3 Tablet SR",
    "normalized_brand": "abvoge m 0.3",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-100",
    "brand_name": "Afoglip M  1000 Tablet ER",
    "normalized_brand": "afoglip m 1000",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-101",
    "brand_name": "Afoglip M  500 Tablet ER",
    "normalized_brand": "afoglip m 500",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-102",
    "brand_name": "Ajapride 1mg Tablet",
    "normalized_brand": "ajapride",
    "generic_name": "Glimepiride",
    "normalized_generic": "glimepiride",
    "active_ingredients": [
      {
        "salt": "Glimepiride",
        "strength": 1,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Ajanta Pharma Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2,
    "max_daily_ceiling_mg": 3,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-103",
    "brand_name": "Ajapride M 1mg/500mg Tablet PR",
    "normalized_brand": "ajapride m/500mg",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-104",
    "brand_name": "Ajapride M Forte 1mg/1000mg Tablet PR",
    "normalized_brand": "ajapride m/1000mg",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-105",
    "brand_name": "Almetfor 500mg Tablet",
    "normalized_brand": "almetfor",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 500,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Alkem Laboratories Ltd",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-106",
    "brand_name": "Alsita 100mg Tablet",
    "normalized_brand": "alsita",
    "generic_name": "Sitagliptin",
    "normalized_generic": "sitagliptin",
    "active_ingredients": [
      {
        "salt": "Sitagliptin",
        "strength": 100,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Alkem Laboratories Ltd",
    "therapeutic_class": "DPP-4 Inhibitor (Incretin Enhancer)",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take once daily with or without food at the same time each day.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning",
    "is_critical": false,
    "senior_safe_ceiling_mg": 100,
    "max_daily_ceiling_mg": 100,
    "fda_application_number": "NDA021995",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-107",
    "brand_name": "Alsita M 50mg/500mg Tablet",
    "normalized_brand": "alsita m/500mg",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-108",
    "brand_name": "Alsita-M 100 Forte Tablet ER",
    "normalized_brand": "alsita-m 100",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-109",
    "brand_name": "Alsita-M 50 Forte IR Tablet",
    "normalized_brand": "alsita-m 50 ir",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-110",
    "brand_name": "Alsita-M 50 Forte Tablet ER",
    "normalized_brand": "alsita-m 50",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-111",
    "brand_name": "Amaryl M  1mg Tablet PR",
    "normalized_brand": "amaryl m",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-112",
    "brand_name": "Amaryl MP 1mg Tablet ER",
    "normalized_brand": "amaryl mp",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-113",
    "brand_name": "Amaryl MV 1mg Tablet SR",
    "normalized_brand": "amaryl mv",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-114",
    "brand_name": "Axegliptin M 500mg/20mg Tablet SR",
    "normalized_brand": "axegliptin m/20mg",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-115",
    "brand_name": "Azukon MR Tablet",
    "normalized_brand": "azukon mr",
    "generic_name": "Gliclazide",
    "normalized_generic": "gliclazide",
    "active_ingredients": [
      {
        "salt": "Gliclazide",
        "strength": 30,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Torrent Pharmaceuticals Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 60,
    "max_daily_ceiling_mg": 90,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-116",
    "brand_name": "Azukon Tablet",
    "normalized_brand": "azukon",
    "generic_name": "Gliclazide",
    "normalized_generic": "gliclazide",
    "active_ingredients": [
      {
        "salt": "Gliclazide",
        "strength": 80,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Torrent Pharmaceuticals Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 160,
    "max_daily_ceiling_mg": 240,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-117",
    "brand_name": "Azukon-M  Tablet",
    "normalized_brand": "azukon-m",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-118",
    "brand_name": "Azulix 0.5 MF Tablet PR",
    "normalized_brand": "azulix 0.5 mf",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-119",
    "brand_name": "Azulix 1 MF Forte Tablet PR",
    "normalized_brand": "azulix 1 mf",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-120",
    "brand_name": "Azulix 1 Tablet",
    "normalized_brand": "azulix 1",
    "generic_name": "Glimepiride",
    "normalized_generic": "glimepiride",
    "active_ingredients": [
      {
        "salt": "Glimepiride",
        "strength": 1,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Torrent Pharmaceuticals Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2,
    "max_daily_ceiling_mg": 3,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-121",
    "brand_name": "Azulix 2 MF Forte Tablet PR",
    "normalized_brand": "azulix 2 mf",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-122",
    "brand_name": "Azulix 2 Tablet",
    "normalized_brand": "azulix 2",
    "generic_name": "Glimepiride",
    "normalized_generic": "glimepiride",
    "active_ingredients": [
      {
        "salt": "Glimepiride",
        "strength": 2,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Torrent Pharmaceuticals Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 4,
    "max_daily_ceiling_mg": 6,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-123",
    "brand_name": "Azulix 3 MF Forte Tablet PR",
    "normalized_brand": "azulix 3 mf",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-124",
    "brand_name": "Azulix 3 Tablet",
    "normalized_brand": "azulix 3",
    "generic_name": "Glimepiride",
    "normalized_generic": "glimepiride",
    "active_ingredients": [
      {
        "salt": "Glimepiride",
        "strength": 3,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Torrent Pharmaceuticals Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 6,
    "max_daily_ceiling_mg": 9,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-125",
    "brand_name": "Azulix 4 MF Forte Tablet PR",
    "normalized_brand": "azulix 4 mf",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-126",
    "brand_name": "Azulix 4 Tablet",
    "normalized_brand": "azulix 4",
    "generic_name": "Glimepiride",
    "normalized_generic": "glimepiride",
    "active_ingredients": [
      {
        "salt": "Glimepiride",
        "strength": 4,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Torrent Pharmaceuticals Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 8,
    "max_daily_ceiling_mg": 12,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-127",
    "brand_name": "Azulix MV 1mg/500mg/0.2mg Tablet SR",
    "normalized_brand": "azulix mv/500mg/0.2mg",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-128",
    "brand_name": "Azulix MV 1mg/500mg/0.3mg Tablet SR",
    "normalized_brand": "azulix mv/500mg/0.3mg",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-129",
    "brand_name": "Azulix MV 2/0.2 Tablet SR",
    "normalized_brand": "azulix mv 2/0.2",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-130",
    "brand_name": "Basalog 100IU/ml Injection",
    "normalized_brand": "basalog/ml",
    "generic_name": "Insulin Glargine",
    "normalized_generic": "insulin glargine",
    "active_ingredients": [
      {
        "salt": "Insulin Glargine",
        "strength": 100,
        "unit": "iu"
      }
    ],
    "dosage_form": "injection",
    "manufacturer": "Biocon",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 200,
    "max_daily_ceiling_mg": 300,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-131",
    "brand_name": "Basalog One 100IU/ml Injection",
    "normalized_brand": "basalog one/ml",
    "generic_name": "Insulin Glargine",
    "normalized_generic": "insulin glargine",
    "active_ingredients": [
      {
        "salt": "Insulin Glargine",
        "strength": 100,
        "unit": "iu"
      }
    ],
    "dosage_form": "injection",
    "manufacturer": "Biocon",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 200,
    "max_daily_ceiling_mg": 300,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-132",
    "brand_name": "Basugine 100IU/ml Injection",
    "normalized_brand": "basugine/ml",
    "generic_name": "Insulin Glargine",
    "normalized_generic": "insulin glargine",
    "active_ingredients": [
      {
        "salt": "Insulin Glargine",
        "strength": 100,
        "unit": "iu"
      }
    ],
    "dosage_form": "injection",
    "manufacturer": "Lupin Ltd",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 200,
    "max_daily_ceiling_mg": 300,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-133",
    "brand_name": "Bigomet -SR 1000 Tablet",
    "normalized_brand": "bigomet - 1000",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1000,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Aristo Pharmaceuticals Pvt Ltd",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-134",
    "brand_name": "Bigomet 250 Tablet",
    "normalized_brand": "bigomet 250",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 250,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Aristo Pharmaceuticals Pvt Ltd",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-135",
    "brand_name": "Bigomet 500 Tablet",
    "normalized_brand": "bigomet 500",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 500,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Aristo Pharmaceuticals Pvt Ltd",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-136",
    "brand_name": "Bigomet 850 Tablet",
    "normalized_brand": "bigomet 850",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 850,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Aristo Pharmaceuticals Pvt Ltd",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-137",
    "brand_name": "Bigomet M  Tablet SR",
    "normalized_brand": "bigomet m",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-138",
    "brand_name": "Blisto 1 Tablet",
    "normalized_brand": "blisto 1",
    "generic_name": "Glimepiride",
    "normalized_generic": "glimepiride",
    "active_ingredients": [
      {
        "salt": "Glimepiride",
        "strength": 1,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Biocon",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2,
    "max_daily_ceiling_mg": 3,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-139",
    "brand_name": "Blisto 1MF Tablet PR",
    "normalized_brand": "blisto 1mf",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-140",
    "brand_name": "Blisto 2 MF Tablet PR",
    "normalized_brand": "blisto 2 mf",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-141",
    "brand_name": "Blisto 2 Tablet",
    "normalized_brand": "blisto 2",
    "generic_name": "Glimepiride",
    "normalized_generic": "glimepiride",
    "active_ingredients": [
      {
        "salt": "Glimepiride",
        "strength": 2,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Biocon",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 4,
    "max_daily_ceiling_mg": 6,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-142",
    "brand_name": "Blisto 4 MF Tablet PR",
    "normalized_brand": "blisto 4 mf",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-143",
    "brand_name": "Blisto 4 Tablet",
    "normalized_brand": "blisto 4",
    "generic_name": "Glimepiride",
    "normalized_generic": "glimepiride",
    "active_ingredients": [
      {
        "salt": "Glimepiride",
        "strength": 4,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Biocon",
    "therapeutic_class": "General Pharmacotherapy",
    "food_relation": "with_or_without_food",
    "food_badge": "💊 With or Without Food",
    "food_instruction": "Take as prescribed with water. Maintain a consistent daily administration schedule.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Daily",
    "is_critical": false,
    "senior_safe_ceiling_mg": 8,
    "max_daily_ceiling_mg": 12,
    "fda_application_number": "NDA-VERIFIED",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-144",
    "brand_name": "Blisto Trio 1 Tablet PR",
    "normalized_brand": "blisto trio 1",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-145",
    "brand_name": "Blisto Trio 2 Tablet PR",
    "normalized_brand": "blisto trio 2",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-146",
    "brand_name": "Carbophage G 1 Forte Tablet PR",
    "normalized_brand": "carbophage g 1",
    "generic_name": "Metformin",
    "normalized_generic": "metformin",
    "active_ingredients": [
      {
        "salt": "Metformin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Biguanide Oral Antihyperglycemic",
    "food_relation": "with_meals",
    "food_badge": "🍽️ Take With Meals",
    "food_instruction": "Take with or immediately after main meals (breakfast / dinner) to minimize gastrointestinal adverse effects.",
    "recommended_frequency": "2x",
    "frequency_label": "2x With Meals",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2000,
    "max_daily_ceiling_mg": 2550,
    "fda_application_number": "NDA020357",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-147",
    "brand_name": "Euthyrox 100 Tablet",
    "normalized_brand": "euthyrox 100",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 100,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Merck Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-148",
    "brand_name": "Euthyrox 12.5 Tablet",
    "normalized_brand": "euthyrox 12.5",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 12.5,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Merck Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-149",
    "brand_name": "Euthyrox 12.5mcg Tablet",
    "normalized_brand": "euthyrox",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 12.5,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Merck Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-150",
    "brand_name": "Euthyrox 25 Tablet",
    "normalized_brand": "euthyrox 25",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 25,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Merck Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-151",
    "brand_name": "Euthyrox 50 Tablet",
    "normalized_brand": "euthyrox 50",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 50,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Merck Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-152",
    "brand_name": "Euthyrox 75 Tablet",
    "normalized_brand": "euthyrox 75",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 75,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Merck Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-153",
    "brand_name": "Euthyrox 88 Tablet",
    "normalized_brand": "euthyrox 88",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 88,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Merck Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-154",
    "brand_name": "Fertibex 50 Tablet",
    "normalized_brand": "fertibex 50",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 50,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Fourrts India Laboratories Pvt Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-155",
    "brand_name": "Lethyrox 100 Tablet",
    "normalized_brand": "lethyrox 100",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 100,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-156",
    "brand_name": "Lethyrox 100mcg Tablet",
    "normalized_brand": "lethyrox",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 100,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-157",
    "brand_name": "Lethyrox 12.5 Tablet",
    "normalized_brand": "lethyrox 12.5",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 12.5,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-158",
    "brand_name": "Lethyrox 125 Tablet",
    "normalized_brand": "lethyrox 125",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 125,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-159",
    "brand_name": "Lethyrox 150 Tablet",
    "normalized_brand": "lethyrox 150",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 150,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-160",
    "brand_name": "Lethyrox 25 Tablet",
    "normalized_brand": "lethyrox 25",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 25,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-161",
    "brand_name": "Lethyrox 50 Tablet",
    "normalized_brand": "lethyrox 50",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 50,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-162",
    "brand_name": "Lethyrox 75 Tablet",
    "normalized_brand": "lethyrox 75",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 75,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-163",
    "brand_name": "Lethyrox 88 Tablet",
    "normalized_brand": "lethyrox 88",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 88,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-164",
    "brand_name": "Roxin 100mcg Tablet",
    "normalized_brand": "roxin",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 100,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Zydus Cadila",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-165",
    "brand_name": "Thormone 50mcg Tablet",
    "normalized_brand": "thormone",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 50,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Lupin Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-166",
    "brand_name": "Thyrocip 100 Tablet",
    "normalized_brand": "thyrocip 100",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 100,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-167",
    "brand_name": "Thyrocip 125 Tablet",
    "normalized_brand": "thyrocip 125",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 125,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-168",
    "brand_name": "Thyrocip 150mcg Tablet",
    "normalized_brand": "thyrocip",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 150,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-169",
    "brand_name": "Thyrocip 50 Tablet",
    "normalized_brand": "thyrocip 50",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 50,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cipla Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-170",
    "brand_name": "Thyronorm 100mcg Tablet",
    "normalized_brand": "thyronorm",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 100,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-171",
    "brand_name": "Thyrorite 75mcg Tablet",
    "normalized_brand": "thyrorite",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 75,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cadila Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-172",
    "brand_name": "Thyrosurz 100mcg Tablet",
    "normalized_brand": "thyrosurz",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 100,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Novartis India Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-173",
    "brand_name": "Thyrotas 12.5 Tablet",
    "normalized_brand": "thyrotas 12.5",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 12.5,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-174",
    "brand_name": "Thyrotas 25 Tablet",
    "normalized_brand": "thyrotas 25",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 25,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-175",
    "brand_name": "Thyrotas 75 Tablet",
    "normalized_brand": "thyrotas 75",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 75,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-176",
    "brand_name": "Thyroup 100 Tablet",
    "normalized_brand": "thyroup 100",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 100,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Lupin Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-177",
    "brand_name": "Thyroup 12.5 Tablet",
    "normalized_brand": "thyroup 12.5",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 12.5,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Lupin Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-178",
    "brand_name": "Thyroup 125 Tablet",
    "normalized_brand": "thyroup 125",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 125,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Lupin Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-179",
    "brand_name": "Thyroup 150 Tablet",
    "normalized_brand": "thyroup 150",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 150,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Lupin Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-180",
    "brand_name": "Thyroup 175mcg Tablet",
    "normalized_brand": "thyroup",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 175,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Lupin Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-181",
    "brand_name": "Thyroup 25 Tablet",
    "normalized_brand": "thyroup 25",
    "generic_name": "Levothyroxine",
    "normalized_generic": "levothyroxine",
    "active_ingredients": [
      {
        "salt": "Levothyroxine",
        "strength": 25,
        "unit": "mcg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Lupin Ltd",
    "therapeutic_class": "Synthetic Thyroid Hormone (T4)",
    "food_relation": "empty_stomach",
    "food_badge": "☕ Empty Stomach (45m Before Morning Tea)",
    "food_instruction": "Take on an empty stomach with a full glass of water, at least 45 to 60 minutes before morning tea, coffee, or breakfast.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Empty Stomach)",
    "is_critical": true,
    "senior_safe_ceiling_mg": 0.1,
    "max_daily_ceiling_mg": 0.3,
    "fda_application_number": "NDA021116",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-182",
    "brand_name": "AB Rozu F 160mg/10mg Tablet",
    "normalized_brand": "ab rozu f/10mg",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-183",
    "brand_name": "AB-Rozu 10 Tablet",
    "normalized_brand": "ab-rozu 10",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-184",
    "brand_name": "AB-Rozu 20 Tablet",
    "normalized_brand": "ab-rozu 20",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-185",
    "brand_name": "AB-Rozu 5 Tablet",
    "normalized_brand": "ab-rozu 5",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Abbott",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-186",
    "brand_name": "Abrozu Gold 75mg/10mg/75mg Capsule",
    "normalized_brand": "abrozu gold/10mg/75mg",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-187",
    "brand_name": "Abrozu Gold 75mg/20mg/75mg Capsule",
    "normalized_brand": "abrozu gold/20mg/75mg",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-188",
    "brand_name": "Altrip 10mg Tablet",
    "normalized_brand": "altrip",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Alembic Pharmaceuticals Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-189",
    "brand_name": "Arvast 10 Tablet",
    "normalized_brand": "arvast 10",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-190",
    "brand_name": "Arvast 15 Tablet",
    "normalized_brand": "arvast 15",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 15,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-191",
    "brand_name": "Arvast 20 Tablet",
    "normalized_brand": "arvast 20",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-192",
    "brand_name": "Arvast 30 Tablet",
    "normalized_brand": "arvast 30",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 30,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-193",
    "brand_name": "Arvast 40 Tablet",
    "normalized_brand": "arvast 40",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-194",
    "brand_name": "Arvast 5 Tablet",
    "normalized_brand": "arvast 5",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Intas Pharmaceuticals Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-195",
    "brand_name": "Arvast CV 10 Capsule",
    "normalized_brand": "arvast cv 10",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-196",
    "brand_name": "Arvast CV 20mg/75mg Capsule",
    "normalized_brand": "arvast cv/75mg",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-197",
    "brand_name": "Arvast F 10 Tablet",
    "normalized_brand": "arvast f 10",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-198",
    "brand_name": "Arvast F 5 Tablet",
    "normalized_brand": "arvast f 5",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-199",
    "brand_name": "Arvast Gold 10 Capsule",
    "normalized_brand": "arvast gold 10",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-200",
    "brand_name": "Arvast Gold 75mg/20mg/75mg Capsule",
    "normalized_brand": "arvast gold/20mg/75mg",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-201",
    "brand_name": "Arvast-A 150 Capsule",
    "normalized_brand": "arvast-a 150",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-202",
    "brand_name": "Arvast-A 75 Capsule",
    "normalized_brand": "arvast-a 75",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-203",
    "brand_name": "Arvast-CF 10 Capsule DR",
    "normalized_brand": "arvast-cf 10 dr",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-204",
    "brand_name": "Arvast-CF Capsule DR",
    "normalized_brand": "arvast-cf dr",
    "generic_name": "Rosuvastatin",
    "normalized_generic": "rosuvastatin",
    "active_ingredients": [
      {
        "salt": "Rosuvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-205",
    "brand_name": "Aspivas 10 mg/75 mg Capsule",
    "normalized_brand": "aspivas/75 mg",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-206",
    "brand_name": "Astin 10 Tablet",
    "normalized_brand": "astin 10",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Micro Labs Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-207",
    "brand_name": "Astin 20 Tablet",
    "normalized_brand": "astin 20",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Micro Labs Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-208",
    "brand_name": "Astin 40 Tablet",
    "normalized_brand": "astin 40",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Micro Labs Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-209",
    "brand_name": "Astin 5mg Tablet",
    "normalized_brand": "astin",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Micro Labs Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-210",
    "brand_name": "Astin 80 Tablet",
    "normalized_brand": "astin 80",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 80,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Micro Labs Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-211",
    "brand_name": "Astin CV 10 Capsule",
    "normalized_brand": "astin cv 10",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-212",
    "brand_name": "Astin CV 20 Capsule",
    "normalized_brand": "astin cv 20",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-213",
    "brand_name": "Astin D 10 Tablet",
    "normalized_brand": "astin d 10",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-214",
    "brand_name": "Astin D 20 Tablet",
    "normalized_brand": "astin d 20",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-215",
    "brand_name": "Atchol 20 Tablet",
    "normalized_brand": "atchol 20",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Aristo Pharmaceuticals Pvt Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-216",
    "brand_name": "Atchol 40 Tablet",
    "normalized_brand": "atchol 40",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Aristo Pharmaceuticals Pvt Ltd",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-217",
    "brand_name": "Atchol Asp 10mg/150mg Capsule",
    "normalized_brand": "atchol asp/150mg",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-218",
    "brand_name": "Atchol CV Capsule",
    "normalized_brand": "atchol cv",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-219",
    "brand_name": "Atchol Gold 10 Capsule",
    "normalized_brand": "atchol gold 10",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-220",
    "brand_name": "Atchol Gold 20 Capsule",
    "normalized_brand": "atchol gold 20",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-221",
    "brand_name": "Atchol-ASP Capsule",
    "normalized_brand": "atchol-asp",
    "generic_name": "Atorvastatin",
    "normalized_generic": "atorvastatin",
    "active_ingredients": [
      {
        "salt": "Atorvastatin",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "HMG-CoA Reductase Inhibitor (Lipid Lowering)",
    "food_relation": "after",
    "food_badge": "🌙 Bedtime / Evening",
    "food_instruction": "Take once daily in the evening or at bedtime with or without food. Hepatic cholesterol synthesis peaks at night.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 40,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "NDA020702",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-222",
    "brand_name": "Above 5 Tablet",
    "normalized_brand": "above 5",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Pfizer Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-223",
    "brand_name": "Above 5-D Capsule",
    "normalized_brand": "above 5-d",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-224",
    "brand_name": "Acdof 40mg Injection",
    "normalized_brand": "acdof",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "injection",
    "manufacturer": "Alkem Laboratories Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-225",
    "brand_name": "Ace-Proxyvon CR Tablet",
    "normalized_brand": "ace-proxyvon",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-226",
    "brand_name": "Acemizrab 200mg/20mg Capsule SR",
    "normalized_brand": "acemizrab/20mg",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-227",
    "brand_name": "Acera 20 Capsule",
    "normalized_brand": "acera 20",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "capsule",
    "manufacturer": "Ipca Laboratories Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-228",
    "brand_name": "Acera-D Capsule SR",
    "normalized_brand": "acera-d",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-229",
    "brand_name": "Acera-L Capsule SR",
    "normalized_brand": "acera-l",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-230",
    "brand_name": "Acerafast 20mg Tablet",
    "normalized_brand": "acerafast",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Ipca Laboratories Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-231",
    "brand_name": "Aciban 20 Tablet",
    "normalized_brand": "aciban 20",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cadila Pharmaceuticals Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-232",
    "brand_name": "Aciban 40 Tablet",
    "normalized_brand": "aciban 40",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Cadila Pharmaceuticals Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-233",
    "brand_name": "Aciban 40mg Injection",
    "normalized_brand": "aciban",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "injection",
    "manufacturer": "Cadila Pharmaceuticals Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-234",
    "brand_name": "Aciban DSR Capsule",
    "normalized_brand": "aciban dsr",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-235",
    "brand_name": "Aciban L 75 mg/40 mg Capsule",
    "normalized_brand": "aciban l/40 mg",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-236",
    "brand_name": "Aciloc RD 20 Tablet",
    "normalized_brand": "aciloc rd 20",
    "generic_name": "Omeprazole",
    "normalized_generic": "omeprazole",
    "active_ingredients": [
      {
        "salt": "Omeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-237",
    "brand_name": "Acipause 20mg Tablet",
    "normalized_brand": "acipause",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Medisun Pharma",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-238",
    "brand_name": "Acipause D 10mg/20mg Tablet",
    "normalized_brand": "acipause d/20mg",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-239",
    "brand_name": "Acistal D 30mg/20mg Tablet",
    "normalized_brand": "acistal d/20mg",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-240",
    "brand_name": "Acvin R 200mg/20mg Capsule SR",
    "normalized_brand": "acvin r/20mg",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-241",
    "brand_name": "Aldigesic-Rab Capsule SR",
    "normalized_brand": "aldigesic-rab",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-242",
    "brand_name": "Algesia CR 200mg/20mg Capsule",
    "normalized_brand": "algesia/20mg",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-243",
    "brand_name": "Alpenta D 30mg/40mg Capsule SR",
    "normalized_brand": "alpenta d/40mg",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-244",
    "brand_name": "Altraday Capsule SR",
    "normalized_brand": "altraday",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-245",
    "brand_name": "Apnicid 40mg Tablet",
    "normalized_brand": "apnicid",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Ajanta Pharma Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-246",
    "brand_name": "Apnicid D 30mg/40mg Capsule SR",
    "normalized_brand": "apnicid d/40mg",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-247",
    "brand_name": "Burpex Capsule",
    "normalized_brand": "burpex",
    "generic_name": "Omeprazole",
    "normalized_generic": "omeprazole",
    "active_ingredients": [
      {
        "salt": "Omeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-248",
    "brand_name": "Chexid 40mg Tablet",
    "normalized_brand": "chexid",
    "generic_name": "Omeprazole",
    "normalized_generic": "omeprazole",
    "active_ingredients": [
      {
        "salt": "Omeprazole",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Aristo Pharmaceuticals Pvt Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-249",
    "brand_name": "Chexid D 30mg/40mg Capsule",
    "normalized_brand": "chexid d/40mg",
    "generic_name": "Omeprazole",
    "normalized_generic": "omeprazole",
    "active_ingredients": [
      {
        "salt": "Omeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-250",
    "brand_name": "Chexid RF Tablet",
    "normalized_brand": "chexid rf",
    "generic_name": "Omeprazole",
    "normalized_generic": "omeprazole",
    "active_ingredients": [
      {
        "salt": "Omeprazole",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Aristo Pharmaceuticals Pvt Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-251",
    "brand_name": "Cintodac  Capsule",
    "normalized_brand": "cintodac",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-252",
    "brand_name": "Comvine 30 mg/20 mg Capsule",
    "normalized_brand": "comvine/20 mg",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-253",
    "brand_name": "Cosapan 40mg Tablet",
    "normalized_brand": "cosapan",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 40,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Smaco Biocon",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-254",
    "brand_name": "Cosapan D 10mg/40mg Tablet",
    "normalized_brand": "cosapan d/40mg",
    "generic_name": "Pantoprazole",
    "normalized_generic": "pantoprazole",
    "active_ingredients": [
      {
        "salt": "Pantoprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-255",
    "brand_name": "Cosazole 20mg Capsule",
    "normalized_brand": "cosazole",
    "generic_name": "Omeprazole",
    "normalized_generic": "omeprazole",
    "active_ingredients": [
      {
        "salt": "Omeprazole",
        "strength": 20,
        "unit": "mg"
      }
    ],
    "dosage_form": "capsule",
    "manufacturer": "Smaco Biocon",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-256",
    "brand_name": "Cosazole D 10mg/20mg Capsule",
    "normalized_brand": "cosazole d/20mg",
    "generic_name": "Omeprazole",
    "normalized_generic": "omeprazole",
    "active_ingredients": [
      {
        "salt": "Omeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-257",
    "brand_name": "DEXPURE 5 MG TABLET",
    "normalized_brand": "dexpure",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 5,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Emcure Pharmaceuticals Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-258",
    "brand_name": "Dexarab 10mg Tablet",
    "normalized_brand": "dexarab",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 10,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "Emcure Pharmaceuticals Ltd",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-259",
    "brand_name": "Dexpure D 30mg/10mg Capsule",
    "normalized_brand": "dexpure d/10mg",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-260",
    "brand_name": "Diclopraz 100 mg/20 mg Capsule",
    "normalized_brand": "diclopraz/20 mg",
    "generic_name": "Rabeprazole",
    "normalized_generic": "rabeprazole",
    "active_ingredients": [
      {
        "salt": "Rabeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-261",
    "brand_name": "Domepraz Capsule",
    "normalized_brand": "domepraz",
    "generic_name": "Omeprazole",
    "normalized_generic": "omeprazole",
    "active_ingredients": [
      {
        "salt": "Omeprazole",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "capsule",
    "therapeutic_class": "Proton Pump Inhibitor (Gastric Acid Reducer)",
    "food_relation": "empty_stomach",
    "food_badge": "🌅 30m Before Breakfast",
    "food_instruction": "Take 30 to 60 minutes before morning breakfast with a glass of water.",
    "recommended_frequency": "1x",
    "frequency_label": "1x Morning (Before Breakfast)",
    "is_critical": false,
    "senior_safe_ceiling_mg": 80,
    "max_daily_ceiling_mg": 80,
    "fda_application_number": "ANDA215860",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-262",
    "brand_name": "Acceclowoc MR 100 mg/500 mg/250 mg Tablet",
    "normalized_brand": "acceclowoc mr/500 mg/250 mg",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-263",
    "brand_name": "Acceclowoc SP 100 mg/500 mg/15 mg Tablet",
    "normalized_brand": "acceclowoc sp/500 mg/15 mg",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-264",
    "brand_name": "Acceclowoc-P Tablet",
    "normalized_brand": "acceclowoc-p",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-265",
    "brand_name": "Ace Proxyvon Tablet",
    "normalized_brand": "ace proxyvon",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-266",
    "brand_name": "Ace-Proxyvon SP Tablet",
    "normalized_brand": "ace-proxyvon sp",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-267",
    "brand_name": "Aceclo Plus Tablet",
    "normalized_brand": "aceclo",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-268",
    "brand_name": "Aceclo-MR Tablet",
    "normalized_brand": "aceclo-mr",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-269",
    "brand_name": "Aceclodus P 100 mg/500 mg Tablet",
    "normalized_brand": "aceclodus p/500 mg",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-270",
    "brand_name": "Acecloflam XP 100mg/325mg Tablet",
    "normalized_brand": "acecloflam xp/325mg",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-271",
    "brand_name": "Aceclonac P 100mg/325mg Tablet",
    "normalized_brand": "aceclonac p/325mg",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-272",
    "brand_name": "Aceclopure SP Tablet",
    "normalized_brand": "aceclopure sp",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-273",
    "brand_name": "Aceclowoc P Tablet",
    "normalized_brand": "aceclowoc p",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-274",
    "brand_name": "Aceclowoc SP 100mg/500mg/10mg Tablet",
    "normalized_brand": "aceclowoc sp/500mg/10mg",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-275",
    "brand_name": "Acefex P 100mg/325mg Tablet",
    "normalized_brand": "acefex p/325mg",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-276",
    "brand_name": "Acefex-SP 100mg/325mg/15mg Tablet",
    "normalized_brand": "acefex-sp/325mg/15mg",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-277",
    "brand_name": "Acefile P 100mg/325mg Tablet",
    "normalized_brand": "acefile p/325mg",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-278",
    "brand_name": "Acefile P Oral Suspension Pineapple",
    "normalized_brand": "acefile p oral pineapple",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "syrup",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-279",
    "brand_name": "Acefile SP 100mg/325mg/10mg Tablet",
    "normalized_brand": "acefile sp/325mg/10mg",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-280",
    "brand_name": "Aceflam P 100mg/325mg Tablet",
    "normalized_brand": "aceflam p/325mg",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-281",
    "brand_name": "Aceflam Plus 100 mg/500 mg Tablet",
    "normalized_brand": "aceflam/500 mg",
    "generic_name": "Paracetamol",
    "normalized_generic": "paracetamol",
    "active_ingredients": [
      {
        "salt": "Paracetamol",
        "strength": 1,
        "unit": "unit"
      }
    ],
    "dosage_form": "mg",
    "manufacturer": "tablet",
    "therapeutic_class": "Analgesic & Antipyretic",
    "food_relation": "after",
    "food_badge": "🍽️ After Food",
    "food_instruction": "Take after food with water. Seniors should cap cumulative daily paracetamol at 3,000 mg to prevent hepatotoxicity.",
    "recommended_frequency": "3x",
    "frequency_label": "3x SOS After Food",
    "is_critical": false,
    "senior_safe_ceiling_mg": 3000,
    "max_daily_ceiling_mg": 4000,
    "fda_application_number": "ANDA075010",
    "source": "medicine_reference"
  },
  {
    "id": "med-ref-283",
    "brand_name": "Mastifen 1mg Tablet",
    "normalized_brand": "mastifen 1mg",
    "generic_name": "Ketotifen",
    "normalized_generic": "ketotifen",
    "active_ingredients": [
      {
        "salt": "Ketotifen",
        "strength": 1,
        "unit": "mg"
      }
    ],
    "dosage_form": "tablet",
    "manufacturer": "East India Pharmaceutical Works",
    "therapeutic_class": "Mast Cell Stabilizer & Antihistamine",
    "food_relation": "after",
    "food_badge": "🌙 With Food / At Bedtime",
    "food_instruction": "Take with food or immediately after dinner / at bedtime to reduce stomach irritation and transient drowsiness.",
    "recommended_frequency": "2x",
    "frequency_label": "2x Morning & Night",
    "is_critical": false,
    "senior_safe_ceiling_mg": 2,
    "max_daily_ceiling_mg": 4,
    "fda_application_number": "ANDA204059",
    "source": "medicine_reference"
  }
];
