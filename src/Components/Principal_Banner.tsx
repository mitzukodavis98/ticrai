import Image from "next/image";
import { InteractiveButton } from "./InteractiveButton";
import { FaPlay } from "react-icons/fa";
import { getTranslation } from "@/app/lib/i18n";
import { BodyProps, Conocenos, languageOption } from "@/index";

export function Principal_Banner({lang}: { lang: string }) {

  const translations = getTranslation(lang as "es"||"en", "principal_banner") as BodyProps["principal_banner"];

  return (
    <>
      <div
        className="flex relative w-full h-[800px] px-[5%] max-lg:flex-col max-[1000px]:h-auto"
        id="principal banner container"
      >
        <div
          className="absolute -left-[30px] top-[40px] w-[250px] -z-10 max-[1300px]:hidden"
          id="img left"
        >
          <Image
            width={800}
            height={800}
            src="/LeftDecorate.png"
            alt=""
            className="w-[90%] object-cover"
          />
        </div>
        <div
          className="relative flex flex-col w-[65%] z-10 ml-[8%] mt-[120px] px-[10px]  max-[1300px]:ml-0 max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:mt-[50px]"
          id="text container"
        >
          <div className="max-[1000px]:text-[18px]" id="mini title">
            <Conocenos lang={languageOption[lang]["Destinos"]} />
          </div>
          <div
            className="text-[60px] w-1/2 font-bold leading-tight max-[1000px]:text-[36px] max-[1000px]:text-center max-[1300px]:w-[60%] max-[1300px]:text-[50px] max-sm:w-full"
            id="principal-title"
          >
            <h2>{translations.title}</h2>
          </div>
          <div
            className="w-[50%] text-[20px] mt-[20px] max-[1000px]:w-full max-[1000px]:text-[16px] max-[1000px]:text-center max-lg:w-3/4"
            id="text information"
          >
            <p className="text-black">
              {translations.description}
            </p>
          </div>
          <div
            className="flex flex-row mt-[32px] items-start max-lg:w-[300px] max-lg:justify-between max-[500px]:w-full max-[500px]:justify-between max-lg:items-center"
            id="buttons"
          >
            <InteractiveButton text={translations.boton} slug="/destinos" />
            <button className="w-16 h-16 bg-green-Vibrant rounded-full flex items-center ml-[10%] justify-center max-[500px]:ml-0">
              <FaPlay className="text-white text-2xl" />
            </button>
          </div>
        </div>
        <div
          className="absolute right-[5%] w-[1300px]:right-[1%] w-[800px] -z-20 max-[1000px]:none max-[1400px]:w-[55%] max-[1000px]:w-3/4 max-[1000px]:right-0 max-[1000px]:static max-[1000px]:mx-auto"
          id="principal img"
        >
          <Image
            width={800}
            height={800}
            src="/Machupicchu.png"
            alt=""
            className="w-full object-cover "
          />
        </div>
      </div>
    </>
  );
}
