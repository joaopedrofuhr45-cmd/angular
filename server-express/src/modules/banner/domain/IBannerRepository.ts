import { BannerEntity } from "./bannerEntity";
import { BannerCreateDTO } from "./bannerDTO";

export interface IBannerRepository {
  criar(dados: BannerCreateDTO): Promise<BannerEntity>;
  getHeroBanner(): Promise<BannerEntity | null>;
  getCarouselBanners(): Promise<BannerEntity[]>;
  getAll(): Promise<BannerEntity[]>;
  getById(id: number): Promise<BannerEntity | null>;
}
