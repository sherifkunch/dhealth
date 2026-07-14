import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Separator } from "@/components/ui/separator";

const featuredProcedures = [
  { label: "Физиотерапия", href: "/protseduri/fizioterapia" },
  { label: "Кинезитерапия", href: "/protseduri/kineziterapia" },
  { label: "Масаж", href: "/protseduri/masaj" },
  { label: "ЕМС тренировки", href: "/protseduri/ems-trenirovki" },
  { label: "Текар терапия", href: "/protseduri/tekar-terapiya" },
  { label: "Всички процедури", href: "/protseduri" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-blue-900">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 — Brand */}
          <div>
            <Image
              src="/images/Ver2-vertical-full-color.png"
              alt="DHealth"
              width={120}
              height={48}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Персонализирани програми за възстановяване, рехабилитация и
              подобряване на качеството на живот.
            </p>
            <Link
              href="/zapitvane"
              className="mt-5 inline-flex items-center text-sm font-medium text-white hover:text-white/80"
            >
              Запазете час →
            </Link>
          </div>

          {/* Column 2 — Procedures */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45">
              Процедури
            </h3>
            <nav className="mt-4 flex flex-col gap-2.5" aria-label="Процедури в долния колонтитул">
              {featuredProcedures.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45">
              Контакти
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-start gap-2 text-sm text-white/65 hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-2 text-sm text-white/65 hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-white/65 hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.address.street}, {siteConfig.address.city}</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-white/65">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <div>{siteConfig.workingHours.days}</div>
                  <div>{siteConfig.workingHours.hours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 — Social & Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45">
              Последвайте ни
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/65 transition-colors hover:border-white/30 hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/65 transition-colors hover:border-white/30 hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>

            <h3 className="mt-8 text-xs font-semibold uppercase tracking-widest text-white/45">
              Навигация
            </h3>
            <nav className="mt-4 flex flex-col gap-2.5" aria-label="Навигация в долния колонтитул">
              {[
                { label: "За нас", href: "/za-nas" },
                { label: "Цени", href: "/tseni" },
                { label: "Блог", href: "/blog" },
                { label: "Отзиви", href: "/otzivi" },
                { label: "Контакти", href: "/kontakti" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-10 bg-white/8" />

        <div className="flex flex-col items-center justify-between gap-2 text-xs text-white/35 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Всички права запазени.
          </p>
          <p>{siteConfig.owner.name} — {siteConfig.owner.title}</p>
        </div>
      </div>
    </footer>
  );
}
