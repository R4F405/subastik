import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { AUTH_CONFIG } from '../constants';

// Tipos para el contexto de autenticación
interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  isLoading: boolean;
}

// Crear el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider del contexto
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar datos de autenticación del localStorage al iniciar
    const savedToken = storage.get<string>(AUTH_CONFIG.TOKEN_KEY);
    const savedUser = storage.get<User>(AUTH_CONFIG.USER_KEY);

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(savedUser);
    }

    setIsLoading(false);
  }, []);

  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
    storage.set(AUTH_CONFIG.TOKEN_KEY, newToken);
    storage.set(AUTH_CONFIG.USER_KEY, newUser);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    storage.remove(AUTH_CONFIG.TOKEN_KEY);
    storage.remove(AUTH_CONFIG.USER_KEY);
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!token && !!user,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook para usar el contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};