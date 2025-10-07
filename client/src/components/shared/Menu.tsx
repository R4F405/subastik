import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation('menu');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
          </a>
        </div>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute bg-white shadow-md mt-2 w-[300px] border border-gray-200">
          {/* Botón de cierre */}
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 focus:outline-none"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Título del menú */}
          <div className="px-4 py-2 border-b border-gray-200">
            <p className="text-lg font-bold">Busca por Categoría</p>
          </div>

          <a href="#" className="block text-gray-800 hover:text-red-500 px-4 py-2">
            {t('technology_electronics')}
          </a>
          <a href="#" className="block text-gray-800 hover:text-red-500 px-4 py-2">
            {t('mobiles_telephony')}
          </a>
          <a href="#" className="block text-gray-800 hover:text-red-500 px-4 py-2">
            {t('computing')}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Menu;