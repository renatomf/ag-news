import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEWS Eventos | Live Marketing que Transforma",
  description:
    "15 anos transformando ideias em experiências inesquecíveis. Eventos corporativos, marketing de incentivo, ativações e feiras.",
  keywords: "agência de eventos, live marketing, eventos corporativos, incentivo, São Paulo",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#0c0c22] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
