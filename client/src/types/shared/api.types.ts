// Tipos compartidos para respuestas de API
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Tipos para estado de carga
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// Tipos para paginación
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}