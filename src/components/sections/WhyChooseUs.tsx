"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const viagensImages = [
  "/imagens/viagens/01.jpg",
  "/imagens/viagens/02.jpg",
  "/imagens/viagens/03.jpg",
];

function ViagensCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + viagensImages.length) % viagensImages.length);
  const next = () => setIndex((i) => (i + 1) % viagensImages.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-48 overflow-hidden bg-[#0c0c22]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={viagensImages[index]}
              alt="Hashtag Viagens"
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-end gap-2 px-5 pt-4">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-[#e0e4f4] bg-white hover:border-[#7040f0] hover:bg-[#7040f0] flex items-center justify-center text-[#7040f0] hover:text-white transition-colors duration-200 shadow-sm cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 2 4 7 9 12" />
          </svg>
        </button>
        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-[#e0e4f4] bg-white hover:border-[#7040f0] hover:bg-[#7040f0] flex items-center justify-center text-[#7040f0] hover:text-white transition-colors duration-200 shadow-sm cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="5 2 10 7 5 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

const pillars = [
  {
    num: "01",
    title: "Proximidade real",
    body: "Donos envolvidos em cada projeto. Decisões ágeis, sem burocracia.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-[#00d4f5] to-[#7040f0]",
  },
  {
    num: "02",
    title: "Execução impecável",
    body: "Atenção a cada detalhe — do briefing ao pós-evento.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-[#00e896] to-[#00d4f5]",
  },
  {
    num: "03",
    title: "Histórias únicas",
    body: "Nenhuma fórmula pronta. Cada cliente recebe uma solução exclusiva.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-[#7040f0] to-[#f040e8]",
  },
  {
    num: "04",
    title: "Sempre além",
    body: "Do combinado. Do esperado. Resolver e surpreender é parte da entrega.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="17 6 23 6 23 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-[#f040e8] to-[#7040f0]",
  },
];

const manifesto = [
  "Para nós, todo projeto é um evento. E antes de qualquer evento, vem o cliente. Sempre.",
  "Porque não se trata apenas de entregar um evento — se trata de criar uma experiência que começa antes e fica depois.",
  "Não seguimos padrões ou fórmulas prontas. Criamos histórias únicas. Uma para cada cliente.",
  "Aqui, o seu projeto não é mais um. É prioridade.",
];

export default function WhyChooseUs() {
  return (
    <section id="sobre" className="relative z-1 py-28 md:py-40 overflow-hidden" style={{ background: "linear-gradient(to bottom, transparent 0%, white 35%)" }}>
      {/* Radial white gradient behind "Somos Live Marketing" */}
      <div
        className="absolute z-0 left-1/14 top-0 w-220 h-220 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,0,0,0) 60%)" }}
      />

      <div className="relative z-1 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header two-col */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div>
            <AnimateOnScroll>
              <p className="text-[11px] font-bold tracking-[0.3em] text-[#7040f0] uppercase mb-5">
                Sobre Nós
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-black text-[#0c0c22] leading-[1.05] tracking-tight mb-6">
                Somos{" "}
                <span className="gradient-text">Live&nbsp;Marketing</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.18}>
              <p className="text-[#6a6a8c] text-base md:text-lg font-medium leading-relaxed mb-8">
                15 anos no mercado conectando marcas a seus clientes e colaboradores
                através de eventos e ações inovadoras e criativas.
              </p>
            </AnimateOnScroll>

            {/* Hashtag Viagens card */}
            <AnimateOnScroll delay={0.26}>
              <div className="rounded-2xl overflow-hidden border border-[#e0e4f4] shadow-sm">
                <ViagensCarousel />
                <div className="bg-white p-5">
                  <p className="font-black text-[#0c0c22] text-base mb-2"># Hashtag Viagens</p>
                  <p className="text-[#6a6a8c] text-sm font-medium leading-relaxed">
                    Após entendermos a necessidade dos nossos clientes com demandas de logística
                    nos eventos, inauguramos a Hashtag Viagens, uma empresa com foco exclusivo
                    em logística para eventos, facilitando o fluxo de operações e informações
                    que podem ser gerenciadas por um único profissional de atendimento.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-[#7040f0] font-semibold text-sm mt-4 hover:underline"
                  >
                    Saiba mais <span>›</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Manifesto */}
          <div className="flex flex-col justify-center gap-5">
            {manifesto.map((text, i) => (
              <AnimateOnScroll key={i} delay={i * 0.09} direction="right">
                <p className="text-[#3d3d60] font-medium text-sm md:text-base leading-relaxed border-l-3 border-[#7040f0]/25 pl-5 hover:border-[#7040f0] transition-colors duration-300">
                  {text}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Divider */}
        <AnimateOnScroll>
          <div className="w-full h-px bg-linear-to-r from-transparent via-[#e0e4f4] to-transparent mb-20" />
        </AnimateOnScroll>

        {/* Pillar cards */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 brand-gradient" />
          <div className="relative z-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 p-8 lg:p-10">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={p.num} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 28px 60px rgba(0,0,0,0.22)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 flex flex-col min-h-80 shadow-lg cursor-default"
                >
                  <h3 className="font-black text-[#0c0c22] text-lg leading-snug mb-4">{p.title}</h3>
                  <span className="text-5xl font-black gradient-text mb-5 leading-none">{p.num}</span>
                  <div className="w-full h-px bg-[#e0e4f4] mb-5" />
                  <p className="text-[#6a6a8c] text-sm font-medium leading-relaxed flex-1">{p.body}</p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-20 max-w-2xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-black text-[#0c0c22] leading-snug">
              &ldquo;Aqui, a gente resolve. Depois explica.
              Porque quem conhece a News…{" "}
              <span className="gradient-text">não quer outra.&rdquo;</span>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
