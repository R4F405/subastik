import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation('menu');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md text-xl">
      <div className="flex items-center justify-start px-8 py-4">
        {/* Botón de menú hamburguesa */}
        <button
          className="text-gray-600 focus:outline-none mr-6"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Opciones principales */}
        <div className="flex space-x-6 items-center">
          
          <a href="#" className="text-gray-800 hover:text-red-500">
<<<<<<< HEAD
            Motor
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            Electrónica
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            Moda
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            Consolas y videojuegos
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            Coleccionismo
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            Móviles y Telefonía
=======
            {t('cars')}
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            {t('motorcycles')}
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            {t('motor_accessories')}
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            {t('fashion_accessories')}
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            {t('real_estate')}
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            {t('technology')}
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            {t('computing')}
>>>>>>> 18f707e5f9c5757cafaf71a2050b054b911d235d
          </a>
        </div>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="px-8 py-4 bg-gray-100">
          <a href="#" className="block text-gray-800 hover:text-red-500">
            {t('technology_electronics')}
          </a>
          <a href="#" className="block text-gray-800 hover:text-red-500">
            {t('mobiles_telephony')}
          </a>
          <a href="#" className="block text-gray-800 hover:text-red-500">
            {t('computing')}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Menu;