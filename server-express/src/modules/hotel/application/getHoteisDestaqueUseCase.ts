import { HotelResponseDTO } from "../domain/hotelDTO";
import { HotelMapper } from "../domain/hotelMapper";
import { IHotelRepository } from "../domain/IHotelRepository";
import { NotFoundError } from "../../../shared/errors/not-found-Error";

export class GetHoteisDestaqueUseCase {
  constructor(private readonly repository: IHotelRepository) {}

  async execute(): Promise<HotelResponseDTO[]> {
    const hoteis = await this.repository.getHoteisDestaque();
    if (!hoteis || hoteis.length === 0) {
      throw new NotFoundError("Nenhum hotel em destaque encontrado");
    }
    return HotelMapper.toDTOList(hoteis);
  }
}
