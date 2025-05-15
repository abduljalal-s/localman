'use client';

import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center mt-9">
      
      {/* Image at top-center */}
      <div className="absolute top-10">
        <Image
          src="/images/hero1.jpeg" // Adjust path as needed
          alt="Localman Logo"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="mt-48 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide uppercase">-Arewa-</h1>
        <p className="text-lg  font-bold md:text-xl max-w-2xl">
          Localman is all about capturing the essence of <span className="font-semibold">Northern Nigeria’s</span> creativity, culture, and community through <span className="italic">art, fashion, and digital expression</span>.
          Join the journey and experience the spirit of Arewa like never before.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl hover:text-blue-600 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-pink-500 transition" />
          </a>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;
