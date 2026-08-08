import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, ShoppingBag, X, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { nav, site, waLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-surface/90 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3.5 md:px-8">
        <Logo />

        {/* Navigation Bar Pills */}
        <nav className="hidden items-center gap-1.5 md:flex">
          {nav.map((item) => {
            const isActive = pathname === item.to;
            const isShop = item.to === "/shop";

            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "bg-primary text-white font-bold shadow-xs"
                    : isShop
                    ? "bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary/60"
                )}
              >
                {isShop && <ShoppingBag className="size-4" />}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact WhatsApp Button */}
        <div className="flex items-center gap-3">
          <Button asChild variant="whatsapp" size="lg" className="hidden sm:inline-flex rounded-full font-bold shadow-sm">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </Button>
          <Button
            variant="soft"
            size="icon"
            aria-label="Меню"
            className="md:hidden rounded-xl"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border bg-surface px-4 py-4 md:hidden shadow-xl">
          <nav className="flex flex-col gap-2">
            {nav.map((item) => {
              const isActive = pathname === item.to;
              const isShop = item.to === "/shop";

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                    isActive
                      ? "bg-primary text-white font-bold"
                      : isShop
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "bg-secondary/60 text-foreground"
                  )}
                >
                  {isShop && <ShoppingBag className="size-5" />}
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 grid gap-2">
            <Button asChild variant="whatsapp" size="lg" className="rounded-full">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> Написать в WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
