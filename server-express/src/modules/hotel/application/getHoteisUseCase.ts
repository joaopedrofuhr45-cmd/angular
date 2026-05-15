import { HotelResponseDTO, HotelCreateDTO } from "../domain/hotelDTO";
import { HotelMapper } from "../domain/hotelMapper";
import { IHotelRepository } from "../domain/IHotelRepository";
import { BadRequestError } from "../../../shared/errors/badRequestError";

export class GetHoteisUseCase {
  constructor(private readonly repository: IHotelRepository) {}

  async execute(): Promise<HotelResponseDTO[]> {
    const hoteis = await this.repository.getHoteis();
    if (!hoteis || hoteis.length === 0) {
      throw new BadRequestError("Nenhum hotel encontrado");
    }
    return HotelMapper.toDTOList(hoteis);
  }
}
