import es from '@/app/[lang]/Translations/es.json';
import en from '@/app/[lang]/Translations/en.json';
import { BodyProps } from '@/index';
import { notFound } from 'next/navigation';

// Define los idiomas válidos
const VALID_LANGUAGES = ['es', 'en'] as const;
type ValidLanguage = typeof VALID_LANGUAGES[number];

// Tipo para el objeto de traducciones completo
type Translations = {
  es: BodyProps;
  en: BodyProps;
};

// Objeto con las traducciones
const translations: Translations = { es, en };

// Función para validar si el idioma es válido
function isValidLanguage(lang: string): lang is ValidLanguage {
  return VALID_LANGUAGES.includes(lang as ValidLanguage);
}

// Función principal con validación
export const getTranslations = (lang: string): BodyProps => {
  if (!isValidLanguage(lang)) {
    notFound(); // Lanza directamente not found si el idioma no es válido
  }
  return translations[lang];
};

// Función para acceder a valores específicos con validación
export function getTranslation(
  lang: string,
  key: keyof BodyProps
) {
  if (!isValidLanguage(lang)) {
    notFound(); // Lanza directamente not found si el idioma no es válido
  }
  return translations[lang][key];
}
