import { UserSignInSchema, UserSignUpSchema } from "./schemas/auth-schema";
import { z } from "zod";
type UserSignUp = z.infer<typeof UserSignUpSchema>;

type UserSignIn = z.infer<typeof UserSignInSchema>;

interface SignInState {
  formData: UserSignIn;
  touchedFields: Record<keyof UserSignIn, boolean>;
  errors: Record<keyof UserSignIn, string[]>;
}

interface SignupState {
  formData: UserSignUp;
  touchedFields: Record<keyof UserSignUp, boolean>;
  errors: Record<keyof UserSignUp, string[]>;
}

interface FormFieldUpdate {
  name: string;
  value: string | boolean | string[];
}

type UpdateSignInParentState = (
  key: keyof SignInState,
  { name, value }: FormFieldUpdate,
) => void;
type UpdateSignUpParentState = (
  key: keyof SignInState,
  { name, value }: FormFieldUpdate,
) => void;

export type {
  UserSignUp,
  UserSignIn,
  SignInState,
  SignupState,
  UpdateSignInParentState,
  UpdateSignUpParentState,
  FormFieldUpdate,
};
