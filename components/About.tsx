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

    const aboutTitleSplit = new SplitText('.about-title', { type: 'chars, words' })
    const aboutTextSplit = new SplitText('.about-text', { type: 'words' })


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
          <p className='about-text text-lg tracking-wide leading-loose'>
            TechOff is a tech event designed to put the spotlight on raw talents in the tech landscape by giving them a chance to showcase their skills in front of industry experts. These talents do not only get an opportunity to showcase their skills, but they also get unfiltered feedback about their projects that helps them take their skill to the next level.
          </p>

          <p className='about-text text-lg tracking-wide leading-loose'>
            
          </p>
        </div>
        <div className='goal-container flex flex-col'>
          <div className='goal-item flex flex-col gap-y-4 border-y border-[#E6E6E6] py-8'>
            <div className=' flex flex-row items-center gap-x-6'>
              <h3 className='goal-title w-3/12 text-2xl font-medium'>Goal 1</h3>
              <p className='goal-text w-9/12 text-base text-[#666666] tracking-wide leading-relaxed font-[var(--font-geist-mono)]'>To amplify the skills and grit of each participant by showcasing each of their journeys, challenges, wins, and personalities to the world, simultaneously giving their story room to shine.</p>

            </div>
            <div>
              <p className='category-text text-sm uppercase font-[var(--font-geist-mono)]'>Amplify</p>
            </div>
          </div>

          <div className='goal-item flex flex-col gap-y-4 border-b border-[#E6E6E6] py-8'>
            <div className='flex flex-row items-center gap-x-6'>
              <h3 className='goal-title w-3/12 text-2xl font-medium'>Goal 2</h3>
              <p className='goal-text w-9/12 text-base text-[#666666] tracking-wide leading-relaxed font-[var(--font-geist-mono)]'>To accelerate participants' growth and mastery by providing unadulterated mentorship moments, guest sessions, and challenge feedback.</p>

            </div>
            <div>
              <p className='category-text text-sm uppercase font-[var(--font-geist-mono)]'>Accelerate</p>
            </div>
          </div>

          <div className='goal-item flex flex-col gap-y-4 border-b border-[#E6E6E6] py-8'>
            <div className='flex flex-row items-center gap-x-6'>
              <h3 className='goal-title w-3/12 text-2xl font-medium'>Goal 3</h3>
              <p className='goal-text w-9/12 text-base text-[#666666] tracking-wide leading-relaxed font-[var(--font-geist-mono)]'>To advance participants' career journey by rewarding their dedication with the fuel they need to progress further.</p>

            </div>
            <div>
              <p className='category-text text-sm uppercase font-[var(--font-geist-mono)]'>Advance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
