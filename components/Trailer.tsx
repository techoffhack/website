import React from 'react'
import Image from 'next/image'
import TrailerImg from '@/app/assets/trailer-img.png'

const Trailer = () => {
  return (
    <div className='w-full px-6 md:px-0 md:w-10/12 mx-auto my-10 md:my-20'>
      <div className='flex flex-col gap-y-3 md:gap-y-6'>
        <h2 className='text-2xl font-medium mb-4 md:mb-0'>Watch TECHOFF 2025 Trailer</h2>
        <Image src={TrailerImg} width={1292} height={600} priority alt='TechOff 2025 Trailer' />
      </div>
    </div>
  )
}

export default Trailer
                                                                                                                                                                                                                                                                                             