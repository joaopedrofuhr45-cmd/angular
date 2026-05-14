import { NotFoundError } from './../../../shared/errors/not-found-Error';
import { IuRepository } from '../domain/IuUsuarioRepository';
import { UsuarioMapper } from '../domain/usuarioMapper';

export class PerfilUsuarioUseCase {
  constructor(private readonly repository: IuRepository) {}

  async perfil(id: number) {
    const usuario = await this.repository.findById(id);

    if (!usuario) {
      throw new NotFoundError('Usuário não encontrado');
    }

    return UsuarioMapper.toDTO(usuario);
  }
}