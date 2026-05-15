import { describe, it, expect, beforeEach, vi } from "vitest";
import { CriarBannerUseCase } from "../../application/criarBannerUseCase";
import { BannerEntity } from "../../domain/bannerEntity";
import { IBannerRepository } from "../../domain/IBannerRepository";
import { BadRequestError } from "../../../../shared/errors/badRequestError";

describe("CriarBannerUseCase", () => {
  let useCase: CriarBannerUseCase;
  let mockRepository: IBannerRepository;

  beforeEach(() => {
    mockRepository = {
      criar: vi.fn(),
      getHeroBanner: vi.fn(),
      getCarouselBanners: vi.fn(),
      getAll: vi.fn(),
      getById: vi.fn(),
    };

    useCase = new CriarBannerUseCase(mockRepository);
  });

  it("deve criar um banner com dados válidos", async () => {
    const data = new Date();
    const bannerEntity = new BannerEntity(
      1,
      "Novo Banner",
      "Descrição",
      "https://example.com/image.jpg",
      "https://example.com",
      true,
      "hero",
      data,
      data
    );

    vi.mocked(mockRepository.criar).mockResolvedValueOnce(bannerEntity);

    const result = await useCase.execute({
      titulo: "Novo Banner",
      descricao: "Descrição",
      imagem: "https://example.com/image.jpg",
      linkDestino: "https://example.com",
      tipo: "hero",
    });

    expect(result.titulo).toBe("Novo Banner");
    expect(result.tipo).toBe("hero");
  });

  it("deve lançar erro se título estiver vazio", async () => {
    await expect(
      useCase.execute({
        titulo: "",
        descricao: "Descrição",
        imagem: "https://example.com/image.jpg",
        linkDestino: "https://example.com",
        tipo: "hero",
      })
    ).rejects.toThrow(BadRequestError);
  });

  it("deve lançar erro se imagem estiver vazia", async () => {
    await expect(
      useCase.execute({
        titulo: "Banner",
        descricao: "Descrição",
        imagem: "",
        linkDestino: "https://example.com",
        tipo: "hero",
      })
    ).rejects.toThrow(BadRequestError);
  });

  it("deve lançar erro se tipo não for informado", async () => {
    await expect(
      useCase.execute({
        titulo: "Banner",
        descricao: "Descrição",
        imagem: "https://example.com/image.jpg",
        linkDestino: "https://example.com",
        tipo: undefined as any,
      })
    ).rejects.toThrow(BadRequestError);
  });
});
