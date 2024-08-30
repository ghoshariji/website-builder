import React from "react";
import navbar from "../assets/navbar.jpeg";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  return (
    <div>
      <ToastContainer />
      <header>
        <div className="relative z-20 border-b bg-white">
          <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
            <div className="flex items-center justify-between">
              <div className="relative z flex flex-column">
                <Link to="/" className="flex flex-column">
                  <img src={navbar} alt="logo-tailus" className="w-8" />
                  <span className="ml-2 text-xl font-bold">GrowUpNow</span>
                </Link>
              </div>
              <div className="flex items-center justify-end lg:hidden">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                />
                <label
                  htmlFor="hamburger"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                </label>

                {/* Animated Sidebar */}
                <div className="fixed inset-0 z-10 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition-transform duration-500 ease-in-out peer-checked:translate-x-0 lg:static lg:translate-x-0 lg:border-r-0 lg:shadow-none lg:w-auto">
                  <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                    <ul className="px-2 pt-25 text-gray-700 space-y-8 md:px-8 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                      {[
                        "Domains",
                        "Websites",
                        "Hosting",
                        "Marketing",
                        "Pricing",
                        "Contact Us",
                        "Help",
                        "Sign In",
                      ].map((item, index) => (
                        <li
                          key={item}
                          onClick={() => toast.success("Coming Soon")}
                          className={`ml-8 mt-8 justify-center transition-opacity duration-500 ease-out transform peer-checked:opacity-100 peer-checked:translate-x-0 ${
                            index === 0
                              ? "delay-[100ms]"
                              : `delay-[${(index + 1) * 100}ms]`
                          } opacity-100 translate-x-[-20px] lg:opacity-100 lg:translate-x-0`}
                        >
                          <Link
                            to="/"
                            className="group relative text-gray-900 before:absolute
            before:inset-x-0 before:bottom-0 before:h-2
            before:origin-right before:scale-x-0
            before:bg-cyan-100 before:transition
            before:duration-200 hover:before:origin-left
            hover:before:scale-x-100"
                          >
                            <span className="relative group-hover:text-cyan-800">
                              {item}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                      <Link
                        to="/"
                        className="block px-6 py-3 rounded-full
        bg-gradient-to-r from-sky-600 to-cyan-400 text-center
        text-white"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex lg:items-center lg:justify-end">
                <ul className="flex space-x-12 text-gray-700">
                  {[
                    "Domains",
                    "Websites",
                    "Hosting",
                    "Marketing",
                    "Pricing",
                    "Contact Us",
                    "Help",
                    "Sign In",
                  ].map((item) => (
                    <li key={item} onClick={() => toast.success("Coming Soon")}>
                      <Link
                        to="/"
                        className="group relative before:absolute
                          before:inset-x-0 before:bottom-0 before:h-2
                          before:origin-right before:scale-x-0
                          before:bg-cyan-100 before:transition
                          before:duration-200 hover:before:origin-left
                          hover:before:scale-x-100"
                      >
                        <span className="relative group-hover:text-cyan-800">
                          {item}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="ml-6">
                  <Link
                    to="/"
                    className="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
