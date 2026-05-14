export class Passagem {
  id: number;
  origem: string;
  destino: string;
  preco: number;
  desconto: number;
  imagem: string;
  dataPartida: string;
  companhia: string;

  constructor(
    id: number,
    origem: string,
    destino: string,
    preco: number,
    desconto: number,
    imagem: string,
    dataPartida: string,
    companhia: string,
  ) {
    this.id = id;
    this.origem = origem;
    this.destino = destino;
    this.preco = preco;
    this.desconto = desconto;
    this.imagem = imagem;
    this.dataPartida = dataPartida;
    this.companhia = companhia;
  }

  getId(): number {
    return this.id;
  }
  getOrigem(): string {
    return this.origem;
  }
  getDestino(): string {
    return this.destino;
  }
  getPreco(): number {
    return this.preco;
  }
  getDesconto(): number {
    return this.desconto;
  }
  getImagem(): string {
    return this.imagem;
  }
  getDataPartida(): string {
    return this.dataPartida;
  }
  getCompanhia(): string {
    return this.companhia;
  }
}
