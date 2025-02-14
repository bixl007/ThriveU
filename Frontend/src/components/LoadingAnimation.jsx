import { useEffect } from "react";
import { gsap } from "gsap";

const LoadingAnimation = () => {
  useEffect(() => {
    // Staggered Text Animation
    const heading = document.querySelector("#loader h3");
    const words = heading.innerText.split(" ").map(
      (word) => `<span class='word'>${word}</span>`
    ).join(" ");
    heading.innerHTML = words;

    const tl = gsap.timeline();
    tl.from(".word", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.8,
    })
      .to(".word", {
        opacity: 0,
        y: -10,
        stagger: 0.1,
        duration: 0.5,
      })
      .to("#loader", {
        opacity: 0,
        duration: 0.5,
      })
      .to("#loader", {
        display: "none",
      });
  }, []);

  return (
    <div id="loader" className="bg-black h-screen w-screen flex justify-center items-center">
      <h3 className="text-white text-3xl">Start Here Tomorrow</h3>
    </div>
  );
};

export default LoadingAnimation;
