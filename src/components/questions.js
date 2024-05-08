// FAQSection.js

import React, { useState } from "react";

const FAQSection = () => {
  // Sample data for frequently asked questions and answers
  const faqData = [
    { id: 1, question: 'How can I make an invoice for free?', answer: 'Refrens is the best free invoice generator as you can create invoices for clients without paying a single amount. You can freely customize your fields and columns, download the invoice as PDF or send it directly via email, or share it via WhatsApp and within one click you can create a delivery challan, payment receipt, debit note and credit note. Not only this, you can create quotations, purchase orders, proforma invoices, payment receipts, delivery challan, and expense management and can also keep the records of your inventory.' },
    { id: 2, question: 'Can I save my invoices to this online invoice generator?', answer: 'Yes. All the invoices created by you are saved online. You can access all the invoices anytime just by logging into your account.' },
    { id: 3, question: 'Can I generate a PDF invoice using this invoice generator?', answer: 'Yes, it is easy to download the PDF invoice using Refrens invoice maker. , clicking on the option of "Download PDF" will make your invoice in PDF format. Moreover, you can also email the invoice, print the invoice, and send the invoice via WhatsApp or schedule for future dates.' },
    // Add more FAQs as needed
  ];

  // State to keep track of expanded questions
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  // Handle toggle for question expansion
  const handleQuestionToggle = (questionId) => {
    setExpandedQuestions((prevExpandedQuestions) =>
      prevExpandedQuestions.includes(questionId)
        ? prevExpandedQuestions.filter((id) => id !== questionId)
        : [...prevExpandedQuestions, questionId]
    );
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqData.map(({ id, question, answer }) => (
        <div key={id} className={`faq-item ${expandedQuestions.includes(id) ? 'expanded' : ''}`}>
          <div
            onClick={() => handleQuestionToggle(id)}
          >
            {question}
          </div>
          {expandedQuestions.includes(id) && (
            <div>
              <h3>Answer</h3>
              <p>{answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
