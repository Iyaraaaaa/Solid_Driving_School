import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import conGif from './cont.gif'; 
import axios from 'axios';
import toast from "react-hot-toast";

const ContactUs = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios.post('http://localhost:3000/api/contactus', values)
      .then((result) => {
        console.log(result);
        toast.success("Your Response Was Successfully Submitted");
      })
      .catch((error) => {
        toast.error(error)
        console.error('Error submitting form:', error)
      });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900   py-6 px-56">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Get in Touch with Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          We would love to hear from you. Whether you have a question or just want to say hello, feel free to reach out to us!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-2/3 w-full mb-12 lg:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6185266317098!2d79.84331527448292!3d6.936113418232025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25926b6df0efb%3A0x9b5520a057b38707!2sMetropolitan%20Campus%20KDU!5e0!3m2!1sen!2slk!4v1724261299673!5m2!1sen!2slk"
            width="100%"
            height="500"
            className="border-2 rounded-lg shadow-lg"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
          
          <h3 className="text-teal-600 text-2xl font-serif mt-12">
            If You Have Any Problems, Feel Free to Contact Us
          </h3>
        
          <div className="flex flex-col lg:flex-row items-start mt-8 space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="flex-shrink-0 w-full lg:w-1/3 text-center">
              <img
                src={conGif}
                alt="Contact Us"
                style={{ width: '400px', height: 'auto' }} 
                className="object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="lg:w-2/3 flex flex-col justify-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
                <p className="text-xl font-roboto font-semibold text-gray-800 dark:text-gray-300 mb-4">
                 <i>
                  If you have any questions or need assistance, please don’t hesitate to reach out to us. Our team is here to help with any concerns you might have and to ensure you have the best experience possible.
                  </i> 
                </p>
                <p className="text-xl font-roboto font-semibold text-gray-800 dark:text-gray-300"> 
                  <i>
                  Whether you need support with scheduling, have questions about our programs, or require any other assistance, we’re just a call or message away. Your satisfaction is our priority, and we’re committed to providing prompt and helpful responses to all inquiries.
                  </i> 
                </p> 
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Contact Us Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-6">
              <div>
                <label htmlFor="formName" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  id="formName"
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Name"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="formEmail" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="formEmail"
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Email Address"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="formAddress" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Address
                </label>
                <input
                  id="formAddress"
                  type="text"
                  placeholder="Your Address"
                  className="w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Address"
                  name="address"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="formContactNo" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact No.
                </label>
                <input
                  id="formContactNo"
                  type="text"
                  placeholder="Your Contact Number"
                  className="w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Contact Number"
                  name="contact"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="formMessage" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="formMessage"
                  rows="6"
                  placeholder="Your Message"
                  className="w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Message"
                  name="message"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-8 text-gray-800 dark:text-white">
            <h4 className="text-lg font-semibold mb-4">Contact Details</h4>
            <p className="mb-2"><strong>Contact No:</strong> 033-455-2750</p>
            <p className="mb-6"><strong>Email:</strong> solidschool@gmail.com</p>
            <div className="flex space-x-4">
              <FaFacebook size={32} className="text-blue-600 cursor-pointer hover:text-blue-700" aria-label="Facebook" />
              <FaInstagram size={32} className="text-pink-600 cursor-pointer hover:text-pink-700" aria-label="Instagram" />
              <FaYoutube size={32} className="text-red-600 cursor-pointer hover:text-red-700" aria-label="YouTube" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
