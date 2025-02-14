import React from 'react';

const Section1 = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-[#FFFFFF] to-[#FBFDEB] md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24 gap-8 md:gap-12">

<div className="w-full md:w-1/2 flex justify-end"> 
        <img 
          className="w-full h-auto max-w-[800px]"
          src="https://i.ibb.co/Z6VkrxmN/img.jpg" 
          alt="Guided Lessons" 
        />
      </div>

      <div className="w-full md:w-1/2 md:pr-12 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Fuel Your Future with Learning.
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
        ThriveU empowers learners with knowledge that leads to real success. Unlock your potential with expert guidance and innovative learning.
        </p>
      </div>

      
      
    </div>
  );
};

export default Section1;