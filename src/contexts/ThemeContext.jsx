import { createContext, useContext, useEffect, useState } from "react";
import { themes } from "./Theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // شوف لو فيه اختيار متسجل قبل كدا
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    // أو خليه نفس وضع السيستم
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? themes.dark
      : themes.light;
  });

  useEffect(() => {
    document.documentElement.classList.remove(themes.light, themes.dark);
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === themes.light ? themes.dark : themes.light);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
