import React, { useState } from "react";
import navbar from "../assets/navbar.jpeg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header className="bg-white shadow z-50 relative">
        <div className="container mx-auto py-4 flex justify-between items-center px-4 md:px-0">
          <a href="/" className="flex items-center">
            <img src={navbar} alt="GoDaddy Logo" className="h-8 pl-4" />
            <span className="ml-2 text-xl font-bold">GrowUpNow</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {[
              "Website",
              "Mobile Application",
              "Hosting",
              "Plannig",
              "Marketing",
              "Pricing",
              "Contact Us",
              "Help",
            ].map((item) => (
              <a key={item} href="#" className="hover:text-gray-700">
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden md:block hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"></button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col space-y-2 p-4">
              {[
                "Domains",
                "Websites and Hosting",
                "Email",
                "Security",
                "Marketing",
                "Pricing",
                "Contact Us",
                "Help",
                "Sign In",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-800 hover:text-gray-700"
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                See Plans
              </button>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
