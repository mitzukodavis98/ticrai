import { getTranslation } from "@/app/lib/i18n";
import { Check, BodyProps, Conocenos } from "@/index";
import Image from "next/image";

export function AgencyInformation({lang}:{lang:string}) {

  const translations = getTranslation(lang as "es"||"en", "agency_information") as BodyProps["agency_information"];

  const avatars = ["/1.png", "/2.png", "/3.png", "/4.png"];

  return (
    <>
      <div className="w-[70%] max-[1200px]:w-[90%] h-auto my-[100px] flex flex-row items-center mx-auto max-lg:w-full max-[640px]:flex-col">
        {/**Texto principal */}
        <div className="w-[32%] mx-auto max-[640px]:w-3/4">
          <Conocenos lang={lang}/>
          <h3 className="text-[48px] font-extrabold text-[#363539] max-[640px]:text-[32px] leading-tight">
            {translations.title}
          </h3>
          <div className="flex -space-x-3">
            {avatars.map((avatar, index) => (
              <Image
                width={800}
                height={800}
                key={index}
                src={avatar}
                alt={`User avatar ${index + 1}`}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-green-Vibrant border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-medium">50+</span>
            </div>
          </div>
          <p className="text-sm font-medium">{translations.text_users}</p>
        </div>
        <div className="w-[65%] h-auto flex flex-row max-[1200px]:flex-col max-[640px]:w-[80%] max-[640px]:py-[32px]">
          {/*Imagen central*/}
          <div className="flex w-[270px] h-[500px] rounded-full overflow-hidden mx-auto max-[640px]:w-[90%] max-[640px]:h-[550px]">
            <Image
              width={800}
              height={800}
              alt="Vertical MachuPicchu"
              src="/VerticalPicchu.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          {/*texto despues de la imagen*/}
          <div className="w-[48%] mx-auto flex flex-col my-[50px] max-[640px]:w-[90%] max-[640px]:mb-0">
            <h4 className="text-[25px] font-extrabold my-2 leading-tight">
              {translations.sub_title}
            </h4>
            <p className="text-[16px] font-thin my-2">
              {translations.sub_text}
            </p>
            <div className="relative w-[270px] h-[80px] my-2 bg-green-Vibrant flex flex-row rounded-full overflow-hidden items-center max-[400px]:w-full max-sm:pr-4">
              <Image
                width={80}
                height={80}
                src="/CustomerAproved.png"
                className="w-[40px] object-content ml-[8%]"
                alt="Customer Aproved"
              />
              <p className="w-[70%] mx-auto font-semibold text-white">
                {translations.text_aproved}
              </p>
            </div>
            <div className="flex flex-col my-2">
              {translations.advantages.map((check, index) => (
                <Check key={index} text={check} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}