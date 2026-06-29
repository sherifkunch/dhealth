import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { siteConfig } from "@/data/site-config";

export function ContactPreview() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Как да ни намерите
        </h2>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex flex-col items-center gap-3 rounded-lg border p-6 text-center transition-colors hover:border-primary/30"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Телефон</p>
            <p className="mt-1 text-sm text-muted-foreground">{siteConfig.phoneDisplay}</p>
          </div>
        </a>

        <a
          href={`mailto:${siteConfig.email}`}
          className="flex flex-col items-center gap-3 rounded-lg border p-6 text-center transition-colors hover:border-primary/30"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Имейл</p>
            <p className="mt-1 text-sm text-muted-foreground">{siteConfig.email}</p>
          </div>
        </a>

        <div className="flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Адрес</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.address.street}, {siteConfig.address.city}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Работно време</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.workingHours.days}
            </p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.workingHours.hours}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
