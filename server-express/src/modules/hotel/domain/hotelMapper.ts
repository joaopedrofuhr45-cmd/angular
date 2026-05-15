import { HotelEntity } from "./hotelEntity";
import { HotelResponseDTO } from "./hotelDTO";

export class HotelMapper {
  static toDTO(hotel: HotelEntity): HotelResponseDTO {
    return {
      id: hotel.getId(),
      nome: hotel.getNome(),
      descricao: hotel.getDescricao(),
      preco: hotel.getPreco(),
      estrelas: hotel.getEstrelas(),
      imagem: hotel.getImagem(),
      localizacao: hotel.getLocalizacao(),
      destaque: hotel.getDestaque(),
      criadoEm: hotel.getCriadoEm().toISOString(),
      atualizadoEm: hotel.getAtualizadoEm().toISOString(),
    };
  }

  static toDTOList(hoteis: HotelEntity[]): HotelResponseDTO[] {
    return hoteis.map((hotel) => this.toDTO(hotel));
  }
}
