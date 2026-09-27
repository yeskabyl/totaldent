import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ServiceLink } from "@/components/booking/service-link";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Услуги"
            title="Все виды стоматологических услуг"
            subtitle="Комплексный подход к здоровью и эстетике вашей улыбки"
          />
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground lg:text-right">
              Подробности о каждой услуге и подходящем вам лечении уточняйте
              у администратора клиники.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4" stagger={0.06}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.slug} className="h-full">
                <ServiceLink
                  service={service.slug}
                  className="group relative flex h-full flex-col rounded-3xl border bg-white p-7 shadow-[0_1px_2px_rgb(15_35_64/0.03)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-sky-deep hover:shadow-lift focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <span className="grid size-13 place-items-center rounded-2xl bg-sky text-navy transition-colors duration-500 group-hover:bg-navy group-hover:text-white">
                    <Icon className="size-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-8 text-lg leading-snug font-semibold tracking-tight text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-navy">
                    Подробнее
                    <ArrowUpRight className="size-4 text-teal transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </ServiceLink>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
