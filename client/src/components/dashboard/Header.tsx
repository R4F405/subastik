import { Button } from '../shared';
import { Image } from '../shared/Image';
import { Search } from '../shared/Search';

export const Header = () => {
  

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/Imagenes/Logo.jpg"
          alt="Subastik Logo"
          className="w-20 h-20"
        />
        <span className="ml-2 text-2xl font-bold text-red-500">Subastik</span>
      </div>

      {/* Barra de búsqueda */}
      <div className="flex-1 max-w-7xl">
        <Search 
          placeholder="¿Qué estás buscando?"
        />
      </div>

      {/* Botones */}
      <div className="flex gap-2 mr-8">
        <Button
          variant="danger"
          size="lg"
          className="bg-red-600 hover:bg-red-700 focus:ring-offset-gray-800 focus:ring-red-500"
          onClick={() => (window.location.href = '/login')}
        >
         Registrate o inicia sesión
        </Button>
        <Button
          variant="danger"
          size="lg"
          className="bg-red-600 hover:bg-red-700 focus:ring-offset-gray-800 focus:ring-red-500 flex items-center gap-2"
          onClick={() => console.log('Subastar clicked')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Subastar
        </Button>
      </div>
    </header>
  );
};