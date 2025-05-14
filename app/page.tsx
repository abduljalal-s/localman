import ParallaxText from "@/components/ParallaxText";


const HomePage: React.FC = () => {
return(
  <main className="relative h-screen bg-black">
  <ParallaxText />
  <div className="absolute top-10 w-full text-center text-white z-10">
  Contact
  </div>
  </main>
);
};
export default HomePage;
