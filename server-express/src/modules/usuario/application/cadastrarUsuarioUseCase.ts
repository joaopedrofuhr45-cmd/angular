import { ConflictError } from "../../../shared/errors/conflictError";
import { IuRepository } from "../domain/IuUsuarioRepository";
import { UsuarioDTORequest } from "../domain/usuarioDTO";
import bcrypt from "bcrypt";
import { UsuarioEntity } from "../domain/usuarioEntity";

export class CadastrarUsuarioUseCase {
  constructor(private readonly repository: IuRepository) {}

  async cadastrar(data: UsuarioDTORequest): Promise<UsuarioEntity | null> {
    const emailExistente = await this.repository.findByEmail(data.email);

    if (emailExistente) {
      throw new ConflictError("Email já cadastrado");
    }

    const senhaHash = await bcrypt.hash(data.senha, 10);

    const usuario = await this.repository.cadastrar({
      ...data,
      senha: senhaHash,
    });

    return usuario;
  }
}
