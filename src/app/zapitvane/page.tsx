import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { BookingForm } from "@/components/forms/booking-form";
import { WhatsAppViberButtons } from "@/components/shared/whatsapp-button";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Запазете час",
  description:
    "Запазете час за кинезитерапия или физиотерапия в DHealth София. Онлайн форма, WhatsApp или Viber.",
};

export default function BookingPage() {
  return (
    <>
      <PageHeader
        title="Запазете час"
        description="Попълнете формата или се свържете директно с нас."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-muted" />}>
              <BookingForm />
            </Suspense>
          </div>

          <aside className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Бърза връзка</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Предпочитате да ни пишете директно?
              </p>
              <div className="mt-4">
                <WhatsAppViberButtons />
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Информация</h3>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Телефон:</span>{" "}
                  {siteConfig.phoneDisplay}
                </p>
                <p>
                  <span className="font-medium text-foreground">Работно време:</span>{" "}
                  {siteConfig.workingHours.days}
                </p>
                <p>{siteConfig.workingHours.hours}</p>
              </div>
            </div>

            <div className="rounded-lg bg-primary/5 p-6 text-sm text-muted-foreground">
              <p>
                Ще се свържем с вас в рамките на <strong className="text-foreground">24 часа</strong>{" "}
                за потвърждение на вашия час.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
