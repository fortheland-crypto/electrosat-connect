import { Link } from "@tanstack/react-router";
import { Check, Satellite, ShoppingBag, Video } from "lucide-react";

import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { cctvWorks, satelliteWorks } from "@/data/services";
import { waLink } from "@/config/site";

export function Directions() {
  return (
    <Section id="napravleniya">
      <SectionHeading
        eyebrow="Наши направления"
        title="Три направления работы ElectroSat"
        text="Спутниковое телевидение, видеонаблюдение и магазин оборудования в ТД «Арман»."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {/* Спутниковое ТВ */}
        <article className="surface-card flex flex-col rounded-2xl border border-border p-6">
          <Satellite className="size-9 text-primary" />
          <h3 className="mt-4 text-xl font-bold">Спутниковое телевидение</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Установка, настройка и обслуживание спутникового телевидения для
            квартир, частных домов и организаций.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {satelliteWorks.slice(0, 6).map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-1 flex-col justify-end gap-2">
            <Button asChild variant="hero" size="lg">
              <Link to="/contacts" hash="zayavka">
                Вызвать мастера
              </Link>
            </Button>
            <Button asChild variant="soft" size="lg">
              <Link to="/satellite-tv">Подробнее об услуге</Link>
            </Button>
          </div>
        </article>

        {/* Видеонаблюдение */}
        <article className="surface-card flex flex-col rounded-2xl border border-primary/30 p-6 shadow-[var(--shadow-glow)]">
          <Video className="size-9 text-primary" />
          <h3 className="mt-4 text-xl font-bold">Видеонаблюдение</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Профессиональная установка и настройка видеонаблюдения для дома и
            бизнеса. Выполняем монтаж, подключение и настройку.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {cctvWorks.slice(0, 6).map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-xl border border-signal/40 bg-signal/10 p-4 text-sm font-semibold text-signal">
            У вас уже есть оборудование? Мы установим и настроим его.
          </div>
          <div className="mt-6 flex flex-1 flex-col justify-end gap-2">
            <Button asChild variant="hero" size="lg">
              <a href={waLink("Здравствуйте! Нужен расчёт монтажа видеонаблюдения.")} target="_blank" rel="noopener noreferrer">
                Рассчитать монтаж
              </a>
            </Button>
            <Button asChild variant="soft" size="lg">
              <Link to="/cctv">Подробнее об услуге</Link>
            </Button>
          </div>
        </article>

        {/* Магазин */}
        <article className="surface-card flex flex-col rounded-2xl border border-border p-6">
          <ShoppingBag className="size-9 text-primary" />
          <h3 className="mt-4 text-xl font-bold">Магазин ElectroSat</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Спутниковое оборудование, электроника, аксессуары и другие товары в
            нашем магазине в ТД «Арман».
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {[
              "пульты и ТВ-аксессуары",
              "ресиверы и антенны",
              "конвертеры, кабели, разъёмы",
              "кронштейны и крепления",
              "электроника",
              "мелкая бытовая техника",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-1 flex-col justify-end gap-2">
            <Button asChild variant="hero" size="lg">
              <Link to="/shop">Перейти в каталог</Link>
            </Button>
            <Button asChild variant="soft" size="lg">
              <a
                href={waLink("Здравствуйте! Хочу узнать наличие товара в магазине ElectroSat.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Узнать наличие товара
              </a>
            </Button>
          </div>
        </article>
      </div>
    </Section>
  );
}
