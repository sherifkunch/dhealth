import type { Procedure } from "@/types";

export const miopunktura: Procedure = {
  id: "miopunktura",
  slug: "miopunktura",
  name: "Миопунктура",
  shortDescription:
    "Тънки игли в мускулните точки на напрежение за отпускане и обезболяване.",
  fullDescription:
    "Миопунктурата прилага тънки игли в мускулните точки на напрежение, предизвиквайки локално мускулно съкращение за отпускане и намаляване на болката. Използва се при мускулни спазми, фибромиалгия, спортни травми и хронична болка.",
  benefits: [
    "Отпускане на мускулни спазми",
    "Намаляване на хронична болка",
    "Подобрена подвижност",
    "Лечение на тригерни точки",
  ],
  duration: "30-45 мин",
  image: "/images/procedures/miopunktura.jpg",
  featured: false,
};
