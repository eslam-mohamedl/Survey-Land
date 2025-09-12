import React from "react";

const FeatureBox = ({ 
  icon, 
  title, 
  description, 
  variant = "default",
  className = "",
  onClick,
  href
}) => {
  const variants = {
    default: "bg-white border border-gray-200 hover:border-blue-300",
    elevated: "bg-white shadow-lg hover:shadow-xl",
    filled: "bg-gray-50 hover:bg-gray-100",
    primary: "bg-blue-50 border border-blue-200 hover:bg-blue-100",
  };

  const iconVariants = {
    default: "text-blue-600",
    elevated: "text-blue-600",
    filled: "text-gray-600",
    primary: "text-blue-700",
  };

  const baseClasses = "p-6 rounded-lg transition-all duration-200 cursor-pointer";
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <div className="text-center">
      {/* Icon */}
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center ${iconVariants[variant]}`}>
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <div className={classes} onClick={onClick}>
      {content}
    </div>
  );
};

export default FeatureBox;
