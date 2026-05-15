import { BannerEntity } from "./bannerEntity";
import { BannerResponseDTO } from "./bannerDTO";

export class BannerMapper {
  static toDTO(banner: BannerEntity): BannerResponseDTO {
    return {
      id: banner.getId(),
      titulo: banner.getTitulo(),
      descricao: banner.getDescricao(),
      imagem: banner.getImagem(),
      linkDestino: banner.getLinkDestino(),
      ativo: banner.getAtivo(),
      tipo: banner.getTipo(),
      criadoEm: banner.getCriadoEm().toISOString(),
      atualizadoEm: banner.getAtualizadoEm().toISOString(),
    };
  }

  static toDTOList(banners: BannerEntity[]): BannerResponseDTO[] {
    return banners.map((banner) => this.toDTO(banner));
  }
}
