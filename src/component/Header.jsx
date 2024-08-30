import React from "react";

const Header = () => {
  return (
    <div>
      <section id="about" className="sm:pt-1">
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
              offer cost-effective solutions to help you succeed. Contact us
              today to get started!
            </p>

            {/* Steps Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex space-x-2 text-xl font-bold text-gray-800">
                  <span className="text-green-600">01.</span>
                  <span>
                    Choose a template or design from scratch based on your
                    vision.
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
                    Leverage our marketing tools to attract visitors and grow
                    your online presence.
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
                    Expand your capabilities with premium features and
                    additional services as needed.
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Us (24 * 7)
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Ready to bring your idea to life? Contact us today to discuss
                your project and receive a free quote!
              </p>

              <div className="flex flex-col md:flex-row justify-center items-start space-y-1 md:space-y-0 md:space-x-8 mt-5">
                <div className="flex items-center">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <span className="text-lg font-medium">
                    <a
                      href="tel:7439120030"
                      className="text-green-600 hover:underline"
                    >
                      +91-7439120030
                    </a>
                  </span>
                </div>

                <div className="flex items-center">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>

                  <span className="text-lg font-medium">
                    Email :
                    <a
                      href="mailto:arijitghosh1203@gmail.com"
                      className="text-green-600 hover:underline"
                    >
                      arijitghosh1203@gmail.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-start space-y-1 mt-5 md:space-y-0 md:space-x-8">
                <div className="flex items-center">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <span className="text-lg font-medium">
                    <a
                      href="tel:9832394372"
                      className="text-green-600 hover:underline"
                    >
                      +91-9832394372
                    </a>
                  </span>
                </div>
                <div className="flex items-center">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>

                  <span className="text-lg font-medium">
                    Email :
                    <a
                      href="mailto:niladri30012003@gmail.com"
                      className="text-green-600 hover:underline"
                    >
                      niladri30012003@gmail.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-start space-y-1 mt-5 md:space-y-0 md:space-x-8">
                <div className="flex items-center">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <span className="text-lg font-medium">
                    <a
                      href="tel:9641610663"
                      className="text-green-600 hover:underline"
                    >
                      +91-9641610663
                    </a>
                  </span>
                </div>
                <div className="flex items-center">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>

                  <span className="text-lg font-medium">
                    Email :
                    <a
                      href="mailto:acharyaanupam72@gmail.com"
                      className="text-green-600 hover:underline"
                    >
                      acharyaanupam72@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
