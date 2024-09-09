import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.RENTIN_API_URL || "http://localhost:5260/api",
  headers: {
    "Content-Type": "application/json",
  },
});
