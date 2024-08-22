import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="container mx-auto px-4 md:px-0 grid grid-cols-2 md:grid-cols-5 gap-8 pb-8">
        {/* About GoDaddy */}
        <div>
          <h3 className="text-lg font-bold mb-4">About GoDaddy</h3>
          <ul className="space-y-2">
            {["About Us", "Annual Returns", "Careers", "Contact Us", "Corporate Social Responsibility", "GoDaddy Blog", "Investor Relations", "Legal", "Newsroom", "Trust Center"].map(item => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            {["Product", "Support", "Report Abuse", "Resources"].map(item => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            {["Webmail", "WHOIS", "ICANN Confirmation", "Designers & Developers", "Redeem Code", "Product Catalog", "Customer Testimonials", "Business Name Generator"].map(item => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Partner Programs */}
        <div>
          <h3 className="text-lg font-bold mb-4">Partner Programs</h3>
          <ul className="space-y-2">
            {["Affiliates", "Reseller Programs", "GoDaddy Pro"].map(item => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-lg font-bold mb-4">Account</h3>
          <ul className="space-y-2">
            {["My Products", "Renewals & Billing", "Create Account"].map(item => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Shopping */}
        <div>
          <h3 className="text-lg font-bold mb-4">Shopping</h3>
          <ul className="space-y-2">
            {["Buy a Domain", "Websites", "Business Email", "WordPress", "Hosting", "Web Security", "Logo Generator"].map(item => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 py-4 text-center text-gray-400">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 1999 - 2024 GoDaddy. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Legal</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Cookies</a>
            </div>
          </div>
          <p className="text-sm mt-2">
            Use of this Site is subject to express terms of use. By using this site, you signify that you agree to be bound by these Universal Terms of Service.
          </p>
        </div>
      </div>

      {/* Contact Us */}
      <div className="bg-black py-4 text-white text-center">
        <button className="bg-white text-black font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-300">
          Contact Us
        </button>
      </div>
    </footer>
  );
};

export default Footer;
