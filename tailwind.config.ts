import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Destinations/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Vibrantapp/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/AboutUs/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Blog/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/UserPerfil/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        just: ["Just Another Hand", "cursive"],
      },
      
      backgroundImage: {
        'green-Vibrant': 'linear-gradient(to right, #049353, #06d77a)',
      },
      
      maskImage: {
        gradient: 'radial-gradient(circle, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)',
      },
      colors: {
        'Vibrant_Color': "#05c46b", // Color personalizado
      },
      width: {
        '128': '32rem', // Ancho personalizado
      },
      rotate: {
        '360': '360deg', // Rotación de 360 grados
      },
      screens: {
        'xxl': '2000px', // Agrega el breakpoint personalizado
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
