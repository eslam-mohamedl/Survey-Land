import React from 'react'
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import * as Icons from "@/assets/icons/icons";

function ButtonTheme() {
        const { theme, toggleTheme } = useTheme();
  return (
        <button
          onClick={toggleTheme}
          className="px-6 py-2 rounded-lg border-primary border-1 bg-light-secondary dark:bg-dark-primary text-white  transition" >
          {theme === "dark" ?<Icons.Moon className="w-5 h-5 text-primary"/> :   <Icons.SunMedium className="w-5 h-5 text-primary"/>}
        </button>

  )
}

export default ButtonTheme;