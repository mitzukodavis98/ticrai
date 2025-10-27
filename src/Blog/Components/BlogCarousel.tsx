"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardBlog, getAllBlogs, BlogDetailProps, Conocenos } from "@/index";

export function BlogCarousel({ lang }: { lang: "es" | "en" }) {
  const [blogsData, setBlogsData] = useState<BlogDetailProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar blogs en useEffect
  useEffect(() => {
    async function loadBlogs() {
      try {
        setIsLoading(true);
        const blogsResponse = await getAllBlogs(lang);
        const blogs = blogsResponse.data; // Cambiado para usar la propiedad .data

        // Usar directamente blogs, sin buscar la propiedad .data
        if (blogs && Array.isArray(blogs)) {
          setBlogsData(blogs);
        } else {
          console.error("La respuesta de getAllBlogs no es un array:", blogs);
          setError(
            "Error al cargar los blogs. Formato de respuesta incorrecto."
          );
        }
      } catch (error) {
        console.error("Error cargando blogs:", error);
        setError(
          "Error al cargar los blogs. Por favor, intenta nuevamente más tarde."
        );
      } finally {
        setIsLoading(false);
      }
    }
    loadBlogs();
  }, [lang]);

  const settings = {
    dots: true,
    className: "center flex justify-center items-center",
    infinite: false,
    centerPadding: "60px",
    rows: 2,
    slidesPerRow: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesPerRow: 1,
        },
      },
    ],
  };

  // Renderizado condicional basado en el estado
  const renderContent = () => {
    if (isLoading) {
      return <div className="text-center py-8">Cargando blogs...</div>;
    }

    if (error) {
      return <div className="text-center py-8 text-red-500">{error}</div>;
    }

    if (!blogsData || blogsData.length === 0) {
      return <div className="text-center py-8">No hay blogs disponibles</div>;
    }

    return (
      <Slider {...settings}>
        {blogsData.map((blog, index) => (
          <div
            className="max-w-[900px] bg-white rounded-lg shadow-md overflow-hidden px-2 py-3"
            key={blog.slug || index}
          >
            <CardBlog lang={lang} {...blog} />
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <>
      <div className="w-[90%] m-auto my-[150px] max-lg:my-[75px] max-md:w-4/5">
        <div className="mx-auto">
          <Conocenos lang={lang} />
          <h2 className="text-[#363539] text-[54px] my-4 font-bold leading-tight max-sm:text-[36px] max-[450px]:text-[27px]">
            {lang === "es"
              ? "Conoce lo último en tendencia"
              : "Discover the latest trends"}
          </h2>
          {renderContent()}
        </div>
      </div>
    </>
  );
}
