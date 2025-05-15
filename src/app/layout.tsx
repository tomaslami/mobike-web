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
  title: "Mobike - Importación y distribución de guantes para motociclismo",
  description: "Impulsando la protección y la moda en cada estación",
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
