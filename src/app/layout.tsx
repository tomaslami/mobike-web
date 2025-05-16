import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import FloatingButton from "@/components/FloatingButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mobike",
  description: "Impulsando la protección y la moda en cada estación",
  keywords: [
    "guantes de trabajo",
    "guantes industriales",
    "guantes de seguridad",
    "guantes para trabajos pesados",
    "importador mayorista de guantes",
    "distribuidor de guantes en Argentina",
    "guantes resistentes y cómodos",
    "protección laboral",
    "seguridad industrial",
    "equipos de protección personal",
    "mayorista de guantes en Buenos Aires",
    "guantes de protección para el frío",
    "guantes para industria y construcción",
    "logística eficiente para empresas",
    "stock permanente de guantes"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <Toaster richColors position="top-center" />
        <FloatingButton phoneNumber="5491134943796" />
      </body>
    </html>
  );
}
