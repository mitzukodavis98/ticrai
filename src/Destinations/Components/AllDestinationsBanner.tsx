"use client"; // Asegúrate de añadir esto si usas App Router

import { useEffect } from "react";
import { MdCardTravel } from "react-icons/md";
import Image from "next/image";
import { CustomLink } from "@/index";

export function AllDestinationsBanner({
  title,
  image,
  home,
}: {
  title: string;
  image: string;
  home: string
}) {
  // Efecto para hacer scroll al principio cuando el componente se monta
  useEffect(() => {
    // Hacer scroll al principio
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative w-full h-[654px] flex items-center max-md:h-[514px] max-sm:h-[434px]">
        <h2 className="relative w-3/4 left-5 text-6xl font-bold text-gray-200 leading-tight max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:left-2 z-10 max-[400px]:w-full">
          {title}
        </h2>

        {/* Contenedor para la imagen con overlay oscuro */}
        <div className="absolute top-0 -z-10 w-full h-[600px] max-md:h-[460px] max-sm:h-[380px]">
          {/* La imagen */}
          <Image
            width={800}
            height={800}
            src={image}
            alt={`Banner for ${title}`}
            className="w-full h-full object-cover"
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        <CustomLink
          className="absolute cursor-pointer flex flex-row items-center gap-4 bg-green-Vibrant bottom-14 left-8 outline outline-8 outline-white rounded-t-[10px] p-4 max-sm:outline-[5px] max-sm:p-2.5 max-sm:left-6 z-10"
          href="/"
        >
          <p className="text-xl text-white font-semibold max-sm:text-base">
            {home}
          </p>
          <p className="font-semibold text-xl text-white flex flex-row items-center max-sm:text-base">
            <MdCardTravel className="mr-1" />
          </p>
        </CustomLink>
      </div>
    </>
  );
}
