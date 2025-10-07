import axios from 'axios';
import { APP_CONFIG } from '../constants';
import type { Category } from '../types/category/category';

const apiClient = axios.create({
  baseURL: APP_CONFIG.API_BASE_URL,
});

export const getCategories = async (): Promise<Category[]> => {
  const response = await apiClient.get<Category[]>('/categories');
  return response.data;
};