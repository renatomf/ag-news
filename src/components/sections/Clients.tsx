"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const clients = [
  { name: "Reckitt", size: "lg" },
  { name: "Meta", size: "md" },
  { name: "Telefônica Vivo", size: "lg" },
  { name: "Skechers", size: "md" },
  { name: "Chivas", size: "md" },
  { name: "Subido Ao Vivo", size: "md" },
  { name: "Epson", size: "md" },
  { name: "Veja", size: "sm" },
  { name: "McDonald's", size: "lg" },
  { name: "Sherwin Williams", size: "lg" },
  { name: "Jeep Bank", size: "md" },
  { name: "Cielo", size: "md" },
  { name: "Kimberly-Clark", size: "lg" },
  { name: "KPMG", size: "md" },
  { name: "Jequiti", size: "md" },
  { name: "i9life", size: "sm" },
];

const row1 = [...clients.slice(0, 8), ...clients.slice(0, 8)];
const row2 = [...clients.slice(8), ...clients.slice(8)];

function ClientTile({ name, size }: { name: string; size: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.25 }}
      className="shrink-0 mx-3 flex items-center justify-center rounded-2xl border border-[#e0e4f4] bg-[#f3f5ff] hover:bg-white hover:border-[#7040f0]/30 hover:shadow-lg hover:shadow-purple-500/8 transition-all duration-300 cursor-default group"
      style={{
        height: "72px",
        padding: "0 28px",
      }}
    >
      <span
        className={`font-black tracking-tight text-[#6a6a8c] group-hover:text-[#0c0c22] transition-colors whitespace-nowrap ${
          size === "lg" ? "text-base" : size === "md" ? "text-sm" : "text-sm"
        }`}
      >
        {name}
      </span>
    </motion.div>
  );
}

export default function Clients() {
  return (
    <section id="clientes" className="relative bg-white py-28 md:py-40 overflow-hidden">
      {/* Side fade masks */}
      <div className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14">
        <div className="text-center">
          <AnimateOnScroll>
            <p className="text-[11px] font-bold tracking-[0.3em] text-[#7040f0] uppercase mb-5">
              Clientes
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-black text-[#0c0c22] leading-[1.05] tracking-tight mb-5">
              Marcas que confiam.{" "}
              <span className="gradient-text">Parceiros que voltam.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.18}>
            <p className="text-[#6a6a8c] font-medium text-base md:text-lg max-w-md mx-auto leading-relaxed">
              Ao longo de 15 anos, construímos relações de confiança com algumas das maiores marcas do Brasil.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="overflow-hidden mb-4">
        <div className="flex animate-marquee">
          {row1.map((c, i) => (
            <ClientTile key={`a-${c.name}-${i}`} name={c.name} size={c.size} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 — reversed */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-slow">
          {[...row2].reverse().map((c, i) => (
            <ClientTile key={`b-${c.name}-${i}`} name={c.name} size={c.size} />
          ))}
        </div>
      </div>
    </section>
  );
}
