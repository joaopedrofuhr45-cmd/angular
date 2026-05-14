import { PassagemResponseDTO } from "./../domain/passagemDTO";
import { IPassagemRepository } from "../domain/Irepository";
import { PassagemMapper } from "../domain/mapper";
import { NotFoundError } from "../../../shared/errors/not-found-Error";

export class GetPassagensUseCase {
  constructor(private readonly repository: IPassagemRepository) {}

  async execute(): Promise<PassagemResponseDTO[]> {
    const passagens = await this.repository.getPassagens();
    if (!passagens || passagens.length === 0) {
      throw new NotFoundError("Nenhuma passagem encontrada");
    }
    return PassagemMapper.toDTOList(passagens);
  }
}
