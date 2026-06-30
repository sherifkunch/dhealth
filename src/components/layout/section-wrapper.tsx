import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-30",
        className
      )}
    >
      {children}
    </section>
  );
}
