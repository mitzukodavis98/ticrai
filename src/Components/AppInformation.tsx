import { Check, BodyProps, Conocenos } from "@/index";
import Image from "next/image";
import { getTranslation } from "@/app/lib/i18n";

export function AppInformation({lang}:{lang:string}) {

  const translations = getTranslation(lang as "es"||"en", "app_information") as BodyProps["app_information"];

  return (
    <>
      <div className="w-4/5 flex flex-row mx-auto my-32 max-lg:flex-col h-auto max-lg:my-16 max-lg:w-[90%] max-[500px]:w-[95%]">
        {/**Imagenes */}
        <div
          className="flex items-center justify-center w-[500px] h-auto mx-auto relative max-lg:h-[600px] max-lg:mb-8 max-lg:w-4/5 max-[500px]:w-full"
          id="image phone"
        >
          {/* Fondo verde */}
          <div
            className="absolute bottom-0 w-3/4 h-[70%] bg-green-Vibrant mx-auto rounded-t-[40%] rounded-b-[8%] max-lg:w-[75%] max-lg:h-3/4 max-lg:rounded-t-[50%] max-[500px]:w-[90%] max-[500px]:h-[64%]"
            id="color"
          ></div>

          {/* Teléfono con imagen */}
          <div className="absolute bottom-0 mx-auto h-[580px] overflow-hidden max-lg:w-[370px] max-[500px]:w-auto max-[500px]:h-[500px]">
            <Image
              width={800}
              height={800}
              src="/Phone01.png"
              alt="Plaza de Arequipa"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagen del turista */}
          <div className="absolute w-60 h-60 rounded-xl bottom-[-75px] right-0 overflow-hidden max-lg:right-4 max-lg:bottom-[-50px] max-lg:w-52 max-lg:h-52 max-[500px]:w-40 max-[500px]:h-40">
            <Image
              width={800}
              height={800}
              src="/tourist.png"
              alt="Tourist"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/**Texto */}
        <div
          className="w-[40%] h-auto flex flex-col mx-auto my-[24px] max-lg:w-[64%] max-[500px]:w-[90%]"
          id="information"
        >
          <Conocenos lang={lang}/>
          <h3 className="text-[44px] text-[#363539] font-bold leading-tight max-[500px]:text-[36px]">
            {translations.title}
          </h3>
          <p className="text-[15px] my-[5%]">
            {translations.description}
          </p>
          <div
            className="flex flex-wrap w-full items-center justify-between"
            id="checks"
          >
            {translations.advantages.map((check, index) => (
              <Check key={index} text={check} />
            ))}
          </div>
          <div className="flex flex-row my-[5%] gap-[10px]" id="download">
            <Image
              width={800}
              height={800}
              src="/G-play.png"
              alt=""
              className="w-1/3 h-auto object-contain transform transition-transform duration-500 hover:-translate-y-2"
            />
            <Image
              width={800}
              height={800}
              src="/AppStore.png"
              alt=""
              className="w-1/3 h-auto object-contain transform transition-transform duration-500 hover:-translate-y-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
