import React from "react";
import mobile from "../assets/mobile.jpeg";
import { ScrollLink } from "react-scroll";
//import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Mobile = () => {
  return (
    <div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Mobile Application Development
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              We provide top-notch mobile application services to help your
              business grow and reach a wider audience.
            </p>
            {/* Rating System */}
            <div className="flex justify-center items-center mt-4">
              {/* <FaStar className="text-yellow-500 w-6 h-6" />
              <FaStar className="text-yellow-500 w-6 h-6" />
              <FaStar className="text-yellow-500 w-6 h-6" />
              <FaStar className="text-yellow-500 w-6 h-6" />
              <FaStarHalfAlt className="text-yellow-500 w-6 h-6" /> */}
              <span className="ml-2 text-lg text-gray-700">4.5/5</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Left Column - Image */}
            <div className="md:w-1/2">
              <img
                src={mobile}
                alt="Mobile App Development"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right Column - Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-700">
                Grow Your Business with a Custom Mobile App
              </h3>
              <p className="mt-4 text-gray-600">
                Our team of experts will work with you to create a powerful
                mobile application that meets your unique needs, from design to
                deployment.
              </p>
              <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                <a href="#contact">Connect Us</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
