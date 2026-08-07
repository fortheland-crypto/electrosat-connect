import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";

import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { productWaLink } from "@/config/site";
import { categories, formatPrice, products, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function Catalog({ as = "h2" }: { as?: "h1" | "h2" }) {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<Product | null>(null);

  const list = useMemo(
    () =>
      active === "all"
        ? products
        : products.filter((p) => p.categoryId === active),
    [active],
  );

  return (
    <Section id="katalog">
      <SectionHeading
        as={as}
        eyebrow="Магазин ElectroSat"
        title="Каталог товаров и оборудования"
        text="Спутниковое ТВ оборудование, системы видеонаблюдения, пульты, кабели и аксессуары. Наличие и заказ — в магазине в ТД «Арман» или через WhatsApp."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {[{ id: "all", title: "Все товары" }, ...categories].map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={cn(
              "rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50",
              active === cat.id
                ? "border-primary/60 bg-primary/15 text-primary"
                : "bg-secondary/50 text-muted-foreground",
            )}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <article
            key={p.id}
            className="surface-card flex flex-col overflow-hidden rounded-2xl border border-border"
          >
            <img
              src={p.image}
              alt={p.name}
              width={1200}
              height={900}
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-bold">{p.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-4 flex items-center justify-between gap-2">
                <span className="font-display text-base font-bold text-primary">
                  {formatPrice(p)}
                </span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-semibold",
                    p.inStock
                      ? "bg-whatsapp/15 text-whatsapp"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {p.inStock ? "В наличии" : "Под заказ"}
                </span>
              </div>
              <div className="mt-4 flex flex-1 flex-col justify-end gap-2">
                <Button variant="soft" size="lg" onClick={() => setSelected(p)}>
                  Подробнее
                </Button>
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={productWaLink(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle /> Узнать наличие
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.name}</DialogTitle>
                <DialogDescription>{selected.description}</DialogDescription>
              </DialogHeader>
              <img
                src={selected.image}
                alt={selected.name}
                width={1200}
                height={900}
                loading="lazy"
                className="h-52 w-full rounded-xl object-cover"
              />
              <dl className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Категория</dt>
                  <dd className="font-medium">
                    {categories.find((c) => c.id === selected.categoryId)?.title}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Цена</dt>
                  <dd className="font-medium">{formatPrice(selected)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Наличие</dt>
                  <dd className="font-medium">
                    {selected.inStock ? "В наличии" : "Под заказ"}
                  </dd>
                </div>
              </dl>
              <Button asChild variant="whatsapp" size="xl">
                <a
                  href={productWaLink(selected.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> Узнать наличие в WhatsApp
                </a>
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
