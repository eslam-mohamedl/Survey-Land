import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../molecules/SectionTitle";

const pricing = () => {
    const { t } = useTranslation();
  
  return (
    <div>
             <SectionTitle
      title1={t("pricingPage.title1")}
      title2={t("pricingPage.title2")}
      subtitle={t("pricingPage.subTitle")}
      btn1={t("pricingPage.btn1")}
      btn2={t("pricingPage.btn2")}
      />
    </div>
  );
};

export default pricing;