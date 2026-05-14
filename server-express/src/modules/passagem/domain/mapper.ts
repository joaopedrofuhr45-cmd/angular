import { Passagem as PrismaPassagem } from '@prisma/client';
import { Passagem } from './passagenEntity';
import { PassagemResponseDTO } from './passagemDTO';

export class PassagemMapper {
  static toEntity(data: PrismaPassagem): Passagem {
    return new Passagem(
      data.id,
      data.origem,
      data.destino,
      data.preco,
      data.desconto,
      data.imagem,
      data.dataPartida,
      data.companhia
    );
  }

  static toEntityList(data: PrismaPassagem[]): Passagem[] {
    return data.map(item => this.toEntity(item));
  }


  static toDTO(passagem: Passagem): PassagemResponseDTO {
  return {
    id: passagem.getId(),
    origem: passagem.getOrigem(),
    destino: passagem.getDestino(),
    preco: passagem.getPreco(),
    desconto: passagem.getDesconto(),
    imagem: passagem.getImagem(),
    dataPartida: passagem.getDataPartida(),
    companhia: passagem.getCompanhia()
  }
}

static toDTOList(passagens: Passagem[]): PassagemResponseDTO[] {
  return passagens.map(p => this.toDTO(p))
}
}