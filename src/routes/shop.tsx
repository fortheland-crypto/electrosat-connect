import { createFileRoute } from "@tanstack/react-router";

import { Catalog } from "@/components/sections/Catalog";
import { ContactsBlock } from "@/components/sections/ContactsBlock";

const title = "Каталог магазина ElectroSat — Сатпаев, ТД «Арман»";
const description =
  "Спутниковые ресиверы и антенны, пульты, конвертеры, кабели, разъёмы, кронштейны, ТВ-аксессуары и электроника. Наличие уточняйте в WhatsApp.";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/shop" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <>
      <Catalog as="h1" />
      <ContactsBlock />
    </>
  );
}
