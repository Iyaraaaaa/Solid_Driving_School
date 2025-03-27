import React from 'react';
import carPngPng from './Assets/carPng.png'; 
import yellowcarPng from './Assets/yellowcar.png';
import porsche from '../../assets/ycar.png';
import range from '../../assets/ocar.png';


const Hero = ({ theme }) => {
  return (
    <div className='dark:bg-black dark:text-white duration-300 relative z-20'>
      <div className='container min-h-[620px] flex'>
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
          <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className='order-1 sm:order-2'>
            <img
              src={theme === 'dark' ? range : porsche}
              alt=''
              className='relative z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'
            />
          </div>
          <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
            <p className='text-primary text-2xl font-serif'>Drive with Assurance and Safety</p>
            <h1 className='text-5xl lg:text-7xl font-semibold font-serif'>
              Driving Academy
            </h1>
            <p>
            Driving academy is dedicated to turning learners into confident, responsible drivers. With expert instructors and hands-on training,
            we ensure you not only pass your test but also drive safely and confidently for life.
            </p>
            <div className="grid place-content-start mt-8">
                <a href="/register">
                  <button className="button-outline">Get Started </button>
                </a>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
