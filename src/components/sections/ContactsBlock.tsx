import { Clock, Instagram, MapPin, MessageCircle, Phone, Navigation, ExternalLink } from "lucide-react";

import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { site, waLink } from "@/config/site";

export function ContactsBlock({ as = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <Section id="kontakty">
      <SectionHeading
        as={as}
        eyebrow="Где нас найти"
        title="Наш магазин на карте 2ГИС"
        text="Откройте местоположение в 2ГИС, постройте маршрут или свяжитесь с мастером напрямую."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Info Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <ul className="space-y-5">
            <li className="flex gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <MapPin className="size-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Адрес магазина</p>
                <p className="font-semibold text-slate-900">{site.addressFull}</p>
                <a
                  href={site.dgisUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-1 text-xs font-bold text-emerald-600 hover:underline"
                >
                  <Navigation className="size-3.5" /> Открыть адрес в 2ГИС ➔
                </a>
              </div>
            </li>

            <li className="flex gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Phone className="size-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Телефон и WhatsApp</p>
                <a href={site.phoneHref} className="font-semibold text-slate-900 hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </div>
            </li>

            <li className="flex gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Instagram className="size-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Instagram</p>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 hover:text-primary"
                >
                  {site.instagram}
                </a>
              </div>
            </li>

            <li className="flex gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Clock className="size-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Режим работы</p>
                <p className="font-semibold text-slate-900">{site.workHours}</p>
              </div>
            </li>
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-sm flex-1">
              <a href={site.dgisUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="size-4 mr-1" /> Открыть в 2ГИС
              </a>
            </Button>

            <Button asChild variant="whatsapp" className="flex-1">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4 mr-1" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* 2GIS Map Card */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm min-h-[320px]">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3.5 py-1.5 text-xs font-bold text-emerald-300">
              <Navigation className="size-4 text-emerald-400" />
              Карта 2ГИС • Сатпаев
            </div>
            
            <h3 className="mt-4 font-display text-2xl font-bold text-white">
              ТД «Арман» (цокольный этаж)
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Улица Мангилик Ел 20А (бывшая Комарова 20А). Проложите оптимальный маршрут в приложении или на сайте 2ГИС.
            </p>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-400">Нажмите для перехода к навигатору:</span>
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold shadow-md">
              <a href={site.dgisUrl} target="_blank" rel="noopener noreferrer">
                Построить маршрут в 2ГИС <ExternalLink className="ml-1.5 size-4" />
              </a>
            </Button>
          </div>

          {/* Background Map Styling */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
      </div>
    </Section>
  );
}
