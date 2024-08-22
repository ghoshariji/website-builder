import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <h1 className="text-4xl font-bold mb-4">How to create a free website.</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Whether you're building a website to show off your portfolio or setting up a store to sell anything from cookies to digital recipes to baking classes, you can do it all with Websites + Marketing. Follow these steps to create your website with our powerful, all-in-one builder designed to help you grow.
        </p>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex space-x-2">
              <span className="font-bold text-lg">01.</span>
              <span>Start creating your free site or store by picking a template.</span>
            </div>
            <div className="flex space-x-2">
              <span className="font-bold text-lg">02.</span>
              <span>Add your content, products and business info to make it yours.</span>
            </div>
            <div className="flex space-x-2">
              <span className="font-bold text-lg">03.</span>
              <span>Use built-in marketing to let people know you’re open for business.</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex space-x-2">
              <span className="font-bold text-lg">04.</span>
              <span>Manage everything — reviews, orders, social — from 1 dashboard, on any device.</span>
            </div>
            <div className="flex space-x-2">
              <span className="font-bold text-lg">05.</span>
              <span>Buy premium features — store add-ons, SEO, appointments — as you need ‘em.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
