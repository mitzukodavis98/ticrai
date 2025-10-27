import { notFound } from "next/navigation";
import { DestinationDetailProps } from "@/index";
import axios from "axios";

// URL general
const URL = axios.create({
  baseURL: "https://vibrantperu.com/api/v1/",
  headers: {
    "x-api-key": "5a941ee8cb9c9c5fc9b879eb9129d457f38b8147",
    "Content-Type": "application/json",
  },
});

// Función para obtener datos de los destinos diferentes al actual
export async function getAllDestination(language: string) {
  return URL.get(`destination/${language}`);
}

// Define un tipo para la respuesta de la API
type DestinationsResponse = {
  data: DestinationDetailProps[];
};

// Declara la variable con tipo explícito
const dataCache: Record<string, DestinationsResponse> = {};

// Función para obtener los datos de destinos
export async function loadDestination(
  language: string,
  forceRefresh = false
): Promise<DestinationsResponse> {
  if (forceRefresh || !dataCache[language]) {
    dataCache[language] = await getAllDestination(language);
  }
  return dataCache[language];
}

// Función para obtener datos de un destino por su slug
export async function getDestination(
  slug: string,
  language: string
): Promise<DestinationDetailProps> {
  try {
    // Intenta primero con el idioma solicitado
    const destinations = await loadDestination(language);
    const destination = destinations.data.find(d => d.slug === slug);
    
    if (destination) return destination;

    // Si no se encuentra, busca en el otro idioma
    const altLanguage = language === 'es' ? 'en' : 'es';
    const altDestinations = await loadDestination(altLanguage);
    const altDestination = altDestinations.data.find(d => d.slug === slug);

    if (!altDestination) notFound();

    // Devuelve la versión en el idioma solicitado
    return (await loadDestination(language)).data.find(
      d => d.id === altDestination.id
    ) || notFound();

  } catch {
    notFound();
  }
}

export async function getOtherDestination(
  slug: string,
  language: string
): Promise<DestinationDetailProps[]> {
  // Primero cargar los datos
  const destinations = await loadDestination(language);

  // Luego filtrar los destinos
  const otherDestinations = destinations.data.filter(
    (destination: DestinationDetailProps) => destination.slug !== slug
  );

  return otherDestinations;
}
