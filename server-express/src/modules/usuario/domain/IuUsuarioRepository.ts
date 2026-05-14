import { UsuarioEntity } from './usuarioEntity';
import { UsuarioDTORequest } from './usuarioDTO';

export interface IuRepository {
  cadastrar(dados: UsuarioDTORequest): Promise<UsuarioEntity>;
  findByEmail(email: string): Promise<UsuarioEntity | null>;
  findById(id: number): Promise<UsuarioEntity | null>;
}