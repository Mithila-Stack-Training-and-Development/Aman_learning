import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen]   = useState(false);
  const [dark, setDark]   = useState(false);

  // -------- theme toggle --------
  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // -------- nav links data --------
  const links = [
    { to: "/",          label: "Home"      },
    { to: "/services",  label: "Services"  },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/blog",      label: "Blog"      },
    { to: "/about",     label: "About"     },
    { to: "/contact",   label: "Contact"   },
  ];

  return (
    <nav className="bg-navy text-white sticky top-0 z-50 shadow">
      {/* ------------ top bar ------------ */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        <Link to="/" className="text-2xl font-bold whitespace-nowrap">
          Mithila <span className="text-primary">Stack</span>
        </Link>

        {/* desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5
                           after:w-0 after:bg-primary after:transition-all
                           hover:text-primary hover:after:w-full"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* theme + hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="hidden md:inline-flex bg-primary p-2 rounded"
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* ------------ mobile menu ------------ */}
      <ul
        className={`md:hidden bg-navy px-5 transition-[max-height] duration-300 overflow-hidden
                    ${open ? "max-h-screen pb-4" : "max-h-0"}`}
      >
        {links.map(({ to, label }) => (
          <li key={to} className="py-2">
            <NavLink
              to={to}
              onClick={() => setOpen(false)}
              className="block hover:text-primary"
            >
              {label}
            </NavLink>
          </li>
        ))}
        <li className="pt-4">
          <button
            onClick={() => {
              toggleDark();
              setOpen(false);
            }}
            className="w-full bg-primary py-2 rounded flex items-center justify-center gap-2"
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            {dark ? "Light" : "Dark"} mode
          </button>
        </li>
      </ul>
    </nav>
  );
}
