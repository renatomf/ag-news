"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "A News", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const lineColor = "bg-white";

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ zIndex: 110 }}
        className={`fixed top-8 lg:top-4 left-3 right-3 lg:left-0 lg:right-0 lg:max-w-7xl lg:mx-auto rounded-xl transition-all duration-300 ${
          scrolled ? "bg-[#3d2270] lg:bg-[#eceaeabf] lg:backdrop-blur-lg" : "bg-[#3d2270] lg:bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-10 flex items-center justify-between h-14">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="News Eventos — início"
            className="cursor-pointer"
          >
            <Image
              src="/logos/ag-news/logo-degrade.svg"
              alt="Logo News"
              width={110}
              height={26}
              priority
              className={`object-cover object-left brightness-0 invert lg:brightness-100 lg:invert-0 transition-transform duration-300 origin-center ${scrolled ? "lg:scale-[0.77]" : "lg:scale-100"}`}
            />
          </button>

          {/* Desktop nav + CTA agrupados à direita */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-normal text-[#0c0c22] hover:text-[#883fff] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#contato"
              className={`group relative overflow-hidden rounded-full bg-[#0c0c22] hover:bg-[#883fff] transition-all duration-300 active:scale-[0.99] origin-center ${scrolled ? "scale-[0.85]" : "scale-100"}`}
            >
              <span className="relative z-10 flex items-center px-6 py-3 text-white text-sm font-bold transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                Fale Conosco
              </span>
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white text-sm font-bold translate-y-full transition-transform duration-150 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                Fale Conosco
              </span>
            </a>
          </div>

          {/* Hamburger — mobile + tablet (vira X quando aberto) */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${lineColor} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${lineColor} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${lineColor} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile/tablet full-screen drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 lg:hidden flex flex-col"
            style={{ background: "linear-gradient(180deg, #2a0448 0%, #3d0660 100%)", zIndex: 100 }}
          >
            {/* Links */}
            <nav className="flex flex-col px-10 w-full gap-8 items-start pt-48">
              <motion.button
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMobileOpen(false); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-4xl sm:text-5xl font-black text-white/80 hover:text-white py-3 transition-colors w-full text-left cursor-pointer"
              >
                Início
              </motion.button>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: (i + 1) * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-4xl sm:text-5xl font-black text-white/80 hover:text-white py-3 transition-colors w-full text-left"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
