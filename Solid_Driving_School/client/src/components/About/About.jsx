import React from 'react';
import carPngPng from './Assets/carPng.png';
import blackcar from '../../assets/bcar.png';


const About = () => {
  return (
    <div className='dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
          <div>
            <img
              src={blackcar}
              alt='Car'
              className='sm:scale-105 sm:translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]'
            />
          </div>
          <div>
            <div className='space-y-5 sm:p-16 pb-6'>
              <h1 className='text-3xl sm:text-4xl font-bold font-serif'>
                About Us
              </h1>
              <p>
              Getting your driving license is a milestone in your life. From the moment you sit in the driver's seat, we focus on training and improving your driving skills. We have a great squad of instructors who will teach you easy tips to pass your driving practical test on the first attempt. Whether you are just turning 18 or have a busy schedule, we offer flexible training hours. All vehicles are comfortable & well-maintained, and training occurs on public streets to ensure you become a road-ready driver.
              </p>
              <p>
              Start your driving lessons with SOLID Learners. For more information on our courses and to book lessons, call us!
              </p>
              <div className="grid place-content-center mt-8">
                <a href="/about1">
                  <button className="button-outline">Learn More </button>
                </a>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
