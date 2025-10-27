import React from 'react';
import Image from 'next/image';

export function LoadingScreen() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-[200px] h-[200px] relative">
                {/* Imagen central */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] z-10">
                    <div className="relative w-full h-full">
                        <Image 
                            src="/LogoVibrantPeru.png" // Reemplaza con la ruta de tu imagen
                            alt="Logo"
                            fill
                            className="object-contain rounded-full bg-white p-2"
                        />
                    </div>
                </div>
                
                {/* SVG Spinner */}
                <svg 
                className="animate-spin"
                viewBox="0 0 200 200"
                width="200"
                height="200"
                >
                    <defs>
                        <linearGradient id="spinner-gradient">
                            <stop offset="0%" stopColor="#049353" />
                            <stop offset="100%" stopColor="#06d77a" />
                        </linearGradient>
                    </defs>
                    <circle
                        cx="100"
                        cy="100"
                        r="80"
                        stroke="url(#spinner-gradient)"
                        strokeWidth="20"
                        fill="none"
                        strokeLinecap="round"
                        className="opacity-20"
                    />
                    <circle
                        cx="100"
                        cy="100"
                        r="80"
                        stroke="url(#spinner-gradient)"
                        strokeWidth="20"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="400"
                        strokeDashoffset="325"
                        className="opacity-100"
                    />
                </svg>
            </div>
        </div>
    );
}
