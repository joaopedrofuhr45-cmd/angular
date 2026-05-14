import { PassagemMapper } from "../domain/mapper";
import { IPassagemRepository } from "../domain/Irepository";
import { Passagem } from "../domain/passagenEntity";
import prisma from "../../../shared/prisma/client";

export class PassagemRepository implements IPassagemRepository {
  async getPassagens(): Promise<Passagem[]> {
    const prismaPassagens = await prisma.passagem.findMany();
    return PassagemMapper.toEntityList(prismaPassagens);
  }

  async getMaioresDescontos(): Promise<Passagem[]> {
    const data = await prisma.passagem.findMany({
      orderBy: { desconto: "desc" },
    });
    return PassagemMapper.toEntityList(data);
  }

  async getMaisVisitados(): Promise<Passagem[]> {
    const data = await prisma.passagem.findMany({
      take: 10,
    });
    return PassagemMapper.toEntityList(data);
  }
}
