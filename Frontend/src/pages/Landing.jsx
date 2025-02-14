import { useState, useEffect } from "react";
import Home from "../components/Home";
import Marquee from "../components/Marquee";
import LoadingAnimation from "../components/LoadingAnimation"; // Import animation component

function Landing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulating a loading time
  }, []);

  return (
    <div>
      {loading ? <LoadingAnimation /> : (
        <>
          <Home />
          <Marquee />
        </>
      )}
    </div>
  );
}

export default Landing;
