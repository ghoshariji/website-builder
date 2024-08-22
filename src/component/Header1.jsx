import React, { useState } from 'react';

const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
 

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Image and Overlay Text */}
          <div className="relative">
            <img
              src="https://www.godaddy.com/assets/images/website-builder/hero/website-builder-hero-image.png"
              alt="Website Builder Hero Image"
              className="rounded-lg shadow-md w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold mb-2">GoDaddy Website Builder</h2>
                <h1 className="text-4xl font-extrabold mb-4">
                  Your free website is just the beginning.
                </h1>
                <p className="text-lg mb-4">
                  Create a mobile-friendly, free website for your business, then
                  watch it take off with built-in marketing.
                </p>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Start for Free
                  </button>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
                    See Plans and Pricing
                  </button>
                </div>
                <p className="text-sm mt-2 text-gray-600">No credit card required.*</p>
              </div>
            </div>
          </div>

          {/* Right Section: Customer Reviews */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Our customers say Excellent</h2>
            <div className="flex space-x-2 mb-4">
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <span
                    key={index}
                    className="bg-green-500 text-white font-bold px-2 py-1 rounded"
                  >
                    ★★★★★
                  </span>
                ))}
            </div>
            <p className="text-lg mb-4">4.7 out of 5 stars based on 103,957 reviews</p>
            <a
              href="#"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Trustpilot
            </a>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Header1;
