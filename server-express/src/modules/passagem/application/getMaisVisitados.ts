import { IPassagemRepository } from "../domain/Irepository";
import { PassagemMapper } from "../domain/mapper";
import { PassagemResponseDTO } from "../domain/passagemDTO";
import { NotFoundError } from "../../../shared/errors/not-found-Error";

export class GetMaisVisitadosUseCase {
  constructor(private readonly repository: IPassagemRepository) {}

  async execute(): Promise<PassagemResponseDTO[]> {
    const passagens = await this.repository.getMaisVisitados();
    if (!passagens || passagens.length === 0) {
      throw new NotFoundError("Nenhuma passagem encontrada");
    }
    return PassagemMapper.toDTOList(passagens);
  }
}
