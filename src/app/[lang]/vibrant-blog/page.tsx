import { BlogCarousel } from "@/index";

export default async function page(props: {
  params: Promise<{ lang: string; blogNotice: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await props.params;
  const lang = params.lang as "es" | "en";
  // Removemos blogNotice ya que no se usa
  
  return (
    <BlogCarousel lang={lang} />
  )
}