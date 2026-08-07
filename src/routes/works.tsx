import { createFileRoute } from "@tanstack/react-router";

import { LeadForm } from "@/components/sections/LeadForm";
import { WorksGallery } from "@/components/sections/WorksGallery";

const title = "Наши работы — ElectroSat, Сатпаев и Жезказган";
const description =
  "Примеры выполненных работ ElectroSat: установка спутниковых антенн, монтаж видеонаблюдения в частных домах, магазинах и офисах.";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/works" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/works" }],
  }),
  component: WorksPage,
});

function WorksPage() {
  return (
    <>
      <WorksGallery as="h1" />
      <LeadForm />
    </>
  );
}
