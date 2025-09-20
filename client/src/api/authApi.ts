import axios from 'axios';
import type{ RegisterData, User } from '../types/auth';

// Instancia Axios con la URL base de la API
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

// Función para registrar un usuario
export const registerUser = async (data: RegisterData): Promise<User> => {
  const response = await apiClient.post<User>('/auth/register', data);
  return response.data;
};