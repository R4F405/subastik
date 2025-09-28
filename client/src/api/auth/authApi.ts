import axios from 'axios';
import type{ RegisterData, User } from '../../types/auth/auth';
import type { AuthResponse, LoginData } from '../../types/auth/auth';
import { APP_CONFIG } from '../../constants';

// Instancia Axios con la URL base de la API
const apiClient = axios.create({
  baseURL: APP_CONFIG.API_BASE_URL,
});

// Función para registrar un usuario
export const registerUser = async (data: RegisterData): Promise<User> => {
  const response = await apiClient.post<User>('/auth/register', data);
  return response.data;
};

export const loginUser = async (data: LoginData): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>('/auth/login', data);
  return response.data;
};