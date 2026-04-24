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
        <div aria-hidden className="fixed inset-0 z-50 pointer-events-none">
          <div className="h-full max-w-7xl mx-auto relative">
            {/* <div className="absolute left-0 inset-y-0 w-px bg-[#e0e4f4]" />
            <div className="absolute right-0 inset-y-0 w-px bg-[#e0e4f4]" /> */}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
