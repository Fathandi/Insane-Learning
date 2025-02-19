import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const CyberNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Services", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <nav className="bg-gray-900 border-b border-cyan-500/30 relative">
      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-cyan-400 font-bold text-2xl tracking-wider hover:text-cyan-300 transition-colors duration-300">
              CYBER<span className="text-pink-500">PULSE</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden 
        absolute 
        w-full 
        bg-gray-900/95 
        backdrop-blur-sm 
        transition-all 
        duration-300 
        ease-in-out
        border-b 
        border-cyan-500/30
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CyberNavbar;