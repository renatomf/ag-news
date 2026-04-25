"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const clients = [
  { name: "Reckitt",          logo: "/logos/clientes/reckitt.svg",        dark: true,  large: true,  xl: false },
  { name: "Meta",             logo: "/logos/clientes/meta.svg",            dark: true,  large: false, xl: false },
  { name: "Telefônica Vivo",  logo: "/logos/clientes/tefefonica-vivo.svg", dark: false, large: true,  xl: false },
  { name: "Skechers",         logo: "/logos/clientes/skechers.svg",        dark: true,  large: false, xl: false },
  { name: "Chivas",           logo: "/logos/clientes/chivas.svg",          dark: true,  large: false, xl: false },
  { name: "McDonald's",       logo: "/logos/clientes/mcdonalds.svg",       dark: false, large: true,  xl: false },
  { name: "Sherwin Williams", logo: "/logos/clientes/sherwin.svg",         dark: true,  large: true,  xl: false },
  { name: "Jeep",             logo: "/logos/clientes/jeep.svg",            dark: true,  large: false, xl: false },
  { name: "Cielo",            logo: "/logos/clientes/cielo.svg",           dark: false, large: false, xl: false },
  { name: "Kimberly-Clark",   logo: "/logos/clientes/kimberly.svg",        dark: true,  large: false, xl: false },
  { name: "KPMG",             logo: "/logos/clientes/kpmg.svg",            dark: true,  large: false, xl: false },
  { name: "Jequiti",          logo: "/logos/clientes/jequiti.svg",         dark: false, large: false, xl: false },
  { name: "Airbnb",           logo: "/logos/clientes/airbnb.svg",          dark: true,  large: false, xl: false },
  { name: "Epson",            logo: "/logos/clientes/epson.svg",           dark: true,  large: false, xl: false },
  { name: "Catupiry",         logo: "/logos/clientes/catupiry-logo.svg",   dark: false, large: true,  xl: true  },
];

const backGradients = [
  "linear-gradient(135deg, #00d4f5 0%, #7040f0 100%)",
  "linear-gradient(135deg, #7040f0 0%, #f040e8 100%)",
  "linear-gradient(135deg, #00e896 0%, #00d4f5 100%)",
  "linear-gradient(135deg, #f040e8 0%, #b060f8 100%)",
  "linear-gradient(135deg, #00d4f5 0%, #00e896 100%)",
  "linear-gradient(135deg, #b060f8 0%, #f040e8 100%)",
];

const flipDirections = [180, -180, 180, -180, 180, -180, 180, -180, 180, -180, 180, -180, 180, -180, 180];

function shuffled(arr: number[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function LogoTile({
  name, logo, dark, large, xl, index, flipped,
}: {
  name: string; logo: string; dark: boolean;
  large: boolean; xl: boolean; index: number; flipped: boolean;
}) {
  const gradient = backGradients[index % backGradients.length];
  const dir = flipDirections[index % flipDirections.length];

  return (
    <AnimateOnScroll delay={index * 0.04}>
      <div className="aspect-4/3 rounded-xl cursor-default" style={{ perspective: "900px" }}>
        <div
          className="relative w-full h-full rounded-xl"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? `rotateY(${dir}deg)` : "rotateY(0deg)",
            transition: "transform 2.2s cubic-bezier(0.4, 0.0, 0.2, 1)",
          }}
        >
          {/* Front */}
          <div
            className={`absolute inset-0 rounded-xl flex items-center justify-center ${
              dark ? "bg-[#0c0c22]" : "bg-white border border-white"
            }`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className={`relative ${xl ? "w-72 h-20" : large ? "w-60 h-16" : "w-44 h-12"}`}>
              <Image
                src={logo}
                alt={name}
                fill
                className={`object-contain ${dark ? "brightness-0 invert" : ""}`}
                sizes="240px"
              />
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-xl flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: `rotateY(${dir}deg)`,
              background: gradient,
            }}
          >
            <div className={`relative ${xl ? "w-72 h-20" : large ? "w-60 h-16" : "w-44 h-12"}`}>
              <Image
                src={logo}
                alt={name}
                fill
                className="object-contain brightness-0 invert"
                sizes="240px"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export default function Clients() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const queueRef = useRef<number[]>([]);
  const posRef = useRef(0);

  useEffect(() => {
    // Build a shuffled queue of all indices, cycling forever
    queueRef.current = shuffled(clients.map((_, i) => i));
    posRef.current = 0;

    const FLIP_DURATION  = 2200; // ms — matches CSS transition
    const STAY_DURATION  = 8000; // ms — how long back face stays visible
    const PAUSE_DURATION = 4000; // ms — gap before next card flips

    let timeout: ReturnType<typeof setTimeout>;

    function next() {
      if (posRef.current >= queueRef.current.length) {
        // Reshuffle for next round
        queueRef.current = shuffled(clients.map((_, i) => i));
        posRef.current = 0;
      }

      const idx = queueRef.current[posRef.current++];

      // Flip to back
      setFlippedIndex(idx);

      timeout = setTimeout(() => {
        // Flip back to front
        setFlippedIndex(null);

        timeout = setTimeout(next, FLIP_DURATION + PAUSE_DURATION);
      }, FLIP_DURATION + STAY_DURATION);
    }

    // Small initial delay before first flip
    timeout = setTimeout(next, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="clientes" className="relative bg-[#f5f5f7] py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <AnimateOnScroll>
              <p className="text-[11px] font-bold tracking-[0.3em] text-[#7040f0] uppercase mb-4">
                Clientes
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-black text-[#0c0c22] leading-[1.05] tracking-tight">
                Marcas que{" "}
                <span className="gradient-text">confiam.</span>
              </h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll delay={0.18}>
            <a
              href="#contato"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0c0c22] text-white text-sm font-black hover:bg-[#1a1a3e] transition-colors duration-200"
            >
              Fale com a News
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </AnimateOnScroll>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          {/* Description card */}
          <AnimateOnScroll>
            <div className="flex flex-col justify-between aspect-4/3 rounded-xl border border-[#e0e4f4] bg-white p-6">
              <p className="text-[#0c0c22] font-medium text-sm leading-relaxed">
                Ao longo de 15 anos, construímos relações de confiança com algumas das maiores marcas do Brasil.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 text-[#7040f0] text-xs font-bold hover:gap-2.5 transition-all duration-200"
              >
                Saiba mais
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>

          {clients.map((c, i) => (
            <LogoTile
              key={c.name}
              {...c}
              index={i}
              flipped={flippedIndex === i}
            />
          ))}

        </div>
      </div>
    </section>
  );
}
