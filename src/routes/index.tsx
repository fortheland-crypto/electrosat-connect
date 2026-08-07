import { createFileRoute, Link } from "@tanstack/react-router";

import { Hero } from "@/components/sections/Hero";
import { Directions } from "@/components/sections/Directions";
import { CctvProcess } from "@/components/sections/CctvProcess";
import { SatelliteServices } from "@/components/sections/SatelliteServices";
import { Advantages } from "@/components/sections/Advantages";
import { WorksGallery } from "@/components/sections/WorksGallery";
import { LeadForm } from "@/components/sections/LeadForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactsBlock } from "@/components/sections/ContactsBlock";
import { site } from "@/config/site";

const title =
  "ElectroSat — спутниковое ТВ и видеонаблюдение в Сатпаеве и Жезказгане";
const description =
  "Установка и настройка спутникового телевидения, монтаж видеонаблюдения в Сатпаеве и Жезказгане. Выезд мастера, магазин оборудования в ТД «Арман».";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          description,
          telephone: "+77052202575",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ул. Мангилик Ел 20А, ТД «Арман», цокольный этаж",
            addressLocality: "Сатпаев",
            addressCountry: "KZ",
          },
          areaServed: site.cities,
          sameAs: [site.instagramUrl],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Directions />
      <CctvProcess />
      <SatelliteServices />
      <WorksGallery limit={3} />
      <Advantages />
      <LeadForm />
      <FaqSection />
      <ContactsBlock />
      <div className="mx-auto max-w-7xl px-4 pb-6 text-sm text-muted-foreground lg:px-8">
        Смотрите также: <Link to="/shop" className="text-primary hover:underline">каталог магазина</Link>
        {" · "}
        <Link to="/about" className="text-primary hover:underline">о компании</Link>
      </div>
    </>
  );
}
