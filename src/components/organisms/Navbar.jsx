import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Routes from "@/routes/Routes";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/languageContext";
import ButtonTheme from "../atoms/ButtonTheme";
import * as Icons from "@/assets/icons/icons";
import ButtonLanguages from './../atoms/ButtonLangauges';

function Navbar() {
 const { t } = useTranslation();
  const { changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const  [isScrolled , setIsScrolled ]  = useState(false);
   const location = useLocation();


  const toggleNavbar = ()=>{
    setOpen(!open);
  }
  const closeNavbar = ()=>{
    setOpen(false);
  }
  const handleScroll =()=>{
    if(window.scrollY > 100){
      setIsScrolled(true);
    }
    else{
       setIsScrolled(false);
    }
  }
useEffect(()=>{
  window.addEventListener('scroll',handleScroll);
  return() =>{

    window.removeEventListener('scroll',handleScroll);
  }
})
  return (
   <div 
   id="navbar"
    className={`w-full h-[80px] bg-light-primary dark:bg-dark-secondary
    flex items-center justify-between bg-light md:px-25 sm:px-10 px-4 fixed top-0 
    transition-all ease-in-out duration-300 z-50 border-b border-neutral-200 dark:border-dark-secondary
    ${isScrolled ? 
    'bg-light-primary border-b border-sky-200' : 
    'bg-light-primary'}`}>
      
      {/*Logo Section */}
      <div className="flex items-center gap-2 pr-0">
        <Link to="/" className="text-lg font-semibold 
        flex items-center gap-x-2">
        <span className="text-[25px]"><span className="text-primary">Survey</span>land</span>
        </Link>
      </div>
      {/*Hamburger menu for mobile/ Toggle menu*/}
      <div className="md:hidden">
     <button onClick={toggleNavbar} className="text-dark-secondary dark:text-light-secondary focus:outline">
          <Icons.AlignLeft className="bg-shadow-emerald-800" size={25}  />

     </button>
      </div>
   {/* Navbar items and buttons */}
   <div className={`fixed md:static top-0 right-0 h-screen md:h-auto bg-light-primary dark:bg-dark-secondary
   w-full md:w-auto    border-1  md:border-none border-none
      shadow-lg md:shadow-none
   transition-all ease-in-out duration-300 transition-transform flex-1 ${open ? "translate-x-0 ": "translate-x-full"}
   md:translate-x-0 z-60`}>

{/*Logo and close icon inside toggle menu card */}
<div className="w-full md:hidden flex items-center justify-between p-4">
  {/* logo */}
     <Link to="/" className="text-lg font-semibold
        flex items-center gap-x-2">
        <span className="text-[25px]"><span className="text-primary">Survey</span>land</span>

        </Link>
        {/* close icon */}
        <div className="md:hidden flex justify-end py-6">
         <button onClick={closeNavbar} className="text-dark-secondary dark:text-light-secondary focus:outline">
         
          <Icons.X  className="bg-shadow-emerald-800" size={25} />
     </button>
        </div>
</div>
{/*Divider */}
<div className="border-b border-neutral-300  dark:border-b-cyan-950 md:hidden">
</div>
{/*Navbar Items and button */}
<div className="flex-1 flex items-center  flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-0">
{/* Navbar Items */}
 <ul className="flex flex-col md:flex-row items-center mx-[100px]
 md:gap-7 gap-4 md:text-base text-lg text-neutral-700
 md:font-normal font-medium ">
        {Routes.map((item)=>(
          <li 
          key={item.id}
          onClick={closeNavbar}
          className={`hover:text-primary ease-in-out text-dark-primary dark:text-light-primary
          duration-300 ${location.pathname === item.path 
           ? 'text-primary' : 'text-light '} cursor-pointer`}>
            <Link to={item.path}>{t(item.key)}</Link>
          </li>
        ))}
      </ul>
{/*Nabar buttons*/}
<div className="flex flex-col md:flex-row items-center gap-4">
  <ButtonTheme />
     {/* زرار تغيير اللغة */}
         <ButtonLanguages/> 
  
       <button className="w-fill px-6 py-2 md:text-base text-2xl border-2 border-primary rounded-[8px] text-primary hover:text-primary ease-in-out duration-300 cursor-pointer">
        {t(`nav.login`)}
       </button>
        <button className="w-fill px-6 py-2 rounded-xl bg-primary text-light-primary hover:bg-sky-800 md:text-base text-2xl text-light hover:text-light ease-in-out duration-300 cursor-pointer">
      {t(`nav.sign-up`)}
       </button>
</div>

</div>


   </div>


{/* 
    */}
   </div>
  )
}

export default Navbar


