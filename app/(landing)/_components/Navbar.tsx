'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Gift, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const navLinks = [
    { name: 'HOME', hasDropdown: false },
    { name: 'ABOUT', hasDropdown: false },
    {
      name: 'PRODUCTS',
      hasDropdown: true,
      items: ['Featured', 'New Arrivals', 'Best Sellers', 'Collection'],
    },
    {
      name: 'REGISTRIES',
      hasDropdown: true,
      items: ['Wedding Registry', 'Baby Registry', 'Find a Registry'],
    },
    {
      name: 'SERVICES',
      hasDropdown: true,
      items: [
        'Wedding Services',
        'Baby & Family',
        'Home & Lifestyle',
        'Wellness & Beauty',
        'Photography',
      ],
    },
    { name: 'BOUTIQUES', hasDropdown: false },
  ];

  const toggleAccordion = (name: string) => {
    setActiveAccordion((prev) => (prev === name ? null : name));
  };

  return (
    <div className="relative">
      {/* Mobile Header (Image 6 structure) */}
      <div className="md:hidden w-full bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMenuOpen(true)} className="text-gray-900">
            <Menu size={24} />
          </button>
        </div>

        <div className="flex justify-center flex-grow -ml-8">
          <a href="/">
            <Image
              src="/logo/logo.png"
              alt="Findea Logo"
              width={90}
              height={30}
              className="h-7 w-auto object-contain"
              priority
            />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Gift size={22} className="text-gray-900" />
          <ShoppingCart size={22} className="text-gray-900" />
        </div>
      </div>

      {/* Mobile Drawer (Image 7 structure) */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-[280px] bg-[#D5D0C9] z-50 p-6 flex flex-col shadow-2xl overflow-y-auto">
            <div className="flex flex-col items-center mb-10">
              <div className="flex justify-between items-center w-full mb-8">
                <div className="w-6"></div> {/* Spacer to help center logo */}
                <Image
                  src="/logo/logo.png"
                  alt="Findea Logo"
                  width={110}
                  height={38}
                  className="h-9 w-auto object-contain"
                />
                <button onClick={() => setIsMenuOpen(false)} className="text-gray-900">
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Search Input (Image Structure) */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full bg-white text-gray-800 placeholder:text-gray-400 rounded-none px-4 py-3 text-sm outline-none font-serif"
                />
                <Search
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            {/* Accordion Links (Image Structure) */}
            <ul className="space-y-8 mt-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => link.hasDropdown && toggleAccordion(link.name)}
                  >
                    <span className="text-lg font-serif tracking-widest text-[#1A1A1A] uppercase">
                      {link.name}
                    </span>
                    {link.hasDropdown && (
                      <ChevronDown
                        size={20}
                        strokeWidth={1}
                        className={`text-gray-600 transition-transform ${
                          activeAccordion === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>
                  {link.hasDropdown && activeAccordion === link.name && (
                    <ul className="pl-6 mt-5 space-y-4">
                      {link.items?.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-[15px] font-serif text-[#333] hover:text-black transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#"
                  className="text-lg font-serif tracking-widest text-[#1A1A1A]"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </>
      )}

      {/* Desktop Navbar (Original Structure) */}
      <div className="hidden md:block w-full bg-white border-b border-gray-200 py-4 px-6 md:px-12 flex items-center justify-between max-w-[1239px] mx-auto">
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

      <nav className="hidden md:block w-full bg-white border-b border-gray-200">
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