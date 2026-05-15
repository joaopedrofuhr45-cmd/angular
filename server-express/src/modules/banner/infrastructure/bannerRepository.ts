import { IBannerRepository } from "../domain/IBannerRepository";
import { BannerEntity } from "../domain/bannerEntity";
import { BannerCreateDTO } from "../domain/bannerDTO";
import { prismaClient } from "../../../shared/prisma/client";

export class BannerRepository implements IBannerRepository {
  async criar(dados: BannerCreateDTO): Promise<BannerEntity> {
    const banner = await prismaClient.banner.create({
      data: {
        ...dados,
        ativo: true,
      },
    });

    return new BannerEntity(
      banner.id,
      banner.titulo,
      banner.descricao,
      banner.imagem,
      banner.linkDestino,
      banner.ativo,
      banner.tipo as "hero" | "carousel",
      banner.criadoEm,
      banner.atualizadoEm
    );
  }

  async getHeroBanner(): Promise<BannerEntity | null> {
    const banner = await prismaClient.banner.findFirst({
      where: {
        tipo: "hero",
        ativo: true,
      },
    });

    if (!banner) return null;

    return new BannerEntity(
      banner.id,
      banner.titulo,
      banner.descricao,
      banner.imagem,
      banner.linkDestino,
      banner.ativo,
      banner.tipo as "hero" | "carousel",
      banner.criadoEm,
      banner.atualizadoEm
    );
  }

  async getCarouselBanners(): Promise<BannerEntity[]> {
    const banners = await prismaClient.banner.findMany({
      where: {
        tipo: "carousel",
        ativo: true,
      },
    });

    return banners.map(
      (banner) =>
        new BannerEntity(
          banner.id,
          banner.titulo,
          banner.descricao,
          banner.imagem,
          banner.linkDestino,
          banner.ativo,
          banner.tipo as "hero" | "carousel",
          banner.criadoEm,
          banner.atualizadoEm
        )
    );
  }

  async getAll(): Promise<BannerEntity[]> {
    const banners = await prismaClient.banner.findMany({
      where: { ativo: true },
    });

    return banners.map(
      (banner) =>
        new BannerEntity(
          banner.id,
          banner.titulo,
          banner.descricao,
          banner.imagem,
          banner.linkDestino,
          banner.ativo,
          banner.tipo as "hero" | "carousel",
          banner.criadoEm,
          banner.atualizadoEm
        )
    );
  }

  async getById(id: number): Promise<BannerEntity | null> {
    const banner = await prismaClient.banner.findUnique({
      where: { id },
    });

    if (!banner) return null;

    return new BannerEntity(
      banner.id,
      banner.titulo,
      banner.descricao,
      banner.imagem,
      banner.linkDestino,
      banner.ativo,
      banner.tipo as "hero" | "carousel",
      banner.criadoEm,
      banner.atualizadoEm
    );
  }
}
