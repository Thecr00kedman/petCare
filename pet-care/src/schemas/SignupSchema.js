import { z } from "zod";

const SignupSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be at most 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name can only contain letters and spaces." }),

  email: z
    .string()
    .email({ message: "Invalid email address." }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number must be at most 15 digits." })
    .regex(/^\d+$/, { message: "Phone number can only contain digits." }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
    .regex(/\d/, { message: "Password must contain at least one number." })
    .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character." }),
});

export default SignupSchema