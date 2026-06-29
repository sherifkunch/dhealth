import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { GoogleMap } from "@/components/shared/google-map";
import { WorkingHours } from "@/components/shared/working-hours";
import { WhatsAppViberButtons } from "@/components/shared/whatsapp-button";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Свържете се с DHealth — кинезитерапия и физиотерапия в София. Телефон, имейл, WhatsApp, Viber.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Контакти"
        description="Свържете се с нас за консултация или запазване на час."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Изпратете ни съобщение</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Попълнете формата и ще се свържем с вас в рамките на 24 часа.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Директна връзка</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Предпочитате бърз отговор? Пишете ни директно.
              </p>
              <div className="mt-4">
                <WhatsAppViberButtons />
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Телефон</p>
                  <p className="text-sm text-muted-foreground">{siteConfig.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Имейл</p>
                  <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Адрес</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.address.street}, {siteConfig.address.city}
                  </p>
                </div>
              </div>
            </div>

            <WorkingHours />

            <GoogleMap height="250px" />
          </div>
        </div>
      </div>
    </>
  );
}
