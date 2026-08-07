import { Section, SectionHeading } from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/faq";

export function FaqSection() {
  return (
    <Section id="faq">
      <SectionHeading eyebrow="FAQ" title="Частые вопросы" />
      <Accordion type="single" collapsible className="mt-8 max-w-3xl">
        {faq.map((item, i) => (
          <AccordionItem key={item.question} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
