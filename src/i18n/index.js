import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import ca from './locales/ca.json';
import fr from './locales/fr.json';
import en from './locales/en.json';
import de from './locales/de.json';
import ro from './locales/ro.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      ca: { translation: ca },
      fr: { translation: fr },
      en: { translation: en },
      de: { translation: de },
      ro: { translation: ro },
    },
    fallbackLng: 'es',
    supportedLngs: ['es', 'ca', 'fr', 'en', 'de', 'ro'],
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
