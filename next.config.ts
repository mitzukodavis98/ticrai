import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vibrantperu.com",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/**",
      },
    ],
  },
  async rewrites() {
    return [
      // Español - mantener rutas originales
      {
        source: '/es/sobre-nosotros',
        destination: '/es/sobre-nosotros'
      },
      {
        source: '/es/sobre-nosotros/:path*',
        destination: '/es/sobre-nosotros/:path*'
      },
      {
        source: '/es/destinos',
        destination: '/es/destinos'
      },
      {
        source: '/es/destinos/:path*',
        destination: '/es/destinos/:path*'
      },
      {
        source: '/es/vibrant-blog',
        destination: '/es/vibrant-blog'
      },
      {
        source: '/es/vibrant-blog/:path*',
        destination: '/es/vibrant-blog/:path*'
      },
      {
        source: '/es/Vibrantapp',
        destination: '/es/Vibrantapp'
      },
      // Inglés - traducir URLs a rutas internas
      {
        source: '/en/about-us',
        destination: '/en/sobre-nosotros'
      },
      {
        source: '/en/about-us/:path*',
        destination: '/en/sobre-nosotros/:path*'
      },
      {
        source: '/en/destinations',
        destination: '/en/destinos'
      },
      {
        source: '/en/destinations/:path*',
        destination: '/en/destinos/:path*'
      },
      {
        source: '/en/blog',
        destination: '/en/vibrant-blog'
      },
      {
        source: '/en/blog/:path*',
        destination: '/en/vibrant-blog/:path*'
      },
      {
        source: '/en/vibrantapp',
        destination: '/en/Vibrantapp'
      }
    ]
  }
};

export default nextConfig;