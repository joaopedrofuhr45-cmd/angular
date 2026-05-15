import { BannerRepository } from "../infrastructure/bannerRepository";
import { BannerController } from "./bannerController";
import { CriarBannerUseCase } from "../application/criarBannerUseCase";
import { GetHeroBannerUseCase } from "../application/getHeroBannerUseCase";
import { GetCarouselBannersUseCase } from "../application/getCarouselBannersUseCase";

export class BannerContainer {
  private static bannerRepository: BannerRepository;
  private static criarBannerUseCase: CriarBannerUseCase;
  private static getHeroBannerUseCase: GetHeroBannerUseCase;
  private static getCarouselBannersUseCase: GetCarouselBannersUseCase;
  private static bannerController: BannerController;

  static {
    this.bannerRepository = new BannerRepository();
    this.criarBannerUseCase = new CriarBannerUseCase(this.bannerRepository);
    this.getHeroBannerUseCase = new GetHeroBannerUseCase(this.bannerRepository);
    this.getCarouselBannersUseCase = new GetCarouselBannersUseCase(
      this.bannerRepository
    );
    this.bannerController = new BannerController(
      this.criarBannerUseCase,
      this.getHeroBannerUseCase,
      this.getCarouselBannersUseCase
    );
  }

  static getBannerController(): BannerController {
    return this.bannerController;
  }
}
