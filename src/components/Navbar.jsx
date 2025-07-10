import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // 🆕
import { BsSun, BsMoon } from "react-icons/bs"; // 🆕  tiny icons

export default function Navbar() {
  /* ------------------------------------------------------------------ */
  /*  Local state for menu + dropdowns                                  */
  /* ------------------------------------------------------------------ */
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  /* ------------------------------------------------------------------ */
  /*  Theme context (light | dark)                                      */
  /* ------------------------------------------------------------------ */
  const { theme, toggleTheme } = useTheme(); // 🆕

  /* ------------------------------------------------------------------ */
  /*  Helpers                                                            */
  /* ------------------------------------------------------------------ */
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold"
      : "hover:text-blue-500 dark:hover:text-blue-400 dark:text-white"; // dark tweak

  const dropdownLinkClasses = ({ isActive }) =>
    `px-4 py-2 ${
      isActive
        ? "bg-blue-100 font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"
        : "hover:bg-gray-100 dark:hover:bg-gray-700/40"
    }`;

  const handleMobileLinkClick = () => setIsOpen(false);

  /* Close mobile nav on outside click */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isOpen &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".menu-button")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  /* ------------------------------------------------------------------ */
  /*  Render                                                             */
  /* ------------------------------------------------------------------ */
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="md:px-12 px-3 flex justify-between p-2 items-center">
        {/* ── Logo ──────────────────────────────────────────────────── */}
        <a href="/">
          <img
            src="/journal-logo.jpg"
            alt="Journal Logo"
            className="h-[70px]"
          />
        </a>

        {/* ── Desktop title (hidden on <lg) ─────────────────────────── */}
        <div className="font-bold text-md text-green-800 dark:text-green-400 hidden lg:block">
          International Journal of
          Media&nbsp;and&nbsp;Sustainable&nbsp;Development&nbsp;(IJMSD)
        </div>

        {/* ── Desktop links ─────────────────────────────────────────── */}
        <div className="hidden md:flex space-x-5 items-center font-semibold">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/current-issues" className={linkClasses}>
            Current Issues
          </NavLink>
          <NavLink to="/archives" className={linkClasses}>
            Archives
          </NavLink>

          {/* About dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <span className="hover:text-blue-500 dark:text-white dark:hover:text-blue-400">
              About
            </span>
            {aboutDropdown && (
              <div className="absolute top-4 flex flex-col bg-white dark:bg-gray-800 shadow-lg dark:text-white  rounded-md mt-2 w-52 z-10">
                <NavLink to="/about-journal" className={dropdownLinkClasses}>
                  The Journal
                </NavLink>
                <NavLink to="/submissions" className={dropdownLinkClasses}>
                  Submissions
                </NavLink>
                <NavLink to="/editorial-team" className={dropdownLinkClasses}>
                  Editorial Team
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/register" className={linkClasses}>
            Register
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact Us
          </NavLink>

          {/* ── Theme toggle button ───────────────────────────────── */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <BsSun className="text-yellow-400" size={18} />
            ) : (
              <BsMoon className="text-gray-800" size={18} />
            )}
          </button>
        </div>

        {/* ── Hamburger (mobile) ────────────────────────────────────── */}
        <div className="md:hidden flex items-center menu-button">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu (slide‑in) ─────────────────────────────────── */}
      <div
        className={`md:hidden fixed top-0 right-0 w-[80%] h-full bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 mobile-menu ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col text-lg text-center space-y-8 font-bold pt-20`}
      >
        {/* links */}
        <NavLink to="/" className={linkClasses} onClick={handleMobileLinkClick}>
          Home
        </NavLink>
        <NavLink
          to="/current-issues"
          className={linkClasses}
          onClick={handleMobileLinkClick}
        >
          Current Issues
        </NavLink>
        <NavLink
          to="/archives"
          className={linkClasses}
          onClick={handleMobileLinkClick}
        >
          Archives
        </NavLink>
        <NavLink
          to="/about-journal"
          className={linkClasses}
          onClick={handleMobileLinkClick}
        >
          The Journal
        </NavLink>
        <NavLink
          to="/submissions"
          className={linkClasses}
          onClick={handleMobileLinkClick}
        >
          Submissions
        </NavLink>
        <NavLink
          to="/editorial-team"
          className={linkClasses}
          onClick={handleMobileLinkClick}
        >
          Editorial Team
        </NavLink>
        <NavLink
          to="/contact"
          className={linkClasses}
          onClick={handleMobileLinkClick}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/register"
          className={linkClasses}
          onClick={handleMobileLinkClick}
        >
          Register
        </NavLink>

        {/* Mobile theme toggle */}
        <button
          onClick={toggleTheme}
          className="mx-auto mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {theme === "dark" ? (
            <>
              <BsSun className="text-yellow-400" /> Light Mode
            </>
          ) : (
            <>
              <BsMoon className="text-gray-800" /> Dark Mode
            </>
          )}
        </button>
      </div>
    </nav>
  );
}
