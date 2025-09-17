import React from 'react'
import { useTranslation } from "react-i18next";
import SectionTitle from '../molecules/SectionTitle';
import QuestionBox from '../molecules/QuestionBox';
function FAQs() {
      const { t } = useTranslation(); 
  return (
    <>
   <SectionTitle 
   title1={t("titleFAQs.title1")}
   title2={t("titleFAQs.title2")}
   subtitle={t("titleFAQs.subTitle")}
   />
    <QuestionBox 
    question={t("QuestionBox.question2.Question")}
    answer={t("QuestionBox.question2.answer")}
    />
       <QuestionBox 
    question={t("QuestionBox.question3.Question")}
    answer={t("QuestionBox.question3.answer")}
    />
       <QuestionBox 
    question={t("QuestionBox.question4.Question")}
    answer={t("QuestionBox.question4.answer")}
    />
       <QuestionBox 
    question={t("QuestionBox.question5.Question")}
    answer={t("QuestionBox.question5.answer")}
    />
       <QuestionBox 
    question={t("QuestionBox.question6.Question")}
    answer={t("QuestionBox.question6.answer")}
    />
       <QuestionBox 
    question={t("QuestionBox.question7.Question")}
    answer={t("QuestionBox.question7.answer")}
    />
       <QuestionBox 
    question={t("QuestionBox.question9.Question")}
    answer={t("QuestionBox.question7.answer")}
    />

    </>

   
  )
}

export default FAQs