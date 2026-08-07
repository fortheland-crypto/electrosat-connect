import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";

import { site, waLink } from "@/config/site";

const footerNav = [
  { label: "Спутниковое ТВ", to: "/satellite-tv" },
  { label: "Видеонаблюдение", to: "/cctv" },
  { label: "Магазин", to: "/shop" },
  { label: "Наши работы", to: "/works" },
  { label: "О компании", to: "/about" },
  { label: "Контакты", to: "/contacts" },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] font-display font-bold text-primary-foreground">
              E
            </span>
            <span className="font-display text-lg font-bold">ElectroSat</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Спутниковое телевидение и видеонаблюдение. Установка, настройка и
            обслуживание в Сатпаеве и Жезказгане.
          </p>
        </div>

        <nav aria-label="Навигация в подвале">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Услуги
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Контакты
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 font-semibold hover:text-primary"
              >
                <Phone className="size-4 text-primary" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle className="size-4 text-primary" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Instagram className="size-4 text-primary" /> {site.instagram}
              </a>
            </li>
            <li className="flex gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{site.addressFull}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} ElectroSat. Все права защищены.
      </div>
    </footer>
  );
}
