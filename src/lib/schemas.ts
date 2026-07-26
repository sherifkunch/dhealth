import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Моля, въведете вашето име"),
  email: z.string().email("Моля, въведете валиден имейл"),
  phone: z.string().min(10, "Моля, въведете валиден телефонен номер"),
  procedure: z.string().optional(),
  message: z.string().min(10, "Съобщението трябва да е поне 10 символа"),
});

export const bookingFormSchema = z.object({
  name: z.string().min(2, "Моля, въведете вашето име"),
  phone: z.string().min(10, "Моля, въведете валиден телефонен номер"),
  email: z.string().email("Моля, въведете валиден имейл").optional().or(z.literal("")),
  procedure: z.string().min(1, "Моля, изберете процедура"),
  preferredDate: z.string().optional(),
  preferredTime: z.enum(["morning", "afternoon", "evening"]).optional(),
  message: z.string().optional(),
});

export const reviewFormSchema = z.object({
  name: z.string().min(2, "Моля, въведете вашето име"),
  rating: z.number().min(1, "Моля, изберете оценка").max(5),
  text: z.string().min(10, "Отзивът трябва да е поне 10 символа"),
});

export const purchaseFormSchema = z.object({
  name: z.string().min(2, "Моля, въведете вашето име"),
  phone: z.string().min(10, "Моля, въведете валиден телефонен номер"),
  email: z.string().email("Моля, въведете валиден имейл").optional().or(z.literal("")),
  productId: z.string().min(1, "Моля, изберете продукт"),
  productName: z.string().min(1),
  priceEUR: z.number().positive(),
  quantity: z.number().int().min(1, "Минимум 1 бройка").max(20, "Максимум 20 бройки"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;
export type ReviewFormData = z.infer<typeof reviewFormSchema>;
export type PurchaseFormData = z.infer<typeof purchaseFormSchema>;
