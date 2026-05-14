import { Router, Request, Response, NextFunction } from 'express';
import { passagemController } from './passagensContainer';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  return passagemController.getPassagens(req, res, next);
});

router.get('/descontos', (req: Request, res: Response, next: NextFunction) => {
  return passagemController.getMaioresDescontos(req, res, next);
});

router.get('/mais-visitados', (req: Request, res: Response, next: NextFunction) => {
  return passagemController.getMaisVisitados(req, res, next);
});

export default router;