"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ViberIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.537 6.681.46 9.724c-.076 3.043-.164 8.754 5.36 10.282l.006.001-.004 2.37s-.037.958.595 1.152c.765.237 1.213-.49 1.943-1.272.4-.43.953-1.06 1.373-1.543 3.783.317 6.691-.41 7.022-.52.767-.254 5.1-.804 5.807-6.558.731-5.928-.348-9.674-2.289-11.373l.002-.001c-.555-.488-2.782-2.16-7.702-2.23-.06 0-.12-.003-.18-.003l.005-.027zm.05 1.802c.067 0 .133.003.198.004 4.265.06 6.217 1.378 6.698 1.794 1.645 1.44 2.564 4.726 1.938 9.836-.595 4.845-4.157 5.146-4.814 5.363-.276.092-2.829.72-5.985.539 0 0-2.37 2.86-3.112 3.607-.116.117-.256.166-.348.143-.128-.033-.163-.187-.162-.414l.024-3.917c-.002 0-.003 0-.004-.002-4.643-1.284-4.378-6.178-4.313-8.683.065-2.506.673-4.637 2.122-6.076 1.99-1.752 5.47-2.15 7.46-2.194h.298z" />
      <path d="M12.607 4.258c-.106 0-.192.088-.19.194a.19.19 0 00.193.188c1.037.012 2.016.424 2.756 1.163.486.486.836 1.088 1.016 1.744a.192.192 0 00.232.14.191.191 0 00.14-.23 4.534 4.534 0 00-1.1-1.889 4.528 4.528 0 00-2.987-1.26c-.02-.003-.04-.05-.06-.05zm-1.5 1.014a.386.386 0 01.074.008l.748.172c.158.036.258.186.234.346a.3.3 0 01-.292.249.276.276 0 01-.064-.007l-.748-.172c-.158-.036-.258-.186-.234-.346a.295.295 0 01.282-.25z" />
    </svg>
  );
}

export function WhatsAppViberButtons() {
  return (
    <div className="flex gap-3">
      <a
        href={siteConfig.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp
      </a>
      <a
        href={siteConfig.social.viber}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#7360F2] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        <ViberIcon className="h-5 w-5" />
        Viber
      </a>
    </div>
  );
}

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <a
      href={siteConfig.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Пишете ни в WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110",
        isHome &&
          "max-sm:bottom-[calc(84px+env(safe-area-inset-bottom))] max-sm:right-[18px] max-sm:h-[52px] max-sm:w-[52px]"
      )}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
