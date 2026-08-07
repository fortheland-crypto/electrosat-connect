import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { waLink } from "@/config/site";
import { serviceTypes } from "@/data/services";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80, "Слишком длинное имя"),
  phone: z
    .string()
    .trim()
    .min(6, "Укажите телефон")
    .max(30, "Слишком длинный номер")
    .regex(/^[\d\s+()-]+$/, "Телефон может содержать только цифры и + ( ) -"),
  service: z.enum(serviceTypes),
  comment: z.string().trim().max(1000, "Не более 1000 символов").optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

/**
 * Отправка заявки. Сейчас заявка передаётся в WhatsApp мастеру.
 * Позже здесь можно подключить backend (server function / Supabase),
 * не меняя саму форму.
 */
async function submitLead(data: LeadInput) {
  const message = [
    "Новая заявка с сайта ElectroSat",
    `Имя: ${data.name}`,
    `Телефон: ${data.phone}`,
    `Услуга: ${data.service}`,
    data.comment ? `Комментарий: ${data.comment}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  window.open(waLink(message), "_blank", "noopener,noreferrer");
}

export function LeadForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = leadSchema.safeParse({
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service: String(fd.get("service") ?? ""),
      comment: String(fd.get("comment") ?? ""),
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Проверьте заполнение формы");
      return;
    }

    setErrors({});
    setPending(true);
    try {
      await submitLead(parsed.data);
      toast.success("Заявка сформирована — отправьте её в WhatsApp");
      form.reset();
    } finally {
      setPending(false);
    }
  }

  return (
    <Section id="zayavka">
      <div className="surface-card grid gap-8 rounded-3xl border border-border p-6 md:p-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Нужен мастер?</h2>
          <p className="mt-4 text-muted-foreground">
            Оставьте заявку — уточним детали, подскажем по оборудованию и
            согласуем время выезда. Работаем в Сатпаеве и Жезказгане.
          </p>
          <div className="mt-6 rounded-2xl border border-whatsapp/30 bg-whatsapp/10 p-5">
            <p className="text-sm font-semibold">
              Или напишите нам прямо в WhatsApp
            </p>
            <Button asChild variant="whatsapp" size="lg" className="mt-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Открыть WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4" noValidate>
          <div className="grid gap-2">
            <Label htmlFor="lead-name">Имя</Label>
            <Input id="lead-name" name="name" maxLength={80} placeholder="Ваше имя" />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lead-phone">Телефон</Label>
            <Input
              id="lead-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              maxLength={30}
              placeholder="+7 ___ ___ __ __"
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lead-service">Тип услуги</Label>
            <select
              id="lead-service"
              name="service"
              defaultValue={serviceTypes[0]}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {serviceTypes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-xs text-destructive">{errors.service}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lead-comment">Комментарий</Label>
            <Textarea
              id="lead-comment"
              name="comment"
              rows={4}
              maxLength={1000}
              placeholder="Адрес, что нужно сделать, удобное время"
            />
            {errors.comment && (
              <p className="text-xs text-destructive">{errors.comment}</p>
            )}
          </div>

          <Button type="submit" variant="hero" size="xl" disabled={pending}>
            {pending ? "Отправляем…" : "Отправить заявку"}
          </Button>
        </form>
      </div>
    </Section>
  );
}
