import { IconType } from "react-icons";


export interface IconButonProps {
  icon: IconType; // iconos de React icons
  isSelected: boolean;
  onClick: () => void;
  label: string;
}

export interface CardProps {
  tema: string;
  descripcion: string;
  animate: boolean;
}