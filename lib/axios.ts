import axios from "axios";
import Cookies from "js-cookie";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
  //   withCredentials: true, // This enables sending cookies along with requests
});

// Change request data/error
const AUTH_TOKEN_KEY = process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY ?? "authToken";
Axios.interceptors.request.use((config) => {
  const cookies = Cookies.get(AUTH_TOKEN_KEY);
  let token = "";
  if (cookies) {
    token = JSON.parse(cookies)["token"];
  }

  if (token) {
    if (config.headers) config.headers.token = token;
  }

  return config;
});

// Change response data/error here
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403) ||
      (error.response &&
        error.response.data.message === "APP_ERROR.NOT_AUTHORIZED")
    ) {
      Cookies.remove(AUTH_TOKEN_KEY);
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export function getFormErrors(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data.message;
  }
  return null;
}

export function getFieldErrors(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data.errors;
  }
  return null;
}

export class HttpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await Axios.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await Axios.delete<T>(url);
    return response.data;
  }
}
