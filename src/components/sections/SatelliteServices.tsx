import { Link } from "@tanstack/react-router";
import { Tv, Camera, ArrowRight, CheckCircle2 } from "lucide-react";

import satelliteImg from "@/assets/satellite.jpg";
import cctvImg from "@/assets/cctv.jpg";
import { Button } from "@/components/ui/button";

export function SatelliteServices() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 md:px-8 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Satellite Service Card */}
        <div className="bg-card rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 border border-border/40 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:shadow-[0px_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300">
          <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 bg-secondary flex justify-center items-center rounded-2xl overflow-hidden p-2">
            <img
              src={satelliteImg}
              alt="Спутниковое оборудование"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start text-left flex-1">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Спутниковое ТВ
            </h3>
            <p className="font-sans text-sm text-muted-foreground mb-5 leading-relaxed">
              Все операторы: OTAU TV, НТВ-Плюс, Триколор, Телекарта, МТС, Alma TV. Продление подписок и выезд мастера.
            </p>
            <Button asChild variant="outline" className="rounded-full border-primary/30 text-primary font-bold hover:bg-primary hover:text-white transition-colors">
              <Link to="/satellite-tv">
                Подробнее <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* CCTV Service Card */}
        <div className="bg-card rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 border border-border/40 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:shadow-[0px_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300">
          <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 bg-secondary flex justify-center items-center rounded-2xl overflow-hidden p-2">
            <img
              src={cctvImg}
              alt="Оборудование для видеонаблюдения"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start text-left flex-1">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Видеонаблюдение
            </h3>
            <p className="font-sans text-sm text-muted-foreground mb-5 leading-relaxed">
              Монтаж уличных и внутренних камер IP и Wi-Fi. Настройка онлайн-просмотра с телефона. С гарантией.
            </p>
            <Button asChild variant="outline" className="rounded-full border-primary/30 text-primary font-bold hover:bg-primary hover:text-white transition-colors">
              <Link to="/cctv">
                Подробнее <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
