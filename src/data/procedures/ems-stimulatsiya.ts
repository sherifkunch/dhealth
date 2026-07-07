import type { Procedure } from "@/types";

export const emsStimulatsiya: Procedure = {
  id: "ems-stimulatsiya",
  slug: "ems-stimulatsiya",
  name: "Електромускулна стимулация",
  shortDescription:
    "Слаби електрически сигнали стимулират мускулите за рехабилитация и фитнес.",
  fullDescription:
    "Електромускулната стимулация (ЕМС) доставя слаби електрически сигнали до мускулите, подпомагайки техните съкращения и отпускания. Приложенията включват рехабилитация след травми и фитнес подобрения за увеличена сила и издръжливост.",
  benefits: [
    "Рехабилитация след травми",
    "Увеличена мускулна сила",
    "Подобрена издръжливост",
    "Намаляване на мускулни спазми",
  ],
  duration: "20-30 мин",
  image: "/images/procedures/ems-stimulatsiya.jpg",
  featured: true,
};
