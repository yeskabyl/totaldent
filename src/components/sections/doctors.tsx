import Image from "next/image";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import { doctors } from "@/content/placeholders";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ToothIcon, WhatsAppIcon } from "@/components/icons";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export function Doctors() {
  return (
    <section id="doctors" className="bg-sand py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Врачи"
          title="Команда TotalDent"
          subtitle="Профессиональные врачи — рядом с вами на каждом этапе лечения."
        />

        {doctors.length > 0 ? (
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <StaggerItem key={doctor.name} className="overflow-hidden rounded-3xl border bg-white">
                <div className="relative aspect-[4/5] bg-sky">
                  {doctor.photo ? (
                    <Image
                      src={doctor.photo}
                      alt={doctor.name}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                  ) : (
                    <span className="absolute inset-0 grid place-items-center text-5xl font-semibold text-navy/30">
                      {initials(doctor.name)}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-navy">{doctor.name}</h3>
                  <p className="mt-1 text-sm text-teal">{doctor.role}</p>
                  {doctor.bio && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          /* Fallback while doctor profiles are not confirmed — see src/content/placeholders.ts */
          <Reveal className="mt-12 grid overflow-hidden rounded-[2rem] border bg-white lg:mt-16 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-xl leading-snug font-medium tracking-tight text-navy sm:text-2xl">
                Хотите узнать, какой специалист подойдёт именно вам?
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Администратор расскажет о врачах клиники, их специализации и графике приёма,
                а также поможет выбрать удобное время визита.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={site.phone.href} className={cn(buttonVariants({ size: "xl" }))}>
                  <Phone />
                  {site.phone.display}
                </a>
                <a
                  href={site.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "xl" }))}
                >
                  <WhatsAppIcon className="size-4" />
                  Написать в WhatsApp
                </a>
              </div>
            </div>
            <div className="relative flex min-h-72 flex-col justify-between overflow-hidden bg-navy p-8 text-white sm:p-12">
              <ToothIcon
                className="pointer-events-none absolute -right-16 -bottom-20 size-[22rem] text-white/[0.06]"
                strokeWidth={0.6}
              />
              <p className="relative text-xs font-semibold tracking-[0.18em] text-teal-soft/80 uppercase">
                {site.name}
              </p>
              <div className="relative mt-16">
                <p className="text-[2.4rem] leading-none font-semibold tracking-[-0.04em] tabular-nums">
                  {site.hours.time}
                </p>
                <p className="mt-2 text-white/65">Приём ежедневно, без выходных</p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
