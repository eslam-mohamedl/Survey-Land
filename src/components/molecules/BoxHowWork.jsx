const BoxHowWork = ({
  cardsData = [], // مصفوفة بيانات الكروت
  variant = "default",
  padding = "p-6",
  className = "",
  hoverable = false,
  NumberCard = 3,
  ...props
}) => {
  const variants = {
    default: "bg-white border border-gray-200",
    elevated: "bg-white border border-gray-200 shadow-lg",
    outlined: "bg-white border border-gray-300 shadow-none",
    filled: "bg-gray-50 border border-gray-200",
  };

  const hoverClasses = hoverable
    ? "hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer"
    : "";

  const baseClasses = `rounded-lg ${padding}`;
  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`;

  return (
    <div
      className={`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-${NumberCard}`}
      {...props}
    >
      {cardsData.map((card, index) => (
        <div key={index} className={classes}>
          {card.icon && <div className="mb-2">{card.icon}</div>}
          <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BoxHowWork;
