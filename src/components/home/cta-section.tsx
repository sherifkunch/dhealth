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
    <section className="bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          {description}
        </p>
        <div className="mt-8">
          <Button render={<Link href={href} />} size="lg">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
