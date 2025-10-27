"use client"

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { InteractiveButton, BodyProps, Conocenos, languageOption } from "@/index";
import { getTranslation } from "@/app/lib/i18n";
import Image from "next/image";

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
  image: string;
}

type Testimonials = Testimonial[];

//Sistema de comentarios
function Comments({test}:{test:Testimonials}) {
  const testimonials = test.map((testimonial, index) => {
    return {
      id: index + 1,
      name: testimonial.name,
      company: testimonial.company,
      text: testimonial.text,
      rating: testimonial.rating,
      image: testimonial.image
    };
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("none"); // 'up' or 'down' or 'none'

  const nextTestimonial = () => {
    setDirection("up");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setDirection("none"), 500);
  };

  const prevTestimonial = () => {
    setDirection("down");
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setDirection("none"), 500);
  };

  return (
    <div className="w-[95%] max-w-[570px] mx-auto relative max-[1100px]:mx-0 max-[1100px]:mt-[75px] max-[1100px]:ml-[125px] max-lg:ml-[64px] max-sm:mx-auto">
      <div className="relative h-[400px] max-sm:h-[450px]">
        {testimonials.map((testimonial, index) => {
          // Calculate the visible position for each card
          const isActive = index === currentIndex;
          const isNext = index === (currentIndex + 1) % testimonials.length;
          const isPrev =
            index ===
            (currentIndex - 1 + testimonials.length) % testimonials.length;

          // Base styles for all cards
          let cardStyles = "absolute w-[95%] transition-all duration-500 ";

          // Position and opacity based on card state
          if (isActive) {
            cardStyles += "top-0 opacity-100 z-20 ";
            //Animacion de movimiento
            if (direction === "up") cardStyles += "-translate-y-1/4 opacity-0 ";
            if (direction === "down")
              cardStyles += "translate-y-[35%] opacity-0 ";
          } else if (isNext) {
            cardStyles += "top-64 opacity-100 z-10 ";
            if (direction === "up") cardStyles += "top-0 z-20 ";
          } else if (isPrev) {
            cardStyles += "top-16 opacity-0 -z-10 ";
          } else {
            cardStyles += "top-16 opacity-0 -z-10 ";
          }

          return (
            <div key={testimonial.id} className={cardStyles}>
              {isActive ? (
                // Main testimonial card
                <div
                  className="bg-green-Vibrant rounded-[40px] p-6 mb-4 relative flex px-[60px] py-[50px] max-sm:p-[25px] max-sm:w-[95%] max-sm:mx-auto max-sm:rounded-[26px] max-sm:px-6"
                  id="formato del comentario principal"
                >
                  <div className="flex gap-4 items-center max-sm:flex-col max-sm:justify-center">
                    <Image
                      width={800}
                      height={800}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-[125px] h-[125px] absolute left-[-55px] top-[-30px] rounded-full object-cover max-sm:static max-sm:w-[210px] max-sm:h-[210px] max-sm:mx-auto"
                    />
                    <div className="flex-1">
                      <p className="text-white mb-6 text-[18px] font-semibold max-sm:text-[15px]">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center justify-between max-[400px]:flex-col max-[400px]:items-start">
                        <div className="flex flex-col max-sm:items-start">
                          <h3 className="w-[210px] font-bold bg-white text-[24px] mb-[2px] rounded-t-[26px] rounded-r-[26px] px-[20px] py-[5px] max-sm:text-[20px] max-sm:w-auto  max-sm:px-3 max-sm:rounded-t-[18px] max-sm:rounded-r-[18px]">
                            {testimonial.name}
                          </h3>
                          <p className="w-[170px] px-[18px] py-[8px] text-[15px] text-black bg-white rounded-b-[26px] max-sm:text-[12px] max-sm:w-auto max-sm:px-2 max-sm:rounded-b-[18px]">
                            {testimonial.company}
                          </p>
                        </div>
                        <div className="flex]">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-2xl ${
                                i < testimonial.rating
                                  ? "text-yellow-400"
                                  : "text-white"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Preview card
                <div className="absolute w-[85%] bg-gray-200 pt-[40px] left-[50px] rounded-[26px] max-sm:hidden">
                  <div className="flex justify-between items-center">
                    <div className="py-2 px-4">
                      <h3 className="w-[210px] font-bold bg-white text-[24px] mb-[2px] rounded-t-[26px] rounded-r-[26px] px-[20px] py-[5px]">
                        {testimonial.name}
                      </h3>
                      <p className="w-[170px] px-[18px] py-[8px] text-[15px] text-black bg-white rounded-b-[26px]">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <div className="absolute right-20 bottom-2 max-sm:bottom-[-48px] flex flex-col gap-1 z-30 max-sm:flex-row max-[400px]:right-12 max-[400px]:bottom-[-24px] max-[400px]:flex-col">
        <button
          onClick={nextTestimonial}
          className="bg-gray-300 p-2 rounded-full relative overflow-hidden group"
          aria-label="Previous testimonial"
        >
          <div className="absolute inset-0 bg-[#049353] transform scale-0 transition-transform duration-300 rounded-full group-hover:scale-100" />
          <ChevronUp className="w-7 h-7 relative z-10 transition-colors duration-300 group-hover:text-white" />
        </button>
        <button
          onClick={prevTestimonial}
          className="bg-gray-300 p-2 rounded-full relative overflow-hidden group"
          aria-label="Next testimonial"
        >
          <div className="absolute inset-0 bg-[#049353] transform scale-0 transition-transform duration-300 rounded-full group-hover:scale-100" />
          <ChevronDown className="w-7 h-7 relative z-10 transition-colors duration-300 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}

export function CommentsCarousel({lang}:{lang:string}) {

  const translations = getTranslation(lang as "es"||"en", "comments_carousel") as BodyProps["comments_carousel"];

  return (
    <>
      <div
        className=" absolute -left-[30px] w-[300px] -z-10 max-[550px]:w-[250px]"
        id="img left"
      >
        <Image width={800} height={800} src="/LeftDecorate.png" alt="imagen de decoracion" className="w-[90%] object-cover" />
      </div>
      <div
        className="absolute right-0 w-[300px] -z-10 overflow-hidden transform rotate-180"
        id="img left "
      >
        <Image width={800} height={800} src="/LeftDecorate.png" alt="imagen de decoracion derecha" className="w-[90%] object-cover" />
      </div>
      <div className="w-[1200px] max-[1300px]:w-full mx-auto flex flex-row max-[1100px]:flex-col max-[1100px]:items-start h-auto py-[160px]">
        <div className="w-[40%] flex flex-col items-start px-[30px] max-lg:w-[80%]">
          <Conocenos lang={languageOption[lang]["Inicio"]}/>
          <h3 className="font-bold text-[52px] text-[#363539] max-lg:text-[42px] max-[550px]:text-[36px]">
            {translations.title}
          </h3>
          <p className="text-[16px] font-thin my-[15px]">
            {translations.description}
          </p>
          <InteractiveButton text={translations.boton} slug="/"/>
        </div>
        <Comments test={translations.testimonials}/>
      </div>
    </>
  );
}

