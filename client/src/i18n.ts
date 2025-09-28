import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar los ficheros de traducción
import authEs from './locales/es/auth.json';
import commonEs from './locales/es/common.json';
import authEn from './locales/en/auth.json';
import commonEn from './locales/en/common.json';

i18n
  // Detecta el idioma del navegador del usuario
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Recursos de traducción
    resources: {
      es: {
        auth: authEs,
        common: commonEs,
      },
      en: {
        auth: authEn,
        common: commonEn,
      },
    },
    // Idioma por defecto si no se detecta ninguno
    fallbackLng: 'es',
    // Namespaces por defecto a cargar
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;