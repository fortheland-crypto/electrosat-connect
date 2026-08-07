import { Link } from "@tanstack/react-router";
import { Radio, ShieldCheck } from "lucide-react";

interface LogoProps {
  showSubtitle?: boolean;
  className?: string;
}

export function Logo({ showSubtitle = true, className }: LogoProps) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className ?? ""}`}>
      {/* Icon Badge */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
        <Radio className="size-5 stroke-[2.2]" />
        <ShieldCheck className="absolute -bottom-1 -right-1 size-4 rounded-full bg-white p-0.5 text-primary stroke-[2.5] shadow-xs" />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-0.5 font-display text-xl font-extrabold tracking-tight leading-none text-slate-900">
          <span>Electro</span>
          <span className="text-primary">Sat</span>
          <span className="ml-1 h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
        </div>
        {showSubtitle && (
          <span className="text-[11px] font-medium tracking-wide text-slate-500">
            Сатпаев • Жезказган
          </span>
        )}
      </div>
    </Link>
  );
}
