import { Router } from "express";
import { findCustomerByEmail, findCustomerById } from "../services/customerLookup";
import { importDeliveryPreferences } from "../services/importDeliveryPreferences";

const router = Router();

router.post("/import/delivery-preferences", (req, res) => {
  const { csvText } = req.body as { csvText?: string };

  if (!csvText) {
    res.status(400).json({ error: "csvText is required" });
    return;
  }

  const preferences = importDeliveryPreferences(csvText);

  res.json({
    imported: preferences.length,
    customerIds: preferences.map((entry) => entry.customerId ?? "unknown")
  });
});

router.get("/customers/lookup", (req, res) => {
  const { customerId, email } = req.query as { customerId?: string; email?: string };

  if (!customerId && !email) {
    res.status(400).json({ error: "customerId or email query is required" });
    return;
  }

  const customer = customerId ? findCustomerById(customerId) : findCustomerByEmail(email!);

  if (!customer) {
    res.status(404).json({ error: "Customer not found" });
    return;
  }

  res.json({ customer });
});

export default router;