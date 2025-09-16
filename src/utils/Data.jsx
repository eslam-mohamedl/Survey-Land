import { useTranslation } from "react-i18next";
import * as img from '../assets/images/images';
import * as icons from './../assets/icons/icons';
export const DataPricing = [
  {
     id:1,
     variant: "PricingCard1.variant", 
     title: "PricingCard1.title",
     description: "PricingCard1.description",
     price: "PricingCard1.price",
     period: "PricingCard1.period",
     icon: icons.Check,
     item1: "PricingCard1.Features.item1",
     item2: "PricingCard1.Features.item2",
     item3: "PricingCard1.Features.item3",
     item4: "PricingCard1.Features.item4",
  },
  {
     id:2,
     variant: "PricingCard2.variant", 
     title: "PricingCard2.title",
     description: "PricingCard2.description",
     price: "PricingCard2.price",
     period:" PricingCard2.period",
     icon: icons.Check,
     item1: "PricingCard2.Features.item1",
     item2: "PricingCard2.Features.item2",
     item3: "PricingCard2.Features.item3",
     item4: "PricingCard2.Features.item4",
  },
  {
     id:3,
     variant: "PricingCard3.variant", 
     title: "PricingCard3.title",
     description: "PricingCard3.description",
     price: "PricingCard3.price",
     period: "PricingCard3.period",
     icon: icons.Check,
     item1:" PricingCard3.Features.item1",
     item2:" PricingCard3.Features.item2",
     item3:" PricingCard3.Features.item3",
     item4:" PricingCard3.Features.item4",
  },
];
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
};
export function useCardData(){
  const { t } = useTranslation();

  const cartTemplates = [
{
  id:"cartTemplate1",
  heading1: t("cardTemplate1.heading1"),
  heading2: t("cardTemplate1.heading2"),
  heading3: t("cardTemplate1.rightText"),
    cards:[
      {
        header: t("cardTemplate1.card1.headerCard"),
        text: t("cardTemplate1.card1.mainCard"),
        btn: t("cardTemplate1.card1.btn"),
        img:img.cardTemplate1
      },
       {
        header: t("cardTemplate1.card2.headerCard"),
        text: t("cardTemplate1.card2.mainCard"),
        btn: t("cardTemplate1.card2.btn"),
           img:img.cardTemplate2
      },
       {
        header: t("cardTemplate1.card3.headerCard"),
        text: t("cardTemplate1.card3.mainCard"),
        btn: t("cardTemplate1.card3.btn"),
           img:img.cardTemplate3
      },
       {
        header: t("cardTemplate1.card4.headerCard"),
        text: t("cardTemplate1.card4.mainCard"),
        btn: t("cardTemplate1.card4.btn"),
           img:img.cardTemplate4
      },
    ]
},
{
  id:"cartTemplate2",
  heading1: t("cartTemplate2.heading1"),
  heading2: t("cartTemplate2.heading2"),
  heading3: t("cartTemplate2.rightText"),
  
    cards:[
      {
        header: t("cartTemplate2.card1.headerCard"),
        text: t("cartTemplate2.card1.mainCard"),
        btn: t("cartTemplate2.card1.btn"),
           img: <img.cardTemplate5/>
      },
       {
        header: t("cartTemplate2.card2.headerCard"),
        text: t("cartTemplate2.card2.mainCard"),
        btn: t("cartTemplate2.card2.btn"),
           img: <img.cardTemplate6/>
      },
       {
        header: t("cartTemplate2.card3.headerCard"),
        text: t("cartTemplate2.card3.mainCard"),
        btn: t("cartTemplate2.card3.btn"),
           img: <img.cardTemplate7/>
      },
       {
        header: t("cartTemplate2.card4.headerCard"),
        text: t("cartTemplate2.card4.mainCard"),
        btn: t("cartTemplate2.card4.btn"),
           img: <img.cardTemplate8/>
        
      },
    ]
},
{
  id:"cartTemplate3",
  heading1: t("cartTemplate3.heading1"),
  heading2: t("cartTemplate3.heading2"),
  heading3: t("cartTemplate3.rightText"),
    cards:[
      {
        header: t("cartTemplate3.card1.headerCard"),
        text: t("cartTemplate3.card1.mainCard"),
        btn: t("cartTemplate3.card1.btn"),
           img: <img.cardTemplate9/>
      },
       {
        header: t("cartTemplate3.card2.headerCard"),
        text: t("cartTemplate3.card2.mainCard"),
        btn: t("cartTemplate3.card2.btn"),
           img: <img.cardTemplate10/>
      },
       {
        header: t("cartTemplate3.card3.headerCard"),
        text: t("cartTemplate3.card3.mainCard"),
        btn: t("cartTemplate3.card3.btn"),
           img: <img.cardTemplate11/>
      },
       {
        header: t("cartTemplate3.card4.headerCard"),
        text: t("cartTemplate3.card4.mainCard"),
        btn: t("cartTemplate3.card4.btn"),
           img: <img.cardTemplate12/>
      },
    ]
},
{
  id:"cartTemplate4",
  heading1: t("cartTemplate4.heading1"),
  heading2: t("cartTemplate4.heading2"),
  heading3: t("cartTemplate4.rightText"),
  
    cards:[
      {
        header: t("cartTemplate4.card1.headerCard"),
        text: t("cartTemplate4.card1.mainCard"),
        btn: t("cartTemplate4.card1.btn"),
           img: <img.cardTemplate13/>
      },
       {
        header: t("cartTemplate4.card2.headerCard"),
        text: t("cartTemplate4.card2.mainCard"),
        btn: t("cartTemplate4.card2.btn"),
           img: <img.cardTemplate14/>
      },
       {
        header: t("cartTemplate4.card3.headerCard"),
        text: t("cartTemplate4.card3.mainCard"),
        btn: t("cartTemplate4.card3.btn"),
           img: <img.cardTemplate15/>
      },
       {
        header: t("cartTemplate4.card4.headerCard"),
        text: t("cartTemplate4.card4.mainCard"),
        btn: t("cartTemplate4.card4.btn"),
           img: <img.cardTemplate16/>
      },
    ]
},

  ];
  return cartTemplates
} 

