import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.passagem.createMany({
    data: [
      {
        origem: 'São Paulo',
        destino: 'Rio de Janeiro',
        preco: 150.00,
        desconto: 10,
        imagem: 'https://images.unsplash.com/photo-1544989164-31fcd17ad431',
        dataPartida: '2026-06-01',
        companhia: 'Azul'
      },
      {
        origem: 'São Paulo',
        destino: 'Salvador',
        preco: 350.00,
        desconto: 20,
        imagem: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325',
        dataPartida: '2026-06-05',
        companhia: 'Latam'
      },
      {
        origem: 'Rio de Janeiro',
        destino: 'Fortaleza',
        preco: 400.00,
        desconto: 15,
        imagem: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f',
        dataPartida: '2026-06-10',
        companhia: 'Gol'
      }
    ]
  });

  console.log('Seed concluído!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());