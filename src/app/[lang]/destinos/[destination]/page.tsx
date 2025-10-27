import {
  DestinationBanner,
  ImageGallery,
  DescriptionPage,
  MapComponent,
  OtherDestinations,
  getDestination,
  getOtherDestination,
} from "@/index";
import { Metadata } from "next";
import { redirect } from "next/navigation";

// Desactiva la caché a nivel de ruta para asegurar que los datos se recargan con cada cambio de idioma
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Definición correcta para Next.js 15 según el error
type Props = {
  params: Promise<{ destination: string; lang: string }>; // Parámetro como Promise
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Metadata dinámica para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    // Esperamos a params
    const resolvedParams = await params;
    const slug = resolvedParams.destination;

    // Esperamos la resolución de la Promise
    const lang = resolvedParams.lang;

    // Obtiene los datos del destino
    const destination = await getDestination(slug, lang);

    return {
      title: `${destination.location}`,
      description:
        destination.overview?.substring(0, 160) ||
        `Descubre ${destination.location} con Vibrant Travel`,
    };
  } catch {
    return {
      title: "Destino no encontrado | Vibrant Travel",
      description: "Lo sentimos, el destino que buscas no está disponible",
    };
  }
}

export default async function PageDestination({ params }: Props) {
  // Esperamos a params como indica el error
  const resolvedParams = await params;
  const slug = resolvedParams.destination;

  // Esperamos la resolución de la Promise
  const lang = resolvedParams.lang;

  // Forzar una nueva solicitud limpiando cualquier caché
  const cacheBreaker = Date.now(); // Añadir un parámetro que cambie en cada renderizado

  //Obtenemos los datos en ambos idiomas
  const DestinationsSpanish = await getDestination(slug, "es");
  const DestinationsEnglish = await getDestination(slug, "en");
  //generamos un diccionario con los datos
  const DiccionaryLanguageSlugs: Record<string, Record<string, string>> = {};
  //llenamos el diccionario con las traducciones correspondientes
  DiccionaryLanguageSlugs["es"] = {};
  DiccionaryLanguageSlugs["en"] = {};

  //llenamos el diccionario con los slugs
  DiccionaryLanguageSlugs["es"][DestinationsEnglish.slug] =
    DestinationsSpanish.slug;
  DiccionaryLanguageSlugs["en"][DestinationsSpanish.slug] =
    DestinationsEnglish.slug;
  console.log(DiccionaryLanguageSlugs);

  //verificar si el slug necesita traduccion
  const traslateSlug = DiccionaryLanguageSlugs[lang]?.[slug];

  // Solo redirigir si existe traducción Y es diferente al slug actual
  if (traslateSlug && traslateSlug !== slug) {
    redirect(`/${lang}/destinos/${traslateSlug}`);
  }

  // Obtiene los datos del destino usando el slug actual extraído
  const destination = await getDestination(slug, lang);
  //console.log(destination);

  // Obtiene datos de los destinations diferentes al actual
  const otherDestinations = await getOtherDestination(slug, lang);
  const otherDestinationsList = otherDestinations.slice(0, 3);

  return (
    <>
      <main>
        <DestinationBanner
          location={destination.location}
          banner={`${destination.banner}?v=${cacheBreaker}`}
          lang={lang}
        />
        <ImageGallery images={destination.images} />
        <DescriptionPage
          location={destination.location}
          overview={destination.overview}
          top_highlights_text={destination.topHighlights}
          top_highlights_list={destination.checks}
          included={destination.included}
          excluded={destination.excluded}
          lang={lang}
          {...destination.characteristics}
        />
        <MapComponent coordinates={destination.coordinates} />
        <OtherDestinations Destinations={otherDestinationsList} lang={lang} />
      </main>
    </>
  );
}
