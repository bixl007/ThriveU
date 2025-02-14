import { useRef, useEffect } from "react";
import gsap from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);
  const innerDivRef = useRef(null);

  useEffect(() => {
    gsap.to(innerDivRef.current, {
      xPercent: -100, // Moves entire width
      ease: "linear",
      duration: 50, // Adjust speed
      repeat: -1,
    });
  }, []);

  return (
    <div className="overflow-hidden mt-20 w-full bg-[#D8E82E] flex items-center h-40 md:h-64 py-4">
      {/* Marquee Inner Div */}
      <div ref={marqueeRef} className="w-full flex">
        <div
          ref={innerDivRef}
                  className="flex whitespace-nowrap font-bold gap-10 text-black"
        >
          {/* Text adapts to screen size */}
          {Array(12)
            .fill("⚡ Smooth GSAP Animations • Creative Effects • Stunning UI Designs •")
            .map((text, index) => (
              <span key={index} className="text-3xl md:text-5xl">{text}</span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
