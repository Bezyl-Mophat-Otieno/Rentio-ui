import { z } from "zod";
import { RoleEnum } from "@/types/enums/auth-enums";

const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long." })
  .regex(/[a-z]/, {
    message: "Password must contain at least one lowercase letter.",
  })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter.",
  })
  .regex(/\d/, { message: "Password must contain at least one digit." })
  .regex(/\W/, {
    message: "Password must contain at least one special character.",
  });

export const UserSignUpSchema = z
  .object({
    email: z.string().email(),
    password: passwordSchema,
    confirmPassword: z.string(),
    role: z
      .nativeEnum(RoleEnum, { message: "Invalid role selection" })
      .default(RoleEnum.Tenant),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const UserSignInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  rememberMe: z.boolean().default(false),
});
