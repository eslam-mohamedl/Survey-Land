import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../molecules/SectionTitle";
import PricingCard from '../molecules/PricingCard';
import { DataPricing } from "../../utils/Data";
const pricing = () => {
    const { t } = useTranslation();
  
  return (
    <div className="container">
             <SectionTitle
      title1={t("pricingPage.title1")}
      title2={t("pricingPage.title2")}
      subtitle={t("pricingPage.subTitle")}
      btn1={t("pricingPage.btn1")}
      btn2={t("pricingPage.btn2")}
      />
      <div className="grid grid-cols-1 mb-[120px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {DataPricing.map((card)=>(
        <PricingCard 
        variant={t(card.variant)}
        title={t(card.title)}
        description={t(card.description)}
        price={t(card.price)}
        period={t(card.period)}
      features={[
      t(card.item1),
      t(card.item2),
      t(card.item3),
      t(card.item4),
    ]}
        buttonText="Choose plan"
        />
      ))}
      </div>

    </div>
  );
};

export default pricing;