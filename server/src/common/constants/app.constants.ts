// Constantes de la aplicación
export const APP_CONFIG = {
  PORT: process.env.PORT || 3000,
  API_PREFIX: 'api',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',
} as const;

// Constantes de autenticación
export const AUTH_CONFIG = {
  JWT_SECRET: process.env.JWT_SECRET || 'default-secret',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  BCRYPT_ROUNDS: 10,
} as const;