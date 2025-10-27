"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface TimelineEntry {
  title: string;
  description: string;
  image: string;
}

interface TimelineDataset {
  [year: string]: TimelineEntry;
}

interface TimelineContent {
  es: TimelineDataset;
  en: TimelineDataset;
}

// Datos estáticos bilingües
const STATIC_TIMELINE_DATA: TimelineContent = {
  es: {
    "2012": {
      title: "Fundación de la Compañía",
      description: "La empresa inicia sus operaciones centrándose en producción de video digital.",
      image: "/1.png",
    },
    "2013": {
      title: "Expansión de Servicios",
      description: "Se agregan servicios de análisis y hosting de video a la oferta principal.",
      image: "/2.png",
    },
    "2014": {
      title: "Crecimiento Internacional",
      description: "La compañía expande sus operaciones a mercados internacionales.",
      image: "/3.png",
    },
    "2020": {
      title: "Transformación Digital",
      description: "Renovación completa de la plataforma con nuevas tecnologías.",
      image: "/4.png",
    },
  },
  en: {
    "2012": {
      title: "Company Foundation",
      description: "The company begins operations focusing on digital video production.",
      image: "/1.png",
    },
    "2013": {
      title: "Service Expansion",
      description: "Video analysis and hosting services are added to the main offering.",
      image: "/2.png",
    },
    "2014": {
      title: "International Growth",
      description: "The company expands its operations to international markets.",
      image: "/3.png",
    },
    "2020": {
      title: "Digital Transformation",
      description: "Complete platform renewal with new technologies.",
      image: "/4.png",
    },
  }
};

export function TimeLine({ lang }: { lang: keyof TimelineContent }) {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [years, setYears] = useState<string[]>([]);

  // Inicialización estática
  useEffect(() => {
    const timelineData = STATIC_TIMELINE_DATA[lang];
    const yearsList = Object.keys(timelineData).sort((a, b) => Number(a) - Number(b));
    setYears(yearsList);
    setSelectedYear(yearsList[0]);
  }, [lang]);

  const handleYearChange = (year: string) => {
    if (year === selectedYear) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedYear(year);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  if (!selectedYear) {
    return (
      <div className="w-2/3 mx-auto p-8 flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse text-gray-500">
          Loading timeline...
        </div>
      </div>
    );
  }

  const currentData = STATIC_TIMELINE_DATA[lang][selectedYear];

  return (
    <div className="w-2/3 mb-16 flex flex-row justify-between gap-4 h-auto bg-white p-8 mx-auto max-2xl:w-[72%] max-xl:w-4/5 max-lg:w-[95%] max-md:flex-col">
      {/* Year buttons */}
      <div className="flex flex-col max-md:flex-row gap-2 max-md:justify-center max-md:flex-wrap">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => handleYearChange(year)}
            className={`w-36 h-12 flex items-center justify-center font-bold max-[500px]:w-24 ${
              selectedYear === year
                ? "bg-green-Vibrant text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            } rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div
        className={`w-4/5 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform max-md:w-full ${
          isTransitioning
            ? "opacity-0 translate-x-4"
            : "opacity-100 translate-x-0"
        }`}
      >
        <Image
          width={800}
          height={800}
          src={currentData.image}
          alt={`${selectedYear} Event`}
          className="w-full h-[450px] max-2xl:h-[400px] max-xl:h-[350px] max-md:h-[350px] max-sm:h-[300px] max-[500px]:h-[250px] object-cover transition-all duration-300 ease-in-out"
        />
        <div className="p-8 leading-tight max-sm:p-4">
          <h2 className="text-3xl font-bold mb-4 max-sm:text-[24px]">
            {currentData.title}
          </h2>
          <p className="text-gray-600 text-lg max-sm:text-[14px] leading-tight">
            {currentData.description}
          </p>
        </div>
      </div>
    </div>
  );
}