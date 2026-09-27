import { ArrowUpRight, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

function MapArt() {
  return (
    <svg
      viewBox="0 0 600 420"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full"
      aria-hidden
    >
      <rect width="600" height="420" fill="var(--sky)" />
      <g fill="none" stroke="white" strokeLinecap="round">
        <path d="M-20 300 C 120 260, 220 330, 340 250 S 540 170, 640 210" strokeWidth="26" />
        <path d="M180 -20 L 250 440" strokeWidth="14" />
        <path d="M420 -20 C 400 120, 470 260, 440 440" strokeWidth="10" />
        <path d="M-20 110 L 640 150" strokeWidth="8" />
        <path d="M-20 380 L 640 350" strokeWidth="6" />
        <path d="M520 -20 L 560 440" strokeWidth="5" />
        <path d="M60 -20 L 90 440" strokeWidth="5" />
      </g>
      <g fill="var(--sky-deep)" opacity="0.55">
        <rect x="270" y="170" width="120" height="60" rx="10" />
        <rect x="100" y="150" width="60" height="90" rx="10" />
        <rect x="460" y="40" width="40" height="80" rx="8" />
        <rect x="290" y="30" width="90" height="70" rx="10" />
        <rect x="110" y="330" width="50" height="40" rx="8" />
      </g>
    </svg>
  );
}

export function Contacts() {
  const rows = [
    {
      icon: MapPin,
      title: site.address.street,
      text: `${site.address.floor} · ${site.address.landmark}, ${site.address.district}, ${site.address.city}`,
    },
    {
      icon: Clock,
      title: `${site.hours.days}: ${site.hours.time}`,
      text: "Без выходных",
    },
    {
      icon: Phone,
      title: site.phone.display,
      text: "Запись и консультация",
      href: site.phone.href,
    },
  ];

  return (
    <section id="contacts" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Контакты" title="Как нас найти" />

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1fr_1.25fr]">
          <Reveal className="flex flex-col rounded-[2rem] border bg-ivory p-7 sm:p-10">
            <ul className="space-y-7">
              {rows.map(({ icon: Icon, title, text, href }) => (
                <li key={title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-teal shadow-soft">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    {href ? (
                      <a href={href} className="text-lg font-semibold tracking-tight text-navy tabular-nums hover:text-teal">
                        {title}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold tracking-tight text-navy">{title}</p>
                    )}
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3 pt-2 lg:mt-auto">
              <a
                href={site.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "pill" }))}
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
              <a
                href={site.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "pill" }), "bg-white")}
              >
                <InstagramIcon className="size-4" />
                Instagram
              </a>
              <a
                href={site.links.twoGis}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "pill" }), "bg-white")}
              >
                2GIS
                <ArrowUpRight />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <a
              href={site.links.twoGis}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-80 overflow-hidden rounded-[2rem] border sm:min-h-[26rem] lg:h-full"
              aria-label="Открыть TotalDent на карте 2GIS"
            >
              <MapArt />
              <span className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
                <span className="rounded-2xl bg-navy px-4 py-2.5 text-sm font-medium whitespace-nowrap text-white shadow-lift">
                  {site.name} · {site.address.street.replace("Проспект ", "пр. ")}
                </span>
                <span className="-mt-1.5 size-3 rotate-45 bg-navy" />
                <span className="relative mt-1 grid size-4 place-items-center">
                  <span className="absolute size-8 animate-ping rounded-full bg-teal/30" />
                  <span className="size-4 rounded-full border-[3px] border-white bg-teal shadow" />
                </span>
              </span>
              <span className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-3 rounded-2xl bg-white/95 p-4 shadow-soft backdrop-blur sm:right-6 sm:bottom-6 sm:left-auto">
                <span className="text-sm">
                  <span className="block font-medium text-navy">Построить маршрут</span>
                  <span className="text-muted-foreground">Открыть в 2GIS</span>
                </span>
                <span className="grid size-10 place-items-center rounded-full bg-navy text-white transition-transform group-hover:scale-105">
                  <Navigation className="size-4" />
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
