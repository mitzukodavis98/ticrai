import { Calendar, LetterText, MessageSquare } from "lucide-react";
import { CardBlogProps, CustomLink } from "@/index";
import Image from "next/image";

export function CardBlog({ image, title, resumen, date, slug, lang }: CardBlogProps) {
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
    <>
      <div className="relative h-[320px] max-lg:h-[270px] max-[800px]:h-[320px] max-sm:h-[250px] max-[350px]:h-[220px]">
        <Image
          alt={`${title}`}
          width={800}
          height={800}
          src={image}
          className="w-full h-full object-cover"
        />
        <CustomLink
          className="absolute bottom-0 left-0 bg-green-Vibrant text-white px-4 py-2 max-sm:px-2 max-sm:py-1 max-sm:text-[16px]"
          href={`/vibrant-blog/${slug}`}
        >
          {lang === "es" ? "Descubre más" : "Discover more"}
        </CustomLink>
      </div>

      <div className="flex flex-col justify-center p-4 space-y-4 h-[320px] max-lg:h-[270px] max-[800px]:h-[320px] max-sm:h-[250px] max-[350px]:h-[220px]">
        <div className="flex items-center space-x-2 text-gray-600">
          <MessageSquare size={16} />
          <span>{title}</span>
        </div>
        <div className="flex space-x-2 text-gray-500">
          <LetterText className="w-[80px]" />
          <span>{resumen}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <Calendar size={16} />
          <span>{formatDate(date)}</span>
        </div>
      </div>
    </>
  );
}
