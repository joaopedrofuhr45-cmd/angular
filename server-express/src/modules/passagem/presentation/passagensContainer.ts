import { PassagemRepository } from '../infrastructure/repository';
import { GetPassagensUseCase } from '../application/getPassagensUseCase';
import { GetMaioresDescontosUseCase } from '../application/getMaioresDescontos';
import { GetMaisVisitadosUseCase } from '../application/getMaisVisitados';
import { passagensController } from './passagensController';

const repository = new PassagemRepository();

const getPassagensUseCase = new GetPassagensUseCase(repository);
const getMaioresDescontosUseCase = new GetMaioresDescontosUseCase(repository);
const getMaisVisitadosUseCase = new GetMaisVisitadosUseCase(repository);

export const passagemController = new passagensController(
  getPassagensUseCase,
  getMaioresDescontosUseCase,
  getMaisVisitadosUseCase
);