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

    const handleMouseEnter = () => {
      if (textRef.current) {
        gsap.to(textRef.current, {
          color: '#ffffff', // brighten on hover
          opacity: 0.20,     // optional: also increase opacity
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      if (textRef.current) {
        gsap.to(textRef.current, {
          color: '#aaaaaa', // return to dimmer gray
          opacity: 0.05,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    const el = textRef.current;
    el?.addEventListener('mouseenter', handleMouseEnter);
    el?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el?.removeEventListener('mouseenter', handleMouseEnter);
      el?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={textRef}
      className="fixed inset-0 flex items-center justify-center pointer-events-auto select-none text-[20vw] font-extrabold text-[#7b7a7a] opacity-5 z-0 transition-colors duration-300 "
    >
      localman
    </div>
  );
};

export default ParallaxText;
