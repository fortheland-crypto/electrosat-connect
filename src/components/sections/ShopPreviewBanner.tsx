import { Link } from "@tanstack/react-router";
import { ArrowRight, ShoppingBag, CheckCircle2 } from "lucide-react";

import shopImg from "@/assets/shop.jpg";
import { Button } from "@/components/ui/button";

export function ShopPreviewBanner() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 md:px-8 py-4">
      <div className="bg-[#00174A] text-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl">
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-start text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white mb-4 backdrop-blur-md">
            <ShoppingBag className="size-4 text-emerald-400" />
            Официальный отдел в ТД «Арман» (цокольный этаж)
          </div>

          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Посетите наш магазин в ТД «Арман»
          </h2>

          <p className="font-sans text-base text-white/80 mb-8 max-w-lg leading-relaxed">
            Большой выбор пультов для любых ТВ (Samsung, LG, Artel...), спутниковых ресиверов от 12 000 ₸, кабеля 150 ₸/м, кронштейнов, зарядок, флешек и техники в наличии.
          </p>

          <Button asChild size="xl" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-4 font-bold shadow-lg">
            <Link to="/shop">
              Перейти в магазин <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>

        <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[320px] relative">
          <img
            src={shopImg}
            alt="Магазин ElectroSat в ТД Арман"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00174A] via-[#00174A]/40 to-transparent hidden md:block" />
        </div>
      </div>
    </section>
  );
}
