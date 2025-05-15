'use client';

import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/30 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-widest uppercase">
          localman
        </div>

        <div className="space-x-6 hidden md:flex text-lg font-medium mt-7">
          <Link href="/explore" className="hover:text-gray-300 transition">Arts</Link>
          <Link href="/contacts" className="hover:text-gray-300 transition">Explore Arewa</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
        </div>
        <div>
          <Link href="#contact">
          <button className='ml-4 bg-gray-700 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-200'>Contact Us</button>
          </Link>
        </div>

        {/* Optional: Mobile menu icon */}
        <div className="md:hidden">
          {/* Add mobile nav here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
