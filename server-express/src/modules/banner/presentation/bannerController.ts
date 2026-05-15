import { NextFunction, Request, Response } from "express";
import { CriarBannerUseCase } from "../application/criarBannerUseCase";
import { GetHeroBannerUseCase } from "../application/getHeroBannerUseCase";
import { GetCarouselBannersUseCase } from "../application/getCarouselBannersUseCase";

export class BannerController {
  constructor(
    private readonly criarBannerUseCase: CriarBannerUseCase,
    private readonly getHeroBannerUseCase: GetHeroBannerUseCase,
    private readonly getCarouselBannersUseCase: GetCarouselBannersUseCase
  ) {}

  async criar(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const banner = await this.criarBannerUseCase.execute(req.body);
      res.status(201).json(banner);
    } catch (error) {
      next(error);
    }
  }

  async getHeroBanner(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const banner = await this.getHeroBannerUseCase.execute();
      res.status(200).json(banner);
    } catch (error) {
      next(error);
    }
  }

  async getCarouselBanners(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const banners = await this.getCarouselBannersUseCase.execute();
      res.status(200).json(banners);
    } catch (error) {
      next(error);
    }
  }
}
