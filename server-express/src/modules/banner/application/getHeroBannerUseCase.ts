import { BannerResponseDTO } from "../domain/bannerDTO";
import { BannerMapper } from "../domain/bannerMapper";
import { IBannerRepository } from "../domain/IBannerRepository";
import { NotFoundError } from "../../../shared/errors/not-found-Error";

export class GetHeroBannerUseCase {
  constructor(private readonly repository: IBannerRepository) {}

  async execute(): Promise<BannerResponseDTO> {
    const banner = await this.repository.getHeroBanner();
    if (!banner) {
      throw new NotFoundError("Nenhum banner hero encontrado");
    }
    return BannerMapper.toDTO(banner);
  }
}
