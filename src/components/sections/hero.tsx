import { ArrowRight, Check, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { Accent, Eyebrow } from "@/components/section-heading";
import { HeroVisual } from "./hero-visual";

const trust = [
  `${site.rating.value} рейтинг`,
  site.rating.countLabel,
  `Работаем ежедневно ${site.hours.time}`,
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28"
    >
      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-20">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>TotalDent · Стоматология в Астане</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.045em] text-balance text-navy sm:text-6xl lg:text-[4.4rem]">
              Забота о вашей <Accent>улыбке</Accent> начинается здесь
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-lg leading-snug font-medium tracking-tight text-navy/85 sm:text-xl">
              Все виды стоматологических услуг в современной клинике Астаны
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              Профессиональная стоматологическая помощь, внимательное отношение и комфорт
              на каждом этапе лечения.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#booking" className={cn(buttonVariants({ size: "xl" }), "group")}>
              Записаться на приём
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.phone.href}
              className={cn(buttonVariants({ variant: "outline", size: "xl" }), "bg-white")}
            >
              <Phone />
              Позвонить
            </a>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/80">
              {trust.map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-teal-soft text-teal">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
