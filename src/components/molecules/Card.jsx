import React from "react";

const Card = ({ 
  children, 
  title, 
  subtitle,
  header,
  footer,
  variant = "default",
  padding = "p-6",
  className = "",
  onClick,
  hoverable = false,
  ...props 
}) => {
  const baseClasses = "bg-white rounded-lg border border-gray-200 shadow-sm";
  
  const variants = {
    default: "bg-white border-gray-200",
    elevated: "bg-white border-gray-200 shadow-lg",
    outlined: "bg-white border-gray-300 shadow-none",
    filled: "bg-gray-50 border-gray-200",
  };
  
  const hoverClasses = hoverable ? "hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer" : "";
  const clickableClasses = onClick ? "cursor-pointer" : "";
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${clickableClasses} ${className}`;
  
  return (
    <div 
      className={classes} 
      onClick={onClick}
      {...props}
    >
      {/* Header */}
      {(title || subtitle || header) && (
        <div className="px-6 py-4 border-b border-gray-200">
          {header ? (
            header
          ) : (
            <div>
              {title && (
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              )}
              {subtitle && (
                <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
              )}
            </div>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className={padding}>
        {children}
      </div>
      
      {/* Footer */}
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
