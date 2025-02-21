import type React from "react"
import { Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "ALAIN | Premium Personal Training",
  description: "Entrenamiento personal exclusivo y transformación física de élite",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}

