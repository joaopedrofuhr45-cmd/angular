import { describe, it, expect, beforeEach, vi } from "vitest";
import { GetMaisVisitadosUseCase } from "../../application/getMaisVisitados";
import { Passagem } from "../../domain/passagenEntity";
import { IPassagemRepository } from "../../domain/Irepository";

describe("GetMaisVisitadosUseCase", () => {
  let useCase: GetMaisVisitadosUseCase;
  let mockRepository: IPassagemRepository;

  beforeEach(() => {
    mockRepository = {
      getPassagens: vi.fn(),
      getMaioresDescontos: vi.fn(),
      getMaisVisitados: vi.fn(),
    };

    useCase = new GetMaisVisitadosUseCase(mockRepository);
  });

  it("deve retornar passagens mais visitadas", async () => {
    const passagemVisitada = new Passagem(
      1,
      "São Paulo",
      "Rio de Janeiro",
      350,
      15,
      "https://example.com/passagem.jpg",
      "2025-05-20",
      "Airline XYZ"
    );

    vi.mocked(mockRepository.getMaisVisitados).mockResolvedValueOnce([
      passagemVisitada,
    ]);

    const result = await useCase.execute();

    expect(result).toHaveLength(1);
    expect(result[0].destino).toBe("Rio de Janeiro");
  });

  it("deve lançar erro quando nenhuma passagem for encontrada", async () => {
    vi.mocked(mockRepository.getMaisVisitados).mockResolvedValueOnce([]);

    await expect(useCase.execute()).rejects.toThrow();
  });
});
