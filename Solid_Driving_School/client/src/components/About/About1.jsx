import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import imgD from './Assets/d.jpg';
import imgA from './Assets/a.jpg';
import imgC from './Assets/c.jpg';
import imgB from './Assets/b.jpg';

const About1 = () => {
  const instructors = [
    {
      name: 'Vinura Nanayakkara',
      title: 'Trainer',
      imgSrc: imgD,
      social: {
        facebook: '#',
        linkedin: '#',
        instagram: '#',
      },
    },
    {
      name: 'Sithmi Iyara',
      title: 'Trainer',
      imgSrc: imgA,
      social: {
        facebook: 'https://www.facebook.com/sakuni.sakuni.9210256?mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/sithmi-iyara-0b5837265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/sithmi_iyara?utm_source=qr&igsh=eHBhZnVieTBtbnBn',
      },
    },
    {
      name: 'Inosha Bandara',
      title: 'Trainer',
      imgSrc: imgC,
      social: {
        facebook: '#',
        linkedin: '#',
        instagram: '#',
      },
    },
    {
      name: 'Dulmini Nawanjana',
      title: 'Trainer',
      imgSrc: imgB,
      social: {
        facebook: '#',
        linkedin: '#',
        instagram: '#',
      },
    },
  ];

  return (
    <div className='bg-gray-50 dark:bg-gray-900 dark:text-gray-200 duration-300 min-h-screen  py-10  px-56'>
      {/* Who We Are Section */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Who We Are ?
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          Solid Diving School started in 1960 by Mr. Karunadasa Hewawaduge. Soon after it became a very trusted Government Registered Driving School in Colombo area as well as the country. All our professional & qualified instructors are always with us in this journey. As a leading driving school in Colombo, we provide exceptional training to pass your driving test and make you a disciplined & responsible driver.
        </p>
      </div>

      {/* Why We Are Special Section */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Why We Are Special ?
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          Getting your driving license is a milestone in your life. From the moment you sit in the driver's seat, we focus on training and improving your driving skills. We have a great squad of instructors who will teach you easy tips to pass your driving practical test on the first attempt. Whether you are just turning 18 or have a busy schedule, we offer flexible training hours. All vehicles are comfortable & well-maintained, and training occurs on public streets to ensure you become a road-ready driver.
        </p>
      </div>

      {/* Book Today Section */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Book Today
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          Start your driving lessons with SOLID Learners. For more information on our courses and to book lessons, call us!
        </p>
        <a
          href="tel:+94 741920750" // Replace with your phone number
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Call Us Now
        </a>
      </div>

      {/* Meet the Team Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          Meet the Team
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          We have great experience of driving.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {instructors.map((instructor) => (
          <div
            key={instructor.name}
            className="bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 transform hover:scale-105 text-center"
          >
            <img
              src={instructor.imgSrc}
              alt={`Photo of ${instructor.name}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {instructor.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{instructor.title}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href={instructor.social.facebook}
                  className="hover:text-blue-600"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} style={{ color: '#1877F2' }} />
                </a>
                <a
                  href={instructor.social.instagram}
                  className="hover:text-pink-500"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} style={{ color: '#C13584' }} />
                </a>
                <a
                  href={instructor.social.linkedin}
                  className="hover:text-blue-700"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} style={{ color: '#0077B5' }} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About1;
