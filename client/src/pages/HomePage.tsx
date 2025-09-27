import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { Button } from '../components/shared';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Subastik</h1>
        <p className="text-xl text-gray-300 mb-8">
          Plataforma de Subastas en Tiempo Real
        </p>
        <div className="space-x-4">
          <Link to={ROUTES.REGISTER}>
            <Button
              variant="danger"
              size="lg"
              className="bg-red-600 hover:bg-red-700"
            >
              Registrarse
            </Button>
          </Link>
          <Link to={ROUTES.LOGIN}>
            <Button
              variant="secondary"
              size="lg"
              className="bg-gray-600 hover:bg-gray-700 text-white"
            >
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;