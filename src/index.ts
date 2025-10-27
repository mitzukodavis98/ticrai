
//!Layout
//Componentes
export { Header } from "./Components/Header";

export { ImagesCarrusel } from "./Components/ImagesCarousel";
export { Footer } from "./Components/Footer";
//Interfaces
export type { Option, SidebarMenuProps } from "./Interfaces/Header";

//!Landing o pagina principal
//Componentes
export { Principal_Banner } from "./Components/Principal_Banner";
export { SearchBar } from "./Components/SearchBar";
export { DataDestinations } from "./Components/DataDestination";
export { CardDestination } from "./Components/CardDestination";
export { TopDestinations } from "./Components/TopDestinations";
export { Departments } from "./Components/Deparments";
export { InteractiveButton } from "./Components/InteractiveButton";
export { AppInformation } from "./Components/AppInformation";
export { TravelCarousel } from "./Components/TravelCarousel";
export { AgencyInformation } from "./Components/AgencyInformation";
export { AgencyAbout } from "./Components/AgencyAbout";
export { CompaniesCarousel } from "./Components/CompaniesCarousel";
export { CommentsCarousel } from "./Components/CommentsCarousel";
export { Check } from "./Components/Check";
export { Uncheck } from "./Components/Uncheck";
export { Conocenos } from "./Components/Conocenos";
export { LoadingScreen } from "./Components/loading";
export { CustomLink } from "./Components/CustomLink";
export { languageOption } from "./Components/paths";
//Interfaces
export type { InteractiveButtonProps } from "./Interfaces/InteractiveButton";
export type { CardDestinationProps } from "./Interfaces/CardDestination";
export type { IconButonProps, CardProps } from "./Interfaces/AgencyAbout";
export type { BodyProps } from "./Interfaces/body";
export type { CarruselItem } from "./Interfaces/CarruselItem";
//Funciones
export {
  getDestination,
  getOtherDestination,
  getAllDestination,
  loadDestination,
} from "./Functions/ObtenerDestinationData";

//!Pagina de todos los destinations
//Componentes
export { AllDestinationsBanner } from "./Destinations/Components/AllDestinationsBanner";
//Interfaces

//!Pagina de cada destination
//Componentes
export { DestinationBanner } from "./Destinations/Destination/Components/DestinationBanner";
export { ImageGallery } from "./Destinations/Destination/Components/ImageGallery";
export { DescriptionPage } from "./Destinations/Destination/Components/DestinationDescription";
export { MapComponent } from "./Destinations/Destination/Components/Map";
export { OtherDestinations } from "./Destinations/Destination/Components/OtherDestinations";

//Interfaces
export type {
  AdvantageProps,
  DescriptionPageProps,
  DestinationDetailProps,
  ImageGalleryProp,
} from "./Destinations/Destination/Interfaces/DestinationDescription";

//!Pagina de la aplicacion
//Componentes
export { BannerVibrantApp } from "./Vibrantapp/Components/PrincipalBannerApp";

//!Pagina del AboutUs
//Componentes
export { BannerAboutUs } from "./AboutUs/Components/BannerAboutUs";
export { TimeLine } from "./AboutUs/Components/TimeLine";

//!Pagina del Blog
//Componentes
export { DataBlogs } from "./Blog/Components/DataBlogs";
export { CardBlog } from "./Blog/Components/CardBlog";
export { BlogCarousel } from "./Blog/Components/BlogCarousel";
//Interfaces
export type {
  CardBlogProps,
  BlogDetailProps,
  ImageGalleryBlogProp,
} from "./Blog/Interfaces/CardBlogProps";
//Funciones
export {
  getBlog,
  getOtherBlogs,
  getAllBlogs,
} from "./Functions/ObtenerBlogsData";
export { getAllCarrusel } from "./Functions/ObtenerImagesData";

//!Pagina de cada blog
//Componentes
export { BlogImagesCarousel } from "./Blog/BlogNotice/Components/BlogImagesCarousel";

//!Pagina del perfil de usuario
//Componentes
export { PerfilComponent } from "./UserPerfil/Components/PerfilComponent";
//Interfaces
export type {
  Flight,
  UserData,
} from "./UserPerfil/Interfaces/PerfilInterfaces";
