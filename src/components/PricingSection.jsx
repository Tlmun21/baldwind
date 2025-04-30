import React, { useState } from "react";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);
  const starterPrice = Math.round(productCount * 80);
  const businessPrice = Math.round(productCount * 150);
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-6">${starterPrice}/mo</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Business</h3>
            <p className="text-3xl font-bold mb-6">${businessPrice}/mo</p>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-4">
            {productCount} products
          </p>
          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <input
                type="range"
                min="1"
                max="50"
                onChange={(e) => setProductCount(parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg cursor-pointer appearance-none"
              />
              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;