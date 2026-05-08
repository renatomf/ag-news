"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 md:py-36">
      {/* Brand gradient background */}
      <div className="absolute inset-0 brand-gradient" />

      {/* Subtle radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,255,255,0.08), transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center">

        {/* Lâmpada */}
        <AnimateOnScroll>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8 md:mb-10"
          >
            <Image
              src="/logos/ag-news/logo-lampada.svg"
              alt="News Eventos"
              width={56}
              height={56}
              className="brightness-0 invert opacity-90"
            />
          </motion.div>
        </AnimateOnScroll>

        {/* Headline */}
        <AnimateOnScroll delay={0.1}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6 max-w-4xl">
            Vamos criar algo{" "}
            <span className="text-white/80 italic">inesquecível.</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <p className="text-white/70 text-base md:text-lg font-medium max-w-lg leading-relaxed mb-10">
            Conte-nos sobre o seu próximo evento. A gente transforma a ideia em experiência.
          </p>
        </AnimateOnScroll>

        {/* CTA button */}
        <AnimateOnScroll delay={0.3}>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-white text-[#7040f0] font-black text-sm px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            Fale com a News
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </motion.a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
