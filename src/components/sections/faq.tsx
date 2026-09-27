import { faq } from "@/content/faq";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Частые вопросы"
            subtitle="Не нашли ответ? Позвоните нам — администратор с радостью поможет."
          />
          <Reveal delay={0.1}>
            <a
              href={site.phone.href}
              className="mt-6 inline-block text-2xl font-semibold tracking-tight text-navy tabular-nums transition-colors hover:text-teal"
            >
              {site.phone.display}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <Accordion className="rounded-[2rem] border bg-white px-6 sm:px-8">
            {faq.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="py-6 text-base font-medium text-navy hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[0.97rem] leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
