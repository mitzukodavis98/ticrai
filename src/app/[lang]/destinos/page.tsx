import {
  getAllDestination,
  CardDestination,
  CardDestinationProps,
  AllDestinationsBanner,
  Conocenos,
} from "@/index";

type Props = {
  params: Promise<{ lang: string }>; // Parámetro como Promise
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function PageDestination({ params }: Props) {
  // Esperamos la resolución de la Promise
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const DataDestinations = await getAllDestination(lang);
  return (
    <>
      <AllDestinationsBanner
        title={lang === "es" ? "Conoce todos nuestros destinos." : "Get to know all our destinations"}
        home={lang === "es" ? "Inicio" : "Home"}
        image="/Cusco_Plaza_Armas.jpg"
      />

      {/* Titulo*/}
      <div className="w-[90%] mx-auto my-24 flex flex-col items-center">
        <Conocenos lang = {lang} />
        <h2 className="text-[#363539] text-center text-[48px] font-bold max-sm:text-4xl">
          {lang === "es"
            ? "Viaja por lugares magicos"
            : "Travel to magical places"}
        </h2>
      </div>

      {/* Destinos */}
      <div className="w-[90%] mx-auto mb-[75px] flex items-center justify-center flex-wrap gap-4 max-[450px]:w-full">
        {DataDestinations.data.map(
          (destination: CardDestinationProps, i: number) => (
            <CardDestination key={i} {...destination} lang={lang}/>
          )
        )}
      </div>
    </>
  );
}
