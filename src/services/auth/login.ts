import { apiClient } from "@/services/api-client";
import authRoutes from "@/routes/auth";
import { LoginRequest, LoginResponse } from "@/types/auth-types";
import { AxiosError } from "axios";

export const login = async ({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post(authRoutes.login, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};
