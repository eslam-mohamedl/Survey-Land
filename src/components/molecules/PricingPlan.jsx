import React from "react";
import Button from "../atoms/Button";

const PricingPlan = ({ 
  name, 
  price, 
  period = "month",
  description,
  features = [],
  popular = false,
  buttonText = "Get Started",
  onSelect,
  className = ""
}) => {
  return (
    <div className={`relative bg-white rounded-lg shadow-lg border-2 ${popular ? 'border-blue-500' : 'border-gray-200'} ${className}`}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold text-gray-900">${price}</span>
            <span className="text-gray-500 ml-1">/{period}</span>
          </div>
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <Button
          variant={popular ? "primary" : "outline"}
          size="lg"
          fullWidth
          onClick={onSelect}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingPlan;
