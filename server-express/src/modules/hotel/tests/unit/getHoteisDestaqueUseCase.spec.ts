import { describe, it, expect, beforeEach, vi } from "vitest";
import { GetHoteisDestaqueUseCase } from "../../application/getHoteisDestaqueUseCase";
import { HotelEntity } from "../../domain/hotelEntity";
import { IHotelRepository } from "../../domain/IHotelRepository";
import { NotFoundError } from "../../../../shared/errors/not-found-Error";

describe("GetHoteisDestaqueUseCase", () => {
  let useCase: GetHoteisDestaqueUseCase;
  let mockRepository: IHotelRepository;

  beforeEach(() => {
    mockRepository = {
      criar: vi.fn(),
      getHoteis: vi.fn(),
      getHoteisDestaque: vi.fn(),
      getById: vi.fn(),
    };

    useCase = new GetHoteisDestaqueUseCase(mockRepository);
  });

  it("deve retornar hoteis em destaque", async () => {
    const data = new Date();
    const hotelEntity = new HotelEntity(
      1,
      "Hotel Destaque",
      "Hotel em destaque",
      500,
      5,
      "https://example.com/hotel.jpg",
      "Rio de Janeiro",
      true,
      data,
      data
    );

    vi.mocked(mockRepository.getHoteisDestaque).mockResolvedValueOnce([
      hotelEntity,
    ]);

    const result = await useCase.execute();

    expect(result).toHaveLength(1);
    expect(result[0].nome).toBe("Hotel Destaque");
    expect(result[0].destaque).toBe(true);
  });

  it("deve lançar erro se nenhum hotel em destaque for encontrado", async () => {
    vi.mocked(mockRepository.getHoteisDestaque).mockResolvedValueOnce([]);

    await expect(useCase.execute()).rejects.toThrow(NotFoundError);
  });
});
