import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  phone: z
    .string()
    .trim()
    .regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.union([z.string().trim().email("Enter a valid email"), z.literal("")]).optional(),
  interest: z.string().optional(),
  message: z.string().trim().optional(),
});

export type LeadFormSchema = z.infer<typeof leadFormSchema>;
