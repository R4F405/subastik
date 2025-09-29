import React, { useState } from 'react';

const Menu = () => {
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
            Coches
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            Motos
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            Motor y accesorios
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            Moda y accesorios
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            Inmobiliaria
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            Tecnología
          </a>
          <a href="#" className="text-gray-800 hover:text-red-500">
            Informática
          </a>
        </div>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="px-8 py-4 bg-gray-100">
          <a href="#" className="block text-gray-800 hover:text-red-500">
            Tecnología y electrónica
          </a>
          <a href="#" className="block text-gray-800 hover:text-red-500">
            Móviles y Telefonía
          </a>
          <a href="#" className="block text-gray-800 hover:text-red-500">
            Informática
          </a>
        </div>
      )}
    </nav>
  );
};

export default Menu;