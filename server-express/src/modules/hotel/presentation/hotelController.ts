import { NextFunction, Request, Response } from "express";
import { GetHoteisUseCase } from "../application/getHoteisUseCase";
import { GetHoteisDestaqueUseCase } from "../application/getHoteisDestaqueUseCase";

export class HotelController {
  constructor(
    private readonly getHoteisUseCase: GetHoteisUseCase,
    private readonly getHoteisDestaqueUseCase: GetHoteisDestaqueUseCase
  ) {}

  async getHoteis(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const hoteis = await this.getHoteisUseCase.execute();
      res.status(200).json(hoteis);
    } catch (error) {
      next(error);
    }
  }

  async getHoteisDestaque(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const hoteis = await this.getHoteisDestaqueUseCase.execute();
      res.status(200).json(hoteis);
    } catch (error) {
      next(error);
    }
  }
}
