"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface CaseItem {
  client: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  accent: string;
  span: string;
}

interface Props {
  caseItem: CaseItem;
  onClose: () => void;
}

interface Dims {
  w: number;
  gap: number;
  side: number;
  h: number;
}

function getDims(): Dims {
  if (typeof window === "undefined") return { w: 380, gap: 12, side: 70, h: 480 };
  const vw = window.innerWidth;
  if (vw < 640) return { w: 240, gap: 10, side: 44, h: 340 };
  if (vw < 1024) return { w: 320, gap: 12, side: 60, h: 420 };
  return { w: 400, gap: 14, side: 74, h: 520 };
}

export default function CasesModal({ caseItem, onClose }: Props) {
  const [active, setActive] = useState(0);
  const [dims, setDims] = useState<Dims>(getDims);
  const { client, category, description, accent, images } = caseItem;
  const total = images.length;

  useEffect(() => {
    const update = () => setDims(getDims());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const prev = useCallback(() => setActive((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setActive((i) => Math.min(total - 1, i + 1)), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  useEffect(() => {
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = orig;
    };
  }, []);

  const containerW = dims.w + 2 * dims.side;
  const trackX = -(active * (dims.w + dims.gap)) + dims.side;

  return (
    <motion.div
      className="fixed inset-0 z-300 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/88 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Close */}
      <button
        className="absolute top-5 right-5 z-110 w-10 h-10 rounded-full bg-white/10 hover:bg-[#883fff] text-white flex items-center justify-center transition-all cursor-pointer"
        onClick={onClose}
        aria-label="Fechar"
      >
        ✕
      </button>

      {/* Header */}
      <div className="relative z-110 text-center mb-5 pointer-events-none">
        <p
          className="text-[10px] font-bold tracking-[0.28em] uppercase mb-1"
          style={{ color: accent }}
        >
          {category}
        </p>
        <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
          {client}
        </h2>
      </div>

      {/* Carousel stage — overflow hidden clips side cards */}
      <div
        className="relative z-110 shrink-0"
        style={{ width: containerW, overflow: "hidden" }}
      >
        <motion.div
          className="flex items-stretch"
          style={{ gap: dims.gap, height: dims.h }}
          animate={{ x: trackX }}
          transition={{ duration: 0.48, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {images.map((src, i) => {
            const isActive = i === active;
            return (
              <div
                key={src}
                className="relative rounded-2xl overflow-hidden shrink-0 cursor-pointer"
                style={{ width: dims.w, height: dims.h }}
                onClick={() => setActive(i)}
              >
                <Image
                  src={src}
                  alt={`${client} — imagem ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes={`${dims.w}px`}
                  priority={i === 0}
                />

                {/* Dim overlay for non-active */}
                <motion.div
                  className="absolute inset-0 bg-black"
                  animate={{ opacity: isActive ? 0 : 0.45 }}
                  transition={{ duration: 0.35 }}
                />

                {/* Bottom info — only on active */}
                {isActive && (
                  <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-black/80 to-transparent flex items-end px-5 pb-5 pointer-events-none">
                    <div>
                      <p
                        className="text-[10px] font-bold tracking-widest uppercase mb-1"
                        style={{ color: accent }}
                      >
                        {category}
                      </p>
                      <p className="text-white font-black text-lg leading-tight">
                        {client}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Description */}
      <p className="relative z-110 text-white/45 text-xs text-center mt-4 px-6 max-w-xs pointer-events-none">
        {description}
      </p>

      {/* Dot indicators */}
      <div className="relative z-110 flex gap-2 items-center mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Imagem ${i + 1}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === active
                ? "w-6 h-1.5 bg-[#883fff]"
                : "w-1.5 h-1.5 bg-white hover:bg-[#883fff]"
            }`}
          />
        ))}
      </div>

      {/* Left arrow */}
      <button
        className={`absolute left-5 md:left-10 z-110 w-11 h-11 rounded-full text-white text-lg flex items-center justify-center transition-all cursor-pointer ${
          active === 0
            ? "bg-white/5 text-white/20 cursor-default"
            : "bg-white/10 hover:bg-[#883fff]"
        }`}
        style={{ top: "50%", transform: "translateY(-50%)" }}
        onClick={prev}
        disabled={active === 0}
        aria-label="Anterior"
      >
        ←
      </button>

      {/* Right arrow */}
      <button
        className={`absolute right-5 md:right-10 z-110 w-11 h-11 rounded-full text-white text-lg flex items-center justify-center transition-all cursor-pointer ${
          active === total - 1
            ? "bg-white/5 text-white/20 cursor-default"
            : "bg-white/10 hover:bg-[#883fff]"
        }`}
        style={{ top: "50%", transform: "translateY(-50%)" }}
        onClick={next}
        disabled={active === total - 1}
        aria-label="Próximo"
      >
        →
      </button>
    </motion.div>
  );
}
