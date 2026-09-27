"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";

/** Sticky bottom action bar on phones, shown after the hero. */
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t bg-ivory/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl transition-transform duration-300 sm:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!visible}
    >
      <div className="flex gap-2">
        <a
          href={site.phone.href}
          tabIndex={visible ? 0 : -1}
          aria-label="Позвонить"
          className={cn(buttonVariants({ variant: "outline", size: "icon-lg" }), "size-12 rounded-full bg-white")}
        >
          <Phone />
        </a>
        <a
          href={site.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          aria-label="WhatsApp"
          className={cn(buttonVariants({ variant: "outline", size: "icon-lg" }), "size-12 rounded-full bg-white")}
        >
          <WhatsAppIcon className="size-5" />
        </a>
        <a
          href="#booking"
          tabIndex={visible ? 0 : -1}
          className={cn(buttonVariants({ size: "xl" }), "flex-1")}
        >
          Записаться на приём
        </a>
      </div>
    </div>
  );
}
