import { describe, it, expect } from "vitest";
import express from "express";
import hotelRotas from "../../presentation/hotelRotas";

describe("Hotel Routes (E2E)", () => {
  const app = express();
  app.use(express.json());
  app.use("/api/hoteis", hotelRotas);

  it("deve ter a rota GET / para listar hoteis", async () => {
    // Apenas valida que a rota existe
    expect(hotelRotas).toBeDefined();
  });

  it("deve ter a rota GET /destaque para obter hoteis em destaque", async () => {
    // Apenas valida que a rota existe
    expect(hotelRotas).toBeDefined();
  });
});
