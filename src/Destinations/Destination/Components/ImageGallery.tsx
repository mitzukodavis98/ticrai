'use client'

import { useState } from "react";
import { ImageGalleryProp } from "@/index";
import Image from "next/image";

export const ImageGallery = ({ images }:{images: ImageGalleryProp[];}) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleImageChange = (newImage:ImageGalleryProp) => {
    if (newImage.id === selectedImage.id) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedImage(newImage);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  return (
    <div className="w-[80%] h-[600px] mx-auto my-16 flex flex-row justify-center max-lg:flex-col max-md:my-10 max-sm:h-[500px] max-[500px]:h-[400px]">
      {/* Thumbnails */}
      <div className="flex gap-4 flex-col h-auto m-[20px] max-lg:flex-row max-lg:justify-between ">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => handleImageChange(image)}
            className={`relative rounded-lg overflow-hidden w-36 h-[24%] transition-all duration-300 max-lg:h-full ${
              selectedImage.id === image.id
                ? "ring-4 ring-blue-500"
                : "hover:ring-2 hover:ring-blue-300"
            }`}
          >
            <Image alt={`imagen ${image.id}`} width={800} height={800} src={image.image} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative w-[800px] h-full ml-[20px] max-lg:w-full rounded-xl overflow-hidden bg-gray-100 max-sm:ml-0">
        <Image
          width={800}
          height={800}
          alt="Selected Image"
          src={selectedImage.image}
          className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button className="bg-white/80 hover:bg-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300 max-sm:gap-1 max-sm:text-[12px] max-sm:px-2 max-sm:py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 max-sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Gallery
          </button>
          <button className="bg-white/80 hover:bg-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300 max-sm:gap-1 max-sm:text-[12px] max-sm:px-2 max-sm:py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 max-sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Video
          </button>
        </div>
      </div>
    </div>
  );
};
