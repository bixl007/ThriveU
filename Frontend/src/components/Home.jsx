import AppBar from "./AppBar";
import Button from "./Button";

// import React from 'react'

const Home = () => {
  return (
    <div>
      <AppBar />
      <div className="flex flex-col justify-center items-center mt-10 gap-20">
        <div className="w-120 lg:w-300 md:w-200 ">
          <video
            src="https://brilliant.org/videos/homepage/learn-by-doing.webm"
            loop
            autoPlay
            muted
          ></video>
        </div>
        <div className="flex flex-col flex-wrap gap-5 text-center font-bold">
          <div className="text-2xl">
            <span className="text-5xl text-[rgb(90,50,135)]">Interactive </span> problem solving that’s 
           <span className="text-3xl text-[rgb(90,50,135)]"> effective and fun.</span> 
          </div>
          <div className="text-2xl">Get smarter in 15 minutes a day.</div>
        </div>
        <div>
          <Button />
        </div>
        <div className="flex flex-wrap gap-2  border-black py-5 w-full justify-between px-2 font-medium text-lg md:gap-5 md:py-10 md:px-10 md:text-2xl">
          <div>Maths</div>
          <div>Web Dev</div>
          <div>Science</div>
          <div>Programming</div>
          <div>Engineering</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
