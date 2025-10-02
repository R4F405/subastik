import { Button } from '.';
import { Image } from './Image';
import { Search } from './Search';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation('header');
  const [showAppDownload, setShowAppDownload] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [appDropdownClicked, setAppDropdownClicked] = useState(false);
  const appDropdownRef = useRef<HTMLDivElement>(null);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-xl">
      {/* Logo */}
      <div className="flex items-center mr-4">
        <Image
          src="/Imagenes/LogoSubastik.png"
          alt="Subastik Logo"
          className="w-24 h-24"
        />
      </div>

      {/* Barra de búsqueda */}
      <div className="flex-1 max-w-3xl mr-6">
        <Search placeholder={t('search_placeholder')} />
      </div>

      {/* Botones */}
      <div className="flex items-center gap-3">
        {/* Botón de descarga de la app */}
        <div
          className="relative"
          ref={appDropdownRef}
          onMouseEnter={() => setShowAppDownload(true)}
          onMouseLeave={() => {
            if (!appDropdownClicked) setShowAppDownload(false);
          }}
        >
          <Button
            variant="danger"
            size="lg"
            className="text-red-600 flex items-center gap-2 border-none bg-transparent justify-start text-sm"
            onClick={() => {
              setShowAppDownload((prev) => !prev);
              setAppDropdownClicked((prev) => !prev);
            }}
          >
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            {t('download_app')}
          </Button>
          {showAppDownload && (
            <div className="absolute top-full mt-2 p-4 bg-white text-black shadow-lg rounded z-50">
              <p className="text-sm font-bold mb-2 text-center">
                {t('download_app_title')}
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-black text-white flex items-center gap-2 text-sm">
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
                      d="M4 4h16v16H4z"
                    />
                  </svg>
                  {t('app_store')}
                </Button>
                <Button className="bg-black text-white flex items-center gap-2 text-sm">
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
                      d="M4 4h16v16H4z"
                    />
                  </svg>
                  {t('google_play')}
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Botón de favoritos */}
        <Button
          variant="danger"
          size="lg"
          className="text-red-600 flex items-center gap-2 border-none bg-transparent justify-start text-sm"
          onClick={() => console.log('Favoritos clicked')}
        >
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
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          {t('favorites')}
        </Button>

        {/* Botones actuales */}
        <Button
          variant="primary"
          size="lg"
          className="text-sm"
          onClick={() => (window.location.href = '/login')}
        >
          {t('register_or_login')}
        </Button>
        <Button
          variant="primary"
          size="lg"
          className="flex items-center gap-2 text-sm"
          onClick={() => console.log('Subastar clicked')}
        >
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          {t('auction')}
        </Button>

        {/* Botón de idiomas */}
        <div className="relative">
          <Button
            variant="primary"
            size="lg"
            className="text-red-600 flex items-center gap-2 border-none bg-transparent justify-start text-sm"
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
          >
            <img
              src="/Imagenes/spain.png"
              alt={t('spain')}
              className="h-5 w-5"
            />
            {t('es')}
          </Button>
          {showLanguageDropdown && (
            <div className="absolute top-full mt-2 p-4 bg-white text-black shadow-lg rounded">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <img
                    src="/Imagenes/spain.png"
                    alt={t('spain')}
                    className="h-5 w-5"
                  />
                  {t('es')}
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/Imagenes/france.png"
                    alt={t('france')}
                    className="h-5 w-5"
                  />
                  {t('fr')}
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/Imagenes/uk.png"
                    alt={t('uk')}
                    className="h-5 w-5"
                  />
                  {t('en')}
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/Imagenes/italy.png"
                    alt={t('italy')}
                    className="h-5 w-5"
                  />
                  {t('it')}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};