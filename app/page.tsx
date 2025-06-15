import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Sponsors from '@/components/Sponsors';
import Trailer from '@/components/Trailer';
import Highlights from '@/components/Highlights';
import Stats from '@/components/Stats';
import Countdown from '@/components/Countdown';
import Footer from '@/components/Footer';

export default function Home() {
  const targetDate = new Date('2025-06-28T00:00:00');

  return (
    <>
      <Navbar />
      <Hero />
     <About />
     <Sponsors />
     <Trailer />
     <Highlights />
     <Stats />
     <Countdown targetDate={targetDate}/>
     <Footer />
    </>
  );
}
