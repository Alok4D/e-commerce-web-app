import { ChevronDown } from 'lucide-react';

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
  );
};

export default Navbar;