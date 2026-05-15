import { Router } from "express";
import { BannerContainer } from "./bannerContainer";

const bannerRotas = Router();
const bannerController = BannerContainer.getBannerController();

bannerRotas.post("/", (req, res, next) =>
  bannerController.criar(req, res, next)
);
bannerRotas.get("/hero", (req, res, next) =>
  bannerController.getHeroBanner(req, res, next)
);
bannerRotas.get("/carousel", (req, res, next) =>
  bannerController.getCarouselBanners(req, res, next)
);

export default bannerRotas;
