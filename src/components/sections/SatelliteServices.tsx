import { Link } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { satelliteServices } from "@/data/services";

export function SatelliteServices({ as = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <Section id="sputnikovoe-tv">
      <SectionHeading
        as={as}
        eyebrow="Спутниковое ТВ"
        title="Спутниковое телевидение"
        text="Установка, настройка, ремонт и обслуживание спутниковых систем в Сатпаеве и Жезказгане."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {satelliteServices.map((s) => (
          <article
            key={s.title}
            className="surface-card rounded-2xl border border-border p-6 transition-colors hover:border-primary/50"
          >
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Button asChild variant="hero" size="xl">
          <Link to="/contacts" hash="zayavka">
            Вызвать мастера
          </Link>
        </Button>
      </div>
    </Section>
  );
}
