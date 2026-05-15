import { describe, it, expect } from "vitest";
import { HotelEntity } from "../../domain/hotelEntity";

describe("HotelEntity", () => {
  it("deve criar uma instância de HotelEntity com os dados corretos", () => {
    const data = new Date();
    const hotel = new HotelEntity(
      1,
      "Hotel Exemplo",
      "Um excelente hotel",
      500,
      5,
      "https://example.com/hotel.jpg",
      "Rio de Janeiro",
      true,
      data,
      data
    );

    expect(hotel.getId()).toBe(1);
    expect(hotel.getNome()).toBe("Hotel Exemplo");
    expect(hotel.getDescricao()).toBe("Um excelente hotel");
    expect(hotel.getPreco()).toBe(500);
    expect(hotel.getEstrelas()).toBe(5);
    expect(hotel.getImagem()).toBe("https://example.com/hotel.jpg");
    expect(hotel.getLocalizacao()).toBe("Rio de Janeiro");
    expect(hotel.getDestaque()).toBe(true);
  });

  it("deve retornar os valores corretos dos getters", () => {
    const data = new Date("2025-05-15");
    const hotel = new HotelEntity(
      2,
      "Hotel Normal",
      "Hotel comum",
      200,
      3,
      "https://example.com/hotel2.jpg",
      "São Paulo",
      false,
      data,
      data
    );

    expect(hotel.getDestaque()).toBe(false);
    expect(hotel.getEstrelas()).toBe(3);
    expect(hotel.getPreco()).toBe(200);
  });
});
