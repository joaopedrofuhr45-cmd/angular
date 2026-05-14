import { UnauthorizedError } from './../errors/unauthorizedError';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new UnauthorizedError('Token não fornecido');
  }

  const [, token] = authHeader.split(' '); // pega só o token depois do "Bearer"

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
    (req as any).userId = decoded.id; // coloca o id no req pra usar no controller
    next(); // libera pra continuar
  } catch {
    throw new UnauthorizedError('Token inválido ou expirado');
  }
}