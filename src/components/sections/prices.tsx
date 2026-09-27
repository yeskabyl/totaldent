import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, whatsappLink } from "@/config/site";
import { prices } from "@/content/placeholders";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { WhatsAppIcon } from "@/components/icons";

export function Prices() {
  return (
    <section id="prices" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Цены"
            title="Стоимость услуг"
            subtitle="Актуальные цены уточняйте у администратора — по телефону или в WhatsApp. Мы ответим на вопросы и подскажем, с чего начать."
          />
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Здравствуйте! Хочу узнать стоимость услуг в TotalDent.")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "xl" }))}
            >
              <WhatsAppIcon className="size-4" />
              Узнать стоимость
            </a>
            <a
              href={site.phone.href}
              className={cn(buttonVariants({ variant: "outline", size: "xl" }), "bg-white")}
            >
              <Phone />
              Позвонить
            </a>
          </Reveal>
        </div>

        {/* EDITABLE: prices live in src/content/placeholders.ts */}
        <Stagger className="rounded-[2rem] border bg-white p-3 sm:p-4" stagger={0.05}>
          {prices.map((row, i) => (
            <StaggerItem key={row.name}>
              {i > 0 && <div className="mx-4 border-t border-dashed sm:mx-6" aria-hidden />}
              <div className="flex items-center justify-between gap-6 rounded-2xl px-4 py-5 transition-colors hover:bg-ivory sm:px-6">
                <span className="font-medium text-navy">{row.name}</span>
                {row.price ? (
                  <span className="shrink-0 font-semibold text-navy tabular-nums">{row.price}</span>
                ) : (
                  <span className="shrink-0 rounded-full bg-sky px-3 py-1 text-xs font-medium text-navy/70">
                    Уточняйте
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
