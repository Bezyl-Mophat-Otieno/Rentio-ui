import authRoutes from "@/routes/auth";
import { apiClient } from "@/services/api-client";
import { RegisterResponse } from "@/types/auth-types";

export const register = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
): Promise<RegisterResponse> => {
  try {
    const response = await apiClient.post(authRoutes.register, {
      email,
      password,
      firstName,
      lastName,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
