import {
  getAllDestination,
  CardDestination,
  BodyProps,
  CardDestinationProps,
} from "@/index";
import { getTranslation } from "@/app/lib/i18n";

export async function TopDestinations({ lang }: { lang: string }) {
  try{
    const response = await getAllDestination(lang);
    const destinations = response.data.slice(0, 3);

    const translations = getTranslation(
      (lang as "es") || "en",
      "top_destinations"
    ) as BodyProps["top_destinations"];

    return (
      <>
        <div className="w-[1250px] max-[1300px]:w-full h-auto flex flex-col items-center justify-between mx-auto my-[100px]">
          <h2 className="my-[25px] text-[64px] font-bold text-center max-md:text-[36px]">
            {translations.title}
          </h2>
          <div className="w-full flex items-center justify-center gap-2 mt-[25px] px-[2%] max-[1000px]:flex-wrap">
            {destinations.map((destination: CardDestinationProps, i: number) => (
              <CardDestination
                banner={destination.banner}
                location={destination.location}
                price={destination.price}
                days={destination.days}
                slug={destination.slug}
                key={i}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
  catch (error) {
    console.error('Error al obtener destinos:', error);
    
    // Opción 1: Devolver null para no mostrar nada
    return null;
  }
}