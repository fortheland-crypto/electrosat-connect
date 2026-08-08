import { Clock, Instagram, MapPin, MessageCircle, Phone, Navigation, ExternalLink } from "lucide-react";

import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { site, waLink } from "@/config/site";

export function ContactsBlock({ as = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section className="mx-auto max-w-[1280px] px-4 md:px-8 py-6">
      <div className="bg-card rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 border border-border/40 shadow-[0px_4px_20px_rgba(15,23,42,0.05)]">
        {/* Contact Info Grid */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <SectionHeading
              as={as}
              eyebrow="Где нас найти"
              title="Контакты и адрес"
              text="ТД «Арман» (цокольный этаж), Сатпаев. Свяжитесь с нами или постройте маршрут в 2ГИС."
            />

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Working Hours */}
              <div className="bg-secondary/70 rounded-2xl p-5 border border-border/30">
                <div className="flex items-center gap-2.5 mb-2 text-primary font-bold text-sm">
                  <Clock className="size-4" />
                  <span>График работы</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-foreground leading-relaxed font-semibold">
                  {site.workHours}
                </p>
              </div>

              {/* Address */}
              <div className="bg-secondary/70 rounded-2xl p-5 border border-border/30">
                <div className="flex items-center gap-2.5 mb-2 text-primary font-bold text-sm">
                  <MapPin className="size-4" />
                  <span>Адрес магазина</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-foreground leading-relaxed font-semibold">
                  {site.addressFull}
                </p>
              </div>

              {/* Phone & WhatsApp */}
              <div className="bg-secondary/70 rounded-2xl p-5 border border-border/30 sm:col-span-2">
                <div className="flex items-center gap-2.5 mb-2 text-primary font-bold text-sm">
                  <Phone className="size-4" />
                  <span>Телефон и WhatsApp</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-display text-lg font-bold text-foreground">
                    {site.phoneDisplay}
                  </span>
                  <div className="flex gap-2">
                    <Button asChild variant="whatsapp" size="sm" className="rounded-full">
                      <a href={waLink()} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="size-4" /> WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="rounded-full">
                      <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                        <Instagram className="size-4" /> Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2GIS Map Card */}
        <div className="w-full lg:w-1/2 min-h-[300px] rounded-2xl overflow-hidden relative border border-border/30 bg-slate-900 text-white flex flex-col justify-between p-7">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3.5 py-1.5 text-xs font-bold text-emerald-300">
              <Navigation className="size-4 text-emerald-400" />
              Карта 2ГИС • Сатпаев
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold text-white">
              ТД «Арман» (цокольный этаж)
            </h3>

            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Улица Мангилик Ел 20А (бывшая Комарова 20А). Быстрый переход в навигатор 2ГИС.
            </p>
          </div>

          <div className="relative z-10 mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-400">Нажмите для построения маршрута:</span>
            <Button asChild size="lg" className="bg-[#16C85B] hover:bg-[#13b050] text-white font-bold rounded-full shadow-md">
              <a href={site.dgisUrl} target="_blank" rel="noopener noreferrer">
                Построить маршрут в 2ГИС <ExternalLink className="ml-1.5 size-4" />
              </a>
            </Button>
          </div>

          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
      </div>
    </section>
  );
}
