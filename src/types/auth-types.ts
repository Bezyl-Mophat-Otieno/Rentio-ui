import { UserSignInSchema, UserSignUpSchema } from "./schemas/auth-schema";
import { z } from "zod";
type UserSignUp = z.infer<typeof UserSignUpSchema>;

type UserSignIn = z.infer<typeof UserSignInSchema>;

interface SignInState {
  formData: UserSignIn;
  touchedFields: Record<keyof UserSignIn, boolean>;
  errors: Record<keyof UserSignIn, string[]>;
  disabled: boolean;
}

interface SignupState {
  formData: UserSignUp;
  touchedFields: Record<keyof UserSignUp, boolean>;
  errors: Record<keyof UserSignUp, string[]>;
  disabled: boolean;
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

interface LoginRequest {
  email: string;
  password: string;
}
interface RegisterResponse {
  success: boolean;
}

interface LoginResponse {
  userID: string;
  roleID: number;
  permissions: any[];
  token: string;
  refreshToken: string;
}

export type {
  UserSignUp,
  UserSignIn,
  SignInState,
  SignupState,
  UpdateSignInParentState,
  UpdateSignUpParentState,
  FormFieldUpdate,
  LoginRequest,
  RegisterResponse,
  LoginResponse,
};
