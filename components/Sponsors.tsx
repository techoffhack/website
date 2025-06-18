import { GoldSponsorLogo, HeadlineSponsorLogo, Logo } from '@/app/constants/icons'
import React from 'react'

const Sponsors = () => {
  return (
    <div className="w-full px-6 md:px-0 md:w-10/12 mx-auto my-10 md:my-20">
      <h1 className="text-2xl md:text-5xl font-medium text-gray-800 mb-4 md:mb-8">SPONSORS</h1>
      <div className="">
        <div className="bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
          <div className="absolute top-0 left-0 bg-[#DADADA] text-gray-500 text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2">
            HEADLINE SPONSOR
          </div>
          <HeadlineSponsorLogo />
        </div>
      </div>
      
      <div className="">
        <div className="grid grid-cols-2">
          <div className="bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            <div className="absolute top-0 left-0 bg-[#DADADA] text-gray-500 text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2">
              GOLD SPONSOR
            </div>
            <GoldSponsorLogo />
          </div>
          <div className="bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            <GoldSponsorLogo />
          </div>
        </div>
      </div>
      
      <div>
        <div className="grid grid-cols-4">
          <div className="bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            <div className="absolute top-0 left-0 bg-[#DADADA] text-gray-500 text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2">
              GOLD SPONSOR
            </div>
            <Logo fillColor='#000000' />
          </div>
          <div className="bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
           
            <Logo fillColor='#000000' />
          </div>
          <div className="bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            <Logo fillColor='#000000' />
          </div>
          <div className="bg-white border border-[#DADADA] p-4 md:p-8 relative flex items-center justify-center min-h-[150px] md:min-h-[200px]">
            <Logo fillColor='#000000' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
