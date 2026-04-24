"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const cases = [
  {
    client: "Reckitt",
    category: "Evento Corporativo",
    description: "Convenção de vendas com experiência imersiva para a equipe Reckitt no Brasil.",
    image: "/imagens/reckit-evento/02863a35-b206-4e30-ab27-5223e9d26359.jpg",
    accent: "#00d4f5",
    span: "lg:col-span-2",
  },
  {
    client: "McDonald's",
    category: "Ativação de Marca",
    description: "Road show nacional com ativações que conectaram colaboradores à cultura McDonald's.",
    image: "/imagens/mcdonalds/12b54be9-a5cb-4db0-b2b9-5f14f3ab0180.jpg",
    accent: "#7040f0",
    span: "lg:col-span-1",
  },
  {
    client: "Jequiti",
    category: "Incentivo & Viagem",
    description: "Programa de incentivo com viagem experiencial para os melhores revendedores.",
    image: "/imagens/jequiti/ca049401-81ee-40ae-9693-30c04c229039.jpg",
    accent: "#f040e8",
    span: "lg:col-span-1",
  },
  {
    client: "Chivas",
    category: "Experiência Premium",
    description: "Evento de lançamento exclusivo com experiências sensoriais da marca Chivas.",
    image: "/imagens/chivas/07b9bda1-cfce-4b86-9643-3b11e101504b.jpg",
    accent: "#00e896",
    span: "lg:col-span-2",
  },
];

export default function Cases() {
  return (
    <section id="projetos" className="relative bg-white py-28 md:py-40 overflow-hidden">
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
              <h2 className="text-5xl md:text-6xl font-black text-[#0c0c22] leading-[1.05] tracking-tight">
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
        <div className="grid lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <AnimateOnScroll key={c.client} delay={i * 0.1} className={c.span}>
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{ height: i === 0 || i === 3 ? "380px" : "380px" }}
              >
                {/* Photo */}
                <Image
                  src={c.image}
                  alt={`Projeto ${c.client}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(to right, ${c.accent}, transparent)` }}
                />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p
                    className="text-[10px] font-bold tracking-widest uppercase mb-2"
                    style={{ color: c.accent }}
                  >
                    {c.category}
                  </p>
                  <h3 className="font-black text-white text-2xl mb-2 leading-tight">{c.client}</h3>
                  <p className="text-white/60 text-sm font-medium leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    {c.description}
                  </p>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Photo strip */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-8 grid grid-cols-3 md:grid-cols-5 gap-3">
            {[
              "/imagens/reckit/0b3808ca-70c5-4439-b25a-697a8840f207.jpg",
              "/imagens/mcdonalds/0f3efc35-038c-4eaf-a3e3-c321e656ba2d.jpg",
              "/imagens/jequiti/0f64f3d6-696f-4468-82ae-e2c320bdb3ef.jpg",
              "/imagens/chivas/1b419e10-3b82-4093-bfe0-4cc47b9707be.jpg",
              "/imagens/reckit-evento/73b2f8de-a396-4a1e-8722-800be60b7050.jpg",
            ].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden aspect-square"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
