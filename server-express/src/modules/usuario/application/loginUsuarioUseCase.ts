import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { IuRepository } from "../domain/IuUsuarioRepository";
import { UsuarioDTORequest } from "../domain/usuarioDTO";
import { UnauthorizedError } from '../../../shared/errors/unauthorizedError';

export class LoginUsuarioUseCase {
  constructor(private readonly repository: IuRepository) {}

  async login(data: UsuarioDTORequest): Promise<{ token: string, usuario: { id: number, nome: string, email: string }  }> {
    
    // 1. procura usuário
    const usuario = await this.repository.findByEmail(data.email);

    // 2. verifica se existe
    if (!usuario) {
      throw new UnauthorizedError("Email ou senha inválidos");
    }

    // 3. compara senha
    const senhaCorreta = await compare(
      data.senha,
      usuario.getSenha()
    );

    if (!senhaCorreta) {
      throw new UnauthorizedError("Email ou senha inválidos");
    }

    // 4. gera token
    const token = jwt.sign(
      {
         id: usuario.getId(), 
         email: usuario.getEmail() 

      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1d",
      }
    );

    // 5. retorna dados
    return {
      token,
      usuario: {
        id: usuario.getId(),
        nome: usuario.getNome(),
        email: usuario.getEmail(),
      },
    };
  }
}