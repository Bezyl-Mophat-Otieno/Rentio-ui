import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RENTIN_DEV_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
