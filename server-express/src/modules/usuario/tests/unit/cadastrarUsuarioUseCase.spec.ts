import { describe, it, expect, beforeEach, vi } from "vitest";
import { CadastrarUsuarioUseCase } from "../../application/cadastrarUsuarioUseCase";
import { UsuarioEntity } from "../../domain/usuarioEntity";
import { IuRepository } from "../../domain/IuUsuarioRepository";
import { ConflictError } from "../../../../shared/errors/conflictError";

describe("CadastrarUsuarioUseCase", () => {
  let useCase: CadastrarUsuarioUseCase;
  let mockRepository: IuRepository;

  beforeEach(() => {
    mockRepository = {
      cadastrar: vi.fn(),
      findByEmail: vi.fn(),
      findById: vi.fn(),
    };

    useCase = new CadastrarUsuarioUseCase(mockRepository);
  });

  it("deve cadastrar um novo usuário com dados válidos", async () => {
    const data = new Date();
    const usuarioEntity = new UsuarioEntity(
      1,
      "João Silva",
      "joao@example.com",
      "senha_hash",
      data
    );

    vi.mocked(mockRepository.findByEmail).mockResolvedValueOnce(null);
    vi.mocked(mockRepository.cadastrar).mockResolvedValueOnce(usuarioEntity);

    const result = await useCase.cadastrar({
      nome: "João Silva",
      email: "joao@example.com",
      senha: "senha123",
    });

    expect(result?.getNome()).toBe("João Silva");
    expect(result?.getEmail()).toBe("joao@example.com");
  });

  it("deve lançar erro se email já está cadastrado", async () => {
    const data = new Date();
    const usuarioExistente = new UsuarioEntity(
      1,
      "João Silva",
      "joao@example.com",
      "senha_hash",
      data
    );

    vi.mocked(mockRepository.findByEmail).mockResolvedValueOnce(
      usuarioExistente
    );

    await expect(
      useCase.cadastrar({
        nome: "Outro Usuario",
        email: "joao@example.com",
        senha: "outraSenha123",
      })
    ).rejects.toThrow(ConflictError);
  });
});
