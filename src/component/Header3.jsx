import React, { useState } from "react";

// Accordion data array
const accordionData = [
  {
    question: "Why is having a website important for my business?",
    answer:
      "Having a website is crucial for your business as it provides an online presence that helps you reach a wider audience. It enhances your credibility, allows potential customers to find you easily, and provides a platform to showcase your products or services. A website can also help you connect with your customers through various online marketing strategies.",
  },
  {
    question: "What are the benefits of using a website builder?",
    answer:
      "Website builders offer an easy and cost-effective way to create a website without needing coding skills. They come with drag-and-drop interfaces, customizable templates, and built-in features that simplify the website creation process. This allows you to focus on content and design without worrying about technical aspects.",
  },
  {
    question: "How can I make sure my website is secure?",
    answer:
      "To ensure your website is secure, use SSL certificates to encrypt data, regularly update your website and plugins, implement strong password policies, and choose a reliable hosting provider with robust security measures. Regular backups and security scans can also help protect your site from potential threats.",
  },
  {
    question: "What does the Free Website plan include?",
    answer:
      "The Free Website plan typically provides basic templates and hosting options. It is a good starting point for those new to website building, but it may come with limitations such as reduced storage, fewer customization options, and branding from the website builder. Consider upgrading to a paid plan for more features and flexibility.",
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
    <div className="max-w-7xl mx-auto my-8">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray-200 mb-4">
          {/* Question Section */}
          <button
            className="w-full text-left flex justify-between items-center py-4 px-6 bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-poppins font-semibold text-lg">
              {item.question}
            </span>
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
