import { Link } from "@tanstack/react-router";
import { ShoppingBag, ArrowRight, CheckCircle2, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ShopPreviewBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl md:p-10">
        <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              <ShoppingBag className="size-4 text-primary-glow" />
              Официальный магазин в ТД «Арман» (цокольный этаж)
            </div>
            
            <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Ищете пульт, кабель, кронштейн или ресивер?
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              В наличии пульты для любых ТВ (Samsung, LG, Artel, Yasin, ARG...), спутниковые ресиверы от 12 000 ₸, телевизионный кабель 150 ₸/м, настенные и поворотные кронштейны, зарядные устройства, флешки и мелкая техника.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-400" /> Все товары проверены
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-400" /> Цены от производителя
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-400" /> Консультация в магазине
              </span>
            </div>
          </div>

          <div className="shrink-0 pt-2 lg:pt-0">
            <Button asChild size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg w-full sm:w-auto">
              <Link to="/shop">
                Смотреть Каталог товаров <ArrowRight className="ml-1 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
