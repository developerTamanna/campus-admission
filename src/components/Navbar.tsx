'use client';
import React, { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Navigation data array
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'programs', label: 'Programs', href: '/programs' },
    { id: 'admission', label: 'Admission', href: '/admission' },
    { id: 'notice', label: 'Notice', href: '/notice' },
    { id: 'result', label: 'Result', href: '/result' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-[#0a2b4e] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section - Left Side */}
          <div className="flex-shrink-0 flex items-center">
            <div className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md">
              {/* Logo Image Placeholder */}
              <img
                src="/assets/logo.png"
                alt="SIU Logo"
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="ml-2.5 hidden sm:block">
              <span className="text-white font-bold text-sm md:text-base block leading-tight">
                SYLHET
              </span>
              <span className="text-[#6aabf7] font-semibold text-[10px] md:text-xs block leading-tight">
                INTERNATIONAL
              </span>
              <span className="text-white font-bold text-sm md:text-base block leading-tight">
                UNIVERSITY
              </span>
            </div>
            {/* Mobile Logo Text */}
            <div className="ml-2.5 sm:hidden">
              <span className="text-white font-bold text-xs block leading-tight">
                SIU
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-blue-100/80 hover:text-white px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-200 hover:bg-[#1a3f64] hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Auth Buttons - Right Side Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-5 py-2 text-sm lg:text-base font-semibold text-[#0a2b4e] bg-white rounded-md hover:bg-gray-100 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105">
              Login
            </button>
            <button className="px-5 py-2 text-sm lg:text-base font-semibold text-white bg-[#6aabf7] border-2 border-[#6aabf7] rounded-md hover:bg-[#5a9be7] transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105">
              Register
            </button>
            <button className="px-5 py-2 text-sm lg:text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#1a3f64] focus:outline-none transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-90' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-[#1a3f64] border-t border-[#2a4f74]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-blue-100/80 hover:text-white hover:bg-[#2a4f74] transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
          {/* Auth Buttons - Mobile */}
          <div className="flex flex-col space-y-2.5 pt-4 border-t border-[#2a4f74]">
            <button className="w-full px-4 py-2.5 text-sm font-semibold text-[#0a2b4e] bg-white rounded-md hover:bg-gray-100 transition-all duration-200">
              Login
            </button>
            <button className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-[#6aabf7] border-2 border-[#6aabf7] rounded-md hover:bg-[#5a9be7] transition-all duration-200">
              Register
            </button>
            <button className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-all duration-200">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
