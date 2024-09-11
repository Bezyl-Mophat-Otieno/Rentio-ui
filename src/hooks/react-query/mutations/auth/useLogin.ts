import { login } from "@/services/auth/login";
import { useMutation } from "@tanstack/react-query";
import { LoginRequest } from "@/types/auth-types";

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }: LoginRequest) =>
      login({ email, password }),
  });
};
