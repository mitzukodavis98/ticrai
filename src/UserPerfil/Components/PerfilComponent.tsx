"use client";

import { useState } from "react";
import { Flight, InteractiveButton, UserData } from "@/index";
import { User, Lock, CreditCard, ChevronRight } from "lucide-react";
import { TbWorldPin } from "react-icons/tb";
import Image from "next/image";

// Componentes de contenido
function UpcomingFlights() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <p className="text-xl mb-6">No tienes viajes</p>
      <InteractiveButton
        text="Find your next destination!!!"
        slug="/Destination"
      />
    </div>
  );
}

function FlightHistory({ data }: { data: Flight[] }) {
  return (
    <div className="overflow-x-auto overflow-y-auto max-h-[250px] mb-8">
      <table className="min-w-full bg-white shadow-md border-collapse leading-tight">
        <thead className="sticky top-0 z-10">
          <tr className="bg-black text-white">
            <th className="py-2 px-4">Código de reserva</th>
            <th className="py-2 px-4">Destino</th>
            <th className="py-2 px-4">Fecha</th>
            <th className="py-2 px-4">Número de personas</th>
          </tr>
        </thead>
        <tbody>
          {data.map((reservation, i) => (
            <tr
              key={i}
              className="border-b text-center hover:bg-green-Vibrant hover:text-white"
            >
              <td className="py-2 px-4">{reservation.codigo}</td>
              <td className="py-2 px-4">{reservation.destino}</td>
              <td className="py-2 px-4">{reservation.fecha}</td>
              <td className="py-2 px-4">{reservation.numPersonas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Gallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <div className="container mx-auto px-4 py-8 overflow-y-auto max-h-[400px] mb-8">
      {/* Grid de imágenes */}
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-[500px]:grid-cols-1 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              width={300}
              height={200}
              src={src}
              alt={`Imagen ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal para vista completa */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage("")}
        >
          <div className="max-w-4xl max-h-screen">
            <Image
              src={selectedImage}
              alt="Vista ampliada"
              className="max-h-screen object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl font-bold p-2 hover:text-gray-300"
              onClick={() => setSelectedImage("")}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const Payments = () => (
  <div className="flex flex-col items-center justify-center py-12 px-4">
    <div className="rounded-full border-2 border-green-500 p-4 mb-4"></div>
    <p className="text-xl mb-6">No hay pagos registrados</p>
  </div>
);

export function PerfilComponent({ userData }: { userData: UserData }) {
  // Estado para controlar qué opción está seleccionada
  const [selectedOption, setSelectedOption] = useState("");

  // Función para manejar el clic en una opción
  const handleOptionClick = (option: string) => {
    // Si la opción ya está seleccionada, la deseleccionamos
    if (selectedOption === option) {
      setSelectedOption("");
    } else {
      // Si no, seleccionamos la nueva opción
      setSelectedOption(option);
    }
  };

  // Renderiza el formulario correspondiente según la opción seleccionada
  const renderForm = (option: string) => {
    switch (option) {
      case "personal":
        return (
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" className="w-full p-2 border rounded-md" />
            </div>
            <button
              type="submit"
              className="w-full bg-green-Vibrant text-white py-2 px-4 rounded-md"
            >
              Guardar cambios
            </button>
          </form>
        );
      case "password":
        return (
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña actual
              </label>
              <input type="password" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nueva contraseña
              </label>
              <input type="password" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirmar contraseña
              </label>
              <input type="password" className="w-full p-2 border rounded-md" />
            </div>
            <button
              type="submit"
              className="w-full bg-green-Vibrant text-white py-2 px-4 rounded-md"
            >
              Actualizar contraseña
            </button>
          </form>
        );
      case "bank":
        return (
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Titular
              </label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número de tarjeta
              </label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha expiración
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="MM/AA"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input type="text" className="w-full p-2 border rounded-md" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-Vibrant text-white py-2 px-4 rounded-md"
            >
              Guardar información
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  const [showMenu, setShowMenu] = useState(false);

  //Datos de viajes ya hechos
  const data = [
    { codigo: "RES123", destino: "París", fecha: "2025-03-15", numPersonas: 2 },
    {
      codigo: "RES456",
      destino: "Nueva York",
      fecha: "2025-04-10",
      numPersonas: 4,
    },
    { codigo: "RES789", destino: "Tokio", fecha: "2025-05-20", numPersonas: 1 },
    { codigo: "RES123", destino: "París", fecha: "2025-03-15", numPersonas: 2 },
    {
      codigo: "RES456",
      destino: "Nueva York",
      fecha: "2025-04-10",
      numPersonas: 4,
    },
    { codigo: "RES789", destino: "Tokio", fecha: "2025-05-20", numPersonas: 1 },
    { codigo: "RES123", destino: "París", fecha: "2025-03-15", numPersonas: 2 },
    {
      codigo: "RES456",
      destino: "Nueva York",
      fecha: "2025-04-10",
      numPersonas: 4,
    },
    { codigo: "RES789", destino: "Tokio", fecha: "2025-05-20", numPersonas: 1 },
  ];

  //Datos de galería
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
  ];

  const [activeTab, setActiveTab] = useState("upcoming");

  const tabs = [
    {
      id: "upcoming",
      label: "Próximos viajes",
      component: <UpcomingFlights />,
    },
    {
      id: "history",
      label: "Historial",
      component: <FlightHistory data={data} />,
    },
    {
      id: "gallery",
      label: "Galeria",
      component: <Gallery images={images} />,
    },
    {
      id: "comentaries",
      label: "Comentarios",
      component: <Payments />,
    },
  ];

  // Modifica la parte del return así:
  return (
    <div className="w-[85%] h-auto mx-auto my-[150px] flex flex-col gap-4 text-[#363539] max-2xl:w-[95%]">
      <div className="flex flex-row justify-center items-center gap-8 max-lg:flex-col max-lg:gap-4">
        {/**Datos personales del usuario */}
        <div className="relative max-lg:w-4/5 max-[550px]:w-full">
          <div className="h-[300px] bg-[#04935330] rounded-2xl flex flex-row justify-center items-center p-8 max-lg:mx-auto max-sm:flex-col max-sm:gap-4 max-sm:h-auto ">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden max-2xl:w-[175px] max-2xl:h-[175px] max-xl:w-[150px] max-xl:h-[150px]">
              <Image
                className="w-full h-full object-cover"
                src="/8.png"
                alt="image"
              />
            </div>
            <div className="flex flex-col gap-2 w-[250px]">
              <div className="flex flex-col px-3 gap-1 max-sm:text-center">
                <h2 className="font-semibold text-[24px] leading-tight">
                  {userData.name.split(" ").slice(0, 3).join(" ")}
                </h2>
                <p className="font-thin">{userData.email}</p>
              </div>

              <ul className="flex flex-row gap-4 px-3">
                <li className="flex flex-col">
                  <span className="font-bold">Aportes</span>
                  <span>100</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold">Seguidores</span>
                  <span>100</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold">Siguiendo</span>
                  <span>100</span>
                </li>
              </ul>

              <button
                className="underline hover:text-Vibrant_Color"
                onClick={() => setShowMenu(!showMenu)}
              >
                Editar
              </button>
            </div>
          </div>

          {/* Menú desplegable */}
          {showMenu && (
            <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-40">
              <div className="flex flex-col">
                {/* Datos personales */}
                <div>
                  <button
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 w-full transition-colors duration-200"
                    onClick={() => handleOptionClick("personal")}
                  >
                    <div className="flex items-center gap-3">
                      <User className="w-6 h-6 text-gray-600" />
                      <span className="text-gray-800">Datos personales</span>
                    </div>
                    <div
                      className={`transform transition-transform duration-300 ${
                        selectedOption === "personal" ? "rotate-90" : ""
                      }`}
                    >
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </button>
                  <div
                    className={`
              overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 border-t border-gray-200
              ${
                selectedOption === "personal"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
                  >
                    <div className="px-6 py-4">{renderForm("personal")}</div>
                  </div>
                </div>

                {/* Contraseña */}
                <div>
                  <button
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 w-full transition-colors duration-200"
                    onClick={() => handleOptionClick("password")}
                  >
                    <div className="flex items-center gap-3">
                      <Lock className="w-6 h-6 text-gray-600" />
                      <span className="text-gray-800">Contraseña</span>
                    </div>
                    <div
                      className={`transform transition-transform duration-300 ${
                        selectedOption === "password" ? "rotate-90" : ""
                      }`}
                    >
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </button>
                  <div
                    className={`
              overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 border-t border-gray-200
              ${
                selectedOption === "password"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
                  >
                    <div className="px-6 py-4">{renderForm("password")}</div>
                  </div>
                </div>

                {/* Datos Bancarios */}
                <div>
                  <button
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 w-full transition-colors duration-200"
                    onClick={() => handleOptionClick("bank")}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-gray-600" />
                      <span className="text-gray-800">Datos Bancarios</span>
                    </div>
                    <div
                      className={`transform transition-transform duration-300 ${
                        selectedOption === "bank" ? "rotate-90" : ""
                      }`}
                    >
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </button>
                  <div
                    className={`
              overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 border-t border-gray-200
              ${
                selectedOption === "bank"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
                  >
                    <div className="px-6 py-4">{renderForm("bank")}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/**Datos de los viajes del usuario */}
        <div className="w-[55%] h-auto bg-[#04935330] rounded-2xl max-lg:w-4/5 max-lg:mx-auto max-[550px]:w-full">
          {/* Buttons tabs */}
          <div className="flex rounded-t-2xl overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 py-4 px-4 text-center font-medium transition-colors max-[550px]:py-2 max-[550px]:px-1 ${
                  activeTab === tab.id
                    ? "bg-green-Vibrant text-white"
                    : "bg-transparent hover:bg-Vibrant_Color/50"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenido */}
          <div className="bg-transparent w-full">
            {tabs.find((tab) => tab.id === activeTab)?.component}
          </div>
        </div>
      </div>
      <div className="w-[90%] h-auto mx-auto bg-[#04935330] px-8 py-4 rounded-2xl flex flex-row justify-between items-center max-md:w-full max-md:px-6 max-md:py-2 max-sm:px-3">
        <TbWorldPin className="size-16 text-emerald-600 max-md:size-12 max-sm:size-8" />
        <h3 className="w-2/5 text-emerald-500 text-center text-[27px] max-md:text-[20px] max-sm:text-[14px] max-md:w-1/2">
          Revisa entre todos nuestros destinos y
          <span className="text-emerald-700 font-extrabold">
            {" "}
            decide tu próximo viaje!
          </span>
        </h3>
        <InteractiveButton text=" Destinations " slug="/Destination" />
      </div>
    </div>
  );
}
