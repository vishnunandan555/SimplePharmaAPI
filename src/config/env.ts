import dotenv from "dotenv";

dotenv.config();

export interface Config {
  port: number;
  nodeEnv: string;
  geminiApiKey: string;
  geminiModel: string;
  openFdaBaseUrl: string;
}

export const config: Config = {
  port: parseInt(process.env.PORT || "3000", 10),
  nodeEnv: process.env.NODE_ENV || "development",
  geminiApiKey: process.env.GEMINI_API_KEY || "",
  geminiModel: process.env.GEMINI_MODEL || "gemini-flash-latest",
  openFdaBaseUrl: process.env.OPENFDA_BASE_URL || "https://api.fda.gov/drug/label.json",
};
