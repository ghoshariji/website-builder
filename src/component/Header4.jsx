

import React, { useRef } from 'react';
import contact from "../assets/contact.jpeg";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oxalojd', 'template_d4hurli', formRef.current, 'CqULToxPMRANJDGWy')
      .then(
        () => {
          toast.success('Message sent successfully!');
          console.log('SUCCESS!');
        },
        (error) => {
          toast.error('Failed to send message.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>

      <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={contact}
            alt="Contact"
            className="w-full h-auto rounded-md object-cover max-w-sm"
          />
        </div>

        <div className="md:w-1/2">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="to_name"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="from_name"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-base"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
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
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
