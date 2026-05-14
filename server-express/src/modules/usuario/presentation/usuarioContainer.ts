import { UsuarioRepository } from '../infrastructure/UsuarioRepository';
import { CadastrarUsuarioUseCase } from '../application/cadastrarUsuarioUseCase';
import { LoginUsuarioUseCase } from '../application/loginUsuarioUseCase';
import { PerfilUsuarioUseCase } from '../application/perfilUsuarioUseCase';
import { UsuarioController } from './usuarioController';

const repository = new UsuarioRepository();

const cadastrarUsuarioUseCase = new CadastrarUsuarioUseCase(repository);
const loginUsuarioUseCase = new LoginUsuarioUseCase(repository);
const perfilUsuarioUseCase = new PerfilUsuarioUseCase(repository);

export const usuarioController = new UsuarioController(
  cadastrarUsuarioUseCase,
  loginUsuarioUseCase,
  perfilUsuarioUseCase
);