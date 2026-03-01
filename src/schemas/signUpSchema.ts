import * as z from "zod";



export const usernameValidation = z
    .string()
    .min(2, "At least 2 char required")
    .max(20, "Maximum 20 char allowed")
    .regex(/^[a-zA-Z0-9_]+$/, "Special char not allowed")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid Email format" }),
    password: z.string().min(6, { message: "At Least 6 chars" })
})