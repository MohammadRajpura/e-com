import z from "zod";

/**
 * registerSchema
 * This schema is used to validate user input during the registration process.
 * It ensures that all required fields are present and formatted correctly.
 */
export const registerSchema = z.object({
  // Name: Required field; must be a non-empty string
  name: z.string().min(1, { message: "Please enter name" }),

  // Email: Required field; must be a valid email format
  email: z.string().email({ message: "Please enter valid email" }),

  // mobile: z.string().min(1, { message: "Please enter valid mobile number" }),

  // Mobile: Required field; must be a non-empty string (you may want to add regex for stricter validation)
  country_code: z.string().min(1, { message: "Please select country code" }),
  phone: z.string().min(1, { message: "Please enter valid mobile number" }),

  // Password: Required field; must be at least 6 characters long
  password: z.string().min(6, { message: "Enter valid 6 char. password" }),

  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions " }),
  }),
});
