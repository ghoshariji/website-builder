import React, { useEffect } from "react";
import $ from "jquery";
import header1 from "../assets/header1.jpeg";
import marketing from "../assets/marketing-campaign-image.png";
import toast, { Toaster } from "react-hot-toast";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../css/Header1.css";
const Header1 = () => {


  useEffect(() => {
    $(document).ready(function () {
      $('.numberdada').each(function () {
        // Strip non-numeric characters from the text value
        const targetValue = parseInt($(this).text().replace(/\D/g, ''));
        const initialValue = 999; // Start counting from 0
        
        // Animate only if targetValue is greater than initialValue
        if (targetValue > initialValue) {
          $(this)
            .prop('Counter', initialValue)
            .animate(
              {
                Counter: targetValue,
              },
              {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                  $(this).text(Math.ceil(now) + '+');
                },
              }
            );
        }
      });
    });
  }, []);
  

  return (
    
    <div className="Maindada">
      <section className="homedada" id="homedada">
        <div className="contentdada">
          <h3>Grow your business with us</h3>
          <p>
            We offer tailored solutions that align with your specific needs,
            whether it’s through digital marketing, strategic planning, or
            enhancing operational efficiency.l
          </p>
          <NavLink to="/" className="btn">
            Discover More
          </NavLink>
        </div>

        <div className="imagedada">
          <img src={marketing} />
        </div>
      </section>

      <div className="containerdada">
        <div className="counterdada">
          <i className="fas fa-code"></i>
          <span className="numberdada">2000</span>
          <h3>Web Design</h3>
        </div>

        <div className="counterdada">
          <i className="fas fa-tools"></i>
          <span className="numberdada">2840</span>
          <h3>Web Development</h3>
        </div>



        <div className="counterdada">
          <i className="fas fa-paint-brush"></i>
          <span className="numberdada">3000</span>
          <h3>Responsive Design</h3>
        </div>

        <div className="counterdada">
        <i className="fas fa-bullhorn"></i>
        <span className="numberdada">2020</span>
        <h3>FullTStack Website</h3>
      </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Toaster />
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
                <li style={{ cursor: "pointer" }}>
                  <ScrollLink to="about" smooth={true} duration={200}>
                    {" "}
                    Getting Started
                  </ScrollLink>
                </li>
              </button>
              <button
                className="border border-gray-300 py-3 px-6 rounded-full font-semibold transition hover:bg-gray-100"
                onClick={() => toast.success("Comming soon")}
              >
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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </a>

        {/* Button for Call */}
        <a
          href="tel:7439120030"
          className="flex items-center justify-center p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72h-2.69a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Header1;
