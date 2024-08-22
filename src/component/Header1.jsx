import React from "react";
import header1 from "../assets/header1.jpeg";
const Header1 = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 p-6">
          {/* Image section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={header1}
              alt="Website Builder Screenshot"
              className="rounded-md shadow-lg"
            />
          </div>

          {/* Text section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-poppins text-4xl font-bold mb-4">
              Your Business is just the Growing.
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Create a mobile-friendly, website and mobile application for your
              business, then watch it take off with built-in marketing.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <button className="bg-black text-white py-3 px-6 rounded-full font-semibold transition hover:bg-gray-800">
                Getting Started
              </button>
              <button className="border border-gray-300 py-3 px-6 rounded-full font-semibold transition hover:bg-gray-100">
                See Plans and Pricing
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 px-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
                Our customers say{" "}
                <span className="text-green-500 font-extrabold">Excellent</span>
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500 font-bold text-xl">★★★★★</span>
                <span className="text-gray-600">
                  4.5 out of 5 stars based on 500 reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-4 md:space-y-6">
        {/* Button for WhatsApp */}
        <a
          href="https://wa.me/7439120030"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h18v18H3V3zM15.35 14.65l-2.8-2.8a2.53 2.53 0 00-1.72-.71c-.69 0-1.39.27-1.72.71l-.75.76a.67.67 0 01-.68.15c-.11-.05-.22-.1-.33-.15l-1.45-.95a.67.67 0 01-.23-.8c.1-.37.28-.71.54-.98l.65-.66a3.59 3.59 0 01.54-.37c.24-.09.5-.14.76-.14.75 0 1.48.29 2.03.84l2.8 2.8c.32.32.32.85 0 1.17-.31.31-.84.31-1.16 0z"
            />
          </svg>
        </a>

        {/* Button for Call */}
        <a
          href="tel:+7439120030"
          className="flex items-center justify-center p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 10h12v4H6v-4z"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Header1;
