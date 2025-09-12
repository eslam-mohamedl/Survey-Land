import apiClient from "@/services/apiClient";

// تسجيل الدخول
export const login = async (credentials) => {
  const { data } = await apiClient.post("/auth/login", credentials);
  return data;
};

// إنشاء حساب
export const register = async (userData) => {
  const { data } = await apiClient.post("/auth/register", userData);
  return data;
};

// تسجيل الخروج
export const logout = async () => {
  const { data } = await apiClient.post("/auth/logout");
  return data;
};
