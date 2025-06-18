 import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AOS from "aos";

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  return (
    <div className="font-sans bg-slate-50 text-gray-800 dark:bg-neutral-900 dark:text-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}