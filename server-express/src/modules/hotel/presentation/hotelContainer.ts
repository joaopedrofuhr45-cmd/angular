import { IHotelRepository } from "../domain/IHotelRepository";
import { HotelRepository } from "../infrastructure/hotelRepository";
import { HotelController } from "./hotelController";
import { GetHoteisUseCase } from "../application/getHoteisUseCase";
import { GetHoteisDestaqueUseCase } from "../application/getHoteisDestaqueUseCase";

export class HotelContainer {
  private static hotelRepository: HotelRepository;
  private static getHoteisUseCase: GetHoteisUseCase;
  private static getHoteisDestaqueUseCase: GetHoteisDestaqueUseCase;
  private static hotelController: HotelController;

  static {
    this.hotelRepository = new HotelRepository();
    this.getHoteisUseCase = new GetHoteisUseCase(this.hotelRepository);
    this.getHoteisDestaqueUseCase = new GetHoteisDestaqueUseCase(
      this.hotelRepository
    );
    this.hotelController = new HotelController(
      this.getHoteisUseCase,
      this.getHoteisDestaqueUseCase
    );
  }

  static getHotelController(): HotelController {
    return this.hotelController;
  }
}
