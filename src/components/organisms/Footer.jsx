import React from 'react'
import Button from '../atoms/Button';
import { useTranslation } from "react-i18next";
import * as icons from './../../assets/icons/icons';
function Footer() {
  const { t } = useTranslation();
  return (
    <div className='bg-light-primary py-[60px] dark:bg-dark-secondary '>
      <div className='container'>
         <div className='flex justify-between flex-wrap pb-[40px] border-b border-dark-secondary dark:border-light-secondary'>
        <div>
           <h2 className='text-primary text-[30px] font-semibold'>{t("footer.titleLogo1")}<span className='text-dark-primary dark:text-light-primary'>{t("footer.titleLogo2")}</span></h2>
         <p className='w-[57%] pt-[10px] mb-[20px]'>{t("footer.DescLogo")}</p>
        </div>
        <div>
          <form className="flex flex-row ">
            <input className="bg-gray-100 dark:bg-dark-primary p-[12px] w-[300%] lg:w-[400px] rounded-[6px]" type="text" placeholder={t("footer.TextFrom")} />
            <Button size="lg" >{t("footer.TextBtn")}</Button>
          </form>
        </div>
         </div>
         <div className='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-[40px]' >
          <ul className='mb-[20px]'>
          <li className='text-[18px]'>{t("footer.nav1")}</li>
          <li className='text-[18px]'>{t("footer.nav2")}</li>
          <li className='text-[18px]'>{t("footer.nav3")}</li>
          <li className='text-[18px]'>{t("footer.nav4")}</li>
          </ul>
          <ul className='mb-[20px]'>
          <li className='text-[18px]'>{t("footer.nav6")}</li>
          <li className='text-[18px]'>{t("footer.nav7")}</li>
          <li className='text-[18px]'>{t("footer.nav8")}</li>
          <li className='text-[18px]'>{t("footer.nav9")}</li>
            <li className='text-[18px]'>{t("footer.nav10")}</li>
          </ul>
              <ul className='mb-[20px]'>
          <li className='text-[18px]'>{t("footer.headerEmail")}</li>
          <li className='text-[18px]'>{t("footer.TextEmail")}</li>
          </ul>
          <div>
            <h5 className='text-[18px]'>{t("footer.followUs")}</h5>
           <div className="flex flex-row py-[10px]">
              <icons.X className='mr-[20px]' />
              <icons.Linkedin />
           </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Footer