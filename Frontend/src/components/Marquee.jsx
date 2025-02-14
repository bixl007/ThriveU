import { useRef, useEffect } from "react";
import gsap from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);
  const innerDivRef = useRef(null);

  useEffect(() => {
    gsap.to(innerDivRef.current, {
      xPercent: -100, 
      ease: "linear",
      duration: 50, 
      repeat: -1,
    });
  }, []);

  return (
    <div className="overflow-hidden mt-20 w-full bg-[#D8E82E] flex items-center h-40 md:h-64 py-4">
      <div ref={marqueeRef} className="w-full flex">
        <div
          ref={innerDivRef}
                  className="flex whitespace-nowrap font-bold gap-10 text-black"
        >
          {Array(12)
            .fill("⚡ AI-driven doubt solving  ⚡ Interactive quizzes & tests ⚡ AI-powered feedback ")
            .map((text, index) => (
              <span key={index} className="text-3xl md:text-5xl">{text}</span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
