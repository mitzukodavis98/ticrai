import { 
  Principal_Banner, 
  TravelCarousel, 
  TopDestinations, 
  Departments, 
  AppInformation, 
  AgencyInformation, 
  AgencyAbout, 
  CompaniesCarousel, 
  CommentsCarousel 
} from "@/index";

type Props = {
  params: Promise<{ lang: string }>; // Parámetro como Promise
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({params}:Props) {
  
  // Esperamos la resolución de la Promise
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  return (
    <>
      <Principal_Banner lang={lang} />
      {/*<SearchBar />*/}
      <TopDestinations lang={lang} />
      <Departments lang={lang} />
      <AppInformation lang={lang} />
      <TravelCarousel lang={lang} />
      <AgencyInformation lang={lang} />
      <AgencyAbout lang={lang} />
      <CompaniesCarousel lang={lang} />
      <CommentsCarousel lang={lang} />
    </>
  );
}
