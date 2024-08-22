import React, { useState } from 'react';
import axios from 'axios';
import contact from "../assets/contact.jpeg"
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/contact', formData);
      setResponse(res.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponse({ error: 'An error occurred while submitting your message. Please try again later.' });
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      
      {/* Accordion Component (assuming it's imported and placed here) */}
      {/* <Accordion /> */}
      
      <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={contact}
            alt="Contact"
            className="w-full h-auto rounded-md object-cover max-w-sm"
          />
        </div>
        
        {/* Form Section */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md text-base"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md text-base"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
          {response && (
            <div className="mt-4">
              {response.error ? (
                <p className="text-red-500">{response.error}</p>
              ) : (
                <p className="text-green-500">{response.message}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
