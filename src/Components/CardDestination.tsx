'use client'

import { useState } from "react";
import Image from "next/image";
import { CardDestinationProps, CustomLink, languageOption } from "@/index";

export function CardDestination({ banner, location, price, days, slug, lang }: CardDestinationProps) {

  const [showVideo, setShowVideo] = useState(false);
  //Reemplazar por un prop
  const videoId = "eTf-7fWaB98";

  const openVideoModal = () => {
    setShowVideo(true);
  };

  const closeVideoModal = () => {
    setShowVideo(false);
  };

  return (
    <div className="w-1/3 max-w-[400px] rounded-[50px] shadow-lg overflow-hidden bg-white group max-lg:w-1/2 max-md:w-[90%] max-sm:rounded-[25px]">
      {/* Imagen */}
      <div className="relative overflow-hidden">
        <Image
          width={800}
          height={800}
          src={banner}
          alt={location}
          className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110 max-[400px]:h-[300px]"
        />
        {/* Superposición y botones */}
        <div className="absolute inset-0 bg-[#06d77a] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <div className="flex gap-4">
            {/* Botón Play */}
            <button
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-500 hover:text-white transition-colors duration-300"
              onClick={openVideoModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </button>

            {/* Modal de video */}
            {showVideo && (
              <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 ml-0"
                onClick={closeVideoModal}
              >
                <div
                  className="max-w-4xl w-full aspect-video relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    className="w-full h-full"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <button
                    className="absolute top-4 right-4 text-white text-xl font-bold p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 w-10 h-10 flex items-center justify-center"
                    onClick={closeVideoModal}
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
            {/* Botón Link */}
            <CustomLink
              className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-Vibrant hover:text-white"
              href={`${languageOption[lang]["Destinos"]}/${slug}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                  clipRule="evenodd"
                />
              </svg>
            </CustomLink>
          </div>
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-4 max-sm:py-2">
        {/* Título y precio */}
        <div className="flex justify-between items-center mt-[20px] max-sm:mt-3">
          <CustomLink
            className="relative text-[21.5px] font-bold text-black group-hover:text-black cursor-pointer"
            href={`${languageOption[lang]["Destinos"]}/${slug}`}
          >
            {location}
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-700 group-hover:w-full"></span>
          </CustomLink>
          <span className="text-lg font-bold text-black text-[18px]">
            {price}
          </span>
        </div>
        {/* Detalles del viaje */}
        <div className="flex items-center text-black text-[17px] font-bold mt-[40px] mb-[20px] max-sm:mt-4 max-sm:mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 fill-black mr-[5px]"
            stroke="currentColor"
            strokeWidth="4"
          >
            <path
              fillRule="evenodd"
              d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
              clipRule="evenodd"
            />
          </svg>
          {days} {lang === "es" ? "dia/s de viaje" : "day/s of travel"}
        </div>
      </div>
    </div>
  );
}