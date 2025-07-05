"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger, SplitText)

const About = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
      }
    })
    
    const aboutTitleSplit = new SplitText('.about-title', {type: 'chars, words'})
    const aboutTextSplit = new SplitText('.about-text', {type: 'words'})
    

    tl.from(aboutTitleSplit.chars, {
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: 'back.out(1.2)',
      stagger: 0.03,
    })
    .from(aboutTextSplit.words, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.02,
    }, '-=0.4')
    .from('.goal-item', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1
    }, '-=0.2')

    gsap.utils.toArray('.goal-item').forEach(item => {
      const el = item as HTMLElement;
      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          x: 10,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="container w-full px-6 md:px-0 md:w-10/12 mx-auto my-0 md:my-10 pt-0 pb-24 md:pt-10 md:pb-20">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10 '>
        <div className='flex flex-col gap-y-10 md:w-[97%] mt-5'>
            <h2 className='about-title uppercase text-2xl md:text-5xl'>What is techoff?</h2>
            <p className='about-text text-lg tracking-wide leading-loose'>TechOff is a reality-show-style challenge series that spotlights emerging tech talent across Nigeria and Africa. We connect raw talent with mentorship, media visibility, and growth opportunities, all through an engaging bi-weekly challenge format.</p>
        </div>
        <div className='goal-container flex flex-col'>
            <div className='goal-item flex flex-col gap-y-4 border-y border-[#E6E6E6] py-8'>
                <div className=' flex flex-row items-center gap-x-6'>
                    <h3 className='goal-title w-3/12 text-2xl font-medium'>Goal 1</h3>
                    <p className='goal-text w-9/12 text-base text-[#666666] tracking-wide leading-relaxed font-[var(--font-geist-mono)]'>Learn how Next.js and Vercel enable migrating from regional static sites to globally available, low latency, dynamic sites at the speed of static.</p>
               
                     </div>
                <div>
                <p className='category-text text-sm uppercase font-[var(--font-geist-mono)]'>Category</p>
                    </div>
            </div>
           
            <div className='goal-item flex flex-col gap-y-4 border-b border-[#E6E6E6] py-8'>
                <div className='flex flex-row items-center gap-x-6'>
                    <h3 className='goal-title w-3/12 text-2xl font-medium'>Goal 2</h3>
                    <p className='goal-text w-9/12 text-base text-[#666666] tracking-wide leading-relaxed font-[var(--font-geist-mono)]'>Learn how Next.js and Vercel enable migrating from regional static sites to globally available, low latency, dynamic sites at the speed of static.</p>
               
                     </div>
                <div>
                <p className='category-text text-sm uppercase font-[var(--font-geist-mono)]'>Category</p>
                    </div>
            </div>

            <div className='goal-item flex flex-col gap-y-4 border-b border-[#E6E6E6] py-8'>
                <div className='flex flex-row items-center gap-x-6'>
                    <h3 className='goal-title w-3/12 text-2xl font-medium'>Goal 3</h3>
                    <p className='goal-text w-9/12 text-base text-[#666666] tracking-wide leading-relaxed font-[var(--font-geist-mono)]'>Learn how Next.js and Vercel enable migrating from regional static sites to globally available, low latency, dynamic sites at the speed of static.</p>
               
                     </div>
                <div>
                <p className='category-text text-sm uppercase font-[var(--font-geist-mono)]'>Category</p>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
