import type { Procedure } from "@/types";

export const elektromuskulnaTerapia: Procedure = {
  id: "elektromuskulna-terapia",
  slug: "elektromuskulna-terapia",
  name: "Електромускулна терапия",
  shortDescription:
    "Клинична електростимулация на мускулите за възстановяване и обезболяване.",
  fullDescription:
    "Електромускулната терапия използва контролирани електрически импулси за целенасочено стимулиране на мускулните влакна с рехабилитационна цел. Методът подпомага възстановяването на мускулния тонус след травма или обездвижване, намалява болката и подобрява невромускулния контрол.",
  benefits: [
    "Възстановяване на мускулния тонус",
    "Намаляване на болката",
    "Подобрен невромускулен контрол",
    "Подпомага рехабилитацията след травма",
  ],
  duration: "20-30 мин",
  image: "/images/procedures/elektromuskulna-terapia/main.jpg",
  gallery: [
    "/images/procedures/elektromuskulna-terapia/YTS_9011_(2048).jpg",
    "/images/procedures/elektromuskulna-terapia/YTS_9026_(2048).jpg",
  ],
  featured: false,
};
