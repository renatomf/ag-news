"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "A News", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
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

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/92 backdrop-blur-lg border-b border-[#e0e4f4] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
          <Link href="/" aria-label="News Eventos — início">
            <Image
              src="/logos/ag-news/logo-degrade.svg"
              alt="Logo News"
              width={140}
              height={32}
              priority
              className="object-cover object-left -ml-4"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#6a6a8c] hover:text-[#0c0c22] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden md:inline-flex items-center text-sm font-bold text-white px-5 py-2.5 rounded-full brand-gradient hover:opacity-90 transition-opacity shadow-md shadow-purple-500/20"
          >
            Fale Conosco
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 bg-[#0c0c22] rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#0c0c22] rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#0c0c22] rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-17 left-0 right-0 z-40 bg-white border-b border-[#e0e4f4] shadow-lg py-6 px-6 flex flex-col gap-5"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="text-base font-bold text-[#0c0c22] hover:text-[#7040f0] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="self-start text-sm font-bold text-white px-6 py-3 rounded-full brand-gradient"
            >
              Fale Conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
