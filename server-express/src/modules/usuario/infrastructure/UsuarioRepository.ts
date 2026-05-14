import { IuRepository } from "../domain/IuUsuarioRepository";
import { UsuarioDTORequest } from "../domain/usuarioDTO";
import { UsuarioEntity } from "../domain/usuarioEntity";
import prisma from "../../../shared/prisma/client";
import { UsuarioMapper } from "../domain/usuarioMapper";
export class UsuarioRepository implements IuRepository {
  async cadastrar(dados: UsuarioDTORequest): Promise<UsuarioEntity> {
    const usuario = await prisma.usuario.create({
      data: dados,
    });
    return UsuarioMapper.toEntity(usuario);
  }
  async findByEmail(email: string): Promise<UsuarioEntity | null> {
      const usuario = await prisma.usuario.findUnique({
        where:{email}
      })
      return usuario ? UsuarioMapper.toEntity(usuario) : null;
  }


  async findById(id: number): Promise<UsuarioEntity | null> {
      const usuario = await prisma.usuario.findUnique({
        where:{id}
      })
      return usuario ? UsuarioMapper.toEntity(usuario) : null;
  }
}
