import { useMemo, useState } from "react";
import { Check, MapPin } from "lucide-react";

import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects, workCategories } from "@/data/projects";

export function WorksGallery({
  as = "h2",
  limit,
}: {
  as?: "h1" | "h2";
  limit?: number;
}) {
  const [active, setActive] = useState<string>("Все");

  const list = useMemo(() => {
    const filtered =
      active === "Все" ? projects : projects.filter((p) => p.category === active);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [active, limit]);

  return (
    <Section id="nashi-raboty">
      <SectionHeading
        as={as}
        eyebrow="Портфолио"
        title="Наши работы"
        text="Примеры выполненных объектов. Фотографии временные — раздел готов под реальные снимки наших монтажей."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {["Все", ...workCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50",
              active === cat
                ? "border-primary/60 bg-primary/15 text-primary"
                : "bg-secondary/50 text-muted-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article
            key={p.id}
            className="surface-card overflow-hidden rounded-2xl border border-border"
          >
            <img
              src={p.images[0]}
              alt={p.title}
              width={1200}
              height={900}
              loading="lazy"
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="size-3.5 text-primary" />
                {p.city}
                {p.demo && (
                  <span className="ml-auto rounded-full border border-border px-2 py-0.5">
                    демо-фото
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-base font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-3 space-y-1.5">
                {p.done.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-foreground/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {list.length === 0 && (
        <p className="mt-8 text-sm text-muted-foreground">
          В этой категории пока нет опубликованных работ.
        </p>
      )}

      {limit && (
        <div className="mt-8">
          <Button asChild variant="soft" size="lg">
            <a href="/works">Смотреть все работы</a>
          </Button>
        </div>
      )}
    </Section>
  );
}
