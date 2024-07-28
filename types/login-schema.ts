import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z.string().min(8),
  code: z.optional(z.string()),
});
