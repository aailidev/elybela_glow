import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Spanish is always bundled — it's the fallback language
import es from './locales/es.json';

const SUPPORTED = ['es', 'ca', 'fr', 'en', 'de', 'ro'];

// Mirror the detector logic to know which language to preload
function detectInitialLang() {
  const query   = new URLSearchParams(window.location.search).get('lang');
  const stored  = localStorage.getItem('i18nextLng');
  const browser = navigator.language?.split('-')[0];
  const candidate = query || stored || browser || 'es';
  return SUPPORTED.includes(candidate) ? candidate : 'es';
}

const initialLang = typeof window !== 'undefined' ? detectInitialLang() : 'es';

// Locale loader map — each entry becomes a separate chunk at build time
const loaders = {
  ca: () => import('./locales/ca.json'),
  fr: () => import('./locales/fr.json'),
  en: () => import('./locales/en.json'),
  de: () => import('./locales/de.json'),
  ro: () => import('./locales/ro.json'),
};

async function bootstrap() {
  // Always have Spanish ready (bundled statically)
  const resources = { es: { translation: es } };

  // Preload the user's detected language so the first render is correct
  if (initialLang !== 'es' && loaders[initialLang]) {
    const mod = await loaders[initialLang]();
    resources[initialLang] = { translation: mod.default };
  }

  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: initialLang,
      fallbackLng: 'es',
      supportedLngs: SUPPORTED,
      detection: {
        order: ['querystring', 'localStorage', 'navigator'],
        lookupQuerystring: 'lang',
        lookupLocalStorage: 'i18nextLng',
        caches: ['localStorage'],
      },
      interpolation: { escapeValue: false },
    });

  // Load remaining locales in the background after the app is interactive
  const remaining = SUPPORTED.filter((l) => l !== 'es' && l !== initialLang);
  remaining.forEach((lang) => {
    loaders[lang]().then((mod) => {
      i18n.addResourceBundle(lang, 'translation', mod.default, true, true);
    });
  });
}

bootstrap();

export default i18n;
