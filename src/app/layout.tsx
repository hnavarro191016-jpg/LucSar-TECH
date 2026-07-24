import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LuSam TECH | Desarrollo de Software Empresarial",
  description: "Desarrollamos software empresarial que automatiza procesos, mejora la productividad y acelera el crecimiento de tu organización.",
  openGraph: {
    title: "LuSam TECH | Desarrollo de Software Empresarial",
    description: "Desarrollamos software empresarial que automatiza procesos, mejora la productividad y acelera el crecimiento de tu organización.",
    type: "website",
    locale: "es_MX",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
