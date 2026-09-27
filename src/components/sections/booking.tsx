import { Clock, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { Accent, SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { WhatsAppIcon } from "@/components/icons";
import { BookingForm } from "@/components/booking/booking-form";

const channels = [
  {
    icon: Phone,
    label: "Телефон",
    value: site.phone.display,
    href: site.phone.href,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Написать сообщение",
    href: site.links.whatsapp,
    external: true,
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: `${site.hours.days}: ${site.hours.time}`,
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: `${site.address.street}, ${site.address.floor}`,
  },
];

export function Booking() {
  return (
    <section id="booking" className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div
        className="pointer-events-none absolute bottom-[-30%] left-[-10%] size-[40rem] rounded-full bg-teal/15 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col">
          <SectionHeading
            tone="light"
            eyebrow="Запись на приём"
            title={
              <>
                Запишитесь на <Accent>удобное</Accent> время
              </>
            }
            subtitle="Оставьте заявку — администратор свяжется с вами, ответит на вопросы и подберёт время визита."
          />

          <Reveal delay={0.1} className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-auto lg:grid-cols-1">
            {channels.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-teal-soft">
                    <Icon className="size-4.5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs text-white/50">{label}</span>
                    <span className="mt-0.5 font-medium text-white">{value}</span>
                  </span>
                </>
              );
              const cls =
                "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors";
              return href ? (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`${cls} hover:border-white/25 hover:bg-white/[0.08]`}
                >
                  {content}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {content}
                </div>
              );
            })}
          </Reveal>
        </div>

        <Reveal delay={0.05} className="rounded-[2rem] bg-white p-6 shadow-lift sm:p-10">
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
