import React from 'react';

const Stats = () => {

  const stats = [
    {
      number: "100+",
      label: "Participants"
    },
    {
      number: "15",
      label: "Mentors"
    },
    {
      number: "20K+",
      label: "Online views"
    },
    {
      number: "5",
      label: "Nigerian cities"
    }
  ];

  return (
    <div className="bg-[#090909] text-white py-16">
      <div className="w-full px-6 md:px-0 md:w-10/12 mx-auto">
        <div className="mb-12">
          <p className="text-[#FFFFFF] bg-[#222222] w-10/12 md:w-[23%] px-4 text-center py-1.5 text-lg font-medium mb-10 tracking-wide">
            TECHOFF 2023 - 2024
          </p>

          <div className="flex flex-col md:flex-row gap-16">
            <div className='md:w-[60%]'>
              <h2 className="text-2xl md:text-4xl font-medium leading-normal text-[#FFFFFF]">
                TechOff is a reality-show-style challenge series that spotlights
                emerging tech talent across Nigeria and Africa. We connect
                raw talent with mentorship, media visibility.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-y-3 gap-x-16 items-end">
              {stats.map((stat, index) => (
                <div key={index} className="">
                  <div className="text-4xl md:text-8xl font-medium text-[#F9F9F999] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#F9F9F9] text-xl font-light ">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-200 rounded-lg h-56 flex items-center justify-center">
          </div>
          <div className="bg-gray-200 rounded-lg h-56 flex items-center justify-center">
           </div>
          <div className="bg-gray-200 rounded-lg h-56 flex items-center justify-center">
           </div>
        </div> */}
      </div>
    </div>
  );
};

export default Stats;