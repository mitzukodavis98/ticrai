import type { Metadata } from 'next'
import "./globals.css"

export const metadata: Metadata = {
  title: 'Vibrant Page',
  description: 'Vibrant travel website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}