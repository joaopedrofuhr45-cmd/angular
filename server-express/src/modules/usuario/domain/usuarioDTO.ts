import{z} from 'zod'

export const UsuarioCadastroSchema = z.object({
    nome: z.string().min(3).max(50),
    email:z.string().email(),
    senha: z.string().min(6).max(20)
})

export const UsuarioLoginSchema = z.object({
  email: z.string().email('Email inválido'),
  senha: z.string().min(1, 'Senha obrigatória'),
});
export interface UsuarioDTOResponse{
    nome:string,
    email:string,
    id:number
}

export interface UsuarioDTORequest{
    nome:string,
    email:string,
    senha:string,
}