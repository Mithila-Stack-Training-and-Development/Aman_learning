import { NavLink } from 'react-router-dom';
import { useContext } from 'react'; // ✅ Make sure you import useContext!
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-black/95 backdrop-blur-sm transition-colors duration-300 flex justify-between items-center px-8 py-4 z-50 border-b border-black/10 dark:border-white/10">
      {/* Logo */}
      <NavLink to="/" className="text-accent font-bold text-2xl">
        AMAN ROY
      </NavLink>

      {/* Nav Links + Theme Toggle */}
      <ul className="flex items-center space-x-8 text-black dark:text-white">
        {[
          { path: "/", label: "Home", exact: true },
          { path: "/skills", label: "Skills" },
          { path: "/projects", label: "Projects" },
          { path: "/contact", label: "Contact" }
        ].map(({ path, label, exact }) => (
          <li key={path}>
            <NavLink
              to={path}
              end={exact}
              className={({ isActive }) =>
                isActive
                  ? "text-accent border-b-2 border-accent"
                  : "hover:text-accent transition"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="text-xl ml-4 hover:text-accent transition"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </ul>
    </nav>
  );
}
