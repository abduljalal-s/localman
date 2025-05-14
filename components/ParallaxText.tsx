'use client';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const ParallaxText: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      if (textRef.current) {
        gsap.to(textRef.current, {
          x,
          y,
          scale: 1.1,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={textRef}
      className="fixed inset-0 flex items-center justify-center pointer-events-none select-none text-[16vw] font-extrabold text-white opacity-5 z-0"
    >Localman
    </div>
  );
};

export default ParallaxText;
