export interface CardBlogProps {
  image: string;
  title: string;
  resumen: string;
  date: string;
  slug: string;
  lang: string;
}

export interface ImageGalleryBlogProp {
  image: string;
  alt: string;
}

export interface BlogDetailProps {
  id: number;
  image: string;
  resumen: string;
  date: string;
  slug: string;
  images: string[];
  title: string;
  description: string;
}
