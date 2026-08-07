import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Wrench } from "lucide-react";

import { site, waLink } from "@/config/site";

/** Нижняя панель связи — только на смартфонах. */
export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 border-t border-border bg-card/95 backdrop-blur-xl md:hidden">
      <a
        href={site.phoneHref}
        className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium"
      >
        <Phone className="size-5 text-primary" />
        Позвонить
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 border-x border-border py-2.5 text-[11px] font-medium"
      >
        <MessageCircle className="size-5 text-whatsapp" />
        WhatsApp
      </a>
      <Link
        to="/contacts"
        hash="zayavka"
        className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium"
      >
        <Wrench className="size-5 text-signal" />
        Вызвать мастера
      </Link>
    </div>
  );
}
