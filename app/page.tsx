import ArtCards from '@/components/ArtCards';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ParallaxText from '@/components/ParallaxText';
import Art from '@/components/heroButton';
import { Roboto } from 'next/font/google';

// Load the font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const HomePage: React.FC = () => {
  return (
    <main className={`${roboto.className} relative min-h-screen bg-black text-white overflow-hidden`}>
      <Navbar />
      <div className="relative z-10 mt-40 text-center">
        <ParallaxText />
        <Art />
        <Hero />
        {/* section separation line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent my-12" />
        <ArtCards />
      </div>
    </main>
  );
};

export default HomePage;









// 1. Staatliches – Modern, geometric, artsy
// All caps

// Great for poster-style, impactful headers

// Feels Bauhaus/urban

// tsx
// Copy
// Edit
// import { Staatliches } from 'next/font/google';

// const staatliches = Staatliches({
//   subsets: ['latin'],
//   weight: ['400'],
// });
// 2. Space Grotesk – Clean but artistic sans-serif
// Modern and edgy

// Good for contemporary design/art brands

// tsx
// Copy
// Edit
// import { Space_Grotesk } from 'next/font/google';

// const spaceGrotesk = Space_Grotesk({
//   subsets: ['latin'],
//   weight: ['700'],
// });
// 3. Tilt Prism – Super creative display font
// Flashy, 3D-like letters

// Great for splash text or brand names

// tsx
// Copy
// Edit
// import { Tilt_Prism } from 'next/font/google';

// const tiltPrism = Tilt_Prism({
//   subsets: ['latin'],
//   weight: ['400'],
// });
