import { Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { waLink } from "@/config/site";

const perks = [
  "Работаем в Сатпаеве и Жезказгане",
  "Выезд мастера",
  "Профессиональный монтаж",
  "Настройка оборудования",
  "Помощь после установки",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <img
        src={heroImg}
        alt="Мастер ElectroSat устанавливает спутниковую антенну и камеру видеонаблюдения"
        width={1600}
        height={1104}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl animate-rise">
          <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            ElectroSat • ТД «Арман», Сатпаев
          </p>
          <h1 className="mt-5 text-balance text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-6xl">
            Спутниковое ТВ и видеонаблюдение в{" "}
            <span className="text-gradient">Сатпаеве и Жезказгане</span>
          </h1>
          <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary-glow sm:text-base">
            Установка • Настройка • Монтаж • Обслуживание
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
            Помогаем установить и настроить спутниковое телевидение, камеры
            видеонаблюдения и другое оборудование для дома и бизнеса.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/contacts" hash="zayavka">
                Вызвать мастера
              </Link>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Написать в WhatsApp
              </a>
            </Button>
          </div>

          <ul className="mt-10 grid gap-2.5 sm:grid-cols-2">
            {perks.map((perk) => (
              <li
                key={perk}
                className="flex items-center gap-2 text-sm text-foreground/85"
              >
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
