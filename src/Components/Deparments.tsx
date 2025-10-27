import Image from "next/image";
import { InteractiveButton, Conocenos, BodyProps, languageOption } from "@/index";
import { getTranslation } from '../app/lib/i18n';

export function Departments({lang}:{lang:string}) {

  const translations = getTranslation(lang as "es"||"en", "departments") as BodyProps["departments"];

  return (
    <div className="relative bg-[#d4efe1] h-auto w-full flex items-center justify-center mt-[75px] overflow-x-hidden pt-[120px] pb-[200px] px-[18%] max-2xl:px-[12%] max-xl:px-[6%] max-lg:px-[4%]">
      <div className="w-full flex flex-row mx-auto gap-8 max-[1000px]:flex-col">
        {/* Sección de texto */}
        <div className="w-[35%] max-[1000px]:w-[70%] max-[500px]:w-[90%]">
          <Conocenos lang={languageOption[lang]["Destinos"]}/>
          <h1 className="text-[56px] font-bold text-[#363539] my-[25px] max-[500px]:text-[36px] leading-tight">
            {translations.title}
          </h1>
          <div className="my-[50px] space-y-6">
            {/* Card 1 */}
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white w-[60px] h-[60px] shadow-md rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M...Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[25px] text-gray-900">
                  {translations.descriptions[0].title}
                </h3>
                <p className="text-gray-600 text-sm">
                {translations.descriptions[0].description}
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white w-[60px] h-[60px] shadow-md rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M...Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[25px] text-gray-900">
                {translations.descriptions[1].title}
                </h3>
                <p className="text-gray-600 text-sm">
                {translations.descriptions[1].description}
                </p>
              </div>
            </div>
          </div>

          <InteractiveButton text={translations.boton} slug="/" />
        </div>
        {/* Sección de imágenes */}
        <div className="w-[62%] h-auto flex items-center justify-center relative max-[1000px]:flex-wrap max-[1000px]:gap-2 max-[1000px]:w-[84%] max-[500px]:w-full">
          {/* Imagen 1 */}
          <div className="absolute w-[320px] h-[320px] rounded-full overflow-hidden shadow-lg left-[48%] top-[12%] max-[1000px]:relative max-[1000px]:top-0 max-[1000px]:left-0 max-[500px]:w-[280px] max-[500px]:h-[280px]">
            <Image
              width={800}
              height={800}
              src="/Cusco_Plaza_Armas.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <p className="text-white font-bold text-lg absolute inset-0 flex items-center justify-center bg-black/60">
              Cusco
            </p>
          </div>
          {/* Imagen 2 */}
          <div className="absolute w-[250px] h-[250px] rounded-full overflow-hidden shadow-md top-[5%] left-[5%] max-[1000px]:relative max-[1000px]:top-0 max-[1000px]:left-0">
            <Image
              width={800}
              height={800}
              src="/Miraflores_Lima.jpg"
              alt="Miraflores"
              className="w-full h-full object-cover"
            />
            <p className="text-white font-bold text-lg absolute inset-0 flex items-center justify-center bg-black/60">
              Lima
            </p>
          </div>
          {/* Imagen 3 */}
          <div className="absolute w-[270px] h-[270px] rounded-full overflow-hidden shadow-md top-[45%] left-[10%] max-[1000px]:relative max-[1000px]:top-0 max-[1000px]:left-0">
            <Image
              width={800}
              height={800}
              src="/Puno_Lake.jpg"
              alt="lago de Puno"
              className="w-full h-full object-cover"
            />
            <p className="text-white font-bold text-lg absolute inset-0 flex items-center justify-center bg-black/60">
              Puno
            </p>
          </div>
          {/* Imagen 4 */}
          <div className="absolute w-[210px] h-[210px] rounded-full overflow-hidden shadow-md top-[56%] left-[64%] max-[1000px]:relative max-[1000px]:top-0 max-[1000px]:left-0">
            <Image
              width={800}
              height={800}
              src="/Arequipa_Plaza.jpg"
              alt="Plaza de arequipa"
              className="w-full h-full object-cover"
            />
            <p className="text-white font-bold text-lg absolute inset-0 flex items-center justify-center bg-black/60">
              Arequipa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
