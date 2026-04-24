"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const testimonials = [
  {
    quote: "A News não entregou apenas o evento — entregou uma experiência que nossos colaboradores ainda comentam anos depois. A atenção a cada detalhe, o comprometimento da equipe e a capacidade de resolver imprevistos superaram todas as expectativas.",
    author: "Diretora de Marketing",
    company: "Grupo Financeiro Nacional",
    initials: "DM",
    accent: "#00d4f5",
    bgImage: "/imagens/reckit-evento/906dd75a-8937-409c-96ef-2288df3e44b8.jpg",
  },
  {
    quote: "Trabalhamos com várias agências ao longo dos anos. A diferença da News está no envolvimento dos donos em cada etapa. Você sente que o seu projeto é realmente prioridade para eles. Isso não tem preço.",
    author: "Gerente de Eventos",
    company: "Indústria Alimentícia",
    initials: "GE",
    accent: "#7040f0",
    bgImage: "/imagens/mcdonalds/88ba5764-114a-4f85-8db7-502c59b425b2.png",
  },
  {
    quote: "Nossa convenção de vendas foi um marco. A News entendeu nosso negócio, nossa cultura e entregou algo que genuinamente refletia quem somos. A equipe saiu do evento energizada e motivada para bater metas.",
    author: "VP Comercial",
    company: "Empresa de Tecnologia",
    initials: "VC",
    accent: "#f040e8",
    bgImage: "/imagens/jequiti/50433d2a-01c1-40cb-83db-94ef0582e507.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: "#09050f" }}
    >
      {/* Background photo — blurred, very subtle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={t.bgImage}
              alt=""
              fill
              className="object-cover"
              style={{ filter: "blur(40px) saturate(0.4)", opacity: 0.12 }}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #09050f 15%, transparent 40%, transparent 60%, #09050f 85%)",
          }}
        />
      </div>

      {/* Ambient glow follows accent */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`glow-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse, ${t.accent}20 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
      </AnimatePresence>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <AnimateOnScroll>
            <p className="text-[11px] font-bold tracking-[0.3em] text-[#00e896] uppercase mb-5">
              Depoimentos
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Quem conhece a News{" "}
              <span className="gradient-text">não quer outra.</span>
            </h2>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={0.2}>
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14 overflow-hidden">
            {/* Top gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
              style={{ background: `linear-gradient(to right, ${t.accent}, transparent)` }}
            />

            {/* Decorative quote mark */}
            <div
              className="absolute top-4 left-8 text-[7rem] font-black leading-none select-none pointer-events-none"
              style={{ color: `${t.accent}12` }}
              aria-hidden
            >
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-lg md:text-xl font-semibold text-white/75 leading-relaxed mb-10 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.accent}, #7040f0)` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-black text-white text-sm">{t.author}</p>
                    <p className="text-white/40 text-xs font-medium mt-0.5">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="mt-10 flex items-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={
                    i === current
                      ? { width: "32px", height: "8px", background: t.accent }
                      : { width: "8px", height: "8px", background: "rgba(255,255,255,0.15)" }
                  }
                />
              ))}
            </div>

            {/* Arrow nav */}
            <div className="absolute top-1/2 -translate-y-1/2 right-5 md:right-8 flex flex-col gap-2">
              {[
                { dir: "prev", path: "M7 2L7 12M3 6L7 2L11 6" },
                { dir: "next", path: "M7 2L7 12M3 8L7 12L11 8" },
              ].map(({ dir, path }) => (
                <button
                  key={dir}
                  onClick={() =>
                    setCurrent((c) =>
                      dir === "prev"
                        ? (c - 1 + testimonials.length) % testimonials.length
                        : (c + 1) % testimonials.length
                    )
                  }
                  aria-label={dir === "prev" ? "Anterior" : "Próximo"}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10 transition-all duration-200 flex items-center justify-center text-white/40 hover:text-white"
                >
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d={path} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
