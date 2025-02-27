import { z } from "zod";

export const loginSchema = z.object({
  loginInput: z
    .string()
    .min(1, { message: "Email or phone is required" })
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || /^\d{10}$/.test(val), {
      message: "Enter a valid email or 10-digit phone number",
    }),
  password: z.string().optional(),
  otp: z.string().optional(),
}).refine((data) => {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.loginInput);
  if (!isEmail && !data.otp && !data.password) {
    return false;
  }
  return true;
}, {
  message: "OTP or password is required for phone number login",
  path: ["otp"],
});
