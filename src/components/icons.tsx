import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function ToothIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7.5 3.5c-2.6 0-4 2-4 4.6 0 2.3 1 3.7 1.6 5.6.6 2 .8 4.1 1.5 5.7.4.9 1.6 1 2 0 .6-1.5.8-3.8 2-4.9.8-.7 2-.7 2.8 0 1.2 1.1 1.4 3.4 2 4.9.4 1 1.6.9 2 0 .7-1.6.9-3.7 1.5-5.7.6-1.9 1.6-3.3 1.6-5.6 0-2.6-1.4-4.6-4-4.6-1.8 0-2.6 1-4.5 1s-2.7-1-4.5-1Z" />
    </svg>
  );
}

export function ImplantIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3.5h10c.8 0 1.4.8 1.2 1.6l-.6 2.8c-.2.6-.7 1.1-1.4 1.1H7.8c-.7 0-1.2-.5-1.4-1.1l-.6-2.8C5.6 4.3 6.2 3.5 7 3.5Z" />
      <path d="M9.5 9v2.5M14.5 9v2.5" />
      <path d="M8.5 12.5h7M9 15h6M9.5 17.5h5M10.5 20h3" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4l-4.5 1.1Z" />
      <path d="M9 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.6l-.5.6c-.1.2-.1.4 0 .6.5.9 1.3 1.7 2.3 2.2.2.1.4.1.6-.1l.6-.6c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5v.4c0 .4-.2.8-.6 1-.7.4-1.6.5-2.6.1-2.1-.8-3.8-2.5-4.6-4.6-.3-1-.3-1.9 0-2.4Z" />
    </svg>
  );
}
