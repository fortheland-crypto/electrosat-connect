import { createFileRoute } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/layout/Section";
import { Advantages } from "@/components/sections/Advantages";
import { ContactsBlock } from "@/components/sections/ContactsBlock";
import { FaqSection } from "@/components/sections/FaqSection";
import { site } from "@/config/site";

const title = "О компании ElectroSat — Сатпаев и Жезказган";
const description =
  "ElectroSat — установка и настройка спутникового телевидения и видеонаблюдения в Сатпаеве и Жезказгане. Магазин оборудования в ТД «Арман».";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="О компании"
          title="ElectroSat — спутниковое ТВ и видеонаблюдение"
          text="Мы помогаем жителям и бизнесу Сатпаева и Жезказгана установить, настроить и обслуживать спутниковое телевидение и системы видеонаблюдения."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Работаем в Сатпаеве и Жезказгане",
              d: "Выезд мастера на объект: квартира, частный дом, магазин, офис или склад.",
            },
            {
              t: "Можно приехать в наш магазин",
              d: `${site.addressShort}. ${site.addressFull}.`,
            },
            {
              t: "Связь через WhatsApp",
              d: "Быстро отвечаем, подскажем по оборудованию и стоимости работ.",
            },
          ].map((c) => (
            <article
              key={c.t}
              className="surface-card rounded-2xl border border-border p-6"
            >
              <h2 className="text-lg font-bold">{c.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.d}
              </p>
            </article>
          ))}
        </div>

        {/* Раздел отзывов подготовлен, но пока скрыт — заполним реальными отзывами клиентов. */}
      </Section>

      <Advantages />
      <FaqSection />
      <ContactsBlock />
    </>
  );
}
