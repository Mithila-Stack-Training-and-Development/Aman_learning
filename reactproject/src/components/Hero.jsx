import { useState, useEffect } from "react";
import Typewriter from "./Typewriter";

const images = [
  "/assets/team-img.jpg",
  "/assets/bg2.jpg",
  
];

export default function Hero() {
  const [bg, setBg] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setBg((b) => (b + 1) % images.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-center text-white relative transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[bg]})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <Typewriter phrases={["Welcome to Mithila Stack"]} />
        </h1>
        <p className="mb-6 text-lg">Your Vision, Our Code — We Build Digital Dreams</p>
        <a href="#services" className="inline-block bg-primary px-6 py-3 rounded hover:scale-105 transition-transform">
          Get Started
        </a>
      </div>
    </section>
  );
}
