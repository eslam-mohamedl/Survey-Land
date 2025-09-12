import React from 'react'
import * as Icons from "@/assets/icons/icons";
import { useLanguage } from "@/contexts/languageContext";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";


function ButtonLanguages() {
     const { t, i18n } = useTranslation();
  const { changeLanguage } = useLanguage();

      const toggleLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    changeLanguage(newLang);
     const location = useLocation();
  };
  return (
    <button
              onClick={toggleLang}
              className="flex items-center text-primary gap-2 px-4 py-2 rounded-lg bg-light-secondary border-1 border-primary dark:bg-dark-primary text-light cursor-pointer text-sm"
            >
           
              <Icons.GlobeAltIcon className="w-5 h-5"/>
              {i18n.language === "en" ? "Ar" : "En"}
            </button>
  )
}

export default ButtonLanguages;