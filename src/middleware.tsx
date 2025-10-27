import { NextRequest, NextResponse } from "next/server";

const supportedLocales = ["es", "en"];
const defaultLocale = "es";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // No redirigir recursos estáticos de Next.js
  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".png") ||
    pathname.includes(".jpg") ||
    pathname.includes(".svg") ||
    pathname.includes(".css") ||
    pathname.includes(".js")
  ) {
    return NextResponse.next();
  }

  // Extraer el primer segmento de la ruta (potencial locale)
  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0];

  // Si la URL ya tiene un locale válido, permitir la navegación
  if (supportedLocales.includes(firstSegment)) {
    return NextResponse.next();
  }

  // Si no hay un locale válido, determinar el locale preferido
  let preferredLocale = defaultLocale;

  // Obtener el encabezado Accept-Language si existe
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    for (const locale of supportedLocales) {
      if (acceptLanguage.toLowerCase().includes(locale)) {
        preferredLocale = locale;
        break;
      }
    }
  }

  // Redirigir a la misma ruta pero con el locale prefijado
  return NextResponse.redirect(
    new URL(`/${preferredLocale}${pathname}`, request.url)
  );
}

export const config = {
  // Simplifica el matcher para enfocarse solo en las páginas principales
  matcher: ["/", "/((?!api|_next|favicon.ico).*)"],
};
