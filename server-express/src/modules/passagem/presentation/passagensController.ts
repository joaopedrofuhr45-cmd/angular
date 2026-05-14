import { GetMaisVisitadosUseCase } from "./../application/getMaisVisitados";
import { GetMaioresDescontosUseCase } from "./../application/getMaioresDescontos";
import { GetPassagensUseCase } from "../application/getPassagensUseCase";
import { NextFunction, Request, Response } from "express";


export class passagensController {
  constructor(
    private readonly getPassagensUseCase: GetPassagensUseCase,
    private readonly getMaioresDescontosUseCase: GetMaioresDescontosUseCase,
    private readonly getMaisVisitadosUseCase: GetMaisVisitadosUseCase,
  ) {}

  async getPassagens(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const passagens = await this.getPassagensUseCase.execute();
      res.status(200).json(passagens);
    } catch (error) {
      next(error);
    }
  }
  async getMaioresDescontos(req: Request, res: Response, next: NextFunction): Promise<void> {
    try{
        const passagens = await this.getMaioresDescontosUseCase.execute();
        res.status(200).json(passagens)
    }
    catch(error){
        next(error)
    }
  }

  async getMaisVisitados(req: Request, res: Response, next: NextFunction): Promise<void> {
    try{
     const passagens = await this.getMaisVisitadosUseCase.execute();
     res.status(200).json(passagens)
    }
    catch(error){
        next((error))
    }
  }
}
