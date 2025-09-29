// Datos que enviamos al backend para registrar un usuario
export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

// Datos que enviamos al backend para iniciar sesión
export interface LoginData {
  email: string;
  password: string;
}

// Datos del usuario que recibimos del backend tras un registro exitoso
export interface User {
  id: string;
  email: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
}

// Respuesta completa del backend tras el login
export interface AuthResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
    name: string | null;
  };
}