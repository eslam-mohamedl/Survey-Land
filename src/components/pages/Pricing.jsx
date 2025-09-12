import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const pricing = () => {
    const { t } = useTranslation();
  
  return (
    <div>
           <h2>{t("nav.pricing")} </h2> 
    </div>
  );
};

export default pricing;