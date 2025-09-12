
export default function BoxHowItWork({
  title,
  text,
  value,
  variant
}){
    if(variant === "smallBox"){
  return(

    <div className="p-6  bg-white shadow-md rounded-lg text-center">
        <h3 className="text-lg font-semibold text-teal-600">{title}</h3>
        <p className="text-gray-600 mt-2">{text}</p>
      </div>

  )
    }
      if (variant === "tradeBox") {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg text-center">
        <h2 className="text-2xl font-bold text-black">{value}</h2>
        <p className="text-gray-500">{title}</p>
      </div>
    );
  }

  return null;
    
  
}