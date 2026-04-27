"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import CasesModal, { type CaseItem } from "@/components/CasesModal";

const cases: CaseItem[] = [
  {
    client: "Reckitt",
    category: "Evento Corporativo",
    description: "Convenção de vendas com experiência imersiva para a equipe Reckitt no Brasil.",
    image: "/imagens/reckit-evento/01.jpg",
    images: [
      "/imagens/reckit-evento/01.jpg",
      "/imagens/reckit-evento/02.jpg",
      "/imagens/reckit-evento/03.jpg",
      "/imagens/reckit-evento/04.jpg",
      "/imagens/reckit-evento/05.jpg",
      "/imagens/reckit-evento/06.jpg",
      "/imagens/reckit/01.jpg",
      "/imagens/reckit/02.jpg",
    ],
    accent: "#00d4f5",
    span: "lg:col-span-2",
  },
  {
    client: "McDonald's",
    category: "Ativação de Marca",
    description: "Road show nacional com ativações que conectaram colaboradores à cultura McDonald's.",
    image: "/imagens/mcdonalds/01.jpg",
    images: [
      "/imagens/mcdonalds/01.jpg",
      "/imagens/mcdonalds/02.jpg",
      "/imagens/mcdonalds/03.jpg",
      "/imagens/mcdonalds/04.jpg",
      "/imagens/mcdonalds/06.jpg",
      "/imagens/mcdonalds/08.jpg",
      "/imagens/mcdonalds/09.jpg",
      "/imagens/mcdonalds/10.jpg",
    ],
    accent: "#7040f0",
    span: "lg:col-span-1",
  },
  {
    client: "Jequiti",
    category: "Incentivo & Viagem",
    description: "Programa de incentivo com viagem experiencial para os melhores revendedores.",
    image: "/imagens/jequiti/01.jpg",
    images: [
      "/imagens/jequiti/01.jpg",
      "/imagens/jequiti/02.jpg",
      "/imagens/jequiti/03.jpg",
      "/imagens/jequiti/04.jpg",
      "/imagens/jequiti/05.jpg",
      "/imagens/viagens/01.jpg",
      "/imagens/viagens/02.jpg",
    ],
    accent: "#f040e8",
    span: "lg:col-span-1",
  },
  {
    client: "Chivas",
    category: "Experiência Premium",
    description: "Evento de lançamento exclusivo com experiências sensoriais da marca Chivas.",
    image: "/imagens/chivas/01.jpg",
    images: [
      "/imagens/chivas/01.jpg",
      "/imagens/chivas/02.jpg",
      "/imagens/chivas/03.jpg",
      "/imagens/chivas/04.jpg",
      "/imagens/mcdonalds/01.jpg",
      "/imagens/mcdonalds/04.jpg",
    ],
    accent: "#00e896",
    span: "lg:col-span-2",
  },
  {
    client: "Itaú",
    category: "Evento Corporativo",
    description: "Evento corporativo de grande escala com produção completa para o Itaú.",
    image: "/imagens/itau/01.jpg",
    images: [
      "/imagens/itau/01.jpg",
      "/imagens/reckit/01.jpg",
      "/imagens/reckit/02.jpg",
      "/imagens/reckit/03.jpg",
      "/imagens/reckit/04.jpg",
      "/imagens/reckit/05.jpg",
    ],
    accent: "#f07040",
    span: "lg:col-span-1",
  },
];

export default function Cases() {
  const [activeCase, setActiveCase] = useState<CaseItem | null>(null);

  return (
    <>
      <section
        id="projetos"
        className="relative bg-white py-16 sm:py-20 md:py-28 lg:py-40 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="mb-14">
            <AnimateOnScroll>
              <p className="text-[11px] font-bold tracking-[0.3em] text-[#7040f0] uppercase mb-5">
                Projetos
              </p>
            </AnimateOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <AnimateOnScroll delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0c0c22] leading-[1.05] tracking-tight">
                  Experiências{" "}
                  <span className="gradient-text">que marcam.</span>
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.18}>
                <p className="text-[#6a6a8c] font-medium text-base max-w-xs md:max-w-sm leading-relaxed md:text-right">
                  Cada projeto é único. Cada entrega, impecável.
                </p>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Mosaic grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 grid-cols-1">
            {cases.slice(0, 4).map((c, i) => (
              <AnimateOnScroll key={c.client} delay={i * 0.1} className={c.span}>
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer h-72 sm:h-80 md:h-95"
                  onClick={() => setActiveCase(c)}
                >
                  <Image
                    src={c.image}
                    alt={`Projeto ${c.client}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: `linear-gradient(to right, ${c.accent}, transparent)` }}
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-sm"
                      style={{
                        background: `${c.accent}22`,
                        color: c.accent,
                        border: `1px solid ${c.accent}55`,
                      }}
                    >
                      Ver fotos
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p
                      className="text-[10px] font-bold tracking-widest uppercase mb-2"
                      style={{ color: c.accent }}
                    >
                      {c.category}
                    </p>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight">
                      {c.client}
                    </h3>
                    <p className="text-white/60 text-sm font-medium leading-relaxed max-w-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-400">
                      {c.description}
                    </p>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Photo strip */}
          <AnimateOnScroll delay={0.2}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {cases.slice(0, 4).map((c, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl overflow-hidden h-48 sm:h-40 md:h-44 cursor-pointer group"
                  onClick={() => setActiveCase(c)}
                >
                  <Image
                    src={c.images[1] ?? c.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll delay={0.3}>
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setActiveCase(cases[0])}
                className="group flex items-center gap-3 px-7 py-3.5 rounded-full border border-[#7040f0]/30 text-[#7040f0] text-sm font-bold tracking-wide hover:bg-[#7040f0] hover:text-white hover:border-[#7040f0] transition-all duration-300"
              >
                <span>Ver todos os cases</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeCase && (
          <CasesModal
            caseItem={activeCase}
            onClose={() => setActiveCase(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
