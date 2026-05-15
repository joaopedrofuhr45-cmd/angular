import { describe, it, expect } from "vitest";
import { Passagem } from "../../domain/passagenEntity";

describe("PassagemEntity", () => {
  it("deve criar uma instância de PassagemEntity com os dados corretos", () => {
    const passagem = new Passagem(
      1,
      "São Paulo",
      "Rio de Janeiro",
      350,
      15,
      "https://example.com/passagem.jpg",
      "2025-05-20",
      "Airline XYZ"
    );

    expect(passagem.id).toBe(1);
    expect(passagem.origem).toBe("São Paulo");
    expect(passagem.destino).toBe("Rio de Janeiro");
    expect(passagem.preco).toBe(350);
    expect(passagem.desconto).toBe(15);
  });

  it("deve retornar todos os atributos corretamente", () => {
    const passagem = new Passagem(
      2,
      "Salvador",
      "Brasília",
      450,
      20,
      "https://example.com/passagem2.jpg",
      "2025-06-01",
      "Airline ABC"
    );

    expect(passagem.origem).toBe("Salvador");
    expect(passagem.companhia).toBe("Airline ABC");
  });
});
