import { BannerResponseDTO } from "../domain/bannerDTO";
import { BannerMapper } from "../domain/bannerMapper";
import { IBannerRepository } from "../domain/IBannerRepository";
import { NotFoundError } from "../../../shared/errors/not-found-Error";

export class GetCarouselBannersUseCase {
  constructor(private readonly repository: IBannerRepository) {}

  async execute(): Promise<BannerResponseDTO[]> {
    const banners = await this.repository.getCarouselBanners();
    if (!banners || banners.length === 0) {
      throw new NotFoundError("Nenhum banner de carousel encontrado");
    }
    return BannerMapper.toDTOList(banners);
  }
}
