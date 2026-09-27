import type { ComponentType, SVGProps } from "react";
import {
  AlignHorizontalDistributeCenter,
  Baby,
  Crown,
  Sparkles,
  Syringe,
  ToothbrushSparkles,
} from "lucide-react";
import { ImplantIcon, ToothIcon } from "@/components/icons";

/**
 * EDITABLE: service categories.
 *
 * These are presentation categories, not confirmed claims about specific
 * procedures. Confirm the list and descriptions with the clinic before launch,
 * and remove or rename anything the clinic does not offer.
 */
export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const services: Service[] = [
  {
    slug: "treatment",
    title: "Лечение зубов",
    description: "Современный подход к восстановлению здоровья зубов.",
    icon: ToothIcon,
  },
  {
    slug: "hygiene",
    title: "Профессиональная гигиена",
    description: "Бережный уход за зубами и дёснами для здоровой улыбки.",
    icon: ToothbrushSparkles,
  },
  {
    slug: "implantation",
    title: "Имплантация",
    description: "Восстановление утраченных зубов — подробности на консультации.",
    icon: ImplantIcon,
  },
  {
    slug: "prosthetics",
    title: "Протезирование",
    description: "Восстановление функции и эстетики зубного ряда.",
    icon: Crown,
  },
  {
    slug: "orthodontics",
    title: "Ортодонтия",
    description: "Коррекция прикуса и положения зубов.",
    icon: AlignHorizontalDistributeCenter,
  },
  {
    slug: "aesthetic",
    title: "Эстетическая стоматология",
    description: "Внимание к естественной красоте и гармонии улыбки.",
    icon: Sparkles,
  },
  {
    slug: "surgery",
    title: "Хирургическая стоматология",
    description: "Хирургические вмешательства с заботой о вашем комфорте.",
    icon: Syringe,
  },
  {
    slug: "kids",
    title: "Детская стоматология",
    description: "Спокойное и доброжелательное отношение к маленьким пациентам.",
    icon: Baby,
  },
];

export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "consultation", label: "Консультация / не знаю" },
];
