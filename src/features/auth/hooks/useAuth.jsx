import { useState } from "react";
import { login, logout } from "../api/authApi";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async (credentials) => {
    const data = await login(credentials);
    setUser(data.user);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return { user, handleLogin, handleLogout, isLoggedIn: !!user };
};
