import type { Metadata, Viewport } from "next";
import { Onest, Playfair_Display } from "next/font/google";
import { site } from "@/config/site";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  style: ["italic"],
  weight: ["400", "500"],
  display: "swap",
});

const title = `${site.name} — стоматология в Астане`;
const description = `${site.category} ${site.name} в Астане. ${site.tagline}. ${site.address.street}. Ежедневно ${site.hours.time}. Запись: ${site.phone.display}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "стоматология Астана",
    "стоматологическая клиника Астана",
    "стоматолог Астана",
    "TotalDent",
    "Тоталдент",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#fafaf8",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.tagline,
  url: site.url,
  telephone: site.phone.href.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.floor}`,
    addressLocality: site.address.city,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: site.hours.open,
      closes: site.hours.close,
    },
  ],
  sameAs: [site.links.instagram, site.links.twoGis],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${onest.variable} ${playfair.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Перейти к содержимому
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
