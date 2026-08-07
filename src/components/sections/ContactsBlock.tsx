import { Clock, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";

import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { site, waLink } from "@/config/site";

export function ContactsBlock({ as = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <Section id="kontakty">
      <SectionHeading
        as={as}
        eyebrow="Контакты"
        title="ElectroSat в Сатпаеве"
        text="Можно приехать в наш отдел в ТД «Арман» или связаться с мастером по телефону и в WhatsApp."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="surface-card rounded-2xl border border-border p-6 md:p-8">
          <ul className="space-y-5">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Адрес магазина</p>
                <p className="font-semibold">{site.addressFull}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Телефон и WhatsApp</p>
                <a href={site.phoneHref} className="font-semibold hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Instagram className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Instagram</p>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-primary"
                >
                  {site.instagram}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">График работы</p>
                <p className="font-semibold">{site.workHours}</p>
              </div>
            </li>
          </ul>

          <div className="mt-7 grid gap-2 sm:grid-cols-3">
            <Button asChild variant="hero" size="lg">
              <a href={site.phoneHref}>
                <Phone /> Позвонить
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="soft" size="lg">
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                <Instagram /> Instagram
              </a>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Карта: ElectroSat, ТД «Арман», Сатпаев"
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full lg:h-full"
          />
        </div>
      </div>
    </Section>
  );
}
