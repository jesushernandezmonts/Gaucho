import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display-family",
  subsets: ["latin"],
  display: "swap",
});

const pacifico = Pacifico({
  variable: "--font-script-family",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niño Gaucho | Restaurante & Hotel Argentino",
  description:
    "Descubre Niño Gaucho, donde la tradición gaucha se encuentra con la más alta cocina y hospitalidad argentina. Restaurante, habitaciones y eventos en Huamantla, Tlaxcala.",
  keywords: [
    "restaurante argentino",
    "cocina gaucha",
    "cortes argentinos",
    "asado",
    "malbec",
    "Huamantla",
    "Tlaxcala",
    "comida argentina Tlaxcala",
    "Niño Gaucho",
    "Huamantla restaurante",
  ],
  authors: [{ name: "Niño Gaucho" }],
  openGraph: {
    title: "Niño Gaucho | Restaurante & Hotel Argentino",
    description:
      "Tradición gaucha con la más alta cocina y hospitalidad. Cortes premium, vinos argentinos y habitaciones con alma. C. Juárez Nte. 215, Huamantla, Tlaxcala.",
    type: "website",
    locale: "es_MX",
    siteName: "Niño Gaucho",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${pacifico.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
