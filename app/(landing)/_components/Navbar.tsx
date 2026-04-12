import Image from 'next/image';
import { Search, User, Heart, ShoppingCart, Gift, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'HOME', hasDropdown: false },
    { name: 'ABOUT', hasDropdown: false },
    { name: 'PRODUCTS', hasDropdown: true },
    { name: 'REGISTRIES', hasDropdown: true },
    { name: 'SERVICES', hasDropdown: true },
    { name: 'BOUTIQUES', hasDropdown: false },
  ];

  return (
    <div>
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
      <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center">
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href="#"
                className="flex items-center gap-1 text-[13px] font-medium tracking-[0.1em] text-gray-800 hover:text-gray-500 transition-colors uppercase"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} strokeWidth={1.5} className="text-gray-400" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </div>
    
  );
};

export default Navbar;