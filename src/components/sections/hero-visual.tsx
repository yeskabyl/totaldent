"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Star } from "lucide-react";
import { site } from "@/config/site";
import heroImage from "@/assets/images/hero-clinic.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* soft backdrop shape */}
      <div
        className="absolute -inset-x-6 -top-6 bottom-10 -z-10 rounded-[2.75rem] bg-sky/70 sm:-inset-x-10"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease }}
        className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift sm:aspect-[5/5.4] lg:aspect-[4/5]"
      >
        {/* PLACEHOLDER IMAGE — replace src/assets/images/hero-clinic.jpg with a real photo of the clinic */}
        <Image
          src={heroImage}
          alt="Интерьер современного стоматологического кабинета"
          fill
          fetchPriority="high"
          loading="eager"
          placeholder="blur"
          sizes="(min-width: 1024px) 45vw, (min-width: 640px) 36rem, 100vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
      </motion.div>

      {/* Rating card */}
      <motion.a
        href={site.links.twoGis}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.5 },
          y: { duration: 6, delay: 1.1, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -bottom-6 -left-3 flex items-center gap-4 rounded-2xl border border-white/60 bg-white/90 p-4 pr-6 shadow-lift backdrop-blur-md sm:-left-8 sm:p-5 sm:pr-7"
        aria-label={`Рейтинг ${site.rating.value}, ${site.rating.countLabel}`}
      >
        <span className="grid size-12 place-items-center rounded-xl bg-amber-50">
          <Star className="size-6 fill-amber-400 text-amber-400" />
        </span>
        <span className="flex flex-col">
          <span className="text-2xl leading-none font-semibold tracking-tight text-navy">
            {site.rating.value} <span className="text-amber-400">★</span>
          </span>
          <span className="mt-1 text-sm text-muted-foreground">{site.rating.countLabel}</span>
        </span>
      </motion.a>

      {/* Hours card */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.7 },
          y: { duration: 7, delay: 1.3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-8 -right-3 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lift backdrop-blur-md sm:-right-8 sm:p-5"
      >
        <span className="mb-2 flex items-center gap-2 text-xs font-medium tracking-wide text-teal uppercase">
          <Clock className="size-3.5" />
          Ежедневно
        </span>
        <span className="block text-xl font-semibold tracking-tight text-navy tabular-nums">
          {site.hours.open} — {site.hours.close}
        </span>
      </motion.div>
    </div>
  );
}
