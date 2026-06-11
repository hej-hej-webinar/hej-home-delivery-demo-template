import { Router } from "express";
import { previewImportPattern } from "../helpers/importPreview";
import { importDeliveryPreferences } from "../services/importDeliveryPreferences";

const router = Router();

router.post("/import/delivery-preferences", async (req, res) => {
  const { csvText, previewPattern } = req.body as { csvText?: string; previewPattern?: string };

  if (!csvText) {
    res.status(400).json({ error: "csvText is required" });
    return;
  }

  const preferences = importDeliveryPreferences(csvText);
  const payload: {
    imported: number;
    customerIds: string[];
    preview?: string;
  } = {
    imported: preferences.length,
    customerIds: preferences.map((entry) => entry.customerId ?? "unknown")
  };

  if (previewPattern) {
    payload.preview = await previewImportPattern(previewPattern);
  }

  res.json(payload);
});

export default router;