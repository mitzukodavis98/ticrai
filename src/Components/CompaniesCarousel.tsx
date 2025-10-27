"use client"

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { getTranslation } from "@/app/lib/i18n";
import { BodyProps } from "@/Interfaces/body";

export function CompaniesCarousel({lang}:{lang:string}) {

  const translations = getTranslation(lang as "es"||"en", "companies_carouse") as BodyProps["companies_carouse"];

  //Ancho del div principal
  const [width, setwidth] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  //Imagenes a usar
  const images = [
    "/LogoPrueba.png",
    "/LogoPrueba.png",
    "/LogoPrueba.png",
    "/LogoPrueba.png",
    "/LogoPrueba.png",
    "/LogoPrueba.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  //Obtener el ancho del div principal en px
  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setwidth(divRef.current.offsetWidth);
      }
    };
    // Llamar a updateWidth inmediatamente después de montar el componente
    updateWidth();
    //Actualiza al ancho al cargar la pagina y al cambiar el tamaño de la pagina
    window.addEventListener("resize", updateWidth);

    //Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const visibleImages =
    width < 550 ? 2 : width < 750 ? 3 : width < 1200 ? 4 : 5; // Número de imágenes visibles a la vez

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Cambia el tiempo en segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="carousel-container bg-[#bde5cf] relative overflow-hidden mx-auto w-full h-auto pb-[75px] pt-[100px] max-[550px]:pb-[50px] max-[550px]:pt-[64px]"
      ref={divRef}
    >
      <div className="flex justify-center py-[20px]">
        <h4 className="font-bold text-[52px] text-center text-[#363539] max-[550px]:text-[32px]">
          {translations.title}
        </h4>
      </div>
      <div
        className="carousel-track flex transition-transform ease-in-out duration-700"
        style={{
          transform: `translateX(-${(currentIndex * 100) / visibleImages}%)`,
        }}
      >
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className="carousel-item flex-none h-full"
            style={{ flexBasis: `${100 / visibleImages}%` }}
          >
            <Image
              width={800}
              height={800}
              src={src}
              className="h-full w-full object-cover"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
