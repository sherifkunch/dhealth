import type { Procedure } from "@/types";

import { fizioterapia } from "./fizioterapia";
import { kineziterapia } from "./kineziterapia";
import { emsStimulatsiya } from "./ems-stimulatsiya";
import { dalbokaOstsilatsiya } from "./dalboka-ostsilatsiya";
import { tekarTerapia } from "./tekar-terapia";
import { antitselulitniProtseduri } from "./antitselulitni-protseduri";
import { limfenDrenazh } from "./limfen-drenazh";
import { maderoterapia } from "./maderoterapia";
import { miopunktura } from "./miopunktura";
import { emsTrenirovka } from "./ems-trenirovka";
import { presoterapia } from "./presoterapia";
import { osteopatichenMasazh } from "./osteopatichen-masazh";
import { perkusionnaTerapia } from "./perkusionna-terapia";
import { masaj } from "./masaj";
import { lazerterapia } from "./lazerterapia";
import { igloterapia } from "./igloterapia";
import { ergonterapia } from "./ergonterapia";
import { elektromuskulnaTerapia } from "./elektromuskulna-terapia";

export const procedures: Procedure[] = [
  fizioterapia,
  kineziterapia,
  emsStimulatsiya,
  dalbokaOstsilatsiya,
  tekarTerapia,
  antitselulitniProtseduri,
  limfenDrenazh,
  maderoterapia,
  miopunktura,
  emsTrenirovka,
  presoterapia,
  osteopatichenMasazh,
  perkusionnaTerapia,
  masaj,
  lazerterapia,
  igloterapia,
  ergonterapia,
  elektromuskulnaTerapia,
];

export function getProcedureBySlug(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}

export function getFeaturedProcedures(): Procedure[] {
  return procedures.filter((p) => p.featured);
}

export function getAllProcedureSlugs(): string[] {
  return procedures.map((p) => p.slug);
}
