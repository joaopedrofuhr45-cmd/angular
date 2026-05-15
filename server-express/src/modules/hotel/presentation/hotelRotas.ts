import { Router } from "express";
import { HotelContainer } from "./hotelContainer";

const hotelRotas = Router();
const hotelController = HotelContainer.getHotelController();

hotelRotas.get("/", (req, res, next) =>
  hotelController.getHoteis(req, res, next)
);
hotelRotas.get("/destaque", (req, res, next) =>
  hotelController.getHoteisDestaque(req, res, next)
);

export default hotelRotas;
