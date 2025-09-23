// Tipos de autenticación
export type UserRole = 'USER' | 'ADMIN';

export type AuthProvider = 'LOCAL' | 'GOOGLE' | 'FACEBOOK';

// Tipos de respuesta de API
export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
};