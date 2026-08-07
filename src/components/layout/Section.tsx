import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-7xl px-4 py-14 md:py-20 lg:px-8", className)}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-3 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <As className="text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-[2.7rem]">
        {title}
      </As>
      {text && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}
