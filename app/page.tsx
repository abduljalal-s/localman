import Navbar from '@/components/Navbar';
import ParallaxText from '@/components/ParallaxText';

const HomePage: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <ParallaxText />
      <div className="relative z-10 mt-40 text-center">
        {/* Other content goes here */}
        <h1 className="text-xl font-medium">Welcome To</h1>
      </div>
    </main>
  );
};

export default HomePage;
 