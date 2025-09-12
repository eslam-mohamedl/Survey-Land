import React from "react";

const SectionTitle = ({ 
  title, 
  subtitle, 
  center = false, 
  className = "",
  showDivider = true,
  size = "lg"
}) => {
  const sizes = {
    sm: "text-2xl",
    md: "text-3xl", 
    lg: "text-4xl",
    xl: "text-5xl"
  };

  const alignment = center ? "text-center" : "text-left";

  return (
    <div className={`mb-8 ${alignment} ${className}`}>
      <h2 className={`${sizes[size]} font-bold text-light 0 mb-2`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {showDivider && (
        <div className={`mt-6 ${center ? 'mx-auto' : ''} w-24 h-1 bg-blue-600 rounded-full`}></div>
      )}
    </div>
  );
};

export default SectionTitle;
