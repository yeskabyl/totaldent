/**
 * EDITABLE PLACEHOLDER CONTENT
 *
 * Nothing in this file is a confirmed fact about the clinic. Replace each
 * entry with real, clinic-approved information before launch. Leave an array
 * empty to render the section's neutral fallback instead.
 */

import { services } from "./services";

/* ------------------------------------------------------------------ */
/* Doctors                                                             */
/* ------------------------------------------------------------------ */

export type Doctor = {
  name: string;
  role: string;
  /** Path under /public, e.g. "/images/doctors/ivanova.jpg". null → monogram. */
  photo: string | null;
  /** Optional short bio — only confirmed qualifications. */
  bio?: string;
};

/**
 * Leave empty until the clinic confirms names, roles and photos.
 * While empty, the Doctors section shows a neutral "ask the administrator"
 * block instead of invented profiles.
 */
export const doctors: Doctor[] = [
  // Example — uncomment and fill with confirmed data:
  // { name: "Имя Фамилия", role: "Врач-стоматолог", photo: "/images/doctors/name.jpg" },
];

/* ------------------------------------------------------------------ */
/* Prices                                                              */
/* ------------------------------------------------------------------ */

export type PriceRow = {
  name: string;
  /** null → rendered as "Уточняйте". Use a string like "от 10 000 ₸". */
  price: string | null;
};

export const prices: PriceRow[] = services.map((s) => ({
  name: s.title,
  price: null,
}));

/* ------------------------------------------------------------------ */
/* Reviews                                                             */
/* ------------------------------------------------------------------ */

export type Review = {
  author: string;
  text: string;
  /** Where the review was published, e.g. "2GIS". */
  source: string;
  date?: string;
};

/**
 * Only add real reviews, with the author's permission.
 * While empty, the section links to the clinic's reviews on 2GIS.
 */
export const reviews: Review[] = [];

/* ------------------------------------------------------------------ */
/* Why TotalDent                                                       */
/* ------------------------------------------------------------------ */

export const advantages = [
  {
    title: "Профессиональный подход",
    text: "Внимательное отношение к каждому пациенту.",
  },
  {
    title: "Комплексная стоматология",
    text: "Возможность получить различные виды стоматологической помощи в одном месте.",
  },
  {
    title: "Удобное расписание",
    text: "Клиника работает ежедневно с 10:00 до 20:00.",
  },
  {
    title: "Комфорт",
    text: "Современный и спокойный формат посещения стоматолога.",
  },
] as const;
