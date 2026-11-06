// O que a API devolve (HabitoResponseDTO)
export interface Habito {
  id: number;
  descricao: string;
  diasConsecutivos: number;
  metaDias: number;
  conquistaAlcancada: boolean;
}

// O que a API recebe no POST e no PUT (HabitoRequestDTO)
export interface HabitoRequest {
  descricao: string;
  metaDias: number;
}