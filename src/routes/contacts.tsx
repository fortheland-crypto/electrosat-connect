import { createFileRoute } from "@tanstack/react-router";

import { ContactsBlock } from "@/components/sections/ContactsBlock";
import { LeadForm } from "@/components/sections/LeadForm";

const title = "Контакты ElectroSat — Сатпаев, ТД «Арман» | +7 705 220 25 75";
const description =
  "Адрес магазина ElectroSat: г. Сатпаев, ТД «Арман», ул. Мангилик Ел 20А, цокольный этаж. Телефон и WhatsApp +7 705 220 25 75.";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contacts" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contacts" }],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <>
      <ContactsBlock as="h1" />
      <LeadForm />
    </>
  );
}
