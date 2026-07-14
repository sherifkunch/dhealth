export interface Procedure {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  duration?: string;
  image: string;
  featured: boolean;
}

export interface PricingItem {
  name: string;
  sessions?: string;
  priceBGN: number;
  priceEUR: number;
}

export interface PricingCategory {
  category: string;
  items: PricingItem[];
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  image: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BlogSection {
  type: "paragraph" | "heading" | "subheading" | "list";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: BlogSection[];
  category: string;
  date: string;
  readingTime: number;
  featured?: boolean;
  image?: string;
}

export interface JobOffer {
  id: string;
  title: string;
  note?: string;
  description: string;
  requirements: string[];
  active: boolean;
}
