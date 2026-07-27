import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HB Digital Studio | Desarrollo web para negocios",
  description: "Diseñamos páginas web y sistemas personalizados para negocios que quieren crecer.",
  icons: {
    icon: [{ url: "/logohb.png", type: "image/png" }],
    shortcut: "/logohb.png",
    apple: "/logohb.png",
  },
  openGraph: {
    title: "HB Digital Studio",
    description: "Tu negocio, mejor presentado.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
