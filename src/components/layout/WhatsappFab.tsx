import { MessageCircle, Instagram } from "lucide-react";

import { site, waLink } from "@/config/site";

export function WhatsappFab() {
  return (
    <div className="fixed bottom-20 right-4 z-50 flex items-center gap-2.5 md:bottom-6 md:right-6">
      {/* Instagram Button */}
      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Перейти в Instagram"
        className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/25 transition-transform hover:scale-110 active:scale-95 md:h-14 md:w-14"
        title="Наш Instagram @electro_sat_arman"
      >
        <Instagram className="size-6 md:size-7" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/30 transition-transform hover:scale-110 active:scale-95 md:h-16 md:w-16"
        title="Написать мастеру в WhatsApp"
      >
        <MessageCircle className="size-7 md:size-8" />
      </a>
    </div>
  );
}
