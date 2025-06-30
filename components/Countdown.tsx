'use client'
import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate } : {targetDate: any}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }: {value: number; label: string}) => (
    <div className="bg-[#090909] rounded-lg p-4 w-[4.5rem] md:w-36 h-[4.25rem] md:h-[6.5rem] text-center">
      <div className="text-base md:text-[2rem] font-medium text-[#FCFDF7]">
        {value}
      </div>
      <div className="text-[0.6rem] md:text-base text-[#FCFDF7] mt-1">{label}</div>
    </div>
  );

  return (
   <div className='absolute mt-14 md:mt-24 z-10 left-[4%] md:left-[8%] w-11/12 md:w-10/12 bg-[#e0e0e0] rounded-2xl'>
   <div className='py-10 md:py-16 px-6 w-full md:px-0 md:w-11/12 mx-auto'>
   <div className='flex flex-col md:flex-row items-center gap-y-10 gap-x-20'>
        <div className='md:w-5/12'>
            <h3 className='text-3xl md:text-4xl font-medium capitalize'>Applications close July 31st</h3>
        </div>
        <div className="flex flex-row gap-2 px-2 md:px-0 md:gap-6 md:w-8/12">
      <TimeBox value={timeLeft.days} label="DAYS" />
      <TimeBox value={timeLeft.hours} label="HOURS" />
      <TimeBox value={timeLeft.minutes} label="MINUTES" />
      <TimeBox value={timeLeft.seconds} label="SECONDS" />
    </div>
    </div>
   </div>
   </div>
  );
};

export default Countdown