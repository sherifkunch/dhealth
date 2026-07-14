import {
  Activity,
  Dumbbell,
  HeartPulse,
  Zap,
  Waves,
  Flame,
  Sparkles,
  Droplet,
  Hand,
  Target,
  Wind,
  Smile,
  type LucideIcon,
} from "lucide-react";

export const procedureIcons: Record<string, LucideIcon> = {
  fizioterapia: Activity,
  kineziterapia: Dumbbell,
  "ems-stimulatsiya": Zap,
  "dalboka-ostsilatsiya": Waves,
  "tekar-terapia": Flame,
  "antitselulitni-protseduri": Sparkles,
  "limfen-drenazh": Droplet,
  maderoterapia: Hand,
  miopunktura: Target,
  "ems-trenirovka": HeartPulse,
  presoterapia: Wind,
  "osteopatichen-masazh": Smile,
};

export const defaultProcedureIcon: LucideIcon = Activity;
