"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  function enterFullscreen() {
    const el = containerRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
  }

  return (
    <div ref={containerRef} className="relative w-full rounded-xl overflow-hidden bg-black shadow-lg aspect-video">
      <video
        ref={videoRef}
        src="/videos/video-01.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      {/* Controls overlay */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-linear-to-t from-black/70 to-transparent">
        {/* Mute toggle */}
        <button
          onClick={toggleMute}
          aria-label={muted ? "Ativar som" : "Mutar"}
          className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200 cursor-pointer"
        >
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
            </svg>
          )}
        </button>
        {/* Fullscreen */}
        <button
          onClick={enterFullscreen}
          aria-label="Tela cheia"
          className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
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
    body: "Nenhuma fórmula pronta. Cada projeto recebe uma solução exclusiva.",
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
  "Para nós, todo projeto é um evento.\nE antes de qualquer evento, vem o cliente.\nSempre.",
  "Porque não se trata apenas de entregar um evento.\nSe trata de criar uma experiência que começa antes — e fica depois.",
  "Aqui, o seu projeto não é mais um.\nÉ prioridade.",
  "Tudo parte de você:\nseu objetivo, seu momento, sua expectativa.",
  "Porque no final, não é sobre o que entregamos.\nÉ sobre como entregamos.",
  "Por isso, quem conhece a News…\nnão quer trocar.",
];

export default function WhyChooseUs() {
  return (
    <section id="sobre" className="relative z-1 pt-0 sm:pt-20 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-28 lg:pb-20 overflow-hidden" style={{ background: "linear-gradient(to bottom, transparent 0%, white 35%)" }}>
      {/* Radial white gradient behind "Somos Live Marketing" */}
      <div
        className="absolute z-0 left-1/14 -top-10 w-220 h-220 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,0,0,0) 60%)" }}
      />

      <div className="relative z-1 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header two-col */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 mb-14 md:mb-20 lg:mb-24">
          <div>
            <AnimateOnScroll>
              <p className="text-[15px] font-bold tracking-[0.3em] text-[#7040f0] uppercase mb-5">
                Sobre Nós
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0c0c22] leading-[1.05] tracking-tight mb-6">
                Porque Escolher<br /> <span className="gradient-text">a News</span>{" "}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.18}>
              <p className="text-[#6a6a8c] text-base md:text-lg font-medium leading-relaxed mb-0">
                São 17 anos de história. <br />
                Construídos com muito sucesso.
              </p>
            </AnimateOnScroll>

            {/* Video */}
            <AnimateOnScroll delay={0.26}>
              <div className="mt-8">
                <VideoPlayer />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Manifesto */}
          <div className="flex flex-col justify-center gap-5 mt-0 lg:mt-8">
            {manifesto.map((text, i) => (
              <AnimateOnScroll key={i} delay={i * 0.09} direction="right">
                <p className="whitespace-pre-line text-[#3d3d60] font-medium text-sm md:text-base leading-relaxed border-l-3 border-[#7040f0]/25 pl-5 hover:border-[#7040f0] transition-colors duration-300">
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
        <AnimateOnScroll delay={0.1}>
          <div className="mb-8 md:mb-10">
            <p className="text-[15px] font-bold tracking-[0.3em] text-[#7040f0] uppercase mb-3">Nossos Pilares</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              <span>O que nos</span>{" "}<span className="gradient-text">move</span>
            </h2>
          </div>
        </AnimateOnScroll>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 brand-gradient" />
          <div className="relative z-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 p-5 sm:p-6 md:p-8 lg:p-10">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={p.num} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 28px 60px rgba(0,0,0,0.22)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col min-h-60 sm:min-h-72 md:min-h-80 shadow-lg cursor-default"
                >
                  <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${p.gradient} flex items-center justify-center text-white mb-4 shrink-0`}>
                    {p.icon}
                  </div>
                  <h3 className="font-black text-[#0c0c22] text-lg leading-snug mb-4">{p.title}</h3>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-5 leading-none">{p.num}</span>
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
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#0c0c22] leading-snug">
              &ldquo;Aqui a gente resolve, rápido. Depois explica.{" "}
              <span className="gradient-text">O foco está na solução.</span>&rdquo;
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
