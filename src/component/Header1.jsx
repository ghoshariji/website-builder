import React, { useEffect } from "react";
import $ from "jquery";
import header1 from "../assets/header1.jpeg";
import toast, { Toaster } from "react-hot-toast";
import { Link as ScrollLink } from "react-scroll";
import "../css/Header1.css";
const Header1 = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".numberdada").each(function () {
        // Strip non-numeric characters from the text value
        const targetValue = parseInt($(this).text().replace(/\D/g, ""));
        const initialValue = 999; // Start counting from 0

        // Animate only if targetValue is greater than initialValue
        if (targetValue > initialValue) {
          $(this)
            .prop("Counter", initialValue)
            .animate(
              {
                Counter: targetValue,
              },
              {
                duration: 4000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now) + "+");
                },
              }
            );
        }
      });
    });
  }, []);

  return (
    <div>
      <div className="Maindada">

        <div className="containerdada flex flex-wrap gap-8 p-6">
          <div className="counterdada flex flex-col items-center text-center">
            <i className="fas fa-code text-4xl mb-2"></i>
            <span className="numberdada text-2xl font-bold mb-1">30+</span>
            <h3 className="text-xl font-semibold">App Development</h3>
          </div>

          <div className="counterdada flex flex-col items-center text-center">
            <i className="fas fa-tools text-4xl mb-2"></i>
            <span className="numberdada text-2xl font-bold mb-1">25+</span>
            <h3 className="text-xl font-semibold">Website Development</h3>
          </div>

          <div className="counterdada flex flex-col items-center text-center">
            <i className="fas fa-paint-brush text-4xl mb-2"></i>
            <span className="numberdada text-2xl font-bold mb-1">1500</span>
            <h3 className="text-xl font-semibold">Grow Up Now</h3>
          </div>

          <div className="counterdada flex flex-col items-center text-center">
            <i className="fas fa-bullhorn text-4xl mb-2"></i>
            <span className="numberdada text-2xl font-bold mb-1">45+</span>
            <h3 className="text-xl font-semibold">Hosting</h3>
          </div>
        </div>

        <div className="min-h-screen flex flex-col items-center justify-center bg-white py-12 px-4">
          <Toaster />
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            {/* Image section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={header1}
                alt="Website Builder Screenshot"
                className="w-full rounded-md shadow-lg"
              />
            </div>

            {/* Text section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-4">
                Your Business is just Growing.
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Create a mobile-friendly website and mobile application for your
                business, then watch it take off with built-in marketing.
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <button className="bg-black text-white py-3 px-6 rounded-full font-semibold transition hover:bg-gray-800">
                  <ScrollLink to="about" smooth={true} duration={200}>
                    Getting Started
                  </ScrollLink>
                </button>
                <button
                  className="border border-gray-300 py-3 px-6 rounded-full font-semibold transition hover:bg-gray-100"
                  onClick={() => toast.success("Coming soon")}
                >
                  See Plans and Pricing
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 px-4 max-w-5xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center mb-6">
                <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
                  Our customers say{" "}
                  <span className="text-green-500 font-extrabold">
                    Excellent
                  </span>
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500 font-bold text-xl">
                    ★★★★★
                  </span>
                  <span className="text-gray-600">
                    4.5 out of 5 stars based on 500 reviews
                  </span>
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
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WhatsApp icon</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
      </div>
    </div>
  );
};

export default Header1;
