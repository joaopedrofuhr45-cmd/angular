import { validate } from './../../../shared/middlewares/validateMiddleware';
import { authMiddleware } from '../../../shared/middlewares/authMiddleware';
import { UsuarioCadastroSchema, UsuarioLoginSchema } from '../domain/usuarioDTO';
import { usuarioController} from './usuarioContainer';
import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

// rota pública com validação
router.post('/cadastro', validate(UsuarioCadastroSchema), usuarioController.cadastrar);

// rota pública com validação
router.post('/login', validate(UsuarioLoginSchema), usuarioController.login);

// rota protegida — primeiro verifica o token, depois deixa passar
router.get('/perfil', authMiddleware, usuarioController.perfil);


export default router;