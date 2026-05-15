import { HotelEntity } from "./hotelEntity";
import { HotelCreateDTO } from "./hotelDTO";

export interface IHotelRepository {
  criar(dados: HotelCreateDTO): Promise<HotelEntity>;
  getHoteis(): Promise<HotelEntity[]>;
  getHoteisDestaque(): Promise<HotelEntity[]>;
  getById(id: number): Promise<HotelEntity | null>;
}
