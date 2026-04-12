
import { Search, MoveRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2]">
      {/* Top Part: Images and Search Bar */}
      <div className="relative w-full h-[450px] md:h-[738px] overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 flex w-full">
          <div className="w-1/2 relative h-full">
            <Image
              src="/banner-img/Gemini_Generated_Image_2tv8hi2tv8hi2tv8.png"
              alt="Product image"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="w-1/2 relative h-full">
            <Image
              src="/banner-img/Gemini_Generated_Image_1t57ux1t57ux1t57.png"
              alt="Service image"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Search Bar Overlay (Mobile & Desktop) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <h1 className="hidden md:block text-7xl font-playfair font-medium tracking-wide mb-10 text-white">
            Findéa
          </h1>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl bg-[#F7F5F2]/95 md:bg-white text-black py-4 px-6 flex items-center justify-between shadow-2xl rounded-sm md:rounded-full">
            <span className="text-[13px] md:text-sm font-normal text-gray-700">
              Search a product, a boutique or a service....
            </span>
            <Search size={20} className="text-gray-900" />
          </div>

          {/* Desktop Action Buttons (Hidden on mobile) */}
          <div className="hidden md:flex items-center justify-center gap-6 mt-12">
            <a
              href="#"
              className="font-playfair font-normal flex items-center gap-2 text-sm text-black bg-[#f0e4cf] py-3 px-8 rounded-full shadow-lg hover:brightness-95 transition-all"
            >
              Explore Products <MoveRight size={18} strokeWidth={1} />
            </a>
            <a
              href="#"
              className="font-playfair font-normal flex items-center gap-2 text-sm text-white border-2 border-[#f0e4cf]/70 py-3 px-8 rounded-full hover:bg-white/5 transition-all"
            >
              Explore Services <MoveRight size={18} strokeWidth={1} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Part: Mobile Action Buttons (Visible only on mobile) */}
      <div className="md:hidden w-full py-8 px-4 bg-[#F7F5F2] flex flex-row gap-3">
        <a
          href="#"
          className="flex-1 bg-[#f0e4cf] py-4 px-2 flex items-center justify-center gap-2 text-[#1A1A1A] font-serif text-[15px] shadow-sm border border-black/5"
        >
          Explore Products <MoveRight size={18} strokeWidth={1.2} />
        </a>
        <a
          href="#"
          className="flex-1 bg-[#f0e4cf] py-4 px-2 flex items-center justify-center gap-2 text-[#1A1A1A] font-serif text-[15px] shadow-sm border border-black/5"
        >
          Explore Services <MoveRight size={18} strokeWidth={1.2} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;