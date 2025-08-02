'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Sponsors from '@/components/Sponsors';
import Trailer from '@/components/Trailer';
import Highlights from '@/components/Highlights';
import Stats from '@/components/Stats';
import Countdown from '@/components/Countdown';
import Footer from '@/components/Footer';
import { Logo } from './constants/icons';

export default function Home() {

  useGSAP(() => {
    gsap.set('.counter', { textContent: 0 });

    const tl = gsap.timeline();

    tl.to('.counter', {
      duration: 2,
      textContent: 100,
      ease: "power2.inOut",
      snap: { textContent: 1 },
      onUpdate: function () {
        this.targets()[0].textContent = Math.round(this.targets()[0].textContent) + '%';
      }
    })

      .from('.logo', {
        duration: 0.8,
        scale: 0.5,
        opacity: 0,
        ease: "back.out(1.7)"
      }, 0.3)

      .to('.logo', {
        duration: 0.5,
        scale: 1.05,
        ease: "power2.inOut",
        repeat: 1,
        yoyo: true
      })

      .to('.loader', {
        duration: 1,
        scaleY: 0,
        transformOrigin: 'top',
        ease: "power3.inOut"
      }, "+=0.3")

      .fromTo(['.content', '.navbar'],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0
        },
        '-=0.4'
      );
  })

  const targetDate = new Date('2025-08-08T00:00:00');

  return (
    <>
      <div className="loader fixed inset-0 z-[60]"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
        }}>
        <div className='logo flex justify-center items-center h-screen'>
          <Logo
            className="w-32 h-32"
            fillColor={'#F9F9F9'}
          />
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <div className="counter text-xl font-medium text-white mb-2">0%</div>
        </div>
      </div>

      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Hero />
        <About />
        <Sponsors />
        <Trailer />
        <Highlights />
        <Stats />
        <Countdown targetDate={targetDate} />
        <Footer />
      </div>
    </>
  );
}