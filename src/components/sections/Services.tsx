"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const services = [
  {
    id: "stands",
    category: "Feiras & Exposições",
    title: "Stands",
    description: "Design e montagem de stands que impressionam e geram negócios em feiras e exposições.",
    image: "/imagens/reckit/01.jpg",
    accent: "#00d4f5",
  },
  {
    id: "eventos",
    category: "Corporativo & Comemorativo",
    title: "Eventos",
    description: "Convenções, reuniões, festas comemorativas e road shows com criatividade e execução precisa.",
    image: "/imagens/reckit-evento/01.jpg",
    accent: "#7040f0",
  },
  {
    id: "incentivos",
    category: "Viagens & Campanhas",
    title: "Incentivos",
    description: "Campanhas e viagens de incentivo que engajam equipes e reconhecem resultados.",
    image: "/imagens/viagens/01.jpg",
    accent: "#f040e8",
  },
  {
    id: "experiencias",
    category: "Momentos Únicos",
    title: "Experiências",
    description: "Experiências únicas e inesquecíveis que ficam na memória dos participantes.",
    image: "/imagens/chivas/01.jpg",
    accent: "#00e896",
  },
  {
    id: "ativacoes",
    category: "Live Marketing",
    title: "Ativações",
    description: "Ações que conectam marcas e pessoas com impacto real no ponto de venda e além.",
    image: "/imagens/mcdonalds/01.jpg",
    accent: "#b060f8",
  },
  {
    id: "marketing",
    category: "Estratégia & Resultados",
    title: "Marketing",
    description: "Estratégias de live marketing que transformam momentos em resultados mensuráveis.",
    image: "/imagens/jequiti/01.jpg",
    accent: "#00d4f5",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-[#f6f9fc] py-16 sm:py-20 md:py-28 lg:py-40 overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0c0c22] leading-[1.05] tracking-tight mb-5">
              Somos{" "}
              <span className="gradient-text">360°</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.18}>
            <p className="text-[#6a6a8c] font-medium text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Especialistas em criar experiências inesquecíveis no
              que nos propomos a oferecer aos nossos clientes.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <AnimateOnScroll key={svc.id} delay={i * 0.07}>
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative rounded-2xl overflow-hidden cursor-default h-72 sm:h-72 md:h-95"
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

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p
                    className="text-[10px] font-bold tracking-widest uppercase mb-2"
                    style={{ color: svc.accent }}
                  >
                    {svc.category}
                  </p>
                  <h3 className="font-black text-white text-2xl mb-2 leading-tight">{svc.title}</h3>
                  <p className="text-white/60 text-sm font-medium leading-relaxed max-w-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-400">
                    {svc.description}
                  </p>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
