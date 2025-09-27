import React, { useState } from 'react';

interface SearchProps {
  onSearch?: (searchTerm: string) => void;
  placeholder?: string;
}

export const Search: React.FC<SearchProps> = ({ 
  onSearch = () => {}, 
  placeholder = "Buscar..." 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center w-full">
        {/* Icono de lupa */}
        <div className="absolute left-4 text-gray-400">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>

        {/* Campo de búsqueda */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-2.5 rounded-full bg-white text-gray-700 placeholder-gray-400 
                   border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 
                   focus:border-transparent shadow-sm"
        />
      </div>
    </form>
  );
};
