import { IHotelRepository } from "../domain/IHotelRepository";
import { HotelEntity } from "../domain/hotelEntity";
import { HotelCreateDTO } from "../domain/hotelDTO";
import { prismaClient } from "../../../shared/prisma/client";

export class HotelRepository implements IHotelRepository {
  async criar(dados: HotelCreateDTO): Promise<HotelEntity> {
    const hotel = await prismaClient.hotel.create({
      data: {
        ...dados,
        destaque: dados.destaque || false,
      },
    });

    return new HotelEntity(
      hotel.id,
      hotel.nome,
      hotel.descricao,
      hotel.preco,
      hotel.estrelas,
      hotel.imagem,
      hotel.localizacao,
      hotel.destaque,
      hotel.criadoEm,
      hotel.atualizadoEm
    );
  }

  async getHoteis(): Promise<HotelEntity[]> {
    const hoteis = await prismaClient.hotel.findMany();

    return hoteis.map(
      (hotel) =>
        new HotelEntity(
          hotel.id,
          hotel.nome,
          hotel.descricao,
          hotel.preco,
          hotel.estrelas,
          hotel.imagem,
          hotel.localizacao,
          hotel.destaque,
          hotel.criadoEm,
          hotel.atualizadoEm
        )
    );
  }

  async getHoteisDestaque(): Promise<HotelEntity[]> {
    const hoteis = await prismaClient.hotel.findMany({
      where: { destaque: true },
    });

    return hoteis.map(
      (hotel) =>
        new HotelEntity(
          hotel.id,
          hotel.nome,
          hotel.descricao,
          hotel.preco,
          hotel.estrelas,
          hotel.imagem,
          hotel.localizacao,
          hotel.destaque,
          hotel.criadoEm,
          hotel.atualizadoEm
        )
    );
  }

  async getById(id: number): Promise<HotelEntity | null> {
    const hotel = await prismaClient.hotel.findUnique({
      where: { id },
    });

    if (!hotel) return null;

    return new HotelEntity(
      hotel.id,
      hotel.nome,
      hotel.descricao,
      hotel.preco,
      hotel.estrelas,
      hotel.imagem,
      hotel.localizacao,
      hotel.destaque,
      hotel.criadoEm,
      hotel.atualizadoEm
    );
  }
}
