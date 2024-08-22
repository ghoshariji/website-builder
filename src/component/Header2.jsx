import React from 'react'

const Header2 = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <img src="https://www.godaddy.com/assets/images/logos/godaddy-logo-new.svg" alt="GoDaddy Logo" className="w-24 h-8" />
          <h1 className="text-2xl font-bold ml-4">GoDaddy Website Builder</h1>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          See Plans
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img src="https://www.godaddy.com/assets/images/website-builder/website-builder-hero-screenshot.jpg" alt="Website Builder Screenshot" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold mb-2">Nourish the mind, body and soul</h2>
            <p className="text-gray-700">Organic plant-rich superfoods, delivered right to your doorstep.</p>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Your free website is just the beginning.</h2>
          <p className="text-lg mb-8">Create a mobile-friendly, free website for your business, then watch it take off with built-in marketing.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
            Start for Free
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            See Plans and Pricing
          </button>
          <p className="text-gray-600 mt-4">* No credit card required.</p>
        </div>
      </div>
      <div className="mt-16">
        <div className="flex justify-center items-center mb-4">
          <h3 className="text-2xl font-bold">Our customers say <span className="text-green-500 font-bold">Excellent</span></h3>
          <div className="flex items-center ml-4">
            <span className="text-green-500 font-bold">*****</span>
            <span className="ml-2">4.7 out of 5 stars based on 103,957 reviews</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src="https://www.trustpilot.com/images/trustpilot_logo.svg" alt="Trustpilot Logo" className="w-16 h-8" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header2
