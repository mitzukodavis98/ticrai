interface DiccionaryPaths {
  [key: string]: {
    [key: string]: string;
  };
}

// Definición de las opciones de idioma
export const languageOption: DiccionaryPaths = {
  "es":{
    "Inicio":"/es",
    "Sobre": "/es/sobre-nosotros",
    "Destinos": "/es/destinos",
    "Blog": "/es/vibrant-blog",
    "App": "/es/Vibrantapp"
  },
  "en":{
    "Inicio":"/en",
    "Sobre": "/en/about-us",
    "Destinos": "/en/destinations",
    "Blog": "/en/vibrant-blog",
    "App": "/en/Vibrantapp"
  }
}