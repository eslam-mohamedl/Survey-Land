import { useTranslation } from "react-i18next";
import HeroSection from "../molecules/HeroSection";
import * as img from './../../assets/images/images';
import BoxHowItWork from "../molecules/BoxHowWork";
import { useBoxData } from "./../../utils/Data";
function Home() {
  const { t } = useTranslation();
  const { smallBox} = useBoxData();
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
        <h2 className="text-2xl font-bold text-center">
        {t("boxSmall.title")} <span className="text-teal-600">Works</span>
      </h2>
      <p className="text-gray-500 text-center">{t("boxSmall.subTitle")}</p>

      <div className="grid container pb-[100px] grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {smallBox.map((item, idx) => (
          <BoxHowItWork
            key={idx}
            title={item.title}
            text={item.text}
            variant="smallBox"
          />
        ))}
      </div>

        </div>
 
  );
}

export default Home;