import { describe, it, expect, beforeEach, vi } from "vitest";
import { GetMaioresDescontosUseCase } from "../../application/getMaioresDescontos";
import { Passagem } from "../../domain/passagenEntity";
import { IPassagemRepository } from "../../domain/Irepository";

describe("GetMaioresDescontosUseCase", () => {
  let useCase: GetMaioresDescontosUseCase;
  let mockRepository: IPassagemRepository;

  beforeEach(() => {
    mockRepository = {
      getPassagens: vi.fn(),
      getMaioresDescontos: vi.fn(),
      getMaisVisitados: vi.fn(),
    };

    useCase = new GetMaioresDescontosUseCase(mockRepository);
  });

  it("deve retornar passagens com maiores descontos", async () => {
    const passagemComDesconto = new Passagem(
      1,
      "São Paulo",
      "Rio de Janeiro",
      350,
      50,
      "https://example.com/passagem.jpg",
      "2025-05-20",
      "Airline XYZ"
    );

    vi.mocked(mockRepository.getMaioresDescontos).mockResolvedValueOnce([
      passagemComDesconto,
    ]);

    const result = await useCase.execute();

    expect(result).toHaveLength(1);
    expect(result[0].desconto).toBe(50);
  });

  it("deve lançar erro quando nenhuma passagem com desconto for encontrada", async () => {
    vi.mocked(mockRepository.getMaioresDescontos).mockResolvedValueOnce([]);

    await expect(useCase.execute()).rejects.toThrow();
  });
});
