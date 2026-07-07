import type { Procedure } from "@/types";

export const maderoterapia: Procedure = {
  id: "maderoterapia",
  slug: "maderoterapia",
  name: "Мадеротерапия",
  shortDescription:
    "Масажна терапия с различни дървени прибори за оформяне на тялото.",
  fullDescription:
    "Мадеротерапията е терапия, която включва прилагане на масаж чрез използване на различни дървени прибори. Сеансите продължават приблизително 40 минути. Резултатите се забелязват от третата процедура, а пълните ползи — след 15 сеанса.",
  benefits: [
    "Оформяне на тялото",
    "Намаляване на целулит",
    "Подобрен лимфен дренаж",
    "Стягане на кожата",
  ],
  duration: "40 мин",
  image: "/images/procedures/maderoterapia.jpg",
  featured: false,
};
