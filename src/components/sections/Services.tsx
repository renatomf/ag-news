"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const services = [
  {
    id: "stands",
    title: "Stands",
    description: "Design e montagem de stands que impressionam e geram negócios em feiras e exposições.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
        <rect x="3" y="9" width="18" height="13" rx="2" strokeLinecap="round" />
        <path d="M3 9l9-7 9 7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V14h6v8" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-[#00d4f5] to-[#00e896]",
    accentFrom: "#00d4f5", accentTo: "#00e896",
  },
  {
    id: "eventos",
    title: "Eventos",
    description: "Convenções, reuniões, festas comemorativas e road shows com criatividade e execução precisa.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
        <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-[#00e896] to-[#7040f0]",
    accentFrom: "#00e896", accentTo: "#7040f0",
  },
  {
    id: "incentivos",
    title: "Incentivos",
    description: "Campanhas e viagens de incentivo que engajam equipes e reconhecem resultados.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
        <path d="M8 21h8M12 17v4M7 4H5a2 2 0 00-2 2v4a10 10 0 0018 0V6a2 2 0 00-2-2h-2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4V2m-4 2a4 4 0 008 0" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-[#7040f0] to-[#b060f8]",
    accentFrom: "#7040f0", accentTo: "#b060f8",
  },
  {
    id: "experiencias",
    title: "Experiências",
    description: "Experiências únicas e inesquecíveis que ficam na memória dos participantes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-[#b060f8] to-[#f040e8]",
    accentFrom: "#b060f8", accentTo: "#f040e8",
  },
  {
    id: "ativacoes",
    title: "Ativações",
    description: "Ações que conectam marcas e pessoas com impacto real no ponto de venda e além.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-[#f040e8] to-[#f060a8]",
    accentFrom: "#f040e8", accentTo: "#f060a8",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Estratégias de live marketing que transformam momentos em resultados mensuráveis.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="17 6 23 6 23 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-[#00d4f5] to-[#7040f0]",
    accentFrom: "#00d4f5", accentTo: "#7040f0",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-[#f3f5ff] py-28 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, #7040f0, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <p className="text-[11px] font-bold tracking-[0.3em] text-[#7040f0] uppercase mb-5">
              O que fazemos
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-black text-[#0c0c22] leading-[1.05] tracking-tight mb-5">
              Somos{" "}
              <span className="gradient-text">360°</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.18}>
            <p className="text-[#6a6a8c] font-medium text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Especialistas em criar experiências inesquecíveis no que nos propomos a oferecer.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <AnimateOnScroll key={svc.id} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -7, boxShadow: "0 20px 48px rgba(112,64,240,0.13)" }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl border border-[#e0e4f4] p-7 shadow-sm cursor-default"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-linear-to-br ${svc.gradient} group-hover:scale-110 transition-transform duration-300`}
                >
                  {svc.icon}
                </div>
                <div
                  className={`h-0.5 w-10 rounded-full bg-linear-to-r ${svc.gradient} mb-4 group-hover:w-16 transition-all duration-300`}
                />
                <h3 className="font-black text-[#0c0c22] text-xl mb-3">{svc.title}</h3>
                <p className="text-[#6a6a8c] text-sm font-medium leading-relaxed">{svc.description}</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
