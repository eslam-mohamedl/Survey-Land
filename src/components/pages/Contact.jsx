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
       
    
   </div>
  );
};

export default Contact;