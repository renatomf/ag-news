"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(180deg, #0a0012 0%, #1f0333 100%)" }}
    >
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-28 md:pt-40 pb-14">
        {/* Heading */}
        <AnimateOnScroll>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-none tracking-tight mb-10 max-w-3xl">
            Vamos criar algo inesquecível.
          </h2>
        </AnimateOnScroll>

        {/* CTA button — wide pill like Stripe */}
        <AnimateOnScroll delay={0.1}>
          <a
            href="mailto:contato@newseventos.com.br"
            className="block w-full max-w-xl bg-white text-[#09050f] text-center py-5 rounded-full text-base font-black hover:bg-white/90 active:scale-[0.99] transition-all duration-200"
          >
            Fale com a News
          </a>
        </AnimateOnScroll>

        {/* Separator + footer */}
        <AnimateOnScroll delay={0.18}>
          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-white/30 text-xs font-semibold">Para falar com a News:</span>
              <a
                href="mailto:contato@newseventos.com.br"
                className="text-white/55 text-xs font-semibold hover:text-white/80 transition-colors"
              >
                contato@newseventos.com.br
              </a>
            </div>
            <div className="flex items-center gap-6 text-white/30 text-xs font-semibold">
              <a href="https://www.newseventos.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                www.newseventos.com.br
              </a>
              <a href="https://instagram.com/news_eventos_" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                @news_eventos_
              </a>
              <span>© {new Date().getFullYear()} News Eventos</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Animated gradient band */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        {/* Diagonal clip */}
        <div
          className="absolute inset-0 animate-gradient-flow"
          style={{
            background:
              "linear-gradient(135deg, #2d0060, #7040f0, #f040e8, #b060f8, #00d4f5, #00e896, #7040f0, #2d0060)",
            backgroundSize: "300% 300%",
            clipPath: "polygon(0 78%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
        {/* Soft gloss overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: "polygon(0 78%, 100% 0%, 100% 100%, 0% 100%)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 60%)",
          }}
        />
      </div>
    </section>
  );
}
