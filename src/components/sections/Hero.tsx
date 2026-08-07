import { MessageCircle, Phone, ShieldCheck, Wrench, Tv, Radio } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { site, waLink } from "@/config/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background">
      <img
        src={heroImg}
        alt="Мастер ElectroSat у фасада частного дома со спутниковой антенной и видеонаблюдением"
        width={1600}
        height={1104}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background/96 via-background/90 to-background/50"
      />

      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl animate-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-xs backdrop-blur-md">
            <span className="size-2 rounded-full bg-whatsapp animate-pulse" />
            <span>Магазин & Выезд мастеров • Сатпаев и Жезказган</span>
          </div>

          <h1 className="mt-5 text-balance font-display text-3xl font-black text-slate-900 leading-[1.15] tracking-tight sm:text-5xl lg:text-5xl">
            Спутниковое ТВ & Видеонаблюдение
          </h1>

          <p className="mt-3 font-sans text-base font-semibold text-primary sm:text-lg">
            Установка • Настройка • Продажа оборудования • Продление подписок
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">
            Официальный отдел в ТД «Арман» (г. Сатпаев). Настройка OTAU TV, НТВ, Триколор, Телекарта. Монтаж уличных IP-камер. Продажа пультов, кабелей и аксессуаров.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="whatsapp" size="xl" className="shadow-md">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" /> Консультация в WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="bg-white/90 shadow-xs">
              <a href={site.phoneHref}>
                <Phone className="size-4 text-primary" /> Позвонить мастеру
              </a>
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              <span>Гарантия на оборудование</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="size-4 text-primary" />
              <span>Быстрый выезд мастера</span>
            </div>
            <div className="flex items-center gap-2">
              <Tv className="size-4 text-primary" />
              <span>Все операторы ТВ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
