import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import deTranslation from '../language/de.json';
import enTranslation from '../language/en.json';

const resources = {
  en: {
    translation: enTranslation
  },
  de: {
    translation: deTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "de", // Standard-Sprache
    fallbackLng: "de", // Fallback-Sprache
    interpolation: {
      escapeValue: false
    }
  });
  
export default i18n;