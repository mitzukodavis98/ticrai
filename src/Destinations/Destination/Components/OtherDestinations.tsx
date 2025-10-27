import { CardDestination, DestinationDetailProps } from "@/index";

export function OtherDestinations({
  Destinations,
  lang
}: {
  Destinations: DestinationDetailProps[]
  lang: string;
}) {
  // Desestructura el prop
  const DataCards = Destinations.slice(0, 3);

  return (
    <div className="w-[1250px] max-[1300px]:w-full h-auto flex flex-col items-center justify-between mx-auto my-[100px]">
      <h2 className="w-11/12 my-[25px] text-[56px] text-center font-bold max-lg:text-5xl max-md:text-4xl max-[500px]:text-[32px]">
        {lang === "es" ? "Viajes que te pueden interesar" : "Trips you may like"}
      </h2>
      <div className="w-full flex items-center justify-center gap-2 mt-5 px-[2%] max-[1000px]:flex-wrap">
        {DataCards.map((destination, index) => (
          <CardDestination 
            key={index} 
            {...destination} 
            lang={lang} 
          />
        ))}
      </div>
    </div>
  );
}