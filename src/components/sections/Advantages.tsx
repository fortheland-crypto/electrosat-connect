import {
  BadgeCheck,
  Car,
  MessageCircle,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react";

import { Section, SectionHeading } from "@/components/layout/Section";
import { advantages } from "@/data/services";

const icons = [BadgeCheck, Car, Settings2, Users, ShoppingBag, MessageCircle];

export function Advantages() {
  return (
    <Section id="pochemu">
      <SectionHeading
        eyebrow="Почему ElectroSat"
        title="Местная компания, к которой можно приехать"
        text="Работаем в Сатпаеве и Жезказгане, выезжаем к клиенту и всегда на связи в WhatsApp."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((item, i) => {
          const Icon = icons[i % icons.length]!;
          return (
            <article
              key={item.title}
              className="surface-card rounded-2xl border border-border p-6"
            >
              <Icon className="size-8 text-primary" />
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
