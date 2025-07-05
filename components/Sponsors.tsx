'use client'
import { GoldSponsorLogo, HeadlineSponsorLogo, Logo } from '@/app/constants/icons'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Sponsors = () => {
  const containerRef = useRef(null)


  useGSAP(() => {
    const tl = gsap.timeline({ 
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
      }
     })
    
    tl.from(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scale: 0.8,
    })
    .from('.sponsor', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1
    }, '-=0.2')
  }, { scope: containerRef })
  return (
    <div ref={containerRef} className="w-full px-6 md:px-0 md:w-10/12 mx-auto my-10 md:my-20">
      <h1 className="text-2xl md:text-5xl font-medium text-gray-800 mb-4 md:mb-8">SPONSORS</h1>
      <div className="">
        <div className="sponsor bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
          <div className="absolute top-0 left-0 bg-[#DADADA] text-gray-500 text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2">
            HEADLINE SPONSOR
          </div>
          <HeadlineSponsorLogo />
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-2">
          <div className="sponsor bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            <div className="absolute top-0 left-0 bg-[#DADADA] text-gray-500 text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2">
              GOLD SPONSORS
            </div>
            <GoldSponsorLogo />
          </div>
          <div className="sponsor bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            <GoldSponsorLogo />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4">
          <div className="sponsor bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            <div className="absolute top-0 left-0 bg-[#DADADA] text-gray-500 text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2">
              BRONZE SPONSORS
            </div>
            THIS
          </div>
          <div className="sponsor bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            COULD
          </div>
          <div className="sponsor bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            BE
          </div>
          <div className=" sponsor bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            YOU
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4">
          <div className="sponsor bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            <div className="absolute top-0 left-0 bg-[#DADADA] text-gray-500 text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2">
              PARTNERS
            </div>
            THIS
          </div>
          <div className="sponsor bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            COULD
          </div>
          <div className="sponsor bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            BE
          </div>
          <div className="sponsor bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            YOU
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
