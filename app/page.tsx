import ArtCards from '@/components/ArtCards';
import Art from '@/components/Explore';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ParallaxText from '@/components/ParallaxText';


const HomePage: React.FC = () => {
  return (
    <>
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <div className="relative z-10 mt-40 text-center">
      <ParallaxText />  
       <Art/>
       <Hero/>
         {/* section separation line */}
  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent my-12" />
       <ArtCards/>
      </div>  
   
     
    </main>
        </>
  );
};

export default HomePage;
 