import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "../src/app";

describe("Hej Home Delivery API", () => {
  it("returns service health", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok", service: "hej-home-delivery" });
  });

  it("looks up a seeded customer by email", async () => {
    const response = await request(app)
      .get("/api/customers/lookup")
      .query({ email: "ava.thompson@example.test" });

    expect(response.status).toBe(200);
    expect(response.body.customer.customerId).toBe("CUST-1001");
  });

  it("imports delivery preferences from csv text", async () => {
    const response = await request(app).post("/api/import/delivery-preferences").send({
      csvText: "CUST-1001,09:00-11:00,Leave with concierge\nCUST-1002,18:00-20:00,Back gate"
    });

    expect(response.status).toBe(200);
    expect(response.body.imported).toBe(2);
    expect(response.body.customerIds).toEqual(["CUST-1001", "CUST-1002"]);
  });
});