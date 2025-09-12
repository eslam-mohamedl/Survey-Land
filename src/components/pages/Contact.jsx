import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "./../atoms/Button";
import SectionTitle from '../molecules/SectionTitle';
import HeroSection from "../molecules/HeroSection";
import * as img from './../../assets/images/images';
const Contact = () => {
  const { t } = useTranslation();

  return (
   <div>
         <h2>{t("nav.contact")} </h2> 
          <HeroSection
        title="Welcome to Our Platform"
        subtitle="Learn. Grow. Succeed."
        description="We provide the best courses and resources to help you achieve your goals. Start your journey with us today!"
        primaryButton={{ text: "Get Started", href: "/register" }}
        secondaryButton={{ text: "Learn More", href: "/about" }}
        image={img.HomeHero}
        reverse={false} // لو خليتها true هتبدل مكان النص مع الصورة
        className="bg-gray-50"
      />

               <h2>{t("nav.home")} </h2> 
    <Button variant="secondary" size="xl">ahmed </Button>
    <Button variant="secondary">amr </Button>

     <SectionTitle 
        title={t("nav.home")} 
        subtitle="We are a team of professionals providing high-quality services."
        center={true}
        size="5xl"
        showDivider={false}
        className="text-amber-400"
      />
   </div>
  );
};

export default Contact;