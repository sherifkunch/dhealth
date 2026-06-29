import type { PricingCategory } from "@/types";

export const pricing: PricingCategory[] = [
  {
    category: "Консултации и терапия",
    items: [
      { name: "Преглед", priceBGN: 75, priceEUR: 38.36 },
      { name: "Кинезитерапия", priceBGN: 110, priceEUR: 56.26 },
      { name: "Физиотерапия", priceBGN: 60, priceEUR: 30.69 },
      { name: "Остеопатичен масаж за лице", priceBGN: 140, priceEUR: 71.61 },
    ],
  },
  {
    category: "Тренировки",
    items: [
      { name: "Пилатес — единична", priceBGN: 75, priceEUR: 38.36 },
      { name: "Пилатес — 8 тренировки", sessions: "8 тренировки", priceBGN: 560, priceEUR: 286.44 },
      { name: "ЕМС — единична", priceBGN: 75, priceEUR: 38.36 },
      { name: "ЕМС — 8 тренировки", sessions: "8 тренировки", priceBGN: 560, priceEUR: 286.44 },
      { name: "Пилатес + ЕМС комбо", sessions: "4 + 4 тренировки", priceBGN: 560, priceEUR: 286.44 },
    ],
  },
  {
    category: "Антицелулитни процедури",
    items: [
      { name: "Апаратна АЦ — единична", priceBGN: 120, priceEUR: 61.38 },
      { name: "Апаратна АЦ — 8 процедури", sessions: "8 процедури", priceBGN: 880, priceEUR: 450.12 },
      { name: "Апаратна АЦ — 12 процедури", sessions: "12 процедури", priceBGN: 1200, priceEUR: 613.81 },
      { name: "Мадеротерапия — единична", priceBGN: 140, priceEUR: 71.61 },
      { name: "Мадеротерапия — 8 процедури", sessions: "8 процедури", priceBGN: 1080, priceEUR: 553.84 },
      { name: "Мадеротерапия — 12 процедури", sessions: "12 процедури", priceBGN: 1440, priceEUR: 736.57 },
    ],
  },
  {
    category: "Допълнителни процедури",
    items: [
      { name: "Акупунктура — единична", priceBGN: 90, priceEUR: 46.03 },
      { name: "Акупунктура — 10 процедури", sessions: "10 процедури", priceBGN: 800, priceEUR: 409.20 },
      { name: "Пресотерапия", priceBGN: 40, priceEUR: 20.46 },
      { name: "Лимфен масаж", priceBGN: 140, priceEUR: 71.61 },
      { name: "Вендузи", priceBGN: 60, priceEUR: 30.69 },
    ],
  },
];
