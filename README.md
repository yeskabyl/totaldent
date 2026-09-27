# TotalDent — сайт стоматологии

Landing site for **TotalDent**, a private dental clinic in Astana.

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui (Base UI) · Framer Motion · React Hook Form + Zod · Lucide.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Set the production domain in `.env.local` (used for metadata, sitemap, robots, JSON-LD):

```
NEXT_PUBLIC_SITE_URL=https://totaldent.kz
```

## Where content lives

| What | File | Status |
| --- | --- | --- |
| Name, rating, address, hours, phone, links, license | `src/config/site.ts` | **Verified** — single source of truth |
| Service categories + short descriptions | `src/content/services.ts` | Editable — confirm with the clinic |
| Doctors | `src/content/placeholders.ts` → `doctors` | Empty → section shows a neutral "ask the administrator" block |
| Prices | `src/content/placeholders.ts` → `prices` | `price: null` renders as «Уточняйте» |
| Reviews | `src/content/placeholders.ts` → `reviews` | Empty → section links to 2GIS reviews |
| "Why TotalDent" cards | `src/content/placeholders.ts` → `advantages` | Copy from the brief |
| FAQ | `src/content/faq.ts` | Answers restate verified facts only |
| About-section marketing copy | `src/components/sections/about.tsx` | Editable |

No doctors, qualifications, prices, awards, equipment or statistics are invented anywhere on the site.

## Images — replace before launch

`src/assets/images/` holds **stock placeholder photos** (Unsplash), not photos of TotalDent:

- `hero-clinic.jpg` — hero
- `about-clinic.jpg`, `cabinet.jpg` — About section

Replace them with real clinic photos, keeping the same file names (any size, ideally ≥1600px wide). They are statically imported, so Next.js generates blur placeholders automatically.

Doctor photos: put them in `public/images/doctors/` and reference them as `photo: "/images/doctors/name.jpg"`.

## Booking form

`src/components/booking/booking-form.tsx` validates with Zod and, on submit, opens WhatsApp (`wa.me/77072132122`) with a pre-filled message — this works without a backend. To send requests to a CRM or Telegram bot instead, POST the form data from `onSubmit` to a Route Handler (e.g. `src/app/api/booking/route.ts`).

Service cards' «Подробнее» link scrolls to the form and preselects that service.

## Structure

```
src/
  app/                 layout (fonts, metadata, JSON-LD), page, robots, sitemap, icon
  config/site.ts       verified business facts + nav
  content/             editable content (services, placeholders, faq)
  assets/images/       placeholder photos (replace)
  components/
    layout/            header (client), footer, mobile CTA bar (client)
    sections/          page sections — Server Components
    booking/           form + service link (client)
    motion.tsx         Framer Motion wrappers (client)
    ui/                shadcn/ui components
```

Sections are Server Components; only the header, mobile CTA bar, hero visual, booking form and animation wrappers are Client Components. Animations respect `prefers-reduced-motion`.
