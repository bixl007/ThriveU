import { useState, useEffect } from "react";
import Home from "../components/Home";
import Marquee from "../components/Marquee";
import LoadingAnimation from "../components/LoadingAnimation"; // Import animation component
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Footer from "../components/Footer";

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
          <Section1/>
          <Section2/>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default Landing;
