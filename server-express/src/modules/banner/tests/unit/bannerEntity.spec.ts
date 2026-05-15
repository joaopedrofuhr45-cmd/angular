import { describe, it, expect } from "vitest";
import { BannerEntity } from "../../domain/bannerEntity";

describe("BannerEntity", () => {
  it("deve criar uma instância de BannerEntity com os dados corretos", () => {
    const data = new Date();
    const banner = new BannerEntity(
      1,
      "Banner Principal",
      "Descrição do banner",
      "https://example.com/image.jpg",
      "https://example.com/destino",
      true,
      "hero",
      data,
      data
    );

    expect(banner.getId()).toBe(1);
    expect(banner.getTitulo()).toBe("Banner Principal");
    expect(banner.getDescricao()).toBe("Descrição do banner");
    expect(banner.getImagem()).toBe("https://example.com/image.jpg");
    expect(banner.getLinkDestino()).toBe("https://example.com/destino");
    expect(banner.getAtivo()).toBe(true);
    expect(banner.getTipo()).toBe("hero");
    expect(banner.getCriadoEm()).toEqual(data);
    expect(banner.getAtualizadoEm()).toEqual(data);
  });

  it("deve retornar os valores corretos dos getters", () => {
    const data = new Date("2025-05-15");
    const banner = new BannerEntity(
      2,
      "Banner Carousel",
      "Descrição carousel",
      "https://example.com/carousel.jpg",
      "https://example.com",
      false,
      "carousel",
      data,
      data
    );

    expect(banner.getAtivo()).toBe(false);
    expect(banner.getTipo()).toBe("carousel");
  });
});
