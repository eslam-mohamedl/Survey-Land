import React, { forwardRef } from "react";

const Input = forwardRef(({ 
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  success,
  disabled = false,
  required = false,
  fullWidth = false,
  size = "md",
  leftIcon,
  rightIcon,
  className = "",
  ...props 
}, ref) => {
  const baseClasses = "block w-full border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-4 py-3 text-base",
  };
  
  const states = {
    default: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
    error: "border-red-500 focus:border-red-500 focus:ring-red-500",
    success: "border-green-500 focus:border-green-500 focus:ring-green-500",
  };
  
  const getStateClass = () => {
    if (error) return states.error;
    if (success) return states.success;
    return states.default;
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  const classes = `${baseClasses} ${sizes[size]} ${getStateClass()} ${widthClass} ${className}`;
  
  const hasIcon = leftIcon || rightIcon;
  const inputClasses = hasIcon ? `${classes} ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''}` : classes;
  
  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">{leftIcon}</span>
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClasses}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-400">{rightIcon}</span>
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      
      {success && !error && (
        <p className="mt-1 text-sm text-green-600">{success}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
