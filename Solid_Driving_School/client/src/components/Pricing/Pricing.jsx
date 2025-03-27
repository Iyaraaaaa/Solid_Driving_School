import React from 'react';

const Pricing = ({ packages, addToCart }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {packages.map((pkg, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={pkg.icon} alt={pkg.name} className="w-10 h-10" />
                <span>{pkg.name}</span>
              </div>
              <span className="font-bold">LKR {pkg.price}</span>
            </div>
            <button
              onClick={() => addToCart(pkg)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
