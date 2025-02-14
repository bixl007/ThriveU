import AppBar from "./AppBar"
import Button from "./Button";

// import React from 'react'


const Home = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
          <AppBar />
      <div className="w-[1200px] ml-88 "><video className="mt-20" src="https://brilliant.org/videos/homepage/learn-by-doing.webm" loop autoPlay muted></video></div>
      <div className="mt-40 text-center flex items-center justify-center flex-col gap-20">
        <h1 className="text-xl w-[600px] font-semibold">Interactive problem solving that’s effective and fun. <br /> &nbsp;  &nbsp; Get smarter in 15 minutes a day.</h1>
        <Button width="w-72" />
      </div>
      <div className="w-full h-screen border-1 mt-24 p-10">
        <div className="flex justify-between">
          
            <h1 className="text-xl font-medium">MATHS</h1>
            <h1 className="text-xl font-medium">ALGO</h1>
            <h1 className="text-xl font-medium">PREP</h1>
            <h1 className="text-xl font-medium">AI</h1>
          <h1 className="text-xl font-medium">REASONING</h1>

        </div>
      </div>
    </div>
  )
}

export default Home;