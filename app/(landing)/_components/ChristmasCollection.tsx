import React from 'react';
import Image from 'next/image';

const ChristmasCollection = () => {
  return (
    <section className="w-full h-[734px] relative overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/service-img/image.png"
        alt="Christmas Collection Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Central Content Box - Glassmorphism style */}
      <div className="relative z-10 w-[90%] md:w-[450px] py-12 px-8 bg-white/20 backdrop-blur-sm border border-white/30 text-center shadow-2xl">
        <h2 className="text-2xl md:text-4xl font-serif text-[#1A1A1A] mb-4 uppercase tracking-[0.2em]">
          CHRISTMAS COLLECTION
        </h2>
        <p className="text-md font-serif italic text-[#1A1A1A] mb-8">
          Gifts to make the season shine.
        </p>
        <button className="bg-[#F1E1C2] text-black px-10 py-4 text-sm font-medium hover:bg-[#e5d8c1] transition-all tracking-wide shadow-sm">
          Discover Now
        </button>
      </div>
    </section>

  );
};

export default ChristmasCollection;