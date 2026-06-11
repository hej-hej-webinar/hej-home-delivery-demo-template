import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "../src/app";

describe("Hej Home Delivery API", () => {
  it("returns service health", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok", service: "hej-home-delivery" });
  });
});
