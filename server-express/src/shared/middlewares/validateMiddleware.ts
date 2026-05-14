import { BadRequestError } from './../errors/badRequestError';
import { ZodSchema } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      throw new BadRequestError('Dados inválidos');
    }

    req.body = result.data;
    next();
  };
};