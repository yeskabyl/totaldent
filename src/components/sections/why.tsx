import { CalendarClock, HeartHandshake, Layers, Sofa } from "lucide-react";
import { advantages } from "@/content/placeholders";
import { Accent, SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";

const icons = [HeartHandshake, Layers, CalendarClock, Sofa];

export function Why() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-teal/15 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative">
        <SectionHeading
          tone="light"
          eyebrow="Преимущества"
          title={
            <>
              Почему <Accent>TotalDent</Accent>
            </>
          }
          subtitle="Всё, что важно для спокойного визита к стоматологу."
        />

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {advantages.map((item, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem
                key={item.title}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-teal-soft">
                    <Icon className="size-5.5" strokeWidth={1.6} />
                  </span>
                  <span className="text-sm font-medium text-white/30 tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-10 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-white/65">{item.text}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
