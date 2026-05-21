"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const services = [
  {
    id: "eventos",
    category: "Corporativos e Comemorativos",
    title: "Eventos",
    description: "Convenções, reuniões, festas comemorativas e road shows com criatividade e execução precisa.",
    image: "/imagens/mcdonalds/14.jpeg",
    accent: "#7040f0",
  },
  {
    id: "incentivos",
    category: "Campanhas e Viagens",
    title: "Marketing de Incentivo",
    description: "Ações de Incentivo que engajam equipes e reconhecem resultados.",
    image: "/imagens/viagens/01.jpg",
    accent: "#f040e8",
  },
  {
    id: "ativacoes",
    category: "Promocional",
    title: "Ativações",
    description: "Brindes e Ações que conectam marcas e pessoas com impacto real no ponto de venda e além.",
    image: "/imagens/reckit/01.jpg",
    accent: "#b060f8",
  },
  {
    id: "stands",
    category: "Feiras e Exposições",
    title: "Stands",
    description: "Design, montagem de stands e ações que impressionam e geram negócios em feiras e exposições.",
    image: "/imagens/reckit-evento/14.jpeg",
    accent: "#00d4f5",
  },
  {
    id: "hashtag",
    category: "Logística interna",
    title: "Hashtag Viagens",
    description: "Somos Praticidade: especialistas em logística para eventos, centralizando operações e informações em um único atendimento. Roteiros, transfers, hotéis, passagens e seguro.",
    image: "/imagens/viagens/04.jpeg",
    accent: "#00e896",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-[#f6f9fc] py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden cu">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, #7040f0, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <AnimateOnScroll>
            <p className="text-[15px] font-bold tracking-[0.3em] text-[#7040f0] uppercase mb-5">
              O que fazemos
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0c0c22] leading-[1.05] tracking-tight mb-5">
              Somos{" "}
              <span className="gradient-text">Impacto</span>
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Custom intro card */}
          <div className="group relative rounded-2xl overflow-hidden bg-white p-6 md:p-8 shadow-md flex flex-col items-start justify-start h-72 sm:h-72 md:h-95">
            <p className="text-start text-[#0c0c22] text-base md:text-lg font-medium mt-8">
              Criatividade diferenciada, inteligência na execução e conhecimento consolidado para transformar ideias em experiências memoráveis.
            </p>
          </div>

          {services.map((svc, i) => (
            <AnimateOnScroll key={svc.id} delay={i * 0.07}>
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative rounded-2xl overflow-hidden cursor-default h-72 sm:h-72 md:h-95 cursor-pointer"
              >
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10" />

                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(to right, ${svc.accent}, transparent)` }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8" style={svc.id === "incentivos" ? { transform: "translateY(-24px)" } : undefined}>
                  <span
                    className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
                    style={{ background: `${svc.accent}80`, color: "#ffffff", border: `1px solid ${svc.accent}80`, boxShadow: `0 2px 12px ${svc.accent}60` }}
                  >
                    {svc.category}
                  </span>
                  <h3 className="font-black text-white text-2xl mb-2 leading-tight">{svc.title}</h3>
                  <p className="text-white/60 text-sm font-medium leading-relaxed max-w-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-400">
                    {svc.description}
                  </p>
                  {svc.id === "hashtag" && (
                    <a
                      href="https://pt.vecteezy.com/fotos-gratis/caminhando"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-yellow-400/60 text-[9px] mt-3 hover:text-yellow-400 transition-colors underline underline-offset-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" style={{verticalAlign:"middle", display:"block"}}>
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                      </svg>
                      Caminhando Fotos de banco de imagens por Vecteezy
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Frases de impacto */}
        <AnimateOnScroll delay={0.15}>
          <div className="mt-20 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16 text-center">
            {[
              { before: "Cada ", word: "cliente", after: " importa." },
              { before: "Cada ", word: "evento", after: " importa." },
              { before: "Cada ", word: "detalhe", after: " importa." },
            ].map((item, i) => (
              <p key={i} className="text-xl sm:text-2xl md:text-3xl font-black text-[#0c0c22]">
                {item.before}
                <span className="gradient-text">{item.word}</span>
                {item.after}
              </p>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
