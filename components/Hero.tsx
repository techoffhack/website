"use client"
import Link from 'next/link';
import React, {useRef} from 'react';
import Image from 'next/image';
import BgImg from '@/app/assets/bg-img.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {SplitText} from 'gsap/all';

gsap.registerPlugin(SplitText);

const Hero = () => {
const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({delay: 4.5});
    
    const titleSplit = new SplitText('.title', {type: 'chars, words', charsClass:'text-gradient'})
    const textSplit = new SplitText('.hero-text', {type: 'chars, words'})
    
    tl.fromTo('.bg-image', {
      scale: 1.1,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: 'power2.out'
    })
    
    .from(titleSplit.chars, {
      opacity: 0,
      yPercent: 100,
      rotateX: -90,
      duration: 1.2,
      ease: 'back.out(1.7)',
      stagger: {
        amount: 0.8,
        from: "start"
      },
    }, 0.3)
    
    .from(textSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.02
    }, 1.2)
    
    .from('.hero-dot', {
      opacity: 0,
      scale: 0,
      duration: 0.6,
      ease: 'back.out(2)',
      stagger: 0.1
    }, 1.5)
    
    .from('.button', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.1
    }, 1.8);


    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }, {scope: container})

  return (
    <div ref={container}  className="relative min-h-screen overflow-hidden">
    <div>
      <Image 
        src={BgImg} 
        width={1512} 
        height={881} 
        alt='Background gradient' 
        priority 
        className="bg-image w-full h-[45rem] md:h-auto absolute inset-0 object-cover bg-cover bg-center bg-no-repeat"
      />
    </div>
    
    <div className='relative z-10 w-full px-6 md:px-0 md:w-10/12 mx-auto'>
      <div className='pb-20 pt-32 md:pt-44 md:pb-20 border-[#F9F9F933] border-b overflow-hidden'>
        <h1 className='title text-[6.25rem] md:text-[12.5rem] font-medium text-[#F9F9F9] leading-none tracking-tighter'>
          From Talent <span className='opacity-70'><br />to Icon.</span>
        </h1>
      </div>
      
      <div className='flex flex-col md:flex-row gap-y-6 justify-between items-center pt-5 pb-14'>
        <div className='flex flex-row gap-x-4 md:gap-x-6 justify-center items-center text-[#F9F9F9] text-base md:text-xl uppercase overflow-hidden'>
          <p className='hero-text'>Amplify</p>
          <div className='flex flex-row gap-x-4 md:gap-x-6 items-center'>
            <span className='hero-dot w-3 h-3 rounded-full bg-[#F9F9F9]'></span>
            <p className='hero-text'>Accelerate</p>
            <span className='hero-dot w-3 h-3 rounded-full bg-[#F9F9F9]'></span>
          </div>
          <p className='hero-text'>Advance</p>
        </div>
        
        <div className="flex flex-row justify-between items-center gap-x-6 md:gap-x-6">
          <button className="button px-3 md:px-6 py-3 border border-[#F9F9F980] text-[#F9F9F9] uppercase text-base md:text-xl rounded-sm hover:bg-[#F9F9F910] transition-colors">
            <Link href="/">Become a Sponsor</Link>
          </button>

          <button className="button px-3 md:px-6 py-3 border border-[#F9F9F9] bg-[#F9F9F9] text-black uppercase text-base md:text-xl rounded-sm hover:bg-gray-100 transition-colors">
            <Link href="/">Register</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero;