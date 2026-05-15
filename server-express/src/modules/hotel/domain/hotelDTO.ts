export interface HotelCreateDTO {
  nome: string;
  descricao: string;
  preco: number;
  estrelas: number;
  imagem: string;
  localizacao: string;
  destaque?: boolean;
}

export interface HotelResponseDTO {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  estrelas: number;
  imagem: string;
  localizacao: string;
  destaque: boolean;
  criadoEm: string;
  atualizadoEm: string;
}
