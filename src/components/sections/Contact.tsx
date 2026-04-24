"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const contactInfo = [
  {
    label: "Website",
    value: "www.newseventos.com.br",
    href: "https://www.newseventos.com.br",
    accent: "#00d4f5",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="9" r="7.5" strokeLinecap="round" />
        <path d="M9 1.5c0 0-3 3-3 7.5s3 7.5 3 7.5M9 1.5c0 0 3 3 3 7.5s-3 7.5-3 7.5M1.5 9h15" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@news_eventos_",
    href: "https://instagram.com/news_eventos_",
    accent: "#f040e8",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="14" height="14" rx="4" strokeLinecap="round" />
        <circle cx="9" cy="9" r="3" />
        <circle cx="13.5" cy="4.5" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    value: "newseventosinteligentes",
    href: "https://facebook.com/newseventosinteligentes",
    accent: "#7040f0",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 1.5H10a4 4 0 00-4 4v2H4.5v3H6v6h3v-6h2.5l.5-3H9V5.5A1 1 0 0110 4.5h2V1.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Endereço",
    value: "São Paulo, SP — Brasil",
    href: "#",
    accent: "#00e896",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 1.5C6.515 1.5 4.5 3.515 4.5 6c0 3.75 4.5 10.5 4.5 10.5S13.5 9.75 13.5 6c0-2.485-2.015-4.5-4.5-4.5z" strokeLinecap="round" />
        <circle cx="9" cy="6" r="1.5" />
      </svg>
    ),
  },
];

const fields = [
  { name: "name", label: "Seu nome", type: "text", placeholder: "João Silva", col: "sm:col-span-1" },
  { name: "company", label: "Empresa", type: "text", placeholder: "Empresa S.A.", col: "sm:col-span-1" },
  { name: "email", label: "E-mail", type: "email", placeholder: "joao@empresa.com.br", col: "sm:col-span-2" },
  { name: "phone", label: "Telefone", type: "tel", placeholder: "+55 (11) 9 9999-9999", col: "sm:col-span-2" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contato"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: "#09050f" }}
    >
      {/* Gradient orb background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(112,64,240,0.12) 0%, rgba(240,64,232,0.06) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <p className="text-[11px] font-bold tracking-[0.3em] text-[#00e896] uppercase mb-5">
              Fale Conosco
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5">
              Vamos criar algo{" "}
              <span className="gradient-text">inesquecível juntos.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.18}>
            <p className="text-white/45 font-medium text-base md:text-lg max-w-lg mx-auto leading-relaxed">
              Tudo parte de você: seu objetivo, seu momento, sua expectativa. Conte para nós.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <AnimateOnScroll className="lg:col-span-3" direction="left">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20 rounded-2xl border border-white/8 bg-white/4"
              >
                <div className="w-16 h-16 rounded-full brand-gradient flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M5 14l6 6L23 8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-black text-2xl text-white mb-2">Mensagem enviada!</h3>
                <p className="text-white/45 font-medium text-sm">Em breve entraremos em contato.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  {fields.slice(0, 2).map((f) => (
                    <div key={f.name}>
                      <label className="block text-[11px] font-black tracking-wider text-white/40 uppercase mb-2">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        required
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm font-semibold placeholder:text-white/20 focus:outline-none focus:border-[#7040f0]/60 focus:bg-white/8 transition-all"
                      />
                    </div>
                  ))}
                </div>
                {fields.slice(2).map((f) => (
                  <div key={f.name}>
                    <label className="block text-[11px] font-black tracking-wider text-white/40 uppercase mb-2">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      required={f.name === "email"}
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm font-semibold placeholder:text-white/20 focus:outline-none focus:border-[#7040f0]/60 focus:bg-white/8 transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[11px] font-black tracking-wider text-white/40 uppercase mb-2">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Conte um pouco sobre seu projeto, evento ou ideia..."
                    required
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm font-semibold placeholder:text-white/20 focus:outline-none focus:border-[#7040f0]/60 focus:bg-white/8 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-black text-white brand-gradient hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25 active:scale-[0.99]"
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </AnimateOnScroll>

          {/* Contact info */}
          <AnimateOnScroll className="lg:col-span-2" direction="right" delay={0.15}>
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-5 rounded-xl border border-white/8 bg-white/4 hover:bg-white/7 hover:border-white/15 transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-200"
                    style={{ background: `linear-gradient(135deg, ${item.accent}, #7040f0)` }}
                  >
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-bold text-white/80 truncate">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Footer bar */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-20 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
            <img
              src="/logos/ag-news/logo-branco.svg"
              alt="News Eventos Inteligentes"
              className="h-6 w-auto opacity-60"
            />
            <span className="text-white/25 text-xs font-semibold">
              © {new Date().getFullYear()} News Eventos. Todos os direitos reservados.
            </span>
            <span className="text-white/25 text-xs font-semibold">São Paulo, SP — Brasil</span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
