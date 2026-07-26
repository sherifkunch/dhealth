import type { PricingCategory } from "@/types";

export const pricing: PricingCategory[] = [
  {
    category: "Консултации и терапия",
    items: [
      { name: "Преглед", priceEUR: 38.36 },
      { name: "Кинезитерапия", priceEUR: 56.26 },
      { name: "Физиотерапия", priceEUR: 30.69 },
      { name: "Остеопатичен масаж за лице", priceEUR: 71.61 },
    ],
  },
  {
    category: "Тренировки",
    items: [
      { name: "Пилатес — единична", priceEUR: 38.36 },
      { name: "Пилатес — 8 тренировки", sessions: "8 тренировки", priceEUR: 286.44 },
      { name: "ЕМС — единична", priceEUR: 38.36 },
      { name: "ЕМС — 8 тренировки", sessions: "8 тренировки", priceEUR: 286.44 },
      { name: "Пилатес + ЕМС комбо", sessions: "4 + 4 тренировки", priceEUR: 286.44 },
    ],
  },
  {
    category: "Антицелулитни процедури",
    items: [
      { name: "Апаратна АЦ — единична", priceEUR: 61.38 },
      { name: "Апаратна АЦ — 8 процедури", sessions: "8 процедури", priceEUR: 450.12 },
      { name: "Апаратна АЦ — 12 процедури", sessions: "12 процедури", priceEUR: 613.81 },
      { name: "Мадеротерапия — единична", priceEUR: 71.61 },
      { name: "Мадеротерапия — 8 процедури", sessions: "8 процедури", priceEUR: 553.84 },
      { name: "Мадеротерапия — 12 процедури", sessions: "12 процедури", priceEUR: 736.57 },
    ],
  },
  {
    category: "Допълнителни процедури",
    items: [
      { name: "Акупунктура — единична", priceEUR: 46.03 },
      { name: "Акупунктура — 10 процедури", sessions: "10 процедури", priceEUR: 409.2 },
      { name: "Пресотерапия", priceEUR: 20.46 },
      { name: "Лимфен масаж", priceEUR: 71.61 },
      { name: "Вендузи", priceEUR: 30.69 },
    ],
  },
];
