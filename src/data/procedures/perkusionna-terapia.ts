import type { Procedure } from "@/types";

export const perkusionnaTerapia: Procedure = {
  id: "perkusionna-terapia",
  slug: "perkusionna-terapia",
  name: "Перкусионна терапия",
  shortDescription:
    "Дълбокотъканна перкусионна терапия за бързо мускулно възстановяване.",
  fullDescription:
    "Перкусионната терапия използва високочестотни, контролирани удари, които проникват дълбоко в мускулната тъкан. Методът ускорява кръвообращението, отпуска напрегнати мускулни влакна и скъсява времето за възстановяване след тренировка или физическо натоварване.",
  benefits: [
    "Бързо мускулно възстановяване",
    "Намаляване на напрежението",
    "Подобрено кръвообращение",
    "Облекчаване на болезнени точки",
  ],
  duration: "15-30 мин",
  image: "/images/procedures/perkusionna-terapia/main.jpg",
  gallery: [
    "/images/procedures/perkusionna-terapia/YTS_9070_(2048).jpg",
    "/images/procedures/perkusionna-terapia/YTS_9075_(2048).jpg",
    "/images/procedures/perkusionna-terapia/YTS_9080_(2048).jpg",
  ],
  featured: false,
};
