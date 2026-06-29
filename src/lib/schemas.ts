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

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;
export type ReviewFormData = z.infer<typeof reviewFormSchema>;
