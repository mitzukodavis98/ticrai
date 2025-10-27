import Image from "next/image";

export function BannerVibrantApp({ title, lang }:{title:string, lang:string}
) {
  // Divide el título en palabras y obtiene la última
  const words = title.split(" ");
  const lastWord = words.pop();
  const restOfTitle = words.join(" ");

  return (
    <div className="relative min-h-[500px] w-full bg-gray-900 mt-[100px] flex flex-col items-center justify-center ">
      {/* Background image */}
      <Image
        width={800}
        height={800}
        src="/7.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content container */}
      <div className="relative w-full z-10 p-8 flex flex-row justify-center gap-8 max-md:flex-col max-md:items-center">
        <div className="w-[36%] flex flex-col justify-center gap-4 max-md:w-3/5 max-md:justify-center max-md:items-center max-md:text-center">
          {/* Title */}
          <h1 className="text-[48px] font-bold text-white max-sm:text-[40px]">
            {restOfTitle} <span className="text-emerald-400">{lastWord}</span>
          </h1>
          {/* Text */}
          <p className="text-lg text-white">
            {lang === "es"?"Ven y descubre todo lo que nuestra app puede hacer para ti, facilita tu viaje con VibrantApp.": "Come and discover all that our app can do for you, make your trip easier with VibrantApp."}
          </p>
        </div>

        {/* Phone image */}
        <div className="w-[300px] overflow-hidden rounded-lg z-50">
          <Image
            width={800}
            height={800}
            src="/Phone01.png"
            alt="Imagen central"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-3/5 relative bottom-[-45px] flex flex-row items-center justify-between bg-white px-12 py-8 rounded-[20px] z-10 max-xl:w-[70%] max-lg:w-4/5 max-md:px-6 max-md:py-6 max-md:flex-col-reverse max-md:bottom-[-75px] max-md:gap-4 max-[500px]:gap-8 max-[500px]:bottom-[-100px]">
        <button className="px-16 py-2 bg-emerald-400 text-white font-semibold rounded-full shadow-[0_0px_12px_1px_rgba(0,0,0,0.5),0_4px_6px_-2px_rgba(0,0,0,0.05)] max-lg:px-12 max-md:px-8">
          {lang === "es"?"Obten el app": "Get the app"}
        </button>
        {/**PlayStore and AppStore */}
        <div className="w-[300px] h-[40px] flex flex-row justify-center items-center gap-4 max-[500px]:flex-col max-[500px]:h-[80px]">
          <Image width={800} height={800} src="/G-play.png" alt="icono de google play" className="w-1/2 h-full object-cover" />
          <Image
            width={800}
            height={800}
            src="/AppStore.png"
            alt="icono de app store"
            className="w-1/2 h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}