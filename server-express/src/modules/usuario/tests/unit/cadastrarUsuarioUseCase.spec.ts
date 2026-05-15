import { describe, it, expect, beforeEach, vi } from "vitest";
import { CadastrarUsuarioUseCase } from "../../application/cadastrarUsuarioUseCase";
import { UsuarioEntity } from "../../domain/usuarioEntity";
import { IUsuarioRepository } from "../../domain/IuUsuarioRepository";
import { ConflictError } from "../../../../shared/errors/conflictError";

describe("CadastrarUsuarioUseCase", () => {
  let useCase: CadastrarUsuarioUseCase;
  let mockRepository: IUsuarioRepository;

  beforeEach(() => {
    mockRepository = {
      criar: vi.fn(),
      buscarPorEmail: vi.fn(),
      buscarPorId: vi.fn(),
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

    vi.mocked(mockRepository.buscarPorEmail).mockResolvedValueOnce(null);
    vi.mocked(mockRepository.criar).mockResolvedValueOnce(usuarioEntity);

    const result = await useCase.execute({
      nome: "João Silva",
      email: "joao@example.com",
      senha: "senha123",
    });

    expect(result.nome).toBe("João Silva");
    expect(result.email).toBe("joao@example.com");
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

    vi.mocked(mockRepository.buscarPorEmail).mockResolvedValueOnce(
      usuarioExistente
    );

    await expect(
      useCase.execute({
        nome: "Outro Usuario",
        email: "joao@example.com",
        senha: "outraSenha123",
      })
    ).rejects.toThrow(ConflictError);
  });
});
