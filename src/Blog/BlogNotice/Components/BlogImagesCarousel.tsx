"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function BlogImagesCarousel({ items }: { items: string[] }) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((curr) => (curr === items.length - 1 ? 0 : curr + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [items.length]);

  const previousSlide = () => {
    setCurrentSlide((curr) => (curr === 0 ? items.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((curr) => (curr === items.length - 1 ? 0 : curr + 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      items.forEach((item) => {
        if (typeof window !== "undefined") {
          const img = new window.Image();
          img.src = item;
        }
      });
    };
    preloadImages();
    setIsLoading(false);
  }, [items]);

  if (isLoading) {
    return (
      <div className="w-full h-96 bg-gray-200 animate-pulse rounded-lg"></div>
    );
  }

  return (
    <div className="relative w-full" data-carousel="slide">
      <div className="relative overflow-hidden rounded-lg h-96 max-[550px]:h-80 max-[450px]:h-[250px]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
              currentSlide === index
                ? "opacity-100 translate-x-0"
                : currentSlide < index
                ? "opacity-0 translate-x-full"
                : "opacity-0 -translate-x-full"
            }`}
            data-carousel-item
          >
            <Image
              src={item}
              fill
              className="object-cover"
              alt={`Slide ${index + 1}`}
              priority={index === 0} // Priorizar la carga de la primera imagen
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-green-Vibrant" : "bg-gray-700/50"
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={previousSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500 group-hover:bg-green-600 transition-colors">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500 group-hover:bg-green-600 transition-colors">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
