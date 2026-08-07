import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Check, Camera, ShieldCheck, Phone } from "lucide-react";

import cctvImg from "@/assets/cctv.jpg";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ContactsBlock } from "@/components/sections/ContactsBlock";
import { Button } from "@/components/ui/button";
import { waLink } from "@/config/site";
import { cctvObjects, cctvWorks } from "@/data/services";

const title = "Установка видеонаблюдения в Сатпаеве и Жезказгане — ElectroSat";
const description =
  "Монтаж камер видеонаблюдения, прокладка кабеля, подключение регистратора и настройка просмотра через смартфон в Сатпаеве и Жезказгане.";

export const Route = createFileRoute("/cctv")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cctv" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cctv" }],
  }),
  component: CctvPage,
});

function CctvPage() {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Banner for CCTV only */}
      <Section className="pt-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Camera className="size-4" />
              Видеонаблюдение • Сатпаев & Жезказган
            </div>
            
            <h1 className="mt-4 font-display text-3xl font-black text-slate-900 leading-tight sm:text-5xl">
              Видеонаблюдение для дома и бизнеса
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Монтаж, установка и настройка уличных и внутренних IP / Wi-Fi видеокамер, подключение регистраторов (DVR/NVR) и вывод бесплатного онлайн-просмотра прямо на ваш смартфон.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="whatsapp" size="xl">
                <a href={waLink("Здравствуйте! Нужен расчет или монтаж систем видеонаблюдения.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" /> Рассчитать стоимость монтажа
                </a>
              </Button>
            </div>
          </div>

          <div>
            <img
              src={cctvImg}
              alt="Установка камер видеонаблюдения ElectroSat"
              width={1200}
              height={900}
              fetchPriority="high"
              className="w-full rounded-3xl border border-slate-200 shadow-lg object-cover h-[340px]"
            />
          </div>
        </div>
      </Section>

      {/* Services and Types of Work */}
      <Section>
        <SectionHeading
          eyebrow="Услуги монтажа"
          title="Что входит в установку видеонаблюдения"
          text="Работаем с готовым оборудованием клиента или подбираем комплекты с гарантией."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-900">Виды выполняемых работ</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
              {cctvWorks.map((w) => (
                <li key={w} className="flex items-center gap-2">
                  <Check className="size-4 text-primary shrink-0" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-900">Объекты установки</h3>
            <p className="mt-1 text-xs text-slate-500 mb-4">Устанавливаем системы любой сложности под ваши задачи:</p>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {cctvObjects.map((o) => (
                <li key={o} className="flex items-center gap-2">
                  <Check className="size-4 text-primary shrink-0" />
                  <span className="capitalize">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <ContactsBlock />
    </div>
  );
}
