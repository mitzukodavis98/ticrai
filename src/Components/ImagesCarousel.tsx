"use client";
import { getAllCarrusel, CarruselItem } from "@/index";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface ImageProp {
  id: number;
  image: string;
  alt: string;
}

export function ImagesCarrusel() {
  //Ancho del div principal
  const [width, setwidth] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<ImageProp[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cargar las imágenes dentro de useEffect en lugar de a nivel de módulo
  useEffect(() => {
    async function loadImages() {
      try {
        const response = await getAllCarrusel();

        // Buscar el objeto con name === "Footer"
        const footerCarousel = response.data.find(
          (item: CarruselItem) => item.name === "Footer"
        );

        if (footerCarousel) {
          // Transformar el array de URLs en el formato que espera tu componente
          const formattedImages = footerCarousel.images.map(
            (url: string, index: number) => ({
              id: index,
              image: url,
              alt: `Footer image ${index + 1}`,
            })
          );

          setImages(formattedImages);
        }
      } catch (error) {
        console.error("Error al cargar imágenes del carrusel:", error);
      }
    }

    loadImages();
  }, []);

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
    width < 750 ? 2 : width < 1000 ? 3 :width < 1250 ? 4 : 5; // Número de imágenes visibles a la vez

  //auto rotacion
  useEffect(() => {
    const interval = setInterval(() => {
      // Solo avanzamos si hay suficientes imágenes para mostrar
      if (images.length > visibleImages) {
        // Calculamos el máximo índice posible
        const maxIndex = images.length - visibleImages;
        // Avanzamos, pero nos detenemos en el máximo índice
        setCurrentIndex((prevIndex) =>
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
      }
    }, 5000); // Cambia el tiempo en segundos

    return () => clearInterval(interval);
  }, [images.length, visibleImages]);

  return (
    <div
      className="carousel-container relative w-full h-60 overflow-hidden mx-auto"
      ref={divRef}
    >
      <div
        className="carousel-track flex transition-transform ease-in-out duration-700"
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
        }}
      >
        {images.map((image: ImageProp, index: number) => (
          <div
          key={index}
          className="carousel-item flex-none relative"
          style={{
            width: `${100 / visibleImages}%`,
          }}
        >
          <div className="absolute h-60 inset-0 flex items-center justify-center p-2">
            <Image
              src={image.image}
              alt={image.alt}
              fill
              className="object-cover"
              sizes={`(max-width: 550px) ${100/visibleImages}vw, 
                      (max-width: 750px) ${100/visibleImages}vw,
                      (max-width: 1200px) ${100/visibleImages}vw,
                      ${100/visibleImages}vw`}
            />
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
