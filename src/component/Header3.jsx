import React, { useState } from "react";

// Accordion data array
const accordionData = [
  {
    question: "Why should I build a website?",
    answer:
      "By creating a website, you are creating an online presence. This allows you to connect with people that you might not otherwise be able to reach. Whether you’re making a basic website with contact information for your small business or medical practice, creating a landing page for your freelance work, a multi-page experience for your wedding photography business or you just want a place to blog about your thoughts on food, having a website will give you a dynamic advantage.",
  },
  {
    question: "What is a website builder?",
    answer:
      "A website builder is a tool that allows you to create a website without needing to write code. These tools typically offer drag-and-drop functionality, customizable templates, and other features to help you build a website quickly.",
  },
  {
    question: "How can I keep my website secure and safe for my customers?",
    answer:
      "To keep your website secure, you should use SSL certificates, regularly update your software, use strong passwords, and ensure that your hosting provider has security measures in place.",
  },
  {
    question: "What's included in the Free Website option?",
    answer:
      "The free website option usually includes basic templates and hosting but might have limitations in terms of storage, customization options, and branding. It's a great option for getting started before upgrading to a more robust plan.",
  },
];

const Accordion = () => {
  // State to manage which accordion item is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle accordion toggle
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-8">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray-200 mb-4">
          {/* Question Section */}
          <button
            className="w-full text-left flex justify-between items-center py-4 px-6 bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold text-lg">{item.question}</span>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>

          {/* Answer Section */}
          {activeIndex === index && (
            <div className="px-6 pb-4 text-gray-700">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
