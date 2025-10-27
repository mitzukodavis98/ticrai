
import { InteractiveButtonProps, CustomLink } from "@/index";


export function InteractiveButton({text = "Home" ,slug = '/'}: InteractiveButtonProps) {

  return(
    <>
      <CustomLink className="group relative flex h-[65px] bg-black text-white font-bold px-5 rounded-full items-center justify-center overflow-hidden outline-none max-md:h-[48px]" href={slug}>
          {/* Texto con efecto de rotación */}
          <p className="relative flex text-[16px] z-10 max-md:text[14px] max-sm:text-[12px]">
              {text.split("").map((char, index) => (
              <span
                key={index}
                className={`inline-block transition-transform duration-400 group-hover:rotate-[360deg] 
                  ${
                    char === " " ? "w-[5px]" : ""
                  }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {char}
              </span>
              ))}
          </p>
          {/* Capa de fondo animada */}
          <span className="absolute inset-0 bg-black transition-all duration-600 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#049353] before:to-[#06d77a] before:w-0 before:h-full before:left-0 before:transition-all before:duration-500 group-hover:before:w-full before:rounded-full before:outline-none"></span>
      </CustomLink>
    </>
  );
}

