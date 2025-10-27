"use client";

import { useEffect } from "react";
import { MdCardTravel } from "react-icons/md";
import Image from "next/image";
import { CustomLink } from "@/Components/CustomLink";

export function DestinationBanner({
  location,
  banner,
  lang
}: {
  location: string;
  banner: string;
  lang: string;
}) {
  // Efecto para hacer scroll al principio cuando el componente se monta
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <div className="relative w-full h-[560px] flex items-center max-md:h-[420px]">
        <h2 className="relative left-5 text-6xl font-bold text-white max-lg:text-5xl max-md:text-4xl max-sm:text-3xl z-10">
          {location}
        </h2>

        {/* Contenedor para la imagen con overlay oscuro */}
        <div className="absolute top-1 -z-10 w-full h-[500px] max-md:h-[360px]">
          {/* La imagen */}
          <Image
            width={800}
            height={800}
            src={banner}
            alt={`Destination image for ${location}`}
            className="w-full h-full object-cover"
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        <div className="absolute flex flex-row items-center gap-4 bg-green-Vibrant bottom-14 left-7 outline outline-8 outline-white rounded-t-[10px] p-4 max-sm:outline-[5px] max-sm:p-2.5 max-sm:left-5 z-10">
          <CustomLink
            className="cursor-pointer text-xl text-white font-semibold max-sm:text-base"
            href="/"
          >
            {lang === "es" ? "Inicio" : "Home"}
          </CustomLink>
          <p className="font-semibold text-xl text-white flex flex-row items-center max-sm:text-base">
            <MdCardTravel className="mr-1" />
            {location}
          </p>
        </div>
      </div>
    </>
  );
}
