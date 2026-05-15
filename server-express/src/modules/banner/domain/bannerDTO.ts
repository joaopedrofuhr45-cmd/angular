export interface BannerCreateDTO {
  titulo: string;
  descricao: string;
  imagem: string;
  linkDestino: string;
  tipo: "hero" | "carousel";
}

export interface BannerResponseDTO {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  linkDestino: string;
  ativo: boolean;
  tipo: "hero" | "carousel";
  criadoEm: string;
  atualizadoEm: string;
}
