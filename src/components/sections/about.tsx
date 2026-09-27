import Image from "next/image";
import { ArrowRight, Clock, FileBadge, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { Accent, Eyebrow } from "@/components/section-heading";
import aboutImage from "@/assets/images/about-clinic.jpg";
import cabinetImage from "@/assets/images/cabinet.jpg";

const facts = [
  {
    icon: MapPin,
    label: "Адрес",
    value: `${site.address.street}, ${site.address.floor}`,
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: `${site.hours.days}: ${site.hours.time}`,
  },
  {
    icon: FileBadge,
    label: "Лицензия",
    value: site.license.number,
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative pr-8 pb-14 sm:pr-16">
          {/* PLACEHOLDER IMAGES — replace with real photos of the clinic */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src={aboutImage}
              alt="Светлый кабинет стоматологической клиники"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-0 aspect-[4/3] w-[48%] overflow-hidden rounded-3xl border-[6px] border-background shadow-lift">
            <Image
              src={cabinetImage}
              alt="Стоматологическое кресло"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>О клинике</Eyebrow>
            <h2 className="mt-5 text-[2rem] leading-[1.08] font-semibold tracking-[-0.03em] text-balance text-navy sm:text-[2.6rem] lg:text-[3rem]">
              Стоматология, в которую <Accent>спокойно</Accent> приходить
            </h2>
          </Reveal>

          {/* EDITABLE: marketing copy — adjust to the clinic's own voice. */}
          <Reveal delay={0.08} className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
            <p>
              {site.name} — {site.category.toLowerCase()} в Астане. Мы оказываем все виды
              стоматологических услуг и стремимся, чтобы каждый визит был понятным,
              комфортным и спокойным.
            </p>
            <p>
              Для нас важно внимательное отношение к каждому пациенту: мы объясняем,
              что происходит, отвечаем на вопросы и подбираем удобное время приёма.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <dl className="mt-10 divide-y rounded-3xl border bg-white">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 px-6 py-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal">
                    <Icon className="size-4.5" />
                  </span>
                  <div>
                    <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {label}
                    </dt>
                    <dd className="mt-1 font-medium text-navy">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.22} className="mt-8">
            <a href="#booking" className={cn(buttonVariants({ size: "xl" }), "group")}>
              Записаться на консультацию
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
