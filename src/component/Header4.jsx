import React, { useRef } from "react";
import contact from "../assets/contact.jpeg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oxalojd",
        "template_d4hurli",
        formRef.current,
        "CqULToxPMRANJDGWy"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error("Failed to send message.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
    <section id="contact">
       <ToastContainer />
      <div className="py-8 px-2 sm:px-4 lg:px-4">
        <h1 className="text-3xl font-bold mb-4 flex flex-center justify-center">Contact Us</h1>

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
                <label htmlFor="name" className="block text-sm font-medium">
                  Name :{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  name="to_name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email :{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md text-base"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message :{" "}
                </label>
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
       
       
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.333204763389!2d76.86975947495951!3d30.87733847451471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff55d9e0ed113%3A0x34a6cadf9a13d341!2sCHITKARA%20UNIVERSITY%2C%20BADDI!5e0!3m2!1sen!2sin!4v1722003923018!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ marginBottom: "3rem", overflow: "hidden" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>

    </div>
  );
};

export default ContactPage;
