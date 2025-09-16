// import React, { useState } from "react";

// const FAQItem = ({ question, answer, isOpen, onToggle }) => {
//   return (
//     <div className="border-b border-gray-200">
//       <button
//         className="w-full py-4 text-left flex justify-between items-center hover:text-blue-600 transition-colors duration-200"
//         onClick={onToggle}
//       >
//         <span className="font-medium text-gray-900">{question}</span>
//         <svg
//           className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>
//       {isOpen && (
//         <div className="pb-4">
//           <p className="text-gray-600 leading-relaxed">{answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const FAQSection = ({ title, subtitle, items = [], className = "" }) => {
//   const [openItems, setOpenItems] = useState(new Set());

//   const toggleItem = (index) => {
//     const newOpenItems = new Set(openItems);
//     if (newOpenItems.has(index)) {
//       newOpenItems.delete(index);
//     } else {
//       newOpenItems.add(index);
//     }
//     setOpenItems(newOpenItems);
//   };

//   return (
//     <section className={`py-16 ${className}`}>
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           {title && (
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
//           )}
//           {subtitle && (
//             <p className="text-lg text-gray-600">{subtitle}</p>
//           )}
//         </div>

//         {/* FAQ Items */}
//         <div className="bg-white rounded-lg shadow-lg p-8">
//           {items.map((item, index) => (
//             <FAQItem
//               key={index}
//               question={item.question}
//               answer={item.answer}
//               isOpen={openItems.has(index)}
//               onToggle={() => toggleItem(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;
