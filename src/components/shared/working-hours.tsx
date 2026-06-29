import { Clock } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface WorkingHoursProps {
  compact?: boolean;
}

export function WorkingHours({ compact = false }: WorkingHoursProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4 shrink-0" />
        <span>
          {siteConfig.workingHours.days}, {siteConfig.workingHours.hours}
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-lg border p-6">
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5 text-primary" />
        <h3 className="font-semibold">Работно време</h3>
      </div>
      <div className="mt-3 space-y-1 text-sm text-muted-foreground">
        <p>{siteConfig.workingHours.days}</p>
        <p className="font-medium text-foreground">{siteConfig.workingHours.hours}</p>
        <p>{siteConfig.workingHours.closed} — затворено</p>
      </div>
    </div>
  );
}
