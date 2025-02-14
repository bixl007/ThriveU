import React from 'react';

const Section2 = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-[#FFF5EA] to-[#FFFEFE] md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24 gap-8 md:gap-12">

      <div className="w-full md:w-1/2 md:pr-12 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Where Learning Meets Success.
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Stay on track, see your progress, and build your problem-solving skills one concept at a time.
        </p>
      </div>

      
      <div className="w-full md:w-1/2 flex justify-end">
        <img 
          className="w-full h-auto max-w-[800px]"
          src="https://i.ibb.co/kTfb7nv/Screenshot-2025-02-15-012415.png" 
          alt="Guided Lessons" 
        />
      </div>
    </div>
  );
};

export default Section2;

