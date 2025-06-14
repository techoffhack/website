import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Sponsors from '@/components/Sponsors';
import Trailer from '@/components/Trailer';
import Highlights from '@/components/Highlights';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
     <About />
     <Sponsors />
     <Trailer />
     <Highlights />
     <Stats />
    </>
  );
}
