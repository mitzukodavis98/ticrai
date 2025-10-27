import React from "react";
import { FaBuilding } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { FaTram } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { FaRegHospital } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { Check, Uncheck, AdvantageProps, DescriptionPageProps } from "@/index";

function Advantage({ text1, text2, children, className = "" }: AdvantageProps) {
  return (
    <>
      <div className="flex flex-row items-center w-[180px] gap-7 mx-2 my-5">
        {React.cloneElement(children, {
          className: `${children.props.className || ""} ${className}`.trim(),
        })}
        <div className="flex flex-col">
          <p className="font-thin text-[15px]">{text1}</p>
          <p className="font-semibold text-[15px]">{text2}</p>
        </div>
      </div>
    </>
  );
}

export function DescriptionPage({
  location,
  accomodation,
  admission_free,
  arrival_city,
  best_season,
  departure_city,
  free_cancel,
  guide,
  hotel_transfer,
  insurance,
  language,
  minimum_age,
  maximum_age,
  overview,
  top_highlights_text,
  top_highlights_list,
  included,
  excluded,
  lang
}: DescriptionPageProps) {
  return (
    <>
      <div className="w-1/2 mx-auto max-lg:w-3/4 max-md:w-[90%]">
        {/**Title */}
        <h2 className="font-bold text-[48px] my-[25px] max-lg:text-[40px] max-md:text-[36px] max-sm:text-[32px]">
          {location}
        </h2>
        {/**Advantages */}
        <div className="flex flex-wrap w-full justify-start">
          <Advantage
            className="size-6"
            text1={lang === "es" ? "Alojamiento" : "Accommodation"}
            text2={accomodation}
          >
            <FaBuilding color="#049353" />
          </Advantage>
          <Advantage
            className="size-7"
            text1={lang === "es" ? "Admision gratis" : "Admission Free"}
            text2={admission_free ? "Yes" : "No"}
          >
            <MdAttachMoney color="#049353" />
          </Advantage>
          <Advantage
            className="size-6"
            text1={lang === "es" ? "Ciudad de llegada" : "Arrival City"}
            text2={arrival_city}
          >
            <FaCity color="#049353" />
          </Advantage>
          <Advantage 
            className="size-6" 
            text1={lang === "es" ? "Mejor temporada" : "Best Season"} 
            text2={best_season}
          >
            <FaTram color="#049353" />
          </Advantage>
          <Advantage
            className="size-6"
            text1={lang === "es" ? "Ciudad de salida" : "Departure City"}
            text2={departure_city}
          >
            <FaCity color="#049353" />
          </Advantage>
          <Advantage
            className="size-6"
            text1={lang === "es" ? "Cancelación gratuita" : "Free Cancel"}
            text2={free_cancel ? "Yes" : "No"}
          >
            <FaFileInvoiceDollar color="#049353" />
          </Advantage>
          <Advantage 
            className="size-6" 
            text1={lang === "es" ? "Guía" : "01 Guide"} 
            text2={guide}
          >
            <FaUserSecret color="#049353" />
          </Advantage>
          <Advantage
            className="size-6"
            text1={lang === "es" ? "Traslado al hotel" : "Hotel Transfer"}
            text2={hotel_transfer}
          >
            <FaHotel color="#049353" />
          </Advantage>
          <Advantage 
            className="size-6" 
            text1={lang === "es" ? "Seguro" : "Insurance"} 
            text2={insurance}
          >
            <FaRegHospital color="#049353" />
          </Advantage>
          <Advantage 
            className="size-6" 
            text1={lang === "es" ? "Idioma" : "Language"} 
            text2={language}
          >
            <FaLanguage color="#049353" />
          </Advantage>
          <Advantage 
            className="size-6" 
            text1={lang === "es" ? "Edad mínima" : "Minimum Age"} 
            text2={minimum_age}
          >
            <FaUserPlus color="#049353" />
          </Advantage>
          <Advantage 
            className="size-6" 
            text1={lang === "es" ? "Edad máxima" : "Maximum Age"} 
            text2={maximum_age}
          >
            <FaUserMinus color="#049353" />
          </Advantage>
        </div>
        {/**General Description */}
        <div className="flex flex-col w-full">
          <h2 className="font-bold text-[44px] my-[25px] max-lg:text-[36px] max-md:text-[32px] max-sm:text-[28px]">
            {lang === "es" ? "Visíon General" : "Overview"}
          </h2>
          <p className="whitespace-pre-line">{overview}</p>
        </div>
        {/**Principal aspects*/}
        <div className="flex flex-col w-full">
          <h2 className="font-bold text-[44px] my-[25px] max-lg:text-[36px] max-md:text-[32px] max-sm:text-[28px]">
            {lang === "es" ? "Aspectos destacados" : "Top Highlights"}
          </h2>
          <p className="whitespace-pre-line">{top_highlights_text}</p>
          <div className="flex flex-col my-2 gap-2">
            {top_highlights_list.map((check, i) => (
              <Check key={i} text={check} />
            ))}
          </div>
        </div>
        {/**Included and excluded */}
        <h2 className="font-bold text-[44px] my-[25px] max-lg:text-[36px] max-md:text-[32px] max-sm:text-[28px]">
          {lang === "es" ? "Incluido y excluido" : "Included and Excluded"}
        </h2>
        <div className="flex flex-row w-full gap-4 max-md:flex-col">
          <div className="flex flex-col w-full">
            {included.map((element, i) => (
              <Check key={i} text={element.text} />
            ))}
          </div>
          <div className="flex flex-col w-full">
            {excluded.map((element, i) => (
              <Uncheck key={i} text={element.text} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
