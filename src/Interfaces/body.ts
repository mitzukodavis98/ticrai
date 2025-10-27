export type BodyProps = {
  principal_banner: {
    title: string;
    description: string,
    boton: string,
  },
  top_destinations: {
    title: string;
  },
  departments: {
    title: string,
    descriptions:
      {
        title: string,
        description: string,
      }[],
    boton: string,
  },
  app_information: {
    title: string,
    description: string,
    advantages: string[];
  },
  travel_carousel: {
    title: string,
    description: string,
    text_carousel: string,
    subtext_carousel: string,
  },
  agency_information: {
    title: string,
    text_users: string,
    sub_title: string,
    sub_text: string,
    text_aproved: string,
    advantages: string[];
  },
  agency_about: {
    title: string,
    abouts: {
      title: string,
      description: string,
    }[]
  },
  companies_carouse:{
    title: string,
  },
  comments_carousel:{
    title: string,
    description: string,
    boton: string,
    testimonials: {
      name: string,
      company: string,
      text: string,
      image: string,
      rating: number,
    }[],
  },
}