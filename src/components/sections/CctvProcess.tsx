import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { waLink } from "@/config/site";
import { cctvObjects, cctvProcess } from "@/data/services";

export function CctvProcess() {
  return (
    <Section id="videonablyudenie" className="grid-glow rounded-3xl">
      <SectionHeading
        eyebrow="Видеонаблюдение"
        title="Видеонаблюдение под ключ по монтажу и настройке"
        text="Поможем определить оптимальное расположение камер, проложим кабель, подключим оборудование и настроим просмотр камер через телефон."
      />

      <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {cctvProcess.map((step, i) => (
          <li
            key={step.title}
            className="surface-card relative rounded-2xl border border-border p-5"
          >
            <span className="font-display text-3xl font-bold text-primary/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-base font-bold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <span className="text-sm text-muted-foreground">Работаем на объектах:</span>
        {cctvObjects.map((o) => (
          <span
            key={o}
            className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium"
          >
            {o}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <Button asChild variant="hero" size="xl">
          <a
            href={waLink("Здравствуйте! Нужна консультация по видеонаблюдению.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Получить консультацию
          </a>
        </Button>
      </div>
    </Section>
  );
}
