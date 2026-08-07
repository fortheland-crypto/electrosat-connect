import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, ShoppingBag, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { nav, site, waLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 lg:px-8">
        <Logo />

        {/* Highlighted Navigation Menu Bar */}
        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map((item) => {
            const isActive = pathname === item.to;
            const isShop = item.to === "/shop";

            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all shadow-2xs",
                  isActive
                    ? "bg-primary text-primary-foreground font-bold shadow-xs"
                    : isShop
                    ? "bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white"
                    : "bg-slate-100/90 text-slate-700 border border-slate-200/70 hover:bg-slate-200/80 hover:text-slate-900"
                )}
              >
                {isShop && <ShoppingBag className="size-4" />}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-800 transition-colors hover:border-primary hover:text-primary md:flex"
          >
            <Phone className="size-3.5 text-primary" />
            {site.phoneDisplay}
          </a>
          <Button asChild variant="whatsapp" size="lg" className="hidden sm:inline-flex rounded-full">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button
            variant="soft"
            size="icon"
            aria-label="Меню"
            className="lg:hidden rounded-xl"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden shadow-lg">
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
                      ? "bg-primary text-primary-foreground font-bold"
                      : isShop
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "bg-slate-100 text-slate-800"
                  )}
                >
                  {isShop && <ShoppingBag className="size-5" />}
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 grid gap-2">
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <a href={site.phoneHref}>
                <Phone className="size-4 text-primary" /> {site.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg" className="rounded-xl">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                Написать в WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
