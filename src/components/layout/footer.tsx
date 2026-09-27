import { navItems, site } from "@/config/site";
import { Logo } from "@/components/logo";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-16 pb-28 text-white/70 sm:pb-10">
      <div className="container-page">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {site.category}. {site.tagline}.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={site.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10 hover:text-white"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={site.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10 hover:text-white"
              >
                <WhatsAppIcon className="size-4" />
              </a>
              <a
                href={site.links.twoGis}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="2GIS"
                className="grid h-10 place-items-center rounded-full border border-white/15 px-3.5 text-xs font-semibold transition-colors hover:bg-white/10 hover:text-white"
              >
                2GIS
              </a>
            </div>
          </div>

          <nav aria-label="Навигация в подвале">
            <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">Разделы</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">Контакты</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a href={site.phone.href} className="font-medium text-white tabular-nums hover:text-teal-soft">
                  {site.phone.display}
                </a>
              </li>
              <li>
                {site.hours.days}: {site.hours.time}
              </li>
              <li>
                {site.address.street}, {site.address.floor}
              </li>
              <li>
                {site.address.district}, {site.address.city}
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">Лицензия</p>
            <p className="mt-5 text-sm leading-relaxed">
              Лицензия {site.license.number}. {site.license.issuer}.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Все права защищены.
          </p>
          <p>Имеются противопоказания. Необходима консультация специалиста.</p>
        </div>
      </div>
    </footer>
  );
}
