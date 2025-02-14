import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Button = ({ width = '' }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;

    gsap.fromTo(
      btn,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    // Hover Animation
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.1, backgroundColor: "#D8E82E", borderColor: "#233a20", duration: 0.2 });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, backgroundColor: "transparent", borderColor: "black", duration: 0.2 });
    });

    // Click Animation
    btn.addEventListener("mousedown", () => {
      gsap.to(btn, { scale: 0.95, duration: 0.1 });
    });

    btn.addEventListener("mouseup", () => {
      gsap.to(btn, { scale: 1.1, duration: 0.1 });
    });

    return () => {
      btn.removeEventListener("mouseenter", () => {});
      btn.removeEventListener("mouseleave", () => {});
      btn.removeEventListener("mousedown", () => {});
      btn.removeEventListener("mouseup", () => {});
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`${width} bg-transparent border border-black hover:bg-[#D8E82E] hover:border-[#233a20] text-black font-bold text-xl px-20 py-4 rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
      onClick={() => {
        window.location.href = "/signup";
      }}
    >
      Get Started
    </button>
  );
};

export default Button;
