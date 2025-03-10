import { z } from "zod";

const AppointmentSchema = z.object({
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

  typeOfConsultation: z.enum(["General Checkup", "Emergency", "Vaccination", "Grooming"], {
    message: "Please select a valid consultation type.",
  }),

  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." })
    .max(500, { message: "Description must be at most 500 characters." }),
});

export default AppointmentSchema;
