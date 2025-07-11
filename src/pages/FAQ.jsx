import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the cancellation policy?",
      answer: "Cancellations made 7 days before the trip will incur a 10% fee. No refunds for cancellations within 24 hours of the trip.",
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Travel insurance is not included in the package but is highly recommended for all travelers.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept UPI, credit/debit cards, and bank transfers. Please refer to the payment details section for more information.",
    },
    {
      question: "Are meals included in the package?",
      answer: "Yes, meals are included as per the itinerary. Additional meals during transit are not included.",
    },
    {
      question: "Can I customize my trip?",
      answer: "Yes, we offer customizable trips for groups. Please contact us for more details.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Frequently Asked Questions</h1>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 transition"
            >
              <h2 className="text-lg font-semibold text-blue-600">{faq.question}</h2>
              <svg
                className={`w-5 h-5 text-blue-600 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <motion.div
                className="p-4 bg-white"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.2, ease: "easeInOut" },
                  opacity: { duration: 0.2, ease: "easeInOut" },
                }}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
