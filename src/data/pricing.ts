import type { PricingCategory } from "@/types";

export const pricing: PricingCategory[] = [
  {
    category: "Консултации и терапия",
    items: [
      { name: "Преглед", priceEUR: 35 },
      { name: "Кинезитерапия", priceEUR: 50 },
      { name: "Физиотерапия", priceEUR: 30 },
      { name: "Остеопатичен масаж за лице", priceEUR: 70 },
    ],
  },
  {
    category: "Тренировки",
    items: [
      { name: "Пилатес — единична", priceEUR: 35 },
      { name: "Пилатес — 8 тренировки", sessions: "8 тренировки", priceEUR: 250 },
      { name: "ЕМС — единична", priceEUR: 35 },
      { name: "ЕМС — 8 тренировки", sessions: "8 тренировки", priceEUR: 250 },
      { name: "Пилатес + ЕМС комбо", sessions: "4 + 4 тренировки", priceEUR: 250 },
    ],
  },
  {
    category: "Антицелулитни процедури",
    items: [
      { name: "Апаратна АЦ — единична", priceEUR: 60 },
      { name: "Апаратна АЦ — 8 процедури", sessions: "8 процедури", priceEUR: 450 },
      { name: "Апаратна АЦ — 12 процедури", sessions: "12 процедури", priceEUR: 600 },
      { name: "Мадеротерапия — единична", priceEUR: 70 },
      { name: "Мадеротерапия — 8 процедури", sessions: "8 процедури", priceEUR: 540 },
      { name: "Мадеротерапия — 12 процедури", sessions: "12 процедури", priceEUR: 720 },
    ],
  },
  {
    category: "Допълнителни процедури",
    items: [
      { name: "Акупунктура — единична", priceEUR: 50 },
      { name: "Акупунктура — 10 процедури", sessions: "10 процедури", priceEUR: 450 },
      { name: "Пресотерапия", priceEUR: 30 },
      { name: "Лимфен масаж", priceEUR: 70 },
      { name: "Вендузи", priceEUR: 30 },
      { name: "Кинезиологичен тейп", priceEUR: 20 },
    ],
  },
];
