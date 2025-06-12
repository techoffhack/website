import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import BgImg from '@/app/assets/bg-img.png'

const Hero = () => {
  return (
    <main className="relative min-h-screen">
      <div
      >
        <Image src={BgImg} width={1512} height={881} alt='Background gradient' priority className="w-full h-[45rem] md:h-auto  absolute inset-0 object-cover bg-cover bg-center bg-no-repeat"/>
      </div>
      
      <div className='relative z-10 w-10/12 mx-auto'>
        <div className='pb-20 pt-36 md:pt-44 md:pb-20 border-[#F9F9F933] border-b '>
        <h1 className='text-[6.25rem] md:text-[12.5rem] font-medium text-[#F9F9F9] leading-none tracking-tighter'>From Talent <span className='opacity-60'><br />to Icon.</span></h1>
        </div>
        <div className='flex flex-col md:flex-row gap-y-6 justify-between items-center pt-5 pb-14'>
          <div className='flex flex-row gap-x-2 md:gap-x-6 justify-center items-center text-[#F9F9F9] text-lg md:text-xl uppercase'>
            <p>Amplify</p>
            <div className='flex flex-row gap-x-2 md:gap-x-6 items-center'>
              <span className='w-3 h-3 rounded-full bg-[#F9F9F9]'></span>
              <p>Accelerate</p>
              <span className='w-3 h-3 rounded-full bg-[#F9F9F9]'></span>
            </div>
            <p>Advance</p>
          </div>
          <div className="flex flex-row justify-between items-center gap-x-3 md:gap-x-6">
            <button className="px-4 md:px-6 py-3 border border-[#F9F9F980] text-[#F9F9F9] uppercase text-base md:text-xl rounded-sm hover:bg-[#F9F9F910] transition-colors">
              <Link href="/">
                Become a Sponsor
              </Link>
            </button>

            <button className="px-4 md:px-6 py-3 border border-[#F9F9F9] bg-[#F9F9F9] text-black uppercase text-base md:text-xl rounded-sm hover:bg-gray-100 transition-colors">
              <Link href="/">
                Register
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;