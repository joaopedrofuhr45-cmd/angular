import { describe, it, expect, beforeEach, vi } from "vitest";
import { LoginUsuarioUseCase } from "../../application/loginUsuarioUseCase";
import { UsuarioEntity } from "../../domain/usuarioEntity";
import { IuRepository } from "../../domain/IuUsuarioRepository";
import { UnauthorizedError } from "../../../../shared/errors/unauthorized.error";

describe("LoginUsuarioUseCase", () => {
  let useCase: LoginUsuarioUseCase;
  let mockRepository: IuRepository;

  beforeEach(() => {
    mockRepository = {
      cadastrar: vi.fn(),
      findByEmail: vi.fn(),
      findById: vi.fn(),
    };

    useCase = new LoginUsuarioUseCase(mockRepository);
  });

  it("deve fazer login com credenciais válidas", async () => {
    const data = new Date();
    const usuario = new UsuarioEntity(
      1,
      "João Silva",
      "joao@example.com",
      "senha_hash",
      data,
    );

    vi.mocked(mockRepository.findByEmail).mockResolvedValueOnce(usuario);

    const result = await useCase.login({
      nome: "João Silva",
      email: "joao@example.com",
      senha: "senha123",
    });

    expect(result.usuario.email).toBe("joao@example.com");
    expect(result.token).toBeDefined();
  });

  it("deve lançar erro se email não encontrado", async () => {
    vi.mocked(mockRepository.findByEmail).mockResolvedValueOnce(null);

    await expect(
      useCase.login({
        nome: "Usuário Teste",
        email: "naoexiste@example.com",
        senha: "senha123",
      })
    ).rejects.toThrow(UnauthorizedError);
  });
});
