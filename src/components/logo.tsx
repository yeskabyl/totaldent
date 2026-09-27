import { cn } from "@/lib/utils";

export function Logo({
  tone = "default",
  className,
}: {
  tone?: "default" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "grid size-9 place-items-center rounded-xl",
          light ? "bg-white/10 text-white" : "bg-navy text-white"
        )}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M7.5 3.5c-2.6 0-4 2-4 4.6 0 2.3 1 3.7 1.6 5.6.6 2 .8 4.1 1.5 5.7.4.9 1.6 1 2 0 .6-1.5.8-3.8 2-4.9.8-.7 2-.7 2.8 0 1.2 1.1 1.4 3.4 2 4.9.4 1 1.6.9 2 0 .7-1.6.9-3.7 1.5-5.7.6-1.9 1.6-3.3 1.6-5.6 0-2.6-1.4-4.6-4-4.6-1.8 0-2.6 1-4.5 1s-2.7-1-4.5-1Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 8.5c.8.5 1.6.7 2.5.7s1.7-.2 2.5-.7"
            stroke="var(--teal)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={cn(
          "text-[1.3rem] font-semibold tracking-[-0.04em]",
          light ? "text-white" : "text-navy"
        )}
      >
        Total<span className={light ? "text-teal-soft" : "text-teal"}>Dent</span>
      </span>
    </span>
  );
}
