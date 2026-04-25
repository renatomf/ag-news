"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const testimonials = [
  {
    quote: "A News não entregou apenas o evento — entregou uma experiência que nossos colaboradores ainda comentam anos depois.",
    body: "A atenção a cada detalhe, o comprometimento da equipe e a capacidade de resolver imprevistos superaram todas as expectativas.",
    author: "Diretora de Marketing",
    company: "Grupo Financeiro Nacional",
    accent: "#00d4f5",
    photo: "/imagens/reckit-evento/01.jpg",
  },
  {
    quote: "A diferença da News está no envolvimento dos donos em cada etapa do projeto.",
    body: "Trabalhamos com várias agências ao longo dos anos. Você sente que o seu projeto é realmente prioridade para eles. Isso não tem preço.",
    author: "Gerente de Eventos",
    company: "Indústria Alimentícia",
    accent: "#7040f0",
    photo: "/imagens/mcdonalds/01.jpg",
  },
  {
    quote: "Nossa convenção de vendas foi um marco. A News entendeu nosso negócio, nossa cultura.",
    body: "Entregou algo que genuinamente refletia quem somos. A equipe saiu do evento energizada e motivada para bater metas.",
    author: "VP Comercial",
    company: "Empresa de Tecnologia",
    accent: "#f040e8",
    photo: "/imagens/jequiti/01.jpg",
  },
];

function ArrowButton({ onClick, label, children }: { onClick: () => void; label: string; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="w-9 h-9 rounded-full border border-[#e0e4f4] bg-white hover:border-[#7040f0] hover:bg-[#7040f0] flex items-center justify-center text-[#7040f0] hover:text-white transition-colors duration-200 shadow-sm cursor-pointer"
    >
      {children}
    </button>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const navigate = useCallback((i: number, d: number) => {
    setDir(d);
    setCurrent(i);
  }, []);

  const prev = useCallback(() => {
    navigate((current - 1 + testimonials.length) % testimonials.length, -1);
  }, [current, navigate]);

  const next = useCallback(() => {
    navigate((current + 1) % testimonials.length, 1);
  }, [current, navigate]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header — same layout as Clients */}
        <div className="mb-10">
          <AnimateOnScroll>
            <p className="text-[11px] font-bold tracking-[0.3em] text-[#7040f0] uppercase mb-4">
              Depoimentos
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-black text-[#0c0c22] leading-[1.05] tracking-tight">
              Quem conhece a News{" "}
              <span className="gradient-text">não quer outra.</span>
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Card */}
        <AnimateOnScroll delay={0.12}>
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">

            {/* Top accent line */}
            <motion.div
              key={`bar-${current}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute top-0 left-0 right-0 h-0.75 origin-left"
              style={{ background: `linear-gradient(to right, ${t.accent}, #7040f0, #f040e8)` }}
            />

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d * 40 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d * -40 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid md:grid-cols-[1fr_45%] md:min-h-90"
              >
                {/* Left — text */}
                <div className="flex flex-col justify-center px-10 py-12 md:px-14 md:py-14">
                  <p className="text-[10px] font-bold tracking-[0.28em] text-[#7040f0] uppercase mb-5">
                    {t.author} · {t.company}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-black text-[#0c0c22] leading-snug tracking-tight mb-5 line-clamp-4">
                    {t.quote}
                  </h3>

                  <p className="text-sm text-[#0c0c22]/50 leading-relaxed line-clamp-3">
                    {t.body}
                  </p>
                </div>

                {/* Right — photo */}
                <div className="relative min-h-72 md:min-h-0 overflow-hidden">
                  <Image
                    src={t.photo}
                    alt={t.company}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimateOnScroll>

        {/* Nav buttons — below card, right-aligned, outside */}
        <div className="flex items-center justify-end gap-2 mt-4">
          <ArrowButton onClick={prev} label="Anterior">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 2 4 7 9 12" />
            </svg>
          </ArrowButton>
          <ArrowButton onClick={next} label="Próximo">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="5 2 10 7 5 12" />
            </svg>
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
