import { MessageCircle } from "lucide-react";

import { waLink } from "@/config/site";

export function WhatsappFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-20 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105 md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <MessageCircle className="size-7 md:size-8" />
    </a>
  );
}
