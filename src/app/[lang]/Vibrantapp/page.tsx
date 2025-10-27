import {
  getAllDestination,
  BannerVibrantApp,
  OtherDestinations,
} from "@/index";
import Image from "next/image";

type Props = {
  params: Promise<{ lang: string }>; // Parámetro como Promise
};

interface TextoMultilingue {
  es: string[];
  en: string[];
}

export default async function VibrantApp({ params }: Props) {
  // Esperamos la resolución de la Promise
  const resolvedParams = await params;
  const lang = resolvedParams.lang as "es" | "en";

  //Recuperar los datos de los destinations
  const allDestinations = await getAllDestination(lang);
  const destinations = allDestinations.data.slice(0, 3);

  const texto: TextoMultilingue = {
    es: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laudantium, fuga cumque ducimus atque provident facere omnis quis quisquam esse aliquam, tenetur eligendi dolore molestiae eum ipsam sunt. Quaerat, consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laudantium, fuga cumque ducimus atque provident facere omnis quis quisquam esse aliquam, tenetur eligendi dolore molestiae eum ipsam sunt. Quaerat, consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laudantium, fuga cumque ducimus atque provident facere omnis quis quisquam esse aliquam, tenetur eligendi dolore molestiae eum ipsam sunt. Quaerat, consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laudantium, fuga cumque ducimus atque provident facere omnis quis quisquam esse aliquam, tenetur eligendi dolore molestiae eum ipsam sunt. Quaerat, consectetur.",
    ],
    en: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laudantium, fuga cumque ducimus atque provident facere omnis quis quisquam esse aliquam, tenetur eligendi dolore molestiae eum ipsam sunt. Quaerat, consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laudantium, fuga cumque ducimus atque provident facere omnis quis quisquam esse aliquam, tenetur eligendi dolore molestiae eum ipsam sunt. Quaerat, consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laudantium, fuga cumque ducimus atque provident facere omnis quis quisquam esse aliquam, tenetur eligendi dolore molestiae eum ipsam sunt. Quaerat, consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laudantium, fuga cumque ducimus atque provident facere omnis quis quisquam esse aliquam, tenetur eligendi dolore molestiae eum ipsam sunt. Quaerat, consectetur.",
    ],
  };

  return (
    <div className="bg-transparent w-full h-auto mx-auto xxl:w-[2000px]">
      <BannerVibrantApp
        title={
          lang === "es" ? "Viaja con VibrantApp" : "Travel with VibrantApp"
        }
        lang={lang}
      />

      {/**First Section */}
      <div className="w-full py-[100px] bg-[#04935330] flex flex-row justify-center items-center gap-8 max-lg:flex-col max-lg:gap-16 max-sm:pt-[150px]">
        <div className="w-[36%] flex flex-col gap-12 max-lg:w-3/5 max-lg:justify-center max-lg:items-center max-lg:text-center max-lg:gap-4 max-sm:w-[90%]">
          <div className="text-[36px] font-bold leading-tight max-xl:text-[32px] max-sm:text-[24px]">
            {lang === "es" ? (
              <h2 className="text-emerald-700">
                De turista a explorador{" "}
                <span className="text-[#DFA344]">en solo un click</span>
              </h2>
            ) : (
              <h2 className="text-emerald-700">
                From tourist to explorer{" "}
                <span className="text-[#DFA344]">in just one click</span>
              </h2>
            )}
          </div>
          <p className="text-[18px] max-sm:text-[14px]">{texto[lang][0]}</p>
        </div>
        <div className="">
          <iframe
            className="w-[560px] h-[315px] max-xl:w-[400px] max-xl:h-[225px] max-lg:w-[560px] max-lg:h-[315px] max-sm:w-[80vw] max-sm:h-[45vw]"
            src="https://www.youtube.com/embed/JK_uZpqIk1g?controls=1&rel=0&modestbranding=1&showinfo=0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>

      {/*Second Section */}
      <div className="w-full py-[75px] bg-transparent flex flex-row justify-center items-center gap-8 max-lg:flex-col-reverse max-lg:gap-16">
        <div className="w-1/5 max-lg:w-2/5 max-md:w-3/5 max-[500px]:w-4/5 mx-16">
          <Image
            width={800}
            height={800}
            src="/Phone02.png"
            className="w-full h-full object-cover"
            alt="imagen de smartphone 2"
          />
        </div>
        <div className="w-[36%] flex flex-col gap-12 max-lg:w-3/5 max-lg:justify-center max-lg:items-center max-lg:text-center max-lg:gap-4 max-sm:w-[90%]">
          <div className="text-[36px] font-bold leading-tight max-xl:text-[32px] max-sm:text-[24px]">
            {lang === "es" ? (
              <h2 className="text-[#DFA344]">
                Experiencias reales y auténticas.{" "}
                <span className="text-emerald-700">¿Qué más hay?</span>
              </h2>
            ) : (
              <h2 className="text-[#DFA344]">
                Real, authentic experiences.{" "}
                <span className="text-emerald-700">What else is there?</span>
              </h2>
            )}
          </div>
          <p className="text-emerald-700 text-[18px] max-sm:text-[14px]">
            {texto[lang][1]}
          </p>
        </div>
      </div>
      {/**Third Section */}
      <div className="w-full py-[75px] bg-[#04935330] flex flex-row justify-center items-center gap-8 max-lg:flex-col max-lg:gap-16">
        <div className="w-[36%] flex flex-col gap-12 max-lg:w-3/5 max-lg:justify-center max-lg:items-center max-lg:text-center max-lg:gap-4 max-sm:w-[90%]">
          <div className="text-[36px] font-bold leading-tight max-xl:text-[32px] max-sm:text-[24px]">
            {lang === "es" ? (
              <h2 className="text-[#DFA344]">
                Es manos libres e inmersivo.{" "}
                <span className="text-emerald-700">Shh. Solo escucha</span>
              </h2>
            ) : (
              <h2 className="text-[#DFA344]">
                It&apos;s hands-free and immersive.{" "}
                <span className="text-emerald-700">Shh. Just listen</span>
              </h2>
            )}
          </div>
          <p className="text-emerald-700 text-[18px] max-sm:text-[14px]">
            {texto[lang][2]}
          </p>
        </div>
        <div className="w-1/5 max-lg:w-2/5 max-md:w-3/5 max-[500px]:w-4/5 mx-16">
          <Image
            alt="imagen de smartphone 3"
            width={800}
            height={800}
            src="/Phone03.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/**Fourth Section */}
      <div className="w-full pt-[75px] bg-transparent flex flex-row justify-center items-center gap-8 max-lg:flex-col-reverse max-lg:gap-16">
        <div className="w-2/5 max-lg:w-3/5 max-md:w-4/5 max-[500px]:w-[95%]">
          <Image
            alt="logo de vibrantapp"
            width={800}
            height={800}
            src="/LogoVibrantApp.png"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/5 flex flex-col gap-12 max-lg:w-3/5 max-lg:justify-center max-lg:items-center max-lg:text-center max-lg:gap-4 max-sm:w-[90%]">
          <div className="text-[36px] font-bold leading-tight max-xl:text-[32px] max-sm:text-[24px]">
            {lang === "es" ? (
              <h2 className="text-[#DFA344]">
                Inspírate en cualquier momento. Los{" "}
                <span className="text-emerald-700">
                  {" "}
                  mejores destinos turísticos del mundo
                </span>{" "}
                están a solo un clic de distancia.
              </h2>
            ) : (
              <h2 className="text-[#DFA344]">
                Get inspired anytime.The{" "}
                <span className="text-emerald-700">
                  {" "}
                  world&apos;s premium travel destinations
                </span>{" "}
                are all just a click away.
              </h2>
            )}
          </div>
          <p className="text-emerald-700 text-[18px] max-sm:text-[14px]">
            {texto[lang][3]}
          </p>
        </div>
      </div>

      {/**Destinations */}
      <OtherDestinations Destinations={destinations} lang={lang} />
    </div>
  );
}
