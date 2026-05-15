export class HotelEntity {
  private id: number;
  private nome: string;
  private descricao: string;
  private preco: number;
  private estrelas: number;
  private imagem: string;
  private localizacao: string;
  private destaque: boolean;
  private criadoEm: Date;
  private atualizadoEm: Date;

  constructor(
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    estrelas: number,
    imagem: string,
    localizacao: string,
    destaque: boolean,
    criadoEm: Date,
    atualizadoEm: Date
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.estrelas = estrelas;
    this.imagem = imagem;
    this.localizacao = localizacao;
    this.destaque = destaque;
    this.criadoEm = criadoEm;
    this.atualizadoEm = atualizadoEm;
  }

  public getId(): number {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getPreco(): number {
    return this.preco;
  }

  public getEstrelas(): number {
    return this.estrelas;
  }

  public getImagem(): string {
    return this.imagem;
  }

  public getLocalizacao(): string {
    return this.localizacao;
  }

  public getDestaque(): boolean {
    return this.destaque;
  }

  public getCriadoEm(): Date {
    return this.criadoEm;
  }

  public getAtualizadoEm(): Date {
    return this.atualizadoEm;
  }
}
