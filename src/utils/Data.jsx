import { useTranslation } from "react-i18next";

export function useBoxData(){
  const { t } = useTranslation();
  const smallBox = [
    {
      title: t("boxSmall.heading1"),
      text: t("boxSmall.text1"),
    },
     {
      title: t("boxSmall.heading2"),
      text: t("boxSmall.text2"),
    },
     {
      title: t("boxSmall.heading3"),
      text: t("boxSmall.text3"),
    },
  ];
  const tradeBox = [
       { value: "$45,345,654",
         title: "ALL TIME TRADE VALUE" 
        },
    { 
      value: "$45,345,654", 
      title: "ALL TIME TRADE VALUE" 
    },
    { 
      value: "$45,345,654",
       title: "ALL TIME TRADE VALUE"
       },
  ];
  return {smallBox ,tradeBox};
}

