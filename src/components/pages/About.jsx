import React from 'react'
import { useTranslation } from "react-i18next";
import HeroSection from '../molecules/HeroSection';
import * as img from './../../assets/images/images'
import BoxHowItWork from "../molecules/BoxHowWork";
import { useBoxData } from "./../../utils/Data";
function About() {
      const { t } = useTranslation(); 
        const { tradeBox} = useBoxData();
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
  <div className="container ">

       <h2 className="text-2xl font-bold mt-12">
        Treading <span className="text-teal-600">Action</span>
      </h2>

      <div className="grid mb-[100px]  grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {tradeBox.map((item, idx) => (
          <BoxHowItWork
            key={idx}
            value={item.value}
            title={item.title}
            variant="tradeBox"
          />
        ))}
      </div>
  </div>
   

    </>
  )
}

export default  About