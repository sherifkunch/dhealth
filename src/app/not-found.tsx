import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/section-wrapper";

export default function NotFound() {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center py-32 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">
        Страницата не е намерена
      </p>
      <Button render={<Link href="/" />} className="mt-8">
        Към началната страница
      </Button>
    </SectionWrapper>
  );
}
