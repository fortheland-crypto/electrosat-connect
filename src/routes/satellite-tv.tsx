import { createFileRoute } from "@tanstack/react-router";

import { SatelliteServices } from "@/components/sections/SatelliteServices";
import { Section, SectionHeading } from "@/components/layout/Section";
import { LeadForm } from "@/components/sections/LeadForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { satelliteWorks } from "@/data/services";
import satelliteImg from "@/assets/satellite.jpg";

const title = "Спутниковое телевидение в Сатпаеве и Жезказгане — ElectroSat";
const description =
  "Установка спутниковой антенны, настройка сигнала и каналов, ремонт и диагностика. Телекарта, Триколор, Отау ТВ. Выезд мастера в Сатпаеве и Жезказгане.";

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

function SatellitePage() {
  return (
    <>
      <SatelliteServices as="h1" />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <img
            src={satelliteImg}
            alt="Спутниковая антенна, установленная на балконе дома"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full rounded-2xl border border-border object-cover"
          />
          <div>
            <SectionHeading
              title="Что мы делаем со спутниковым оборудованием"
              text="Полный цикл работ: от установки антенны до настройки каналов и последующего обслуживания."
            />
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {satelliteWorks.map((w) => (
                <li
                  key={w}
                  className="rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm"
                >
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <LeadForm />
      <FaqSection />
    </>
  );
}
