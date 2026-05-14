import { Usuario as PrismaUsuario } from '@prisma/client';
import { UsuarioEntity } from './usuarioEntity';
import { UsuarioDTOResponse } from './usuarioDTO';

export class UsuarioMapper {
  static toEntity(data: PrismaUsuario): UsuarioEntity {
    return new UsuarioEntity(
      data.id,
      data.nome,
      data.email,
      data.senha,
      data.criadoEm
    );
  }

  static toDTO(usuario: UsuarioEntity): UsuarioDTOResponse {
    return {
      id: usuario.getId(),
      nome: usuario.getNome(),
      email: usuario.getEmail()
    };
  }
}