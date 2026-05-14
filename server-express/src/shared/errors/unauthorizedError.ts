import { AppError } from './appError';

export class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(message, 401);
  }
}