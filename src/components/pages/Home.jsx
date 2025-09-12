import { useTranslation } from "react-i18next";
import SectionTitle from '../molecules/SectionTitle';
import HeroSection from "../molecules/HeroSection";
import * as img from './../../assets/images/images';
import BoxHowWork from "../molecules/BoxHowWork";

function Home() {
  
  const { t } = useTranslation();
  return (
    <div className="space-y-8">
  
 <HeroSection
        title1={t("heroHome.title1")}
        title2={t("heroHome.title2")}
        title3={t("heroHome.title3")}
        title4={t("heroHome.title4")}
        title5={t("heroHome.title5")}
        description={t("heroHome.subTitle")}
        primaryButton={t("heroHome.btn1")}
        secondaryButton={t("heroHome.btn2")}
        image={img.HeroImage}
        reverse={false} // لو خليتها true هتبدل مكان النص مع الصورة
        className="bg-gray-50"
      />


        </div>
 
  );
}

export default Home;