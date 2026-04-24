"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

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
      {/* Soft top gradient to blend from dark hero */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
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
              <div className="rounded-2xl bg-[#f3f5ff] border border-[#e0e4f4] p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="2">
                      <path d="M9 2L11 7h5l-4 3 1.5 5L9 12l-4.5 3L6 10 2 7h5L9 2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black text-[#0c0c22] text-sm mb-1"># Hashtag Viagens</p>
                    <p className="text-[#6a6a8c] text-sm font-medium leading-relaxed">
                      Nossa subsidiária com foco exclusivo em logística para eventos —
                      roteiros, aéreos, transfer, hotéis e seguro em um único atendimento.
                    </p>
                  </div>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.num} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(112,64,240,0.12)" }}
                transition={{ duration: 0.3 }}
                className="group bg-[#f3f5ff] hover:bg-white rounded-2xl border border-[#e0e4f4] p-7 cursor-default transition-colors duration-300"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-linear-to-br ${p.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {p.icon}
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] gradient-text uppercase mb-3 block">
                  {p.num}
                </span>
                <h3 className="font-black text-[#0c0c22] text-lg mb-2 leading-snug">{p.title}</h3>
                <p className="text-[#6a6a8c] text-sm font-medium leading-relaxed">{p.body}</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
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
