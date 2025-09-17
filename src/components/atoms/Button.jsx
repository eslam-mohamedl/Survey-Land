import React from "react";

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  disabled = false, 
  loading = false,
  fullWidth = false,
  onClick, 
  type = "button",
  className = "",
  isRounded=false,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium  transition-all duration-200 ";
  
  const variants = {
    primary: "bg-[#00B7C1] text-white  dark:bg-dark-primary capitalize  cursor-pointer",
    secondary: "bg-[#D6F2F5] text-dark-primary  capitalize dark:bg-dark-primary  cursor-pointer",
    outline: "border-2 border-[#00B7C1] text-[#00B7C1]  capitalize  dark:bg-dark-primary  cursor-pointer" ,
    ghost: "text-[#00B7C1]  capitalize cursor-pointer ",
      toggleActive: "bg-primary  text-white cursor-pointer dark:text-dark", 
  toggleInactive: "bg-white  dark:bg-dark-secondary text-gray-600 dark:text-white cursor-pointer",
  active:"bg-primary text-white cursor-pointer "  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
const rounded = isRounded ? "rounded-full" : "rounded-lg";
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className} ${rounded}`;
  
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
