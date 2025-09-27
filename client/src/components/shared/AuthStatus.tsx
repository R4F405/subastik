import React from 'react';
import { useAuth } from '../../context';

export const AuthStatus: React.FC = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="text-gray-600">
        Cargando estado de autenticación...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="text-gray-600">
        No autenticado
      </div>
    );
  }

  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">¡Bienvenido, {user?.name}!</p>
          <p className="text-sm">{user?.email}</p>
        </div>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};