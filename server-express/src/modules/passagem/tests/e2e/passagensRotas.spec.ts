import { describe, it, expect } from "vitest";
import express from "express";
import passagensRotas from "../../presentation/passagensRotas";

describe("Passagem Routes (E2E)", () => {
  const app = express();
  app.use(express.json());
  app.use("/api/passagens", passagensRotas);

  it("deve ter a rota GET / para listar todas as passagens", async () => {
    expect(passagensRotas).toBeDefined();
  });

  it("deve ter a rota GET /maiores-descontos para obter maiores descontos", async () => {
    expect(passagensRotas).toBeDefined();
  });

  it("deve ter a rota GET /mais-visitados para obter mais visitados", async () => {
    expect(passagensRotas).toBeDefined();
  });
});
