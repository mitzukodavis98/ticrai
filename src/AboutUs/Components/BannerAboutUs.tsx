import Image from "next/image";
import { MdCardTravel } from "react-icons/md";
import { CustomLink } from "@/Components/CustomLink";
import { languageOption } from "@/Components/paths";

export function BannerAboutUs({
  title,
  image,
  home,
  lang
}: {
  title: string;
  image: string;
  home: string;
  lang: string;
}) {
  return (
    <>
      <div className="relative w-full h-[654px] flex items-center max-md:h-[514px] max-sm:h-[434px]">
        <h2 className="relative w-3/4 left-[20px] text-[72px] font-bold text-white leading-tight max-lg:text-[64px] max-md:text-[48px] max-sm:text-[36px] max-sm:left-0">
          {title}
        </h2>
        <Image
          width={800}
          height={800}
          alt="Imagen principal de la página"
          src={image}
          className="absolute top-1 -z-10 w-full h-[600px] object-cover brightness-90 max-md:h-[460px] max-sm:h-[380px]"
        />
        <CustomLink
          className="absolute cursor-pointer flex flex-row items-center gap-4 bg-green-Vibrant bottom-[50px] left-[28px] outline outline-[8px] outline-white rounded-t-[10px] p-4 max-sm:outline-[5px] max-sm:p-[10px] max-sm:left-[5px]"
          href={languageOption[lang]["Inicio"]} // Cambia esto por la ruta correcta
        >
          <p className="text-[20px] text-white font-semibold max-sm:text-[16px]">
            {home}
          </p>
          <p className="font-semibold text-[20px] text-white flex flex-row items-center max-sm:text-[16px]">
            <MdCardTravel className="mr-1" />
          </p>
        </CustomLink>
      </div>
    </>
  );
}
