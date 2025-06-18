import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import BlogPreview from "../components/BlogPreview";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Newsletter from "../components/Newsletter";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <BlogPreview />
      <AboutSection />
      <Testimonials />
      <ContactSection />
      <Newsletter />
      <Stats />
    </>
  );
}