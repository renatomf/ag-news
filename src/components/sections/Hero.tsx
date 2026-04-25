"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "500+", label: "Eventos" },
  { value: "15", label: "Anos" },
  { value: "40+", label: "Clientes" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen bg-transparent flex items-start lg:items-center"
    >

      {/* Radial white gradient behind content */}
      <div className="absolute z-10 left-1/12 top-30 w-200 h-200 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(255,0,0,0) 70%)" }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-10 pb-24"
      >
        <div className="max-w-xl lg:max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 border border-[#e0e4f4] bg-[#f3f5ff] mt-15 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-[#00e896] inline-block shrink-0" />
            <span className="text-[11px] font-bold text-[#6a6a8c] tracking-widest uppercase">
              Agência de Eventos · São Paulo · Desde 2007
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden -mb-4 mt-10">
            <motion.div
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src="/logos/ag-news/logo-degrade.svg"
                alt="Logo News"
                width={800}
                height={200}
                priority
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.68 }}
            className="text-base md:text-lg text-[#6a6a8c] font-medium leading-relaxed mb-10 max-w-md"
          >
            17 anos conectando marcas e colaboradores através de eventos e
            experiências que ficam na memória
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.86 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-black text-white brand-gradient hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
            >
              Conheça a News
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-[#0c0c22] border-2 border-[#e0e4f4] hover:border-[#7040f0]/40 hover:bg-[#f3f5ff] transition-all duration-300"
            >
              Fale Conosco
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.06 }}
            className="flex items-center"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`${i > 0 ? "border-l border-[#e0e4f4] pl-8 ml-8" : ""}`}
              >
                <p className="text-3xl md:text-4xl font-black gradient-text leading-none">{s.value}</p>
                <p className="text-[10px] font-bold text-[#6a6a8c] uppercase tracking-widest mt-1.5 itenc">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center text-[#6a6a8c]/40"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 8l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
