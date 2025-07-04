"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img1 from '../app/assets/past-event-1.jpg';
import Img2 from '../app/assets/TECHOFF-37.jpg';
import Img3 from '../app/assets/TECHOFF-77.jpg';
import Img4 from '../app/assets/TECHOFF-120.jpg';
import Img5 from '../app/assets/TECHOFF-101.jpg';
import Img6 from '../app/assets/TECHOFF-128.jpg';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pinningContainerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });

      tl.from(textRef.current, {
        opacity: 0,
        y: 50,
        ease: "power2.out",
      }).from(
        buttonRef.current,
        {
          opacity: 0,
          y: 30,
          ease: "power2.out",
        },
        "-=0.5"
      );

      if (pinningContainerRef.current && imagesRef.current) {
        const scrollWidth =
          imagesRef.current.scrollWidth - imagesRef.current.clientWidth;

        gsap.to(imagesRef.current, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: pinningContainerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            invalidateOnRefresh: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  const images = [
    {
      id: 1,
      src: Img3,
      alt: "Concert crowd with stage lights",
      height: "h-60",
    },
    {
      id: 2,
      src: Img2,
      alt: "Concert stage with dramatic lighting",
      height: "h-84"
    },
    {
      id: 3,
      src: Img1,
      alt: "Microphone on stage",
      height: "h-68"
    },
    {
      id: 4,
      src: Img4,
      alt: "Tech conference audience",
      height: "h-[28rem]"
    },
    {
      id: 5,
      src: Img5,
      alt: "Speaker presenting",
      height: "h-68"
    },
    {
      id: 6,
      src: Img6,
      alt: "Tech event networking",
      height: "h-80"
    }
  ];

  return (
    <div ref={containerRef} className="py-16 overflow-x-hidden">
      <div className="w-full px-6 md:px-0 mx-auto mb-10 md:mb-12 md:w-10/12 flex flex-col gap-y-10">
        <p ref={textRef} className="text-xl md:text-[2rem] leading-relaxed">
          Past years, TechOff was all about the power of the innovative and
          creative minds, highlighting the individual and collective capacity in
          building the web's best products.
        </p>

        <button
          ref={buttonRef}
          className="w-11/12 md:w-3/12 border border-black text-black px-6 py-2 text-sm font-[var(--font-geist-mono)] hover:bg-gray-200 transition-colors duration-200"
        >
          PAST TECHOFF HIGHLIGHTS
        </button>
      </div>

      <div ref={pinningContainerRef}>
        <div className="overflow-x-auto scrollbar-hide">
          <div
            ref={imagesRef}
            className="flex items-end space-x-6 pb-4 w-max pr-6"
          >
            {images.map((image) => (
              <div
                key={image.id}
                className={`flex-shrink-0 w-[24rem] ${image.height} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                />
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Highlights;
