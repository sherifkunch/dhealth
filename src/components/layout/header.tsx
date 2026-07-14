"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { mainNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";
import { useMobileNav } from "@/components/layout/mobile-nav-context";

export function Header() {
  const pathname = usePathname();
  const { open, setOpen } = useMobileNav();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        transparent
          ? "border-b border-white/10 bg-transparent"
          : "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Ver2-vertical-full-color.png"
            alt="DHealth"
            width={173}
            height={132}
            className={cn("h-16 w-auto transition-all duration-300", transparent && "brightness-0 invert")}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основна навигация">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                transparent
                  ? pathname === item.href
                    ? "bg-white/15 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                  : pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phone}`}
            className={cn(
              "flex items-center gap-1.5 text-sm transition-colors",
              transparent ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <Button render={<Link href="/zapitvane" />} size="sm">
            Запазете час
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" />}
            className={cn("size-11 lg:hidden", transparent && "text-white hover:bg-white/10")}
            aria-label="Отвори менюто"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Навигация</SheetTitle>
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" onClick={() => setOpen(false)}>
                <Image
                  src="/images/Ver2-vertical-full-color.png"
                  alt="DHealth"
                  width={100}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <nav className="flex flex-col gap-1" aria-label="Мобилна навигация">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent",
                      pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t pt-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </a>
                <div className="mt-3 px-3">
                  <Button
                    render={<Link href="/zapitvane" onClick={() => setOpen(false)} />}
                    className="w-full"
                    size="sm"
                  >
                    Запазете час
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
