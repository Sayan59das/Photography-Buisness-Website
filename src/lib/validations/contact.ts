import { z } from "zod"

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  eventDate: z.string().trim().optional().or(z.literal("")),
  location: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more about your day (min 10 characters)").max(4000),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
