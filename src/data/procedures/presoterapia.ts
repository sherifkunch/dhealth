import type { Procedure } from "@/types";

export const presoterapia: Procedure = {
  id: "presoterapia",
  slug: "presoterapia",
  name: "Пресотерапия",
  shortDescription:
    "Стимулиране на кръвоносната и лимфната циркулация чрез контролирано налягане.",
  fullDescription:
    "Пресотерапията е терапевтичен метод, който стимулира циркулацията на кръвта и лимфната течност в тялото чрез контролирано налягане на въздух. Ползите включват подобрено кръвообращение, улеснен лимфен дренаж, мускулна релаксация, намаляване на отоци и болка.",
  benefits: [
    "Подобрено кръвообращение",
    "Лимфен дренаж",
    "Мускулна релаксация",
    "Намаляване на отоци",
  ],
  duration: "30-40 мин",
  image: "/images/procedures/presoterapia/main.jpg",
  featured: false,
};
