"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Option,
  SidebarMenuProps,
  CustomLink,
  languageOption,
} from "@/index";
import LanguageSwitcher from "./LanguageSwitcher";

function ButtonsDropdown({ text, subOptions, Link: linkURL }: Option) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="inline-block relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CustomLink
        id="dropdownDefaultButton"
        className="h-[100%] font-bold bg-transparent hover:text-[#05c46b] text-[16px] px-4 text-center inline-flex items-center"
        href={linkURL}
      >
        {text}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </CustomLink>

      <div
        id="dropdown"
        className={`absolute z-40 divide-y divide-gray-100 rounded-lg shadow w-44 bg-gradient-to-r from-[#049353] to-[#06d77a] transition-all duration-700 ease-in-out ${
          isOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
        onMouseLeave={handleMouseLeave}
        style={{
          transformOrigin: "top center",
        }}
      >
        <ul
          className="py-2 text-sm text-white dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {subOptions.map((option, index) => (
            <CustomLink
              href={option.link}
              key={index}
              className="block px-4 py-2 font-bold hover:bg-white/10 cursor-pointer"
            >
              {option.label}
            </CustomLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SidebarMenu({ isOpen, options, onToggle }: SidebarMenuProps) {
  // O simplemente alternar su estado
  const toggleSidebar = () => {
    onToggle(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full text-white transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={() => toggleSidebar()}
    >
      <div className="p-2 w-[240px] bg-black h-full">
        <div className="flex flex-col space-y-2">
          <div className="">
            <input
              type="text"
              placeholder="Search Keywords..."
              className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus-visible:outline-none focus:ring-0 focus:border-b-2 focus:border-green-600"
            />
          </div>

          {options.map((option, index) => (
            <div key={index} className="py-1">
              <CustomLink
                className="flex justify-between items-center text-gray-300 hover:text-white cursor-pointer"
                href={option.Link}
              >
                <span className="text-[18px] font-bold text-transparent text-center bg-clip-text bg-green-Vibrant">
                  {option.text}
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </CustomLink>
              <div className="ml-4 mt-1">
                {option.subOptions.map((subOption, subIndex) => (
                  <CustomLink
                    key={subIndex}
                    href={subOption.link}
                    className="block py-2 text-sm text-gray-400 hover:text-white"
                  >
                    {subOption.label}
                  </CustomLink>
                ))}
              </div>
            </div>
          ))}
          <div className="py-1">
            <a
              className="flex justify-between items-center text-gray-300 hover:text-white cursor-pointer"
              href={"http://wa.me/51984260053"}
            >
              <span className="text-[18px] font-bold text-transparent text-center bg-clip-text bg-green-Vibrant">
                Whatsapp
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LanguageOptions {
  [key: string]: Option[];  // Index signature para soportar cualquier idioma
  es: Option[];
  en: Option[];
}


export function Header({ lang }: { lang: string }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  // Opciones base que siempre están disponibles
  const allOptions:LanguageOptions = {
    es:[
      {
        text: "Inicio",
        Link: languageOption[lang]["Inicio"],
        subOptions: [
          {
            label: "Vibrant Perú",
            link: languageOption[lang]["Inicio"],
          },
        ],
      },
      {
        text: "Sobre",
        Link: languageOption[lang]["Sobre"],
        subOptions: [{ label: "Sobre nosotros", link: languageOption[lang]["Sobre"] }],
      },
      {
        text: "Destinos",
        Link: languageOption[lang]["Destinos"],
        subOptions: [{ label: "Todos los destinos", link: languageOption[lang]["Destinos"] }],
      },
      {
        text: "Blog",
        Link: languageOption[lang]["Blog"],
        subOptions: [{ label: "Blog Vibrant", link: languageOption[lang]["Blog"] }],
      },
      {
        text: "App",
        Link: languageOption[lang]["App"],
        subOptions: [{ label: "Vibrant App", link: languageOption[lang]["App"] }],
      },
    ],
    en:[
      {
        text: "Home",
        Link: languageOption[lang]["Inicio"],
        subOptions: [
          {
            label: "Vibrant Perú",
            link: "/",
          },
        ],
      },
      {
        text: "About",
        Link: languageOption[lang]["Sobre"],
        subOptions: [{ label: "About us", link: languageOption[lang]["Sobre"] }],
      },
      {
        text: "Destinations",
        Link: languageOption[lang]["Destinos"],
        subOptions: [{ label: "All Destinations", link: languageOption[lang]["Destinos"] }],
      },
      {
        text: "Blog",
        Link: languageOption[lang]["Blog"],
        subOptions: [{ label: "Vibrant Blog", link: languageOption[lang]["Blog"] }],
      },
      {
        text: "App",
        Link: languageOption[lang]["App"],
        subOptions: [{ label: "Vibrant App", link: languageOption[lang]["App"] }],
      },
    ]
  }

  // Resto de tus useEffects...
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full pt-1 z-40 transition-all duration-300 ${
          isScrolled ? "bg-emerald-700/80 text-white" : "bg-white"
        }`}
      >
        <div
          className="flex w-[100%] h-[100px] items-center justify-between px-[5%]"
          id="header container"
        >
          <div className="flex relative left-0 items-center space-x-4">
            <CustomLink
              href={languageOption[lang]["Inicio"]}
              className=" w-[100px] cursor-pointer h-auto"
              id="Logo"
            >
              <Image
                width={800}
                height={800}
                src="/LogoVibrantPeru.png"
                className="w-[81px] max-[500px]:w-[75px]"
                alt="Logo de la Vibrant Peru"
              />
            </CustomLink>
            <LanguageSwitcher currentLang={lang} />
          </div>

          {!isMobile ? (
            <div className="flex space-x-1" id="Options">
              {allOptions[lang].map((option, index) => (
                <ButtonsDropdown
                  key={index}
                  text={option.text}
                  subOptions={option.subOptions}
                  Link={option.Link}
                />
              ))}
            </div>
          ) : (
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hover:text-[#05c46b] focus:outline-none"
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <defs>
                  <linearGradient
                    id="menuGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#049353" />
                    <stop offset="100%" stopColor="#06d77a" />
                  </linearGradient>
                </defs>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                  stroke="url(#menuGradient)"
                />
              </svg>
            </button>
          )}

          <div className="flex w-auto h-[100%] max-[1000px]:hidden" id="More">
            <a className="flex w-[200px] h-[65px] my-auto bg-gradient-to-r from-[#049353] to-[#06d77a] text-white font-bold rounded-full shadow-md items-center justify-center space-x-2 group relative overflow-hidden" href="http://wa.me/51984260053" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 transition-transform duration-1000 group-hover:rotate-[720deg]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
              <p className="relative text-[16px] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 group-hover:after:w-full">
                {lang === "es" ? "Contáctanos" : "Let's Talk"}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <SidebarMenu
          isOpen={isSidebarOpen}
          options={allOptions[lang]}
          onToggle={setIsSidebarOpen}
        />
      </div>
    </>
  );
}
