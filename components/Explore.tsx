import { Button } from "@/components/ui/button";
import Link from 'next/link';
import React from 'react';

function Art() {
  return (
     <div className=" mt-120 text-center">
        
    <Link href='#artcards' scroll={false}> 
     <Button variant="outline">Explore</Button>
    </Link>
     {/* section separation line */}
  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent my-12" />
    </div>
  )
}

export default Art;