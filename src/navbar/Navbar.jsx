import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
           <header className="bg-white shadow z-50 relative">
        <div className="container mx-auto py-4 flex justify-between items-center px-4 md:px-0">
          <a href="/" className="flex items-center">
            <img src="" alt="GoDaddy Logo" className="h-8" />
            <span className="ml-2 text-xl font-bold">GoDaddy</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {["Domains", "Websites and Hosting", "Email", "Security", "Marketing", "Pricing", "Contact Us", "Help", "Sign In"].map((item) => (
              <a key={item} href="#" className="hover:text-gray-700">
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            See Plans
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={toggleMenu}
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col space-y-2 p-4">
              {["Domains", "Websites and Hosting", "Email", "Security", "Marketing", "Pricing", "Contact Us", "Help", "Sign In"].map((item) => (
                <a key={item} href="#" className="block text-gray-800 hover:text-gray-700">
                  {item}
                </a>
              ))}
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                See Plans
              </button>
            </nav>
          </div>
        )}
      </header>
    </div>
  )
}

export default Navbar
