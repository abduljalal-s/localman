'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const artData = [
  {
    title: 'Arewa Style',
    image: '/images/art3.jpg',
    description: 'A modern blend of tradition and elegance.',
  },
  {
    title: 'Desert Grace',
    image: '/images/art1.jpg',
    description: 'Inspired by the Northern winds of Sahara.',
  },
  {
    title: 'Cultural Lines',
    image: '/images/art5.jpg',
    description: 'Patterns rooted in heritage.',
  },
];

const ArtCards = () => {
  return (
    <section id="artcards">
        <div className='items-center text-3xl font-extrabold '>
            <h2>My Arts</h2>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16 bg-black">
      {artData.map((art, index) => (
        <Card key={index} className="bg-gray-900 text-white overflow-hidden shadow-lg relative">
          <div className="relative group">
            <Image
              src={art.image}
              alt={art.title}
              width={600}
              height={400}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
              <Button variant="ghost" className="text-white border border-white hover:bg-white hover:text-black">
                Explore
              </Button>
            </div>
          </div>
          <CardContent className="p-4">
            <p className="text-sm opacity-80">{art.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
</section>
  );
};

export default ArtCards;
