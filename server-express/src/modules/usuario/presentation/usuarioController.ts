import { CadastrarUsuarioUseCase } from "../application/cadastrarUsuarioUseCase";
import { LoginUsuarioUseCase } from "../application/loginUsuarioUseCase";
import { PerfilUsuarioUseCase } from "../application/perfilUsuarioUseCase";
import { NextFunction, Request, Response } from "express";


export class UsuarioController {
  constructor(
    private readonly cadastrarUsuarioUseCase: CadastrarUsuarioUseCase,
    private readonly loginUsuarioUseCase: LoginUsuarioUseCase,
    private readonly perfilUsuarioUseCase: PerfilUsuarioUseCase,
  ) {}

  async cadastrar(req: Request, res: Response, next: NextFunction): Promise<void>{
    try {
      const cadastar = await this.cadastrarUsuarioUseCase.cadastrar(req.body);
      res.status(201).json(cadastar);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const login = await this.loginUsuarioUseCase.login(req.body);
      res.status(200).json(login);
    } catch (error) {
      next(error);
    }
  }

  async perfil(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const perfil = await this.perfilUsuarioUseCase.perfil((req as any).userId);
      res.status(200).json(perfil);
    } catch (error) {
      next(error);
    }
  }
}
