"use client";

import React, { useState } from "react";
import { Users, Zap, Heart, Sparkles } from "lucide-react";
import { IconButonProps, CardProps, BodyProps } from "@/index";
import Image from "next/image";
import { getTranslation } from "@/app/lib/i18n";

const IconButton = ({
  icon: Icon,
  isSelected,
  onClick,
  label,
}: IconButonProps) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-green-100 w-4/5 max-md:flex-col max-md:items-center max-md:gap-2 max-md:p-2 max-sm:w-1/3  
      ${isSelected ? "bg-green-100 shadow-lg" : "bg-white"}
    `}
  >
    <div
      className={`
      p-4 rounded-full transition-all duration-300
      ${
        isSelected
          ? "bg-green-Vibrant text-white"
          : "bg-green-100 text-green-600"
      }
    `}
    >
      <Icon className="w-8 h-8 max-sm:w-5 max-sm:h-5" />
    </div>
    <span
      className={`
      font-medium text-lg transition-all duration-300 max-sm:text-[12px] leading-tight 
      ${isSelected ? "text-green-600" : "text-gray-600"}
    `}
    >
      {label}
    </span>
  </button>
);

const Card = ({ tema, descripcion, animate }: CardProps) => (
  <div
    className={`bg-white rounded-2xl shadow-xl p-8 h-auto
    transition-all duration-500 transform ${
      animate
        ? "translate-x-0 opacity-100"
        : "translate-x-4 opacity-0 max-sm:p-4"
    }`}
  >
    <div className="relative overflow-hidden">
      {/* Círculo decorativo */}
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-100 opacity-50" />

      <h3 className="text-2xl font-bold text-gray-800 mb-4 max-sm:text-xl">
        {tema}
      </h3>

      {/* Línea divisoria con gradiente */}
      <div className="my-4 h-px bg-gradient-to-r from-green-200 via-green-400 to-green-200" />

      <p className="text-gray-600 leading-relaxed text-lg relative z-10 max-sm:text-sm">
        {descripcion}
      </p>
    </div>
  </div>
);

export function AgencyAbout({ lang }: { lang: string }) {
  const translations = getTranslation(
    (lang as "es") || "en",
    "agency_about"
  ) as BodyProps["agency_about"];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const character = [
    {
      tema: translations.abouts[0].title,
      descripcion: translations.abouts[0].description,
      icon: Users,
    },
    {
      tema: translations.abouts[1].title,
      descripcion: translations.abouts[1].description,
      icon: Zap,
    },
    {
      tema: translations.abouts[2].title,
      descripcion: translations.abouts[2].description,
      icon: Heart,
    },
    {
      tema: translations.abouts[3].title,
      descripcion: translations.abouts[3].description,
      icon: Sparkles,
    },
  ];

  const handleIconClick = (index: number) => {
    if (index === selectedIndex) return;
    setIsAnimating(false);
    setTimeout(() => {
      setSelectedIndex(index);
      setIsAnimating(true);
    }, 300);
  };

  return (
    <section className="w-full relative py-16 bg-gradient-to-b from-white to-green-50">
      {/* Decoración de fondo */}
      <div className="absolute right-0 top-0 w-72">
        <Image
          width={300}
          height={300}
          src="/LeftDecorate.png"
          alt=""
          className="w-full object-cover transform rotate-180"
        />
      </div>

      <div className="w-full container mx-auto px-4 max-[400px]:px-2">
        <h2 className="text-4xl font-bold text-center mb-8 bg-green-Vibrant bg-clip-text text-transparent max-sm:text-3xl">
          {translations.title}
        </h2>

        <div className=" mx-auto flex flex-col justify-center items-center md:flex-row gap-8 max-md:w-full">
          {/* Columna de iconos */}
          <div className="flex flex-col gap-4 z-30 max-md:gap-2 max-md:flex-row max-md:w-[90%] max-sm:w-full max-sm:gap-1 max-sm:flex-wrap max-sm:justify-center">
            {character.map((item, index) => (
              <IconButton
                key={index}
                icon={item.icon}
                isSelected={index === selectedIndex}
                onClick={() => handleIconClick(index)}
                label={item.tema}
              />
            ))}
          </div>

          {/* Tarjeta */}
          <div className="md:w-2/3">
            <Card
              tema={character[selectedIndex].tema}
              descripcion={character[selectedIndex].descripcion}
              animate={isAnimating}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
