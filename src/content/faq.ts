import { site } from "@/config/site";

/**
 * EDITABLE: FAQ.
 *
 * Answers below only restate verified facts from `src/config/site.ts`.
 * Add clinical questions (pain, warranty, payment options…) only with
 * answers confirmed by the clinic.
 */
export const faq = [
  {
    q: "Как записаться на приём?",
    a: `Позвоните по номеру ${site.phone.display}, напишите в WhatsApp или оставьте заявку в форме на сайте — администратор свяжется с вами, чтобы подобрать удобное время.`,
  },
  {
    q: "Какой график работы клиники?",
    a: `Клиника работает ежедневно, без выходных: ${site.hours.days}, ${site.hours.time}.`,
  },
  {
    q: "Где находится клиника?",
    a: `${site.address.street}, ${site.address.floor}. ${site.address.landmark}, ${site.address.district}, ${site.address.city}. Маршрут можно построить в 2GIS.`,
  },
  {
    q: "Есть ли у клиники лицензия?",
    a: `Да. Лицензия ${site.license.number}, выдана ${site.license.issuer}.`,
  },
  {
    q: "Сколько стоит лечение?",
    a: "Актуальную стоимость услуг уточняйте у администратора по телефону или в WhatsApp.",
  },
  {
    q: "Какие услуги оказывает клиника?",
    a: "TotalDent — частная стоматология, в которой доступны все виды стоматологических услуг. Уточнить, подходит ли вам конкретная услуга, можно у администратора.",
  },
];
