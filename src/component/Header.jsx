import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 md:px-8 lg:px-7">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          Create Your Professional Website or Mobile App with Us
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          At GrowUpNow, we specialize in building high-quality, scalable
          websites and mobile apps tailored to your needs. Whether you’re
          starting a new project or looking to revamp your existing site, we
          offer cost-effective solutions to help you succeed. Contact us today
          to get started!
        </p>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex space-x-2 text-xl font-bold text-gray-800">
              <span className="text-green-600">01.</span>
              <span>
                Choose a template or design from scratch based on your vision.
              </span>
            </div>
            <div className="flex space-x-2 text-xl font-bold text-gray-800">
              <span className="text-green-600">02.</span>
              <span>
                Customize your site with content, images, and features that
                represent your brand.
              </span>
            </div>
            <div className="flex space-x-2 text-xl font-bold text-gray-800">
              <span className="text-green-600">03.</span>
              <span>
                Leverage our marketing tools to attract visitors and grow your
                online presence.
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-lg text-gray-800">
            <div className="flex space-x-2 font-bold">
              <span className="font-bold text-green-600">04.</span>
              <span>
                Manage your entire digital presence from a single dashboard,
                accessible from any device.
              </span>
            </div>
            <div className="flex space-x-2 font-bold">
              <span className="font-bold text-green-600">05.</span>
              <span>
                Expand your capabilities with premium features and additional
                services as needed.
              </span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Ready to bring your idea to life? Contact us today to discuss your
            project and receive a free quote!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h2a4 4 0 014 4v4a4 4 0 01-4 4H3a4 4 0 01-4-4v-4a4 4 0 014-4z"
                ></path>
              </svg>
              <span className="text-lg font-medium">
                Call us:{" "}
                <a
                  href="tel:+7439120030"
                  className="text-green-600 hover:underline"
                >
                      +91-7439120030
                </a>
              </span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6V3a1 1 0 011-1h14a1 1 0 011 1v3m0 0v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6zm0 0l4 4m0 0l4-4m-4 4V3"
                ></path>
              </svg>
              <span className="text-lg font-medium">
                Email us:{" "}
                <a
                  href="mailto:arijit@gmail.com"
                  className="text-green-600 hover:underline"
                >
                  arijitghosh1203@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h2a4 4 0 014 4v4a4 4 0 01-4 4H3a4 4 0 01-4-4v-4a4 4 0 014-4z"
                ></path>
              </svg>
              <span className="text-lg font-medium">
                Call us:{" "}
                <a
                  href="tel:+7439120030"
                  className="text-green-600 hover:underline"
                >
                   +91-9832394372
                </a>
              </span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6V3a1 1 0 011-1h14a1 1 0 011 1v3m0 0v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6zm0 0l4 4m0 0l4-4m-4 4V3"
                ></path>
              </svg>
              <span className="text-lg font-medium">
                Email us:{" "}
                <a
                  href="mailto:arijit@gmail.com"
                  className="text-green-600 hover:underline"
                >
                 niladri30012003@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
