import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
};

export function Eyebrow({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase",
        tone === "light" ? "text-teal-soft/80" : "text-teal",
        className
      )}
    >
      <span className="h-px w-6 bg-current opacity-60" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "default",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "text-[2rem] leading-[1.08] font-semibold tracking-[-0.03em] text-balance sm:text-[2.6rem] lg:text-[3rem]",
          tone === "light" ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base leading-relaxed text-pretty sm:text-lg",
            tone === "light" ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/** Serif italic accent for a word inside a headline. */
export function Accent({ children }: { children: ReactNode }) {
  return (
    <span className="font-serif font-normal tracking-[-0.01em] text-teal italic">
      {children}
    </span>
  );
}
