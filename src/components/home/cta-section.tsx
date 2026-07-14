import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  href?: string;
  buttonText?: string;
}

export function CTASection({
  title = "Готови ли сте за промяна?",
  description = "Запазете час и започнете пътя към по-добро здраве и самочувствие.",
  href = "/zapitvane",
  buttonText = "Запазете час",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Subtle shine overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-18 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-30">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-[2.5rem]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
          {description}
        </p>
        <div className="mt-10">
          <Button
            render={<Link href={href} />}
            size="lg"
            className="bg-white text-primary shadow-xl shadow-black/20 hover:bg-white/95 hover:shadow-2xl"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
