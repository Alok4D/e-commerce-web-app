
import { Search, MoveRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[720px] overflow-hidden">
      {/* Background Images (Side by side) */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 relative h-full">
          <Image
            src="/banner-img/hero_image_left.png" // Left-side image
            alt="Product image"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-1/2 relative h-full">
          <Image
            src="/banner-img/hero_image_right.png" // Right-side image
            alt="Service image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Background Overlay (For slight darkness) */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Central Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-0">
        
        {/* Logo/Title */}
        <h1 className="text-7xl font-playfair font-medium tracking-wide mb-10">
          Findéa
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-2xl bg-white text-black py-4 px-6 flex items-center justify-between shadow-2xl rounded-full mb-12">
          <span className="text-sm font-normal text-gray-700">
            Search a product, a boutique or a service....
          </span>
          <Search size={22} className="text-gray-900" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          
          {/* First button - Explore Products (Solid background) */}
          <a
            href="#"
            className="font-playfair font-normal flex items-center gap-2 text-sm text-black bg-[#f0e4cf] py-3 px-8 rounded-full shadow-lg hover:brightness-95 transition-all"
          >
            Explore Products <MoveRight size={18} strokeWidth={1} />
          </a>

          {/* Second button - Explore Services (Border) */}
          <a
            href="#"
            className="font-playfair font-normal flex items-center gap-2 text-sm text-white border-2 border-[#f0e4cf]/70 py-3 px-8 rounded-full hover:bg-white/5 transition-all"
          >
            Explore Services <MoveRight size={18} strokeWidth={1} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;