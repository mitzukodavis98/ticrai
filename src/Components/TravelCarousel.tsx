"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getTranslation } from "@/app/lib/i18n";
import { BodyProps } from "@/Interfaces/body";
import { Conocenos } from "./Conocenos";

function Imagens({ path, isActive }: { path: string; isActive: boolean }) {
  return (
    <div
      className={`duration-1000 ease-in-out w-full h-full ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      } absolute`}
    >
      <Image
        width={800}
        height={800}
        src={path}
        className="absolute block h-full w-[95%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
        alt="carousel slide"
      />
    </div>
  );
}

export function TravelCarousel({ lang }: { lang: string }) {
  const translations = getTranslation(
    (lang as "es") || "en",
    "travel_carousel"
  ) as BodyProps["travel_carousel"];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const totalSlides = 12;
  const slideInterval = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % totalSlides);
          return 0;
        }
        return prev + 100 / (slideInterval / 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  };

  return (
    <>
      <div className="flex flex-row w-[62%] h-auto mx-auto my-[25px] max-[1200px]:w-[90%] max-lg:flex-col">
        <div className="flex flex-col ">
          <Conocenos lang={lang} />
          <h3 className="w-[60%] text-[50px] flex flex-col pr-[8%] leading-tight font-extrabold text-[#363539] max-lg:text-[36px] max-lg:w-full max-lg:pr-0">
            {translations.title}
          </h3>
        </div>
        <p className="w-[40%] flex items-center text-[15px] py-[15px] max-lg:w-full">
          {translations.description}
        </p>
      </div>

      <div className="relative w-[70%] h-auto mx-auto max-[1200px]:w-full">
        <div className="relative overflow-hidden h-[600px] rounded-lg max-lg:h-[550px] max-md:h-[400px] max-sm:h-[300px]">
          {[...Array(totalSlides)].map((_, index) => (
            <Imagens
              key={index}
              path={`/${index + 1}.png`}
              isActive={currentSlide === index}
            ></Imagens>
          ))}
        </div>

        <div className="w-[85%] h-auto m-auto bottom-0 left-0 right-0 bg-zinc-900 z-20 px-[50px] rounded-lg py-[40px] max-lg:px-[25px] max-lg:py-[25px]">
          <div className="flex items-center justify-between flex-row max-lg:flex-col">
            <div className="">
              <h3 className="text-white text-[32px] font-bold text-center max-[500px]:text-[25px]">
                {translations.text_carousel}
              </h3>
              <h4 className="text-white text-[19px] font-thin text-center max-[500px]:text-[16px]">
                {translations.subtext_carousel}
              </h4>
            </div>

            <div className="flex items-center gap-6 max-[550px]:flex-col max-[550px]:gap-1">
              <div className="flex items-center gap-6 flex-row max-[550px]:my-[10px]">
                <div className="w-48 h-1 bg-gray-600 rounded-full overflow-hidden max-[550px]:w-[120px]">
                  <div
                    className="h-full bg-green-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <span className="text-white font-medium max-[550px]:text-[12px]">
                  {String(currentSlide + 1).padStart(2, "0")} /{" "}
                  {String(totalSlides).padStart(2, "0")}
                </span>
              </div>

              <div className="flex gap-4">
                <button onClick={handlePrev} className="group">
                  <span className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-full bg-green-Vibrant group-hover:bg-white/50">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </span>
                </button>
                <button onClick={handleNext} className="group">
                  <span className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-full bg-green-Vibrant group-hover:shadow">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
