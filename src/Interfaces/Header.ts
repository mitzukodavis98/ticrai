
export interface SubOption {
  label: string;
  link: string;
}


export interface Option {
  text: string;
  subOptions: SubOption[];
  Link: string;
}

export interface SidebarMenuProps { 
  isOpen: boolean;
  options: Option[]
  onToggle: (state: boolean) => void;
}