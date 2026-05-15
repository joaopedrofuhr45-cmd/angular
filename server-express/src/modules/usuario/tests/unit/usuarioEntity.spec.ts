import { describe, it, expect } from "vitest";
import { UsuarioEntity } from "../../domain/usuarioEntity";

describe("UsuarioEntity", () => {
  it("deve criar uma instância de UsuarioEntity com os dados corretos", () => {
    const data = new Date();
    const usuario = new UsuarioEntity(
      1,
      "João Silva",
      "joao@example.com",
      "senha_hash_123",
      data
    );

    expect(usuario.getId()).toBe(1);
    expect(usuario.getNome()).toBe("João Silva");
    expect(usuario.getEmail()).toBe("joao@example.com");
    expect(usuario.getCriadoEm()).toEqual(data);
  });

  it("deve retornar senha corretamente", () => {
    const data = new Date();
    const usuario = new UsuarioEntity(
      2,
      "Maria Santos",
      "maria@example.com",
      "senha_hash_456",
      data
    );

    expect(usuario.getSenha()).toBe("senha_hash_456");
  });
});
