import React from 'react';
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { FaCameraRetro } from "react-icons/fa";

const skillsData = [
    {
        name: "Best Price",
        icon: <FaCameraRetro className='text-5xl text-dark dark:text-primary duration-300' />,
        link: '/booking',
        description: "We offer competitive pricing without compromising on quality.",
    },
    {
        name: "A-Z 24 Hours of Service",
        icon: <GiNotebook className='text-5xl text-dark dark:text-primary duration-300' />,
        link: '/about1',
        description: "We are dedicated to being available when you need us.",
    },
    {
        name: "20+ years of Experience",
        icon: <SlNote className='text-5xl text-dark dark:text-primary duration-300' />,
        link: '/about1',
        description: "In the industry, we bring a wealth of knowledge to our driving programs",
    },
];

const Services = () => {
    return (
        <div className='py-14 bg-white dark:bg-dark dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center'>
            <div className='container'>
                <div className='pb-12'>
                    <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>
                        Why Choose Us
                    </h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {skillsData.map((skill) => (
                        <div key={skill.name} className='space-y-3 border-2 border-gray-300 hover:border-primary p-4 sm:py-16 rounded-lg group text-center'>
                            <div className='grid place-items-center'>
                                {skill.icon}
                            </div>
                            <h1 className='text-xl font-medium text-black dark:text-primary'>
                                {skill.name}
                            </h1>
                            <p className='text-sm text-black dark:text-white'>
                                {skill.description}
                            </p>
                            <a href={skill.link} className='text-blue-600  hover:text-primary hover:underline'>
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
