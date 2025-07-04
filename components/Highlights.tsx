'use client'
import React, { useRef } from 'react';
import Img1 from '../app/assets/Speaker.png';
import Img2 from '../app/assets/Coat.png';
import Img3 from '../app/assets/Ship.png';
import Img4 from '../app/assets/Developers.png';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: any) => {
    if (scrollContainerRef.current) {
      e.preventDefault()
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      }
    });
    tl.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    })
    .from(buttonRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    if (imagesRef.current) {
      const scrollWidth = imagesRef.current.scrollWidth - imagesRef.current.clientWidth;
      
      tl.to(imagesRef.current, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollWidth + window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress > 0 && self.progress < 1) {
              scrollContainerRef.current?.removeEventListener('wheel', handleWheel);
            }
          },
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const images = [
    {
      id: 1,
      src: Img4,
      alt: "Concert crowd with stage lights",
       height: "h-60"
    },
    {
      id: 2,
      src: Img2,
      alt: "Concert stage with dramatic lighting",
       height: "h-84"
    },
    {
      id: 3,
      src: Img3,
      alt: "Microphone on stage",
       height: "h-68"
    },
    {
      id: 4,
      src: Img1,
      alt: "Tech conference audience",
       height: "h-[28rem]"
    },
    {
      id: 5,
      src: Img2,
      alt: "Speaker presenting",
       height: "h-68"
    },
    {
      id: 6,
      src: Img4,
      alt: "Tech event networking",
       height: "h-80"
    }
  ];

  return (
    <div ref={containerRef} className="py-16 overflow-x-hidden">
      <div className="">
        <div className="w-full px-6 md:px-0 mx-auto mb-10 md:mb-12 md:w-10/12 flex flex-col gap-y-10">
          <p ref={textRef} className="text-xl md:text-[2rem] leading-relaxed">
            Past years, TechOff was all about the power of the innovative 
            and creative minds, highlighting the individual and collective 
            capacity in building the web's best products.
          </p>
          
          <button ref={buttonRef} className="w-11/12 md:w-3/12 border border-black text-black px-6 py-2 text-sm font-[var(--font-geist-mono)] hover:bg-gray-200 transition-colors duration-200">
            PAST TECHOFF HIGHLIGHTS
          </button>
        </div>

        <div className="relative">
          <div ref={scrollContainerRef}
            onWheel={handleWheel}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: 'smooth' }}>
            <div ref={imagesRef} className="flex items-end space-x-6 pb-4">
              {images.map((image) => (
                <div 
                  key={image.id}
                  className={`flex-shrink-0 w-[24rem] ${image.height} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
                  >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;