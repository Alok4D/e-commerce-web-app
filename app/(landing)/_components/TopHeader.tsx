import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube, Search, User, Heart, ShoppingCart, Gift } from 'lucide-react';

const TopHeader = () => {
  return (
    <header className="w-full bg-white">
      {/* Top Banner section */}
      <div className="w-full max-w-[1239px] mx-auto border-gray-100 bg-white py-2 px-4 md:px-10 flex items-center justify-between">
        <div className="hidden md:block flex-1"></div>

        <div className="flex-1 text-center">
          <span className="text-[14px] md:text-[15px] text-gray-800 font-normal">
            Free Shipping on all Orders over $250
          </span>
        </div>

        <div className="flex-1 flex justify-end items-center space-x-5">
          <a href="#" className="hover:opacity-60 transition-all">
            <Facebook size={18} strokeWidth={1.5} className="text-black" />
          </a>
          <a href="#" className="hover:opacity-60 transition-all">
            <Instagram size={18} strokeWidth={1.5} className="text-black" />
          </a>
          <a href="#" className="hover:opacity-60 transition-all">
            <Twitter size={18} strokeWidth={1.5} className="text-black" />
          </a>
          <a href="#" className="hover:opacity-60 transition-all">
            <Youtube size={18} strokeWidth={1.5} className="text-black" />
          </a>
        </div>
      </div>

      {/* Navbar section */}
      <div className="w-full bg-white border-b border-gray-200 py-4 px-6 md:px-12 flex items-center justify-between max-w-[1239px] mx-auto">
        <div className="flex-1">
          <a href="#" className="hover:opacity-60 transition-all">
            <Search size={22} className="text-gray-900" />
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <a href="/" className="hover:opacity-90 transition-all">
            <Image 
              src="/logo/logo.png" 
              alt="Findea Logo" 
            width={120} 
            height={40} 
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
          </a>
        </div>

        <div className="flex-1 flex justify-end items-center gap-5 md:gap-7">
          <a href="#" className="hover:opacity-60 transition-all">
            <User size={22} className="text-gray-900" />
          </a>
          <a href="#" className="hover:opacity-60 transition-all">
            <Heart size={22} className="text-gray-900" />
          </a>
          <a href="#" className="hover:opacity-60 transition-all">
            <ShoppingCart size={22} className="text-gray-900" />
          </a>
          <a href="#" className="hover:opacity-60 transition-all">
            <Gift size={22} className="text-gray-900" />
          </a>
        </div>
      </div>
    </header>
  );
};


export default TopHeader;