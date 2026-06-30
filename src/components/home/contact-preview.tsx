import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { siteConfig } from "@/data/site-config";

export function ContactPreview() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-[2.5rem]">
          Как да ни намерите
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Свържете се с нас по удобен за вас начин.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a
          href={`tel:${siteConfig.phone}`}
          className="group flex flex-col items-center gap-4 rounded-2xl bg-muted/40 p-8 text-center transition-all hover:bg-primary/5 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold">Телефон</p>
            <p className="mt-1 text-sm text-muted-foreground">{siteConfig.phoneDisplay}</p>
          </div>
        </a>

        <a
          href={`mailto:${siteConfig.email}`}
          className="group flex flex-col items-center gap-4 rounded-2xl bg-muted/40 p-8 text-center transition-all hover:bg-primary/5 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold">Имейл</p>
            <p className="mt-1 text-sm text-muted-foreground">{siteConfig.email}</p>
          </div>
        </a>

        <div className="flex flex-col items-center gap-4 rounded-2xl bg-muted/40 p-8 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold">Адрес</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.address.street}, {siteConfig.address.city}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-2xl bg-muted/40 p-8 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold">Работно време</p>
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
