import type { Procedure } from "@/types";

export const lazerterapia: Procedure = {
  id: "lazerterapia",
  slug: "lazerterapia",
  name: "Лазер терапия",
  shortDescription:
    "Нискоинтензивна лазерна терапия за облекчаване на болка и тъканно възстановяване.",
  fullDescription:
    "Лазерната терапия използва концентрирана светлинна енергия с определена дължина на вълната, която прониква в тъканите и стимулира клетъчните процеси на възстановяване. Методът е неинвазивен и безболезнен, намалява възпалението и ускорява оздравителните процеси.",
  benefits: [
    "Намаляване на възпалението",
    "Облекчаване на болка",
    "Ускорено тъканно възстановяване",
    "Неинвазивна процедура",
  ],
  duration: "10-20 мин",
  image: "/images/procedures/lazerterapia/main.jpg",
  gallery: [
    "/images/procedures/lazerterapia/YTS_8991_(2048).jpg",
    "/images/procedures/lazerterapia/YTS_8997_(2048).jpg",
  ],
  featured: false,
};
