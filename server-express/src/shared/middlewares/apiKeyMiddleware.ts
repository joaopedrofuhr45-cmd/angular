import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../errors/unauthorized.error";

export const apiKeyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    throw new UnauthorizedError("API Key não fornecida");
  }

  const validApiKey = process.env.API_KEY;

  if (apiKey !== validApiKey) {
    throw new UnauthorizedError("API Key inválida");
  }

  next();
};
