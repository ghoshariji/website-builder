import React, { useState } from "react";

// Accordion data array
const accordionData = [
  {
    question: "What is the difference between web design and development?",
    answer:
      "Website development service and design are two distinct processes. While website development service involves writing code to provide functions and features on a website, website design focuses on designing the layout of a website and producing visually appealing content. While web developers concentrate on functionality, website designers prioritise aesthetics and usability. Designers utilise programmes like Photoshop and Illustrator to make the user experience visually appealing, and programmers use languages like HTML, CSS, JavaScript, and PHP to make dynamic websites that communicate with databases. Web development focuses on how things function, whereas web design focuses on how things look.",
  },

  {
    question: "What is a front-end website developer?",
    answer:
      "A front-end developer in a good development agency has the primary duty to make sure that users of the website can easily interact with the page. They accomplish this by combining programming, design, and technology to code a website’s aesthetic and take care of debugging. The part of websites and online applications that users actually view and interact with is built by front-end developers. Using web languages like HTML, CSS, and JavaScript, a front-end developer develops websites and applications that people can access and utilise.",
  },

  {
    question: "What is coding in website development?",
    answer:
      "Coding is a significant part of website development, which involves programming languages like HTML, CSS and JavaScript. It defines how the website will look and function. Coding helps create webpages that are organized and easy to read. The code also provides instructions to the browser so it knows how to display the content on the page. Code is written by developers who take into account aesthetics, usability, accessibility and other design principles when crafting websites. Without coding, websites would not be able to provide users with an easy-to-navigate interface or include rich functionalities such as animations, interactivity or dynamic elements like search bars and forms. Coding is a vital part of website development as it facilitates structuring content in a way that makes sense for users and works as intended when accessed from multiple devices and web browsers.",
  },
  {
    question: "What is dynamic website development?",
    answer:
      "Dynamic website development is the process of creating a website that utilizes web technologies to generate content in response to user interaction. This interaction can come from either the server or the client side, which provides a way for developers to create websites that are tailored to each user based on their preferences and interactions. Dynamic websites are more flexible, powerful, and interactive than static websites, as they can react to changes in data and provide real-time feedback on user interactions. Dynamic website development requires specific programming languages, frameworks, libraries and databases, but they offer multi-functionality and extensibility that allows them to be adapted for many different uses. By coding in such a way that the application pulls data from external sources, dynamic websites are capable of delivering tailored content responses for each user.",
  },
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
    <div>
      <div className="max-w-7xl mx-auto my-6">
      <div className="flex flex-col items-center justify-center p-5">
          <h5> FAQs</h5>
          <h1 className="text-3xl font-bold text-gray-800">
            Frequently Asked Question
          </h1>
          </div>

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
    </div>
  );
};

export default Accordion;
