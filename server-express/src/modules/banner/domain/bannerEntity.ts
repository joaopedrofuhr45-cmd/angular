export class BannerEntity {
  private id: number;
  private titulo: string;
  private descricao: string;
  private imagem: string;
  private linkDestino: string;
  private ativo: boolean;
  private tipo: "hero" | "carousel";
  private criadoEm: Date;
  private atualizadoEm: Date;

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    imagem: string,
    linkDestino: string,
    ativo: boolean,
    tipo: "hero" | "carousel",
    criadoEm: Date,
    atualizadoEm: Date
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.imagem = imagem;
    this.linkDestino = linkDestino;
    this.ativo = ativo;
    this.tipo = tipo;
    this.criadoEm = criadoEm;
    this.atualizadoEm = atualizadoEm;
  }

  public getId(): number {
    return this.id;
  }

  public getTitulo(): string {
    return this.titulo;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getImagem(): string {
    return this.imagem;
  }

  public getLinkDestino(): string {
    return this.linkDestino;
  }

  public getAtivo(): boolean {
    return this.ativo;
  }

  public getTipo(): "hero" | "carousel" {
    return this.tipo;
  }

  public getCriadoEm(): Date {
    return this.criadoEm;
  }

  public getAtualizadoEm(): Date {
    return this.atualizadoEm;
  }
}
