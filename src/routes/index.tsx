import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/sections/Hero";
import { SatelliteServices } from "@/components/sections/SatelliteServices";
import { ShopPreviewBanner } from "@/components/sections/ShopPreviewBanner";
import { ContactsBlock } from "@/components/sections/ContactsBlock";
import { site } from "@/config/site";

const title = "ElectroSat — спутниковое ТВ и видеонаблюдение в Сатпаеве";
const description =
  "Спутниковое ТВ, видеонаблюдение, пульты, кабели и оборудование в Сатпаеве и Жезказгане. Выезд мастера, магазин в ТД «Арман».";

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
    <div className="space-y-12 pb-12">
      <Hero />
      <SatelliteServices />
      <ShopPreviewBanner />
      <ContactsBlock />
    </div>
  );
}
