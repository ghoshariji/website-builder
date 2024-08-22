import React from "react";
import header1 from "../assets/header1.jpeg";
const Header1 = () => {
  return (
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
  );
};

export default Header1;
