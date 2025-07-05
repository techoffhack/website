'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import TrailerImg from '@/app/assets/trailer-img.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Trailer = () => {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ 
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
      }
    })
    
    tl.from(headingRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
    })
    .from(imageRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.3')
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='w-full px-6 md:px-0 md:w-10/12 mx-auto my-10 md:my-20'>
      <div className='flex flex-col gap-y-3 md:gap-y-6'>
        <h2 ref={headingRef} className='text-2xl font-medium mb-4 md:mb-0'>Watch TECHOFF 2025 Trailer</h2>
        <Image ref={imageRef} className='w-full' src={TrailerImg} width={1292} height={600} priority alt='TechOff 2025 Trailer' />
      </div>
    </div>
  )
}

export default Trailer