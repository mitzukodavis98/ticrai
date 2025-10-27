import { PerfilComponent } from "@/index";

export const dynamic = 'force-dynamic'; // Para evitar el cacheo de la página

export default function UserPerfil() {
  
  //Definir los datos del perfil
  const userData = {
    name: "Patrick Michael Pumaccahua Huallpa",
    email: "patrickpumaccahua@gmail.com",
  };

  return (
    <>
      <PerfilComponent userData={userData} />
    </>
  );
}