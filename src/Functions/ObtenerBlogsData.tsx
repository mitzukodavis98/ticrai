import { notFound } from "next/navigation";
import axios from "axios";
import {
  CardBlogProps,
  BlogDetailProps,
} from "@/Blog/Interfaces/CardBlogProps";

// URL general
const URL = axios.create({
  baseURL: "https://vibrantperu.com/api/v3/",
  headers: {
    "x-api-key": "5a941ee8cb9c9c5fc9b879eb9129d457f38b8147",
    "Content-Type": "application/json",
  },
});

// Mover la llamada a un método que sea llamado solo cuando se necesite
export async function getAllBlogs(language: string) {
  return URL.get(`blog/${language}`);
}

type BlogsResponse = {
  data: BlogDetailProps[];
};

const dataCache: Record<string, BlogsResponse> = {};

export async function loadBlogs(
  language: string,
  forceRefresh = false
): Promise<BlogsResponse> {
  if (forceRefresh || !dataCache[language]) {
    dataCache[language] = await getAllBlogs(language);
  }
  return dataCache[language];
}

// Función para obtener datos de un destino por su slug
export async function getBlog(
  slug: string,
  language: string
): Promise<BlogDetailProps> {
  try {
    const blogs = await getAllBlogs(language);
    const blog = blogs.data.find((blog: BlogDetailProps) => blog.slug === slug);

    if (blog) return blog;

    const altLanguage = language === "es" ? "en" : "es";
    const altBlogs = await getAllBlogs(altLanguage);
    const altBlog = altBlogs.data.find(
      (blog: BlogDetailProps) => blog.slug === slug
    );

    if (!altBlog) notFound();

    return (
      (await loadBlogs(language)).data.find((blog) => blog.id === altBlog.id) ||
      notFound()
    );
  } catch (error) {
    console.error("Error al obtener blog por slug:", error);
    notFound();
  }
}

// Función para obtener datos de los destinos diferentes al actual
export async function getOtherBlogs(slug: string, language: string) {
  try {
    const blogs = await getAllBlogs(language);
    const otherBlogs = blogs.data.filter(
      (blog: CardBlogProps) => blog.slug !== slug
    );

    return otherBlogs;
  } catch (error) {
    console.error("Error al obtener otros blogs:", error);
    return [];
  }
}
