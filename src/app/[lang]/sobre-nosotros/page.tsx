import { BannerAboutUs, InteractiveButton, TimeLine, Conocenos, languageOption } from "@/index";
import Image from "next/image";

type Props = {
  params: Promise<{ lang: string }>; // Parámetro como Promise
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Interface para cada elemento de informacion con video
interface StatItem {
  subtitle: string;
  description: string;
}

// Interface para el diccionario completo de informacion con video
interface StatsByLanguage {
  es: StatItem[];
  en: StatItem[];
}

// Interface para el panel
interface StatPanelInfo {
  es: StatItem;
  en: StatItem;
}

export default async function AboutUsPage({params}:Props){

  // Esperamos la resolución de la Promise
  const resolvedParams = await params;
  const lang = resolvedParams.lang as "es" | "en";

  //informacion junto con video
  const NumberOfPersons:StatsByLanguage = {
    es: [
      {
        subtitle: "300+",
        description: "Más de 300 colaboradores trabajando para brindarte la mejor experiencia de viaje en Perú."
      },
      {
        subtitle: "12 millones+",
        description: "Más de 12 millones de viajeros han confiado en nuestros servicios desde nuestra fundación."
      },
      {
        subtitle: "160,000",
        description: "Más de 160,000 experiencias únicas creadas para nuestros clientes en destinos peruanos."
      }
    ],
    en: [
      {
        subtitle: "300+",
        description: "Over 300 team members working to provide you the best travel experience in Peru."
      },
      {
        subtitle: "12 million+",
        description: "More than 12 million travelers have trusted our services since our foundation."
      },
      {
        subtitle: "160,000",
        description: "Over 160,000 unique experiences created for our clients in Peruvian destinations."
      }
    ]
  };

  //informacion general
  const GeneralInfo:StatsByLanguage = {
    es:[
      {
        subtitle: "Ayudando a negocios a ofrecer experiencias excepcionales",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nam fugiat tenetur, tempore suscipit inventore error in, natus molestias, a incidunt. Temporibus at quasi soluta! Eligendi, adipisci! Aliquam, laboriosam autem!"
      },
      {
        subtitle: "Nuestra Misión: Ayudar a millones de organizaciones a crecer mejor",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nam fugiat tenetur, tempore suscipit inventore error in, natus molestias, a incidunt. Temporibus at quasi soluta! Eligendi, adipisci! Aliquam, laboriosam autem!"
      },
      {
        subtitle: "Nuestra Visión: Ayudar a millones de organizaciones a crecer mejor",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nam fugiat tenetur, tempore suscipit inventore error in, natus molestias, a incidunt. Temporibus at quasi soluta! Eligendi, adipisci! Aliquam, laboriosam autem!"
      }
    ],
    en:[
      {
        subtitle: "Helping businesses deliver exceptional buyer experiences",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nam fugiat tenetur, tempore suscipit inventore error in, natus molestias, a incidunt. Temporibus at quasi soluta! Eligendi, adipisci! Aliquam, laboriosam autem!"
      },
      {
        subtitle: "Our Mission: Helping Millions of Organizations Grow Better",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nam fugiat tenetur, tempore suscipit inventore error in, natus molestias, a incidunt. Temporibus at quasi soluta! Eligendi, adipisci! Aliquam, laboriosam autem!"
      },
      {
        subtitle: "Our Vision: Helping Millions of Organizations Grow Better",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nam fugiat tenetur, tempore suscipit inventore error in, natus molestias, a incidunt. Temporibus at quasi soluta! Eligendi, adipisci! Aliquam, laboriosam autem!"
      }
    ]
  }

  //informacion de panel
  const PanelInfo: StatPanelInfo= {
    es:{
      subtitle: "¿Curioso sobre la plataforma de Vibrant, precios e integraciones?",
      description: "Mira el video para obtener respuestas y aprender más sobre nosotros."
    },
    en:{
      subtitle: "Curious about Vibrant's platform, pricing and integrations?",
      description: "Watch the video to get answers and learn more about us."
    }
  }

  return (
    <>
      <BannerAboutUs title={lang === "es"?"Sobre nosotros":"About us"} home={lang === "es"?"Inicio":"Home"} image="/Miraflores_Lima.jpg" lang={lang}/>
      {/**First section*/}
      <div className="w-[65%] flex flex-row items-center justify-center my-[100px] mx-auto gap-4 max-2xl:w-[72%] max-xl:w-4/5 max-lg:w-[95%] max-sm:flex-col-reverse">
        <div className="w-[48%] flex flex-col justify-center gap-4 max-lg:items-center max-sm:text-center max-sm:w-full">
          <Conocenos lang = {languageOption[lang]["Inicio"]} />
          <h3 className="text-[#363539] text-[36px] font-bold leading-tight max-md:text-[30px] max-sm:text-[25px]">
            {GeneralInfo[lang][0].subtitle}
          </h3>
          <p className="leading-tight text-[18px] max-md:text-[14px]">
            {GeneralInfo[lang][0].description}
          </p>
          <InteractiveButton text="Watch Now" slug="/" />
        </div>
        <div className="w-[48%] h-[400px] max-sm:w-4/5 max-sm:h-auto max-md:h-[300px]">
          <Image alt="machupicchu" width={800} height={800} className="w-full h-full object-cover" src="/Machupicchu.png" />
        </div>
      </div>

      {/**Second section*/}
      <div className="w-[65%] flex flex-row items-center justify-center my-[100px] mx-auto gap-4 max-2xl:w-[72%] max-xl:w-4/5 max-lg:w-[95%] max-sm:flex-col">
        <div className="w-[48%] h-[480px] max-sm:w-full max-md:h-[400px] max-sm:h-[320px]">
          <Image
            alt="plaza de armas de cusco"
            width={800}
            height={800}
            className="w-full h-full object-cover"
            src="/Cusco_Plaza_Armas.jpg"
          />
        </div>
        <div className="w-[48%] flex flex-col justify-center gap-4 max-lg:items-center max-sm:text-center max-sm:w-full">
          <h3 className="text-[#363539] text-[30px] font-bold leading-tight max-md:text-[25px] max-sm:text-[20px]">
            {GeneralInfo[lang][1].subtitle}
          </h3>
          <p className="leading-tight text-[18px] max-md:text-[14px]">
            {GeneralInfo[lang][1].description}
          </p>
        </div>
      </div>

      {/**Third section*/}
      <div className="w-[65%] flex flex-row items-center justify-center my-[100px] mx-auto gap-4 max-2xl:w-[72%] max-xl:w-4/5 max-lg:w-[95%] max-sm:flex-col-reverse">
        <div className="w-[48%] flex flex-col justify-center gap-4 max-lg:items-center max-sm:text-center max-sm:w-full">
          <h3 className="text-[#363539] text-[30px] font-bold leading-tight max-md:text-[25px] max-sm:text-[20px]">
            {GeneralInfo[lang][2].subtitle}
          </h3>
          <p className="leading-tight text-[18px] max-md:text-[14px]">
            {GeneralInfo[lang][2].description}
          </p>
        </div>
        <div className="w-[48%] h-[480px] max-sm:w-full max-md:h-[400px] max-sm:h-[320px]">
          <Image
            alt="plaza de arequipa"
            width={800}
            height={800}
            className="w-full h-full object-cover"
            src="/Arequipa_Plaza.jpg"
          />
        </div>
      </div>

      {/**Information with video*/}
      <div className="w-full bg-green-Vibrant py-[50px] mb-[320px]">
        <div className="relative w-[70%] flex flex-col items-center mx-auto max-2xl:w-[75%] max-xl:w-4/5 max-lg:w-[95%]">
          <div className="w-full flex flex-row justify-between gap-4 text-white max-lg:gap-2 max-md:flex-col max-md:items-center">
            {NumberOfPersons[lang].map((number, index) => (
              <div
                key={index}
                className="flex flex-col rounded-[20px] p-4 cursor-default transition ease-in-out duration-[0.4s] all hover:bg-white hover:text-[#363539] max-lg:p-3 max-md:w-4/5 max-md:items-center max-md:text-center max-sm:w-[90%] max-md:hover:bg-transparent max-md:hover:text-white"
              >
                <h4 className="text-[50px] font-bold max-2xl:text-[45px] max-xl:text-[40px] max-lg:text-[32px]">
                  {number.subtitle}
                </h4>
                <p className="text-[18px] max-lg:text-[15px]">
                  {number.description}
                </p>
              </div>
            ))}
          </div>
          {/**Video */}
          <div className=" absolute bottom-[-320px] max-sm:bottom-[-270px] max-[500px]:bottom-[-220px]">
            <iframe
              className="w-[560px] h-[315px] max-sm:w-[400px] max-sm:h-[250px] max-[500px]:w-[270px] max-[500px]:h-[180px]"
              src="https://www.youtube.com/embed/JK_uZpqIk1g?controls=1&rel=0&modestbranding=1&showinfo=0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>

      {/*Panel*/}
      <div className="w-[55%] mt-[150px] mb-16 mx-auto p-6 bg-white rounded-[15px] shadow-[0px_0px_15px_rgba(0,0,0,0.4)] flex flex-row justify-between items-center max-2xl:w-[65%] max-xl:w-[70%] max-lg:w-[95%] max-lg:flex-col max-lg:gap-4 max-lg:text-center">
        <div className="flex flex-col w-[65%] max-lg:w-[90%]">
          <p className="text-[24px] font-semibold leading-tight max-sm:text-[18px]">
            {PanelInfo[lang].subtitle}
          </p>
          <p className="text-[#363539] text-[16px] max-sm:text-[12px]">
            {PanelInfo[lang].description}
          </p>
        </div>
        <button className="h-12 px-4 py-2 bg-green-Vibrant text-white font-semibold rounded-[10px]">
          Watch Now
        </button>
      </div>
      <TimeLine lang = {lang}/>
    </>
  );
}