import React from 'react'

const About = () => {
  return (
    <div className="w-10/12 mx-auto my-0 md:my-20 pt-0 pb-24 md:pt-10 md:pb-20">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10 '>
        <div className='flex flex-col gap-y-10 md:w-[97%] mt-5'>
            <h2 className='uppercase text-2xl md:text-5xl'>What is techoff?</h2>
            <p className='text-lg tracking-wide leading-loose'>TechOff is a reality-show-style challenge series that spotlights emerging tech talent across Nigeria and Africa. We connect raw talent with mentorship, media visibility, and growth opportunities, all through an engaging bi-weekly challenge format.</p>
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-y-4 border-y border-[#E6E6E6] py-8'>
                <div className=' flex flex-row items-center gap-x-6'>
                    <h3 className='w-3/12 text-2xl font-medium'>Goal 1</h3>
                    <p className='w-9/12 text-base text-[#666666] tracking-wide leading-relaxed font-[var(--font-geist-mono)]'>Learn how Next.js and Vercel enable migrating from regional static sites to globally available, low latency, dynamic sites at the speed of static.</p>
               
                     </div>
                <div>
                <p className='text-sm uppercase font-[var(--font-geist-mono)]'>Category</p>
                    </div>
            </div>
           
            <div className='flex flex-col gap-y-4 border-b border-[#E6E6E6] py-8'>
                <div className=' flex flex-row items-center gap-x-6'>
                    <h3 className='w-3/12 text-2xl font-medium'>Goal 2</h3>
                    <p className='w-9/12 text-base text-[#666666] tracking-wide leading-relaxed font-[var(--font-geist-mono)]'>Learn how Next.js and Vercel enable migrating from regional static sites to globally available, low latency, dynamic sites at the speed of static.</p>
               
                     </div>
                <div>
                <p className='text-sm uppercase font-[var(--font-geist-mono)]'>Category</p>
                    </div>
            </div>

            <div className='flex flex-col gap-y-4 border-b border-[#E6E6E6] py-8'>
                <div className=' flex flex-row items-center gap-x-6'>
                    <h3 className='w-3/12 text-2xl font-medium'>Goal 3</h3>
                    <p className='w-9/12 text-base text-[#666666] tracking-wide leading-relaxed font-[var(--font-geist-mono)]'>Learn how Next.js and Vercel enable migrating from regional static sites to globally available, low latency, dynamic sites at the speed of static.</p>
               
                     </div>
                <div>
                <p className='text-sm uppercase font-[var(--font-geist-mono)]'>Category</p>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
