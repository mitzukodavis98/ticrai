import Link from "next/link";
import { LuMapPin } from "react-icons/lu";
import { FaSwimmer } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";

export function SearchBar() {

  //Datos de la barra de búsqueda
  const characters = [
    {
      title: "Location",
      description: "Where To Next?",
      icon: <LuMapPin className="text-gray-800" />,
    },
    {
      title: "Activity",
      description: "Select Activity",
      icon: <FaSwimmer className="text-gray-800"/>,
    },
    {
      title: "Tour",
      description: "Select Type",
      icon: <PiAirplaneTiltFill className="text-gray-800"/>,
    },
  ]

  return (
    <>
      <div className="flex flex-row items-center justify-between bg-white h-[75px] w-[1250px] max-[1300px]:w-full rounded-full shadow-md my-[50px] mx-auto pl-[45px] max-sm:flex-col max-sm:w-[90%] max-sm:mx-auto max-sm:rounded-none max-sm:p-0 max-sm:shadow-none max-sm:h-auto">
        {characters.map((character, index) => (
          <div
            key={index}
            className="flex flex-row justify-between w-1/4 items-center max-sm:w-full max-sm:px-[32px] max-sm:my-[10px]"
          >
            <div className="flex flex-col">
              <h4 className="text-gray-800 font-bold text-[20px]">
                {character.title}
              </h4>
              <p className="text-gray-600">{character.description}</p>
            </div>
            {character.icon}
          </div>
        ))}

        {/* Botón de búsqueda */}
        <div className="flex justify-center items-center w-[17%] h-full max-sm:w-full max-sm:h-[50px]">
          <Link
            className="flex justify-center items-center bg-green-Vibrant text-white w-full h-full rounded-tr-full rounded-br-full max-sm:rounded-none  max-sm:py-3"
            href={"/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3a7.5 7.5 0 105.42 12.708l4.94 4.94a1.5 1.5 0 102.12-2.12l-4.94-4.94A7.5 7.5 0 0010.5 3zm0 3a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
