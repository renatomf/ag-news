"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Projetos realizados",
    description: "Eventos entregues com excelência em 15 anos de história.",
    accent: "#00d4f5",
  },
  {
    value: 97,
    suffix: "%",
    label: "Satisfação dos clientes",
    description: "Avaliações acima da média, projeto após projeto.",
    accent: "#7040f0",
  },
  {
    value: 15,
    suffix: "+",
    label: "Anos de parceria",
    description: "Clientes que ficam porque confiam e porque o resultado aparece.",
    accent: "#f040e8",
  },
];

function Counter({ value, suffix, accent }: { value: number; suffix: string; accent: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1800;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className="font-black text-6xl md:text-7xl leading-none"
      style={{ color: accent }}
    >
      {display}{suffix}
    </span>
  );
}

export default function Results() {
  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: "#09050f" }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(112,64,240,0.09), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <p className="text-[11px] font-bold tracking-[0.3em] text-[#00e896] uppercase mb-5">
              Resultados
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Números que{" "}
              <span className="gradient-text">falam por si.</span>
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Stat boxes */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.12}>
              <div
                className="group relative rounded-2xl border border-white/8 bg-white/4 p-10 md:p-12 text-center overflow-hidden hover:border-white/15 transition-all duration-300"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${stat.accent}18, transparent)`,
                  }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(to right, transparent, ${stat.accent}, transparent)` }}
                />

                <Counter value={stat.value} suffix={stat.suffix} accent={stat.accent} />
                <div
                  className="w-8 h-0.5 rounded-full mx-auto my-5"
                  style={{ background: `linear-gradient(to right, ${stat.accent}, transparent)` }}
                />
                <h3 className="font-black text-white text-lg mb-3">{stat.label}</h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed max-w-xs mx-auto">{stat.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA strip */}
        <AnimateOnScroll delay={0.3}>
          <div className="mt-14 rounded-2xl border border-white/8 bg-white/4 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,245,0.06) 0%, rgba(112,64,240,0.08) 50%, rgba(240,64,232,0.06) 100%)",
              }}
            />
            <div className="relative">
              <p className="font-black text-2xl md:text-3xl text-white leading-snug">
                Cada cliente importa.{" "}
                <span className="gradient-text">Cada evento importa.</span>
              </p>
              <p className="mt-1.5 text-white/40 font-medium text-sm">Cada detalhe importa.</p>
            </div>
            <a
              href="#contato"
              className="relative shrink-0 px-8 py-4 rounded-full text-sm font-black text-white brand-gradient hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25 whitespace-nowrap"
            >
              Fale com a News
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
