import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is Pass-X secure?",
      answer: "Yes, Pass-X uses military-grade encryption to protect your passwords.",
    },
    {
      question: "How do I reset my master password?",
      answer: "You can reset your master password through the account settings page.",
    },
    // Add more FAQs here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 
      dark:from-[#0f1520] dark:to-slate-800 
      transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{faq.question}</h2>
              <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 