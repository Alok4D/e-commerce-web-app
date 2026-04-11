import React from 'react';
import Image from 'next/image';

const ProductGridLanding = () => {
  const products = [
    { name: 'Ajami Njoya', brand: 'Ateliers Ifé', price: 'CFA 22,500', image: '/product-img/Rectangle 4448 (10).png' },
    { name: 'Ajami Njoya', brand: 'Ateliers Ifé', price: 'CFA 22,500', image: '/product-img/Rectangle 4448 (11).png' },
    { name: 'Ajami Njoya', brand: 'Ateliers Ifé', price: 'CFA 22,500', image: '/product-img/Rectangle 4448 (12).png' },
    { name: 'Ajami Njoya', brand: 'Ateliers Ifé', price: 'CFA 22,500', image: '/product-img/Rectangle 4448 (13).png' },
  ];

  return (
    <section className="w-full bg-[#D1CDC3] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header: Title and See All link */}
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1A1A] uppercase tracking-wider">
            ACTUELLEMENT ADORÉ SUR FINDÉA
          </h2>
          <a href="#" className="text-md font-serif text-[#1A1A1A] hover:opacity-60 transition-opacity font-medium">
            See All
          </a>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Product Info Box */}
              <div className="bg-[#EAE5DB] py-6 px-4 text-center">
                <h3 className="text-sm font-serif font-bold text-[#1A1A1A] mb-1 uppercase tracking-tight">
                  {product.name}
                </h3>
                <p className="text-xs font-serif text-gray-600 mb-2 italic">
                  {product.brand}
                </p>
                <p className="text-xs font-serif text-[#1A1A1A] font-medium">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGridLanding;