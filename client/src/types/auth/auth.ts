// Datos que enviamos al backend para registrar un usuario
export interface RegisterData {
  name: string;
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