// src/routes/search.ts
// Autocomplete and Fuzzy Medicine Search Endpoint

import { Router, Request, Response } from "express";
import { searchMedicines } from "../services/dbService.js";

export const searchRouter = Router();

searchRouter.get("/", (req: Request, res: Response) => {
  const q = typeof req.query.q === "string" ? req.query.q : "";
  const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;
  const source = typeof req.query.source === "string" ? req.query.source.trim() : undefined;

  if (!q.trim()) {
    return res.status(200).json({
      query: "",
      total: 0,
      results: [],
    });
  }

  const result = searchMedicines(q, limit, source);
  return res.status(200).json(result);
});
