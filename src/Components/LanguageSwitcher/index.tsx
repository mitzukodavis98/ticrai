"use client"; // Importante: es un Client Component
import { usePathname, useRouter } from "next/navigation";

// Mapeo simple de rutas (español a inglés)
const routeTranslations: Record<string, string> = {
  // De español a inglés
  'sobre-nosotros': 'about-us',
  'destinos': 'destinations',
  'vibrant-blog': 'vibrant-blog',
  'Vibrantapp': 'Vibrantapp',
  // De inglés a español
  'about-us': 'sobre-nosotros',
  'destinations': 'destinos',
};

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    if (currentLang === newLang) return;

    const segments = pathname.split('/').filter(Boolean);
    
    // 1. Conserva el primer segmento (idioma)
    const newSegments = [newLang]; 

    // 2. Traduce solo las rutas fijas (no aplica a slugs dinámicos)
    for (let i = 1; i < segments.length; i++) {
      const segment = segments[i];
      
      // Si es una ruta fija y tiene traducción, aplicarla
      if (i === 1 && routeTranslations[segment]) { 
        newSegments.push(routeTranslations[segment]);
      } else {
        // Mantén slugs dinámicos ([destination], [blogNotice]) sin cambios
        newSegments.push(segment);
      }
    }

    router.push(`/${newSegments.join('/')}`);
  };


  return (
    <select
      onChange={handleChange}
      value={currentLang}
      className="z-40 p-2 bg-green-Vibrant border-none rounded-lg text-white font-semibold text-[13px] cursor-pointer"
    >
      <option className="text-black bg-green-50" value="es">
        🇪🇸 Español
      </option>
      <option className="text-black bg-green-50" value="en">
        🇬🇧 English
      </option>
    </select>
  );
}