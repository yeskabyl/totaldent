"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, Star, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, site } from "@/config/site";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navItems.map((item) => item.href.slice(1));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-border/70 bg-ivory/95 shadow-[0_8px_24px_-12px_rgb(15_35_64/0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-ivory/[0.88]"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-18 items-center justify-between gap-6">
        <a href="#top" aria-label="TotalDent — на главную" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-3 py-2 text-[0.85rem] font-medium transition-colors",
                      isActive ? "text-navy" : "text-muted-foreground hover:text-navy"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-teal transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0"
                      )}
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={site.links.twoGis}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 text-[0.82rem] text-muted-foreground transition-colors hover:text-navy 2xl:inline-flex"
          >
            <span className="font-semibold text-navy">{site.rating.value}</span>
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <span>· {site.rating.countLabel}</span>
          </a>

          <a
            href={site.phone.href}
            className="hidden text-[0.9rem] font-semibold tracking-tight text-navy tabular-nums transition-colors hover:text-teal xl:inline"
          >
            {site.phone.display}
          </a>

          <a
            href="#booking"
            className={cn(buttonVariants({ size: "pill" }), "hidden sm:inline-flex")}
          >
            Записаться на приём
          </a>

          <a
            href={site.phone.href}
            aria-label={`Позвонить ${site.phone.display}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-lg" }),
              "rounded-full bg-white xl:hidden"
            )}
          >
            <Phone />
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="rounded-full lg:hidden"
                  aria-label="Открыть меню"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full gap-0 bg-ivory p-0 sm:max-w-sm">
              <div className="flex h-18 items-center border-b px-6">
                <Logo />
              </div>
              <SheetTitle className="sr-only">Меню</SheetTitle>
              <SheetDescription className="sr-only">
                Навигация по сайту TotalDent
              </SheetDescription>

              <nav aria-label="Мобильная навигация" className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="flex flex-col">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-3 py-3 text-lg font-medium tracking-tight transition-colors hover:bg-white",
                          active === item.href.slice(1) ? "text-navy" : "text-foreground/75"
                        )}
                      >
                        {item.label}
                        {active === item.href.slice(1) && (
                          <span className="size-1.5 rounded-full bg-teal" aria-hidden />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-4 border-t bg-white px-6 py-6">
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Star className="size-4 fill-amber-400 text-amber-400" />
                    <b className="text-navy">{site.rating.value}</b> · {site.rating.countLabel}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="size-4 text-teal" />
                    {site.hours.days}: {site.hours.time}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="size-4 text-teal" />
                    {site.address.street}
                  </span>
                </div>
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants({ size: "xl" }), "w-full")}
                >
                  Записаться на приём
                </a>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={site.phone.href}
                    className={cn(buttonVariants({ variant: "outline", size: "pill" }), "px-0")}
                    aria-label="Позвонить"
                  >
                    <Phone />
                  </a>
                  <a
                    href={site.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "pill" }), "px-0")}
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="size-4" />
                  </a>
                  <a
                    href={site.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "pill" }), "px-0")}
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="size-4" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
