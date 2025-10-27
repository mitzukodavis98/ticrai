import { Calendar, MessageSquare } from "lucide-react";
import { Metadata } from "next";
import {
  getBlog,
  getOtherBlogs,
  BlogImagesCarousel,
  BlogDetailProps,
  CustomLink,
} from "@/index";
import Image from "next/image";
import { redirect } from "next/navigation";

// Definición correcta para Next.js 15 - lang y blogNotice deben estar juntos en params
type Props = {
  params: Promise<{
    lang: string; // ← Movido aquí
    blogNotice: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Metadata dinámica para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    // Extrae el slug del destino
    const resolvedParams = await params;
    const slug = resolvedParams.blogNotice;
    const lang = resolvedParams.lang as "es" | "en"; // Ahora también extraes lang

    // Obtiene los datos del destino
    const blog = await getBlog(slug, lang);

    return {
      title: `${blog.title}`,
      description:
        blog.resumen?.substring(0, 160) ||
        `Descubre todo sobre ${blog.title} con Vibrant Travel`,
    };
  } catch {
    return {
      title: "Blog no encontrado | Vibrant Travel",
      description: "Lo sentimos, el blog que buscas no está disponible",
    };
  }
}

export default async function BlogPage({ params }: Props) {
  // Extrae todos los parametros
  const resolvedParams = await params;
  const slug = resolvedParams.blogNotice;

  // Esperamos la resolución de la Promise
  const lang = resolvedParams.lang as "es" | "en";

  //obtenemos los datos en ambos idiomas
  const BlogSpanish = await getBlog(slug, "es");
  const BlogEnglish = await getBlog(slug, "en");

  // Generamos un diccionario con los datos
  const DiccionaryLanguageSlugs: Record<string, Record<string, string>> = {};
  // Llenamos el diccionario con las traducciones correspondientes
  DiccionaryLanguageSlugs["es"] = {};
  DiccionaryLanguageSlugs["en"] = {};
  // Llenamos el diccionario con los slugs
  DiccionaryLanguageSlugs["es"][BlogEnglish.slug] = BlogSpanish.slug;
  DiccionaryLanguageSlugs["en"][BlogSpanish.slug] = BlogEnglish.slug;

  //verificar si el slug necesita traduccion
  const traslateSlug = DiccionaryLanguageSlugs[lang]?.[slug];
  //Si existe traduccion, redirigir
  if (traslateSlug){
    redirect(`/${lang}/vibrant-blog/${traslateSlug}`);
  }


  // Datos del blog
  const Blog = await getBlog(slug, lang);
  // Obtener datos de otros blogs
  const otherBlogs = await getOtherBlogs(slug, lang);
  const otherBlogsList = otherBlogs.slice(0, 3);

  const formatDate = (dateString: string): string => {
    try {
      const dateObj = new Date(dateString);

      // Verificar si es una fecha válida
      if (isNaN(dateObj.getTime())) {
        return dateString; // Devuelve la fecha original si no es válida
      }

      // Obtener día, mes y año
      const day = dateObj.getDate().toString().padStart(2, "0");
      const month = (dateObj.getMonth() + 1).toString().padStart(2, "0"); // +1 porque los meses van de 0-11
      const year = dateObj.getFullYear();

      // Devolver en formato día/mes/año
      return `${day}/${month}/${year}`;
    } catch (error) {
      console.error("Error al formatear fecha:", error);
      return dateString;
    }
  };

  return (
    <div className="w-full flex flex-row justify-center min-h-[500px] mt-[150px] mb-[75px] mx-auto max-lg:flex-col max-lg:items-center">
      <div className="flex flex-col gap-4 w-[800px] max-[1500px]:w-[700px] max-[1400px]:w-[600px] max-lg:w-[90%] px-2">
        <BlogImagesCarousel items={Blog.images} />
        <h2 className="whitespace-pre-line text-[36px] font-bold leading-tight max-[550px]:text-[27px]">
          {Blog.title}
        </h2>
        <p className="w-[95%] whitespace-pre-line text-[20px] max-[550px]:text-[16px]">
          {Blog.description}
        </p>
      </div>

      <div className="w-1/3 h-auto bg-transparent flex flex-col items-center gap-2 max-[1300px]:w-[30%] max-lg:w-[90%] max-lg:justify-center max-lg:my-[50px]">
        {otherBlogsList.map((blog: BlogDetailProps, index: number) => (
          <CustomLink
            className="flex flex-row border-gray-400 border-b-[1px] items-center gap-2 bg-white w-[90%] min-h-[100px] p-2 cursor-pointer max-lg:w-4/5 max-[550px]:w-[95%]"
            key={index}
            // Para navegar a otros blogs - incluir lang en la URL
            href={`/${lang}/vibrant-blog/${blog.slug}`}
          >
            <div className="w-[80px] h-[80px] max-[350px]:w-[60px] max-[350px]:h-[60px]">
              <Image
                alt={blog.title}
                width={800}
                height={800}
                src={blog.image}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MessageSquare size={16} />
                <span>{blog.title}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Calendar size={16} />
                <span>{formatDate(blog.date)}</span>
              </div>
            </div>
          </CustomLink>
        ))}
      </div>
    </div>
  );
}
