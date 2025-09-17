import Button from '../atoms/Button';
import * as icon from './../../assets/icons/icons';
const PricingCard = ({
    variant = "default",
    title,
    description, 
    price,
    period ="/month",
    features = [],
    buttonText ,
    onButtonClick,
}) =>{
    const variants = {
        default : "bg-white border border-gray-200 shadow-sm",
        filled : "bg-primary text-white shadow-lg",
        light : "bg-white text-gray-800 shadow-md",

    }
    return(
         <div
      className={`rounded-2xl p-6 flex flex-col justify-between  transition-all duration-300 ${variants[variant]}`}
    >
      {/* العنوان والوصف */}
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {description && <p className="text-sm mb-4">{description}</p>}

        {/* السعر */}
        {price && (
          <div className="text-3xl font-bold mb-4">
            ${price}
            <span className="text-base font-medium ml-1">{period}</span>
          </div>
        )}

        {/* المميزات */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <div>
                  <icon.Check />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* زرار */}
      <Button
        variant={variant === "filled" ? "toggleActive" : "outline"}
        size="md"
        onClick={onButtonClick}
        className="rounded-full"
      >
        {buttonText}
      </Button>
    </div>
    )
}

export default PricingCard