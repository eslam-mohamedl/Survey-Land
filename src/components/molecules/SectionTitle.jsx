import React from "react";
import Button from './../atoms/Button';
import { useState } from "react";
const SectionTitle = ({ 
  title1,
  title2,
  subtitle, 
  center =  true, 
  className = "",
  showDivider = false,
  size = "lg",
  btn1,
  btn2
}) => {
  const sizes = {
    sm: "text-2xl",
    md: "text-3xl", 
    lg: "text-4xl",
    xl: "text-5xl"
  };

  const alignment = center ? "text-center" : "text-left";
  const [active, setActive] = useState("monthly");

  return (
    <div className={`mb-8 py-[80px] ${alignment} ${className}`}>
      <h2 className={`${sizes[size]}  font-normal text-light 0 mb-2`}>
        {title1} <span className="text-primary">{title2}</span>
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mb-[20px] mx-auto">
          {subtitle}
        </p>
      )}
      {showDivider && (
        <div className={`mt-6 ${center ? 'mx-auto' : ''} w-24 h-1 bg-blue-600 rounded-full`}></div>
      )}
 {    <div className="bg-white w-fit mx-auto rounded-full p-1 flex">
      <Button
        variant={active === "monthly" ? "toggleActive" : "toggleInactive"}
        onClick={() => setActive("monthly")}
        size="md"
      >
        {btn1}
      </Button>
      <Button
        variant={active === "yearly" ? "toggleActive" : "toggleInactive"}
        onClick={() => setActive("yearly")}
        size="md"
      >
        {btn2}
      </Button>
    </div>}

    </div>
  );
};

export default SectionTitle;
