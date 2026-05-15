import { BannerEntity } from "../domain/bannerEntity";
import { BannerCreateDTO, BannerResponseDTO } from "../domain/bannerDTO";
import { BannerMapper } from "../domain/bannerMapper";
import { IBannerRepository } from "../domain/IBannerRepository";
import { BadRequestError } from "../../../shared/errors/badRequestError";

export class CriarBannerUseCase {
  constructor(private readonly repository: IBannerRepository) {}

  async execute(dados: BannerCreateDTO): Promise<BannerResponseDTO> {
    if (!dados.titulo || !dados.imagem || !dados.tipo) {
      throw new BadRequestError("Título, imagem e tipo são obrigatórios");
    }

    const banner = await this.repository.criar(dados);
    return BannerMapper.toDTO(banner);
  }
}
