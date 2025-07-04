'use client'
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(badgeRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    if(statsRef.current) {
      gsap.from(statsRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        }
      });
    }

    if (cardsRef.current) {
      gsap.from(cardsRef.current.children, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        }
      });
    }

    if (statsRef.current) {
      Array.from(statsRef.current.children).forEach((statElement, index) => {
        const numberElement = statElement.querySelector('.stat-number') as HTMLElement | null;
        if (!numberElement) return;
        const finalNumber = numberElement.textContent || "";
        
        const numericValue = parseInt(finalNumber.replace(/[^0-9]/g, ''));
        
        if (!isNaN(numericValue)) {
          const suffix = finalNumber.replace(/[0-9]+/, '');
          numberElement.textContent = `0${suffix}`;
          
          gsap.to({ value: 0 }, {
            value: numericValue,
            duration: 1.5,
            ease: "power2.out",
            delay: index * 0.1,
            onUpdate: function() {
              const currentValue = Math.floor(this.targets()[0].value);
              numberElement.textContent = `${currentValue}${suffix}`;
            },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 70%",
              toggleActions: "play none none none"
            }
          });
        }
      })
    }

  }, []);

  const stats = [
    {
      number: "100+",
      label: "Participants"
    },
    {
      number: "15",
      label: "Mentors"
    },
    {
      number: "20K+",
      label: "Online views"
    },
    {
      number: "5",
      label: "Nigerian cities"
    }
  ];

  return (
    <div ref={containerRef} className="bg-[#090909] text-white py-16">
      <div className="w-full px-6 md:px-0 md:w-10/12 mx-auto">
        <div className="mb-12">
          <p ref={badgeRef} className="text-[#FFFFFF] bg-[#222222] w-10/12 md:w-[23%] px-4 text-center py-1.5 text-lg font-medium mb-10 tracking-wide">
            TECHOFF 2023 - 2024
          </p>
          
          <div className="flex flex-col md:flex-row gap-16">
            <div className='md:w-[60%]'>
              <h2 ref={headingRef} className="text-2xl md:text-4xl font-medium leading-normal text-[#FFFFFF]">
                TechOff is a reality-show-style challenge series that spotlights 
                emerging tech talent across Nigeria and Africa. We connect 
                raw talent with mentorship, media visibility.
              </h2>
            </div>
            
            <div ref={statsRef} className="grid grid-cols-2 gap-y-3 gap-x-16 items-end">
              {stats.map((stat, index) => (
                <div key={index} className="">
                  <div className="stat-number text-4xl md:text-8xl font-medium text-[#F9F9F999] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#F9F9F9] text-xl font-light ">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-200 rounded-lg h-56 flex items-center justify-center">
          </div>
          <div className="bg-gray-200 rounded-lg h-56 flex items-center justify-center">
           </div>
          <div className="bg-gray-200 rounded-lg h-56 flex items-center justify-center">
           </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;