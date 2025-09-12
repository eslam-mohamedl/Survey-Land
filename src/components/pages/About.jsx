import React from 'react'
import { useTranslation } from "react-i18next";
import HeroSection from '../molecules/HeroSection';
import * as img from './../../assets/images/images'
function About() {
      const { t } = useTranslation(); 
  return (
    <>
            <HeroSection
        title1={t("heroAbout.title1")}
        title2={t("heroAbout.title2")}
        subTitle={t("heroAbout.subTitle")}
        primaryButton={t("heroAbout.btn1")}
        secondaryButton={t("heroAbout.btn2")}
        image={img.HeroAbout}
        reverse={false} // لو خليتها true هتبدل مكان النص مع الصورة
        className="bg-gray-50"
      />


    </>
  )
}

export default  About