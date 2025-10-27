"use client";

import { useState, useEffect } from "react";
import { DestinationDetailProps, loadDestination, CustomLink, languageOption } from "@/index";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

interface PageLink {
  title: string;
  link: string;
}

export function Footer({ lang }: { lang: string }) {
  const [dataDestinationsThree, setDataDestinationsThree] = useState<
    DestinationDetailProps[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar destinos
  useEffect(() => {
    async function loadingDestinations() {
      try {
        setIsLoading(true);
        const allDestinations = await loadDestination(lang);
        setDataDestinationsThree(allDestinations.data.slice(0, 3));
      } catch (error) {
        console.error("Error cargando destinos:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadingDestinations();
  }, [lang]);

  // Datos de la página con soporte para ambos idiomas
  const Pages: PageLink[] =
    lang === "es"
      ? [
          {
            title: "Inicio",
            link: languageOption[lang]["Inicio"],
          },
          {
            title: "Sobre Nosotros",
            link: languageOption[lang]["Sobre"],
          },
          {
            title: "Vibrant App",
            link: languageOption[lang]["App"],
          },
          {
            title: "Blog",
            link: languageOption[lang]["Blog"],
          },
        ]
      : [
          {
            title: "Home",
            link: languageOption[lang]["Inicio"],
          },
          {
            title: "About Us",
            link: languageOption[lang]["Sobre"],
          },
          {
            title: "Vibrant App",
            link: languageOption[lang]["App"],
          },
          {
            title: "Blog",
            link: languageOption[lang]["Blog"],
          },
        ];

  // Construir el array de destinos solo cuando los datos estén disponibles
  const getDestinations = () => {
    const baseDestinations = [
      {
        title: lang === "es" ? "Destinos" : "Destinations",
        link: languageOption[lang]["Destinos"],
      },
    ];

    // Solo agregar los destinos si están disponibles
    if (!isLoading && dataDestinationsThree.length > 0) {
      dataDestinationsThree.forEach((destination) => {
        if (destination && destination.slug) {
          baseDestinations.push({
            title: destination.slug,
            link: `${languageOption[lang]["Destinos"]}/${destination.slug}`,
          });
        }
      });
    }

    return baseDestinations;
  };

  // Obtener los destinos para renderizar
  const destinations = getDestinations();

  return (
    <>
      <div className="h-auto w-full flex items-center flex-row justify-between gap-4 mt-[50px] py-[40px] text-white bg-gray-800 px-[12%] max-[1300px]:px-0 max-sm:flex-col">
        <div className="w-[32%] flex flex-col pl-[15px] gap-4 pr-[20px] max-sm:w-[90%]">
          <h5 className="text-[32px] font-bold max-sm:text-[24px]">
            Vibrant Peru
          </h5>
          {lang === "es"
            ? "Conjunto habitacional Pachacutec N-403, Wanchaq, Cusco"
            : "Pachacutec Housing Complex N-403, Wanchaq, Cusco"}
          <h6 className="max-sm:text-[14px]">Phone: +51 984260053</h6>
          <h6 className="max-sm:text-[14px]">Email: info@vibrantperu.com</h6>
        </div>
        <div className="w-[65%] flex flex-row max-sm:w-[95%] max-sm:justify-center">
          <div className="w-[45%] flex flex-col">
            {Pages.map((page, i) => (
              <CustomLink
                href={page.link}
                key={i}
                className="flex flex-row w-full text-[16px] items-center font-semibold mr-[2%] my-[10px] max-sm:text-[14px]"
              >
                <svg
                  className="size-6 mr-1 bg-green-Vibrant rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 12.5l3 3 5-6"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {page.title}
              </CustomLink>
            ))}
          </div>
          <div className="w-[45%] flex flex-col">
            {destinations.map((destination, i) => (
              <CustomLink
                href={destination.link}
                key={i}
                className="flex flex-row w-full text-[16px] items-center font-semibold mr-[2%] my-[10px] max-sm:text-[14px]"
              >
                <svg
                  className="size-6 mr-1 bg-green-Vibrant rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 12.5l3 3 5-6"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {destination.title}
              </CustomLink>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center flex-row justify-between bg-gray-900 text-white px-6 py-10 max-md:flex-col gap-5">
        <p>© Copyright VibrantPerú. All Rights Reserved</p>
        <div className="flex flex-row gap-2">
          <a
            href="https://www.facebook.com/thevibrantperu"
            className="size-12 bg-gray-800 flex justify-center items-center rounded-[8px]"
            target="_blank"
          >
            <FaFacebook className="size-8" color="#fff" />
          </a>
          <a
            href="https://www.instagram.com/vibrant.peru/"
            className="size-12 bg-gray-800 flex justify-center items-center rounded-[8px]"
            target="_blank"
          >
            <FaInstagram className="size-8" color="#fff" />
          </a>
          <div className="size-12 bg-gray-800 flex justify-center items-center rounded-[8px]">
            <FaTwitter className="size-8" color="#fff" />
          </div>
          <a
            href="https://www.tiktok.com/@vibrant.peru"
            className="size-12 bg-gray-800 flex justify-center items-center rounded-[8px]"
            target="_blank"
          >
            <FaTiktok className="size-8" color="#fff" />
          </a>
        </div>
      </div>
    </>
  );
}
