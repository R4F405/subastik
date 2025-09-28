import '@testing-library/jest-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import authEs from '../locales/es/auth.json';
import commonEs from '../locales/es/common.json';
import authEn from '../locales/en/auth.json';
import commonEn from '../locales/en/common.json';

// Inicializa i18next
i18n.use(initReactI18next).init({
  lng: 'es', // Establece un idioma por defecto para los tests
  fallbackLng: 'es',
  ns: ['auth', 'common'],
  defaultNS: 'common',
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
  interpolation: {
    escapeValue: false, // React ya se encarga de esto
  },
});