import React from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";

const HeroSection = ({ 
  title1, 
  title2, 
  title3, 
  title4, 
  title5, 
  subTitle,
  primaryButton = { text: "Get Started", href: "/register" },
  secondaryButton = { text: "Learn More", href: "/about" },
  image,
  reverse = false,
  className = ""
}) => {
  return (
    <section className={`py-16 h-[90vh] lg:py-5 bg-light-secondary dark:bg-dark-primary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
            <h1 className="text-4xl lg:text-[38px] font-bold text-dark-primary dark:text-light-primary leading-tight mb-6">
              {title1} <span className="text-primary">{title2}</span> <br/> {title3} <span className="text-primary">{title4} </span>{title5}
            </h1>
          
            {subTitle && (
              <p className="text-lg text-gray-600 dark:text-light-secondary mb-8 leading-relaxed">
                {subTitle}
              </p>
            )}
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButton && (
                <Link to={primaryButton.href}>
                  <Button variant="primary" size="lg">
                    {primaryButton}
                  </Button>
                </Link>
              )}
              {secondaryButton && (
                <Link to={secondaryButton.href}>
                  <Button variant="outline" size="lg">
                    {secondaryButton}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className={`${reverse ? 'lg:col-start-1' : ''}`}>
              <div className="relative">
                <img 
                  src={image}
                  alt={title1}
                  className="w-[80%] lg:ml-[15%] sm:ml-[0%] h-auto rounded-lg "
                />
                {/* Optional decorative elements */}
             
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
