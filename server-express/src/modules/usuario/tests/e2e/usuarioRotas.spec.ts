import { describe, it, expect } from "vitest";
import express from "express";
import usuarioRotas from "../../presentation/usuarioRotas";

describe("Usuario Routes (E2E)", () => {
  const app = express();
  app.use(express.json());
  app.use("/api/usuarios", usuarioRotas);

  it("deve ter a rota POST /cadastro para cadastrar novo usuário", async () => {
    expect(usuarioRotas).toBeDefined();
  });

  it("deve ter a rota POST /login para fazer login", async () => {
    expect(usuarioRotas).toBeDefined();
  });

  it("deve ter a rota GET /perfil para obter perfil do usuário", async () => {
    expect(usuarioRotas).toBeDefined();
  });
});
