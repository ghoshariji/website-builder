import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Standard Plan",
      oldPrice: "₹ 20,000",
      newPrice: "₹ 16,999",
      gst: "+ 18% GST ",
      features: [
        "8 pages Website",
        "1 Year Free Domain Name (.com .in .org)",
        "1 Year Free Hosting (Unlimited Space)",
        "Dynamic Website (Premium Design)",
        "Admin Access",
        "Lifetime 24/7 Free Hosting Support",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "SEO Friendly Website",
      ],
      imgSrc: "https://cdn-icons-png.flaticon.com/512/1232/1232701.png",
      bgColor: "bg-white",
      textColor: "text-orange-500",
    },
    {
      name: "Premium Plan",
      oldPrice: "₹ 32,999",
      newPrice: "₹ 28,999",
      gst: "+ 18% GST",
      features: [
        "15 pages Website",
        "1 Year Free Domain Name (.com .in .org)",
        "1 Year Free Hosting (Unlimited Space)",
        "Dynamic Website (Premium Design)",
        "Admin Access",
        "Google Search Console Setup",
        "Lifetime 24/7 Free Hosting Support",
        "Free SSL Certificates",
        "SEO Friendly Website",
      ],
      imgSrc: "https://cdn-icons-png.flaticon.com/512/1487/1487445.png",
      bgColor: "bg-blue-700",
      textColor: "text-white",
    },
    {
      name: "Custom Plan",
      oldPrice: "₹ ????",
      newPrice: "₹ ????",
      gst: "+ 18% GST Applicable",
      features: [
        "Pages: According to Requirement",
        "1 Year Free Domain Name (.com .in .org)",
        "1 Year Free Hosting (Unlimited Space)",
        "Dynamic Website",
        "Admin Access",
        "Google Search Console Setup",
        "Lifetime 24/7 Free Hosting Support",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "10 Free Email Id",
        "SEO Friendly Website",
      ],
      imgSrc: "https://cdn-icons-png.flaticon.com/512/1232/1232711.png",
      bgColor: "bg-white",
      textColor: "text-orange-500",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Web Development, App Development and Website Design
        </h1>
        <p className="mt-4 text-lg text-gray-600">Plans & Pricing</p>
        <p className="mt-2 text-sm text-gray-500 max-w-xl mx-auto">
          We are among India’s best web solution companies committed to offering
          full ROI-driven customized web services at affordable prices. Due to
          its excellent e-commerce website and graphic designs, Flown Developer
          is one of the top web development companies in India.
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border-2 rounded-lg shadow-md p-6 text-center ${plan.bgColor}`}
          >
            <h2 className={`text-xl font-bold ${plan.textColor}`}>
              {plan.name}
            </h2>
            <img
              src={plan.imgSrc}
              alt={`${plan.name} icon`}
              className="mx-auto w-40 h-40 my-6"
            />
            <p
              className={`text-gray-500 line-through ${
                plan.textColor === "text-white" ? "text-white" : ""
              }`}
            >
              {plan.oldPrice}
            </p>
            <p
              className={`text-2xl font-semibold ${
                plan.textColor === "text-white" ? "text-white" : "text-gray-800"
              }`}
            >
              {plan.newPrice}
            </p>
            <p
              className={`text-sm ${
                plan.textColor === "text-white" ? "text-white" : "text-gray-500"
              }`}
            >
              {plan.gst}
            </p>

            <div
              className={`mt-4 text-left ${
                plan.textColor === "text-white" ? "text-white" : "text-gray-800"
              }`}
            >
              <h3 className="font-semibold text-lg text-center">
                Features Includes
              </h3>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <a href="tel:7439120030">
                <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10l1-2m0 0a4 4 0 114 4h-4a4 4 0 00-4 4v1c0 1.333.667 2.667 2 4m0 0h18m-18 0a10.418 10.418 0 01-1-4m19-5V8a5 5 0 00-5-5H8a5 5 0 00-5 5v2m18 2v5a3 3 0 01-3 3h-4a3 3 0 01-3-3v-4m-6 4v-1"
                    />
                  </svg>
                  Call Now
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
