import authRoutes from "@/routes/auth";
import { apiClient } from "@/services/api-client";
import { RegisterResponse } from "@/types/auth-types";
import { RegisterRequest } from "@/types/auth-types";
import { AxiosError } from "axios";

export const register = async ({
  email,
  password,
  roleId,
}: RegisterRequest): Promise<RegisterResponse> => {
  try {
    const response = await apiClient.post(authRoutes.register, {
      email,
      password,
      roleId,
    });

    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};
