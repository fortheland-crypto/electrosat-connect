import { MessageCircle, Tv, Camera, ShieldCheck, Check } from "lucide-react";

import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { waLink } from "@/config/site";

export function SatelliteServices() {
  return (
    <Section id="uslugi">
      <SectionHeading
        eyebrow="Услуги и сервис"
        title="Спутниковое ТВ и Видеонаблюдение"
        text="Профессиональный монтаж, настройка оборудования и гарантия в Сатпаеве и Жезказгане."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Card 1: Satellite TV */}
        <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
          <div>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Tv className="size-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
              Спутниковое Телевидение
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Установка и настройка оборудования для любых операторов: OTAU TV, Alma TV, НТВ-Плюс, Триколор, Телекарта, МТС.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-primary shrink-0" />
                <span>Продление и оплата подписок (НТВ, Триколор, Телекарта)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-primary shrink-0" />
                <span>Продажа цифровых HD ресиверов (от 12 000 ₸) и головок LNB</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-primary shrink-0" />
                <span>Точная юстировка сигнала и укладка кабеля (150 ₸/м)</span>
              </li>
            </ul>
          </div>

          <div className="mt-7 pt-4 border-t border-slate-100">
            <Button asChild variant="whatsapp" size="lg" className="w-full">
              <a href={waLink("Здравствуйте! Нужна установка или настройка Спутникового ТВ.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> Заказать выезд мастера по ТВ
              </a>
            </Button>
          </div>
        </div>

        {/* Card 2: CCTV Video Surveillance */}
        <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
          <div>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Camera className="size-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
              Видеонаблюдение для дома и бизнеса
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Продажа и монтаж уличных и внутренних IP / Wi-Fi камер для частных домов, магазинов, офисов и гаражей.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-primary shrink-0" />
                <span>Камеры с ночным видением (от 14 000 ₸)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-primary shrink-0" />
                <span>Видеорегистраторы DVR/NVR (от 22 000 ₸) с архивом записи</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-primary shrink-0" />
                <span>Настройка бесплатного просмотра видео прямо со смартфона</span>
              </li>
            </ul>
          </div>

          <div className="mt-7 pt-4 border-t border-slate-100">
            <Button asChild variant="whatsapp" size="lg" className="w-full">
              <a href={waLink("Здравствуйте! Нужна консультация или монтаж видеонаблюдения.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> Заказать расчет видеонаблюдения
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
