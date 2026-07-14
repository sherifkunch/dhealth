import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  bio: string[];
  specialties: string[];
  quote: string;
  reversed?: boolean;
}

export function TeamMember({
  name,
  title,
  imageSrc,
  imageAlt,
  bio,
  specialties,
  quote,
  reversed,
}: TeamMemberProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
      <div className={reversed ? "md:order-2" : "md:order-1"}>
        <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={540}
            height={720}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      <div className={reversed ? "md:order-1" : "md:order-2"}>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{name}</h2>
        <p className="mt-2 text-base font-medium text-primary md:text-lg">{title}</p>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
            Специални интереси
          </p>
          <ul className="mt-4 grid gap-y-2 sm:grid-cols-2">
            {specialties.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-base text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="mt-10 border-l-[3px] border-primary pl-5 text-base italic text-muted-foreground md:text-lg">
          {`„${quote}"`}
        </blockquote>
      </div>
    </div>
  );
}
