import express from "express";
import deliveryRoutes from "./routes/deliveryRoutes";

const app = express();

app.use(express.json());
app.use("/api", deliveryRoutes);

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "hej-home-delivery" });
});

export default app;