import React, { FC } from 'react';

interface navbarProps {}

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-gray-800">
            Eduardo Montero
          </a>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <a href="/research" className="text-gray-700 hover:text-blue-600">
              Research
            </a>
            <a href="/cv-contact" className="text-gray-700 hover:text-blue-600">
              CV & Contact
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;