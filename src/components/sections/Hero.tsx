import { MessageCircle, Wrench, ShieldCheck, Tv, Radio } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { site, waLink } from "@/config/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 md:px-8 py-6">
      <div className="relative overflow-hidden rounded-3xl bg-secondary/80 border border-border/40 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 z-10 flex flex-col items-start">
          <span className="bg-primary text-white text-xs px-4 py-1.5 rounded-full mb-6 font-bold uppercase tracking-wider shadow-xs">
            Магазин в ТД «Арман» • Сатпаев &amp; Жезказган
          </span>

          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Спутниковое ТВ и видеонаблюдение <br />
            <span className="text-primary">в Сатпаеве и Жезказгане</span>
          </h1>

          <p className="font-sans text-base md:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Продажа, установка и настройка. Все операторы спутникового ТВ, монтаж уличных IP-камер, пульты и кабели. Качество, гарантия и поддержка мастера.
          </p>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <Button asChild variant="whatsapp" size="xl" className="rounded-full px-8 py-4 font-bold shadow-md text-base w-full sm:w-auto">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" /> Написать в WhatsApp
              </a>
            </Button>
            <Button asChild variant="default" size="xl" className="rounded-full px-8 py-4 font-bold shadow-md text-base w-full sm:w-auto">
              <a href={site.phoneHref}>
                <Wrench className="size-5" /> Вызвать мастера
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-muted-foreground border-t border-border/40 pt-4 w-full">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" /> Гарантия на монтаж
            </span>
            <span className="flex items-center gap-1.5">
              <Tv className="size-4 text-primary" /> Все операторы ТВ
            </span>
            <span className="flex items-center gap-1.5">
              <Radio className="size-4 text-primary" /> Выезд по региону
            </span>
          </div>
        </div>

        {/* Hero Image Block */}
        <div className="w-full md:w-1/2 h-72 md:h-auto min-h-[380px] md:absolute md:right-0 md:top-0 md:bottom-0 rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl overflow-hidden">
          <img
            src={heroImg}
            alt="ElectroSat — Спутниковое ТВ и видеонаблюдение"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/40 to-transparent hidden md:block" />
        </div>
      </div>
    </section>
  );
}
