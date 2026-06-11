import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "../src/app";

describe("Hej Home Delivery API", () => {
  it("returns service health", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok", service: "hej-home-delivery" });
  });

  it("imports delivery preferences and returns a preview", async () => {
    const response = await request(app).post("/api/import/delivery-preferences").send({
      csvText: "SYNTH-CUSTOMER-001,09:00-11:00,Leave at demo door",
      previewPattern: "SYNTH-CUSTOMER-001,09:00-11:00"
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      imported: 1,
      customerIds: ["SYNTH-CUSTOMER-001"],
      preview: "SYNTH-CUSTOMER-001\n09:00-11:00"
    });
  });
});