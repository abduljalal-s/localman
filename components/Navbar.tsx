'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';




const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/30 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-widest uppercase ">
          localman
        </div>

        <div className="space-x-6 hidden md:flex text-2xl  font-medium mt-3 ">
          <Link href="#" className="hover:text-gray-300 hover:underline decoration-white underline-offset-4 transition-all ">Arts</Link>
          <Link href="/#" className="hover:text-gray-300 hover:underline decoration-white underline-offset-4 transition-all">Explore Arewa</Link>
          <Link href="/#" className="hover:text-gray-300 hover:underline decoration-white underline-offset-4 transition-all">About</Link>
        </div>
      <div className="hidden md:flex">
  <Link href="#">
    <button className='ml-4 bg-gray-700 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-200'>
      Contact Us
    </button>
  </Link>
</div>

          {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-4 pt-4 pb-6 space-y-4">
          <Link href="/explore" onClick={() => setMenuOpen(false)} className="block text-white hover:underline">
            Explore
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-white hover:underline">
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button className="w-full  bg-gray-700 hover:bg-gray-500 px-4 py-2 rounded-md text-white font-medium">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
