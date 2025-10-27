"use client";

import { useEffect, useRef, useState, useCallback } from "react"; // Añadido useCallback

// Definir tipos más específicos para Google Maps
interface GoogleMapMarker {
  setMap: (map: GoogleMap | null) => void;
}

interface GoogleMap {
  setCenter: (location: GoogleMapLocation) => void;
  markers?: GoogleMapMarker[];
}

interface GoogleMapLocation {
  lat: number;
  lng: number;
}

interface GoogleMapsApi {
  maps: {
    Map: new (element: HTMLElement, options: GoogleMapOptions) => GoogleMap;
    Marker: new (options: GoogleMapMarkerOptions) => GoogleMapMarker;
  };
}

interface GoogleMapOptions {
  center: GoogleMapLocation;
  zoom: number;
  mapTypeId: string;
  mapTypeControl: boolean;
}

interface GoogleMapMarkerOptions {
  position: GoogleMapLocation;
  map: GoogleMap;
  title: string;
  icon?: {
    url: string;
  };
}

declare global {
  interface Window {
    initMap: () => void;
    google: GoogleMapsApi;
    mapsApiLoaded: boolean;
    mapsApiLoading: boolean;
    mapsCallbacks: Array<() => void>;
  }
}

// Inicializar variables globales si no existen
if (typeof window !== "undefined") {
  window.mapsApiLoaded = window.mapsApiLoaded || false;
  window.mapsApiLoading = window.mapsApiLoading || false;
  window.mapsCallbacks = window.mapsCallbacks || [];
}

// Función para cargar la API de Google Maps una sola vez
function loadGoogleMapsApi(callback: () => void) {
  if (typeof window === "undefined") return;

  // Si ya está cargado, ejecutar callback inmediatamente
  if (window.mapsApiLoaded) {
    callback();
    return;
  }

  // Añadir callback a la cola
  window.mapsCallbacks.push(callback);

  // Si ya está en proceso de carga, no hacer nada más
  if (window.mapsApiLoading) {
    return;
  }

  // Marcar como en proceso de carga
  window.mapsApiLoading = true;

  // Función global de callback para Google Maps
  window.initMap = function () {
    window.mapsApiLoaded = true;
    window.mapsApiLoading = false;

    // Ejecutar todos los callbacks pendientes
    window.mapsCallbacks.forEach((cb) => cb());
    window.mapsCallbacks = [];
  };

  // Cargar el script de Google Maps
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const script = document.createElement("script");
  script.id = "google-maps-script"; // Añadir ID para asegurar que solo se carga una vez
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.async = true;
  script.defer = true;

  // Manejar errores
  script.onerror = () => {
    window.mapsApiLoading = false;
    console.error("Error loading Google Maps API");
  };

  // Verificar si el script ya existe antes de añadirlo
  if (!document.getElementById("google-maps-script")) {
    document.head.appendChild(script);
  }
}

export function MapComponent({ coordinates }: { coordinates: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const [mapInstance, setMapInstance] = useState<GoogleMap | null>(null);

  // Parsear las coordenadas del string
  const parseCoordinates = useCallback(
    (coordString: string): GoogleMapLocation => {
      try {
        const [lat, lng] = coordString
          .split(",")
          .map((coord) => parseFloat(coord.trim()));
        if (isNaN(lat) || isNaN(lng)) {
          throw new Error("Coordenadas no válidas");
        }
        return { lat, lng };
      } catch (error) {
        console.error("Error al parsear coordenadas:", error);
        setMapError(
          "Error en el formato de coordenadas. Debe ser 'latitud,longitud'"
        );
        return { lat: 0, lng: 0 }; // Coordenadas por defecto en caso de error
      }
    },
    []
  );

  // Memoizar la función initializeMap con useCallback
  const initializeMap = useCallback(() => {
    if (!mapRef.current || !window.google?.maps) return;

    try {
      // Parsear las coordenadas del string recibido
      const location = parseCoordinates(coordinates);

      // Crear el mapa con vista satelital
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 17,
        mapTypeId: "satellite",
        mapTypeControl: true, // Control de cambio de tipo de mapa
      });

      setMapInstance(map);

      // Añadir un marcador para mostrar la coordenada
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "Ubicación",
        // Puedes personalizar el color del marcador usando diferentes íconos
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
        },
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      setMapError(
        "Error al inicializar el mapa. Por favor, verifica tu conexión y API key."
      );
    }
  }, [coordinates, parseCoordinates]); // Dependencias del callback

  // Efecto para cargar el mapa cuando cambian las coordenadas
  useEffect(() => {
    // Si tenemos un mapa ya inicializado y las coordenadas cambian
    if (mapInstance && window.google?.maps) {
      try {
        const location = parseCoordinates(coordinates);

        // Actualizar el centro del mapa
        mapInstance.setCenter(location);

        // Limpiar marcadores anteriores
        mapInstance.markers?.forEach((marker: GoogleMapMarker) =>
          marker.setMap(null)
        );
        mapInstance.markers = [];

        // Añadir nuevo marcador
        const marker = new window.google.maps.Marker({
          position: location,
          map: mapInstance,
          title: "Ubicación",
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
          },
        });

        // Almacenar el marcador para poder eliminarlo después
        mapInstance.markers = [marker];
      } catch (error) {
        console.error("Error updating map coordinates:", error);
      }
    }
  }, [coordinates, mapInstance, parseCoordinates]);

  // Efecto para inicializar el mapa
  useEffect(() => {
    // Cargar la API de Google Maps una sola vez
    loadGoogleMapsApi(() => {
      initializeMap();
    });

    // Establecer un tiempo de espera para la carga
    const timeoutId = setTimeout(() => {
      if (!window.google?.maps) {
        setMapError(
          "Error al cargar Google Maps. Por favor, desactiva los bloqueadores de anuncios y recarga la página."
        );
      }
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [initializeMap]); // Ahora incluimos initializeMap como dependencia

  if (mapError) {
    return (
      <div className="h-96 w-full flex justify-center items-center border border-gray-300 rounded-lg p-5 text-center bg-gray-100">
        <div>
          <p className="text-red-500">{mapError}</p>
          <p className="mt-2">Posibles causas:</p>
          <ul className="text-left mt-2">
            <li>Bloqueador de anuncios activado</li>
            <li>Problemas con la conexión a Internet</li>
            <li>Problema con la API key de Google Maps</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      className="h-[500px] w-3/5 mx-auto my-16 rounded-lg shadow-md max-lg:w-4/5 max-lg:h-[420px] max-md:w-[90%] max-md:h-96 max-sm:w-[95%] max-sm:h-80"
    />
  );
}
