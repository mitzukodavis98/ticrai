import type { Metadata } from "next";
import { ReactNode } from "react";
import "./../globals.css";
import { Header, ImagesCarrusel, Footer } from "@/index";
import { notFound } from "next/navigation";
// Agregar import de Google Fonts
import { Just_Another_Hand } from "next/font/google";

// Configurar la fuente
const justAnotherHand = Just_Another_Hand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-just-another-hand",
  adjustFontFallback: false,
});

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export const metadata: Metadata = {
  title: {
    template: "%s | Vibrant Peru",
    default: "Vibrant Peru",
  },
  description: "Explore the best destinations in Peru",
  icons: {
    icon: "/LogoVibrantPeru.png",
  },
  metadataBase: new URL("https://vibrantperu.com"),
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const Lang = resolvedParams.lang;
  const ogLocale = Lang === "es" ? "es_ES" : "en_US";
  const currentLang = resolvedParams.lang;

  if (!["es", "en"].includes(Lang)) notFound();

  return (
    <html lang={Lang}>
      <head>
        <meta property="og:locale" content={ogLocale} />
      </head>
      <body
        className={`${justAnotherHand.variable} antialiased bg-transparent w-full h-auto mx-auto mt-[100px] xxl:w-[2000px]`}
      >
        <Header lang={currentLang} />
        <main>{children}</main>
        <ImagesCarrusel />
        <Footer lang={currentLang} />
      </body>
    </html>
  );
}
