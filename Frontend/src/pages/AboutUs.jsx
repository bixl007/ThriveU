import React from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-white text-white min-h-screen">
      <AppBar />
      
      <section className="text-center px-4 sm:px-8 md:px-12 lg:px-16 py-12">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-black">
          About Us
        </h2>
        <p className="max-w-3xl mx-auto text-black text-sm sm:text-base">
          At ThriveU, we believe in the power of education to transform lives.
          Our platform is designed to be a gateway to knowledge, offering a diverse range of courses and learning experiences for students.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-zinc-800 p-4 sm:p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg sm:text-xl font-bold mb-2">Our Story</h3>
          <p className="text-sm sm:text-base leading-relaxed">
            ThriveU was founded with a vision to revolutionize education by making quality learning accessible to everyone. Recognizing the gaps in traditional education, we set out to create a platform that fosters interactive and engaging learning experiences. Our journey began with a simple idea: to empower students and educators with the right tools, resources, and a supportive community. Today, ThriveU stands as a testament to our commitment to bridging the gap between knowledge and learners, ensuring that education is not just informative but also transformative.
          </p>
        </div>
        
        <div className="bg-zinc-800 p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-sm sm:text-base leading-relaxed">
            At ThriveU, our mission is to empower students, educators, and lifelong learners by providing high-quality, accessible, and engaging educational content. We aim to create an inclusive platform where individuals can develop their skills, explore their passions, and achieve their academic and professional goals. By leveraging cutting-edge technology, innovative teaching methodologies, and a community-driven approach, ThriveU strives to make learning a seamless, personalized, and enriching experience for everyone.
          </p>
        </div>
      </section>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
