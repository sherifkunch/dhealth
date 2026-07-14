"use client";

import Link from "next/link";
import { useMobileNav } from "@/components/layout/mobile-nav-context";

export function MobileBookingCta() {
  const { open } = useMobileNav();

  if (open) return null;

  return (
    <Link
      href="/zapitvane"
      className="fixed inset-x-4 bottom-[calc(14px+env(safe-area-inset-bottom))] z-50 flex h-14 items-center justify-center rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 sm:hidden"
    >
      Запазете час
    </Link>
  );
}
