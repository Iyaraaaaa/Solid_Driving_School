import React from 'react';
import pack1 from './assets/a.webp';
import pack2 from './assets/b.webp';
import pack3 from './assets/c.jpg';

const packages = [
  {
    name: 'Individual Package',
    description:
      'Our driving school individual package is designed to provide students with a comprehensive and personalized driving education experience.',
    imgSrc: pack1,
  },
  {
    name: 'VIP Package',
    description:
      'Home pick-up and drop-off package, designed for a convenient and stress-free way to learn how to drive.',
    imgSrc: pack2,
  },
  {
    name: 'Refresher Package',
    description:
      'Perfect for drivers who need to brush up on their driving skills and knowledge.',
    imgSrc: pack3,
  },
];

const PackagesPage = () => {
  return (
    <div className="dark:bg-black bg-white text-black py-12 ">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold dark:text-white text-black">Our Main Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-gray-800 shadow-xl rounded-lg overflow-hidden">
              <img src={pkg.imgSrc} alt={pkg.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
                <p className="mt-4 text-gray-300">{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
