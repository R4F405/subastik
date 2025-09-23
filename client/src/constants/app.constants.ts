// Constantes de la aplicación
export const APP_CONFIG = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  APP_NAME: 'Subastik',
  VERSION: '0.0.1',
} as const;

// Constantes de rutas
export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  DASHBOARD: '/dashboard',
  AUCTIONS: '/auctions',
  PROFILE: '/profile',
} as const;

// Constantes de autenticación
export const AUTH_CONFIG = {
  TOKEN_KEY: 'subastik_token',
  REFRESH_TOKEN_KEY: 'subastik_refresh_token',
  USER_KEY: 'subastik_user',
} as const;