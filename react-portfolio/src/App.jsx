import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar   from "./components/Navbar";
import Home     from "./pages/Home";
import Skills   from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact  from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />
      {/* This wrapper supplies default page colors for BOTH themes */}
      <div className="min-h-screen pt-20
                      bg-white  text-gray-900
                      dark:bg-dark-bg dark:text-white
                      transition-colors duration-300">
        <Routes>
          <Route path="/"         element={<Home     />} />
          <Route path="/skills"   element={<Skills   />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact  />} />
        </Routes>
      </div>
    </Router>
  );
}
