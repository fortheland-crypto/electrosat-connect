import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Check, Tv, Radio, ShieldCheck, Wrench } from "lucide-react";

import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { ContactsBlock } from "@/components/sections/ContactsBlock";
import { site, waLink } from "@/config/site";
import satelliteImg from "@/assets/satellite.jpg";

const title = "Спутниковое телевидение в Сатпаеве и Жезказгане — ElectroSat";
const description =
  "Установка спутниковых антенн, ресиверы, настройка каналов, продление подписок НТВ, Триколор, Телекарта, Отау ТВ. Выезд мастера в Сатпаеве и Жезказгане.";

export const Route = createFileRoute("/satellite-tv")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/satellite-tv" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/satellite-tv" }],
  }),
  component: SatellitePage,
});

const operators = [
  { name: "OTAU TV (Отау ТВ)", desc: "Казахстанское спутниковое телевидение. Настройка и ресиверы." },
  { name: "НТВ-Плюс (НТВ)", desc: "Подключение, настройка каналов и продление подписки." },
  { name: "Триколор (Trikolor)", desc: "Обновление ПО, настройка оборудования и продление пакетов." },
  { name: "Телекарта (Telekarta)", desc: "Настройка сигнала, замена карт и продление подписки." },
  { name: "Alma TV (Альма ТВ)", desc: "Установка антенн, настройка тюнеров и консультация." },
  { name: "МТС ТВ (MTS)", desc: "Монтаж тарелок, ремонт оборудования и юстировка сигнала." },
];

const works = [
  "Профессиональный монтаж спутниковых тарелок",
  "Настройка и юстировка точного сигнала",
  "Продажа HD ресиверов (от 12 000 ₸)",
  "Замена спутниковых головок LNB (от 2 500 ₸)",
  "Продление подписок НТВ, Триколор, Телекарта",
  "Прокладка качественного кабеля RG6 (150 ₸/м)",
  "Ремонт оборудования после ветра и непогоды",
  "Выезд мастера по Сатпаеву и Жезказгану",
];

function SatellitePage() {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Banner for Satellite TV only */}
      <Section className="pt-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Tv className="size-4" />
              Спутниковое ТВ • Сатпаев & Жезказган
            </div>
            
            <h1 className="mt-4 font-display text-3xl font-black text-slate-900 leading-tight sm:text-5xl">
              Спутниковое телевидение
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Установка, настройка, ремонт и продление подписок для всех спутниковых операторов в Сатпаеве и Жезказгане. Выезд мастера на дом с гарантией.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="whatsapp" size="xl">
                <a href={waLink("Здравствуйте! Нужен мастер по спутниковому ТВ.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" /> Заказать выезд мастера
                </a>
              </Button>
            </div>
          </div>

          <div>
            <img
              src={satelliteImg}
              alt="Установка и настройка спутникового ТВ"
              width={1200}
              height={900}
              fetchPriority="high"
              className="w-full rounded-3xl border border-slate-200 shadow-lg object-cover h-[340px]"
            />
          </div>
        </div>
      </Section>

      {/* Operators Section */}
      <Section>
        <SectionHeading
          eyebrow="Операторы"
          title="Работаем со всеми спутниковыми операторами"
          text="Оказываем полное обслуживание, настройку и оплату подписок."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {operators.map((op) => (
            <div key={op.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
                <Radio className="size-4 text-primary" />
                {op.name}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{op.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services List & Subscription Renewal */}
      <Section>
        <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-white p-8 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            Продление подписок и услуги мастера
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Принимаем оплату и продлеваем подписки для НТВ-Плюс, Триколор и Телекарта. Консультируем напрямую в WhatsApp.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {works.map((w) => (
              <li key={w} className="flex items-center gap-2 text-sm text-slate-800">
                <Check className="size-4 text-primary shrink-0" />
                <span>{w}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Button asChild variant="whatsapp" size="lg">
              <a href={waLink("Здравствуйте! Хочу продлить подписку на ТВ (НТВ/Триколор/Телекарта).")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> Написать в WhatsApp по продлению
              </a>
            </Button>
          </div>
        </div>
      </Section>

      <ContactsBlock />
    </div>
  );
}
