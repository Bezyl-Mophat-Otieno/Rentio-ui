import { RegisterRequest, RegisterResponse } from "@/types/auth-types";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/services/auth/register";

export const useRegister = () => {
  return useMutation({
    mutationFn: ({ email, password, roleId }: RegisterRequest) =>
      register({ email, password, roleId }),
  });
};
