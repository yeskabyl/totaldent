import { Star } from "lucide-react";
import { site } from "@/config/site";
import { Stagger, StaggerItem } from "@/components/motion";

/** Verified facts only — see src/config/site.ts. */
const facts = [
  { value: site.rating.value, label: "Рейтинг", star: true },
  { value: String(site.rating.count), label: "Оценок" },
  { value: site.hours.time, label: "Ежедневно" },
  { value: site.name, label: site.category },
];

export function TrustBar() {
  return (
    <section aria-label="Коротко о клинике" className="relative z-10 -mt-4 pb-8 sm:pb-12">
      <div className="container-page">
        <Stagger className="grid grid-cols-2 overflow-hidden rounded-3xl border bg-white shadow-soft lg:grid-cols-4">
          {facts.map((fact, i) => (
            <StaggerItem
              key={fact.label}
              className={[
                "flex flex-col gap-1.5 px-5 py-6 sm:px-8 sm:py-9",
                i % 2 === 1 ? "border-l" : "",
                i >= 2 ? "border-t lg:border-t-0" : "",
                i === 2 ? "lg:border-l" : "",
              ].join(" ")}
            >
              <span className="flex items-center gap-2 text-[1.3rem] leading-none font-semibold tracking-[-0.04em] whitespace-nowrap text-navy tabular-nums min-[400px]:text-[1.5rem] sm:text-[2.2rem]">
                {fact.value}
                {fact.star && (
                  <Star className="size-5 fill-amber-400 text-amber-400 sm:size-6" aria-hidden />
                )}
              </span>
              <span className="text-sm text-muted-foreground">{fact.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
