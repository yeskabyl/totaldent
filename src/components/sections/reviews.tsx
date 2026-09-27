import { ArrowUpRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import { reviews } from "@/content/placeholders";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { InstagramIcon } from "@/components/icons";

function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("flex gap-1", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Отзывы"
          title="Что говорят пациенты"
          subtitle="Мы ценим каждое мнение. Читайте отзывы о клинике и делитесь своими впечатлениями."
        />

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="flex flex-col justify-between rounded-[2rem] bg-navy p-8 text-white sm:p-10">
            <div>
              <Stars />
              <p className="mt-6 text-[4.5rem] leading-none font-semibold tracking-[-0.05em] tabular-nums sm:text-[5.5rem]">
                {site.rating.value}
              </p>
              <p className="mt-3 text-lg text-white/70">{site.rating.countLabel}</p>
            </div>
            <a
              href={site.links.twoGis}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "light", size: "xl" }), "group mt-10 self-start")}
            >
              Читать отзывы в 2GIS
              <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          {reviews.length > 0 ? (
            <Stagger className="grid gap-5 sm:grid-cols-2">
              {reviews.slice(0, 4).map((review) => (
                <StaggerItem key={review.author + review.text.slice(0, 16)} className="flex flex-col rounded-3xl border bg-ivory p-7">
                  <Quote className="size-6 text-teal" />
                  <p className="mt-4 flex-1 leading-relaxed text-foreground/85">{review.text}</p>
                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="font-medium text-navy">{review.author}</span>
                    <span className="text-muted-foreground">
                      {review.source}
                      {review.date ? ` · ${review.date}` : ""}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            /* Fallback while no approved reviews are added — see src/content/placeholders.ts */
            <Stagger className="grid gap-5 sm:grid-cols-2">
              <StaggerItem className="flex flex-col rounded-3xl border bg-ivory p-7 sm:p-8">
                <Quote className="size-7 text-teal" />
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-navy">
                  Уже были у нас?
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">
                  Расскажите о своём визите в 2GIS — ваш отзыв поможет другим пациентам
                  сделать выбор, а нам — становиться лучше.
                </p>
                <a
                  href={site.links.twoGis}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-navy"
                >
                  Оставить отзыв
                  <ArrowUpRight className="size-4 text-teal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </StaggerItem>
              <StaggerItem className="flex flex-col rounded-3xl border bg-ivory p-7 sm:p-8">
                <InstagramIcon className="size-7 text-teal" />
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-navy">
                  Мы в Instagram
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">
                  Новости клиники и полезные материалы об уходе за улыбкой.
                </p>
                <a
                  href={site.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-navy"
                >
                  {site.links.instagramHandle}
                  <ArrowUpRight className="size-4 text-teal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </StaggerItem>
            </Stagger>
          )}
        </div>
      </div>
    </section>
  );
}
