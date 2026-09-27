"use client";

import type { ComponentProps } from "react";

export const SERVICE_EVENT = "totaldent:select-service";

/**
 * Anchor to the booking form that also preselects a service in it.
 * Falls back to a plain in-page link if JS hasn't loaded yet.
 */
export function ServiceLink({
  service,
  onClick,
  ...props
}: ComponentProps<"a"> & { service: string }) {
  return (
    <a
      href="#booking"
      onClick={(e) => {
        window.dispatchEvent(new CustomEvent(SERVICE_EVENT, { detail: service }));
        onClick?.(e);
      }}
      {...props}
    />
  );
}
