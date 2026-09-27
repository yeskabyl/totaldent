/**
 * Verified business information for TotalDent.
 *
 * Only confirmed facts live here. Anything unconfirmed (doctors, prices,
 * reviews, service details) lives in `src/content/*` as editable placeholders.
 */
export const site = {
  name: "TotalDent",
  category: "Частная стоматология",
  tagline: "Все виды стоматологических услуг. Профессиональные врачи",
  // `||` (not `??`) so an empty env var on the host falls back too.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://totaldent.kz",

  rating: {
    value: "5.0",
    count: 436,
    countLabel: "436 оценок",
  },

  address: {
    street: "Проспект Бауыржан Момышулы, 14",
    floor: "1 этаж",
    landmark: "Юго-Восток (правая сторона)",
    district: "Алматы район",
    city: "Астана",
    country: "KZ",
  },

  hours: {
    days: "Пн — Вс",
    time: "10:00–20:00",
    open: "10:00",
    close: "20:00",
  },

  phone: {
    display: "+7 707 213 21 22",
    href: "tel:+77072132122",
  },

  links: {
    whatsapp: "https://wa.me/77072132122",
    instagram: "https://instagram.com/totaldent.kz",
    instagramHandle: "@totaldent.kz",
    twoGis: "https://2gis.kz/astana/firm/70000001082596625",
  },

  license: {
    number: "№22010419",
    issuer:
      "РГУ «Департамент Комитета медицинского и фармацевтического контроля Министерства здравоохранения Республики Казахстан по городу Нур-Султан»",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.floor}, ${site.address.city}`;

export const navItems = [
  { label: "Главная", href: "#top" },
  { label: "Услуги", href: "#services" },
  { label: "О клинике", href: "#about" },
  { label: "Врачи", href: "#doctors" },
  { label: "Цены", href: "#prices" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
] as const;

export function whatsappLink(message?: string) {
  if (!message) return site.links.whatsapp;
  return `${site.links.whatsapp}?text=${encodeURIComponent(message)}`;
}
