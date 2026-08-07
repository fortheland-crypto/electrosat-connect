import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { nav, site, waLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                pathname === item.to && "bg-secondary text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:text-primary md:flex"
          >
            <Phone className="size-4" />
            {site.phoneDisplay}
          </a>
          <Button asChild variant="whatsapp" size="lg" className="hidden sm:inline-flex">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button
            variant="soft"
            size="icon"
            aria-label="Меню"
            className="xl:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card/95 px-4 py-3 xl:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium text-muted-foreground",
                  pathname === item.to && "bg-secondary text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 grid gap-2">
            <Button asChild variant="soft" size="lg">
              <a href={site.phoneHref}>
                <Phone /> {site.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
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
