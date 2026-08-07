import { createFileRoute } from "@tanstack/react-router";

import cctvImg from "@/assets/cctv.jpg";
import { Section, SectionHeading } from "@/components/layout/Section";
import { CctvProcess } from "@/components/sections/CctvProcess";
import { FaqSection } from "@/components/sections/FaqSection";
import { LeadForm } from "@/components/sections/LeadForm";
import { Button } from "@/components/ui/button";
import { waLink } from "@/config/site";
import { cctvObjects, cctvWorks } from "@/data/services";

const title = "Установка видеонаблюдения в Сатпаеве и Жезказгане — ElectroSat";
const description =
  "Монтаж камер видеонаблюдения, прокладка кабеля, подключение регистратора и настройка просмотра через смартфон. Установим и настроим ваше оборудование.";

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
    <>
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Видеонаблюдение"
              title="Установка и настройка видеонаблюдения"
              text="ElectroSat выполняет монтаж, подключение и настройку систем видеонаблюдения для дома и бизнеса в Сатпаеве и Жезказгане."
            />
            <div className="mt-6 rounded-xl border border-signal/40 bg-signal/10 p-4 text-sm font-semibold text-signal">
              У вас уже есть оборудование? Мы установим и настроим его.
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a
                  href={waLink("Здравствуйте! Нужен расчёт монтажа видеонаблюдения.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Рассчитать монтаж
                </a>
              </Button>
            </div>
          </div>
          <img
            src={cctvImg}
            alt="Камера видеонаблюдения, установленная над входом в магазин"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full rounded-2xl border border-border object-cover"
          />
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="surface-card rounded-2xl border border-border p-6">
            <h2 className="text-xl font-bold">Виды работ</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {cctvWorks.map((w) => (
                <li
                  key={w}
                  className="rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm"
                >
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card rounded-2xl border border-border p-6">
            <h2 className="text-xl font-bold">Объекты</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {cctvObjects.map((o) => (
                <li
                  key={o}
                  className="rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm"
                >
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CctvProcess />
      <LeadForm />
      <FaqSection />
    </>
  );
}
