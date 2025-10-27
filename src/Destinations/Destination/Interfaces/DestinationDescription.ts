import { ReactElement } from "react";

export interface AdvantageProps {
  text1: string;
  text2: string | number | boolean;
  children: ReactElement<{
    className?: string;
    [key: string]: unknown;
  }>;
  className?: string;
}

interface IncludedExcludedItem {
  id: string | number;
  text: string;
}

export interface ImageGalleryProp {
  id: number;
  image: string;
  alt: string;
}

export interface DescriptionPageProps {
  location: string;
  accomodation: string;
  admission_free: string;
  arrival_city: string;
  best_season: string;
  departure_city: string;
  free_cancel: string;
  guide: string;
  hotel_transfer: string;
  insurance: string;
  language: string;
  minimum_age: string | number;
  maximum_age: string | number;
  overview: string;
  top_highlights_text: string;
  top_highlights_list: string[];
  included: IncludedExcludedItem[];
  excluded: IncludedExcludedItem[];
  lang: string;
}

//Interface para los datos de toda la pagina
export interface DestinationDetailProps {
  id: number;
  banner: string;
  location: string;
  price: string;
  days: string;
  slug: string;
  images: ImageGalleryProp[];
  overview: string;
  topHighlights: string;
  checks: string[]; // Esto se pasa a top_highlights_list
  included: IncludedExcludedItem[];
  excluded: IncludedExcludedItem[];
  characteristics: {
    accomodation: string;
    admission_free: string;
    arrival_city: string;
    best_season: string;
    departure_city: string;
    free_cancel: string;
    guide: string;
    hotel_transfer: string;
    insurance: string;
    language: string;
    minimum_age: string | number;
    maximum_age: string | number;
  };
  coordinates: string;
}
