import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive ? "text-blue-600 font-bold" : "hover:text-blue-500";

  const dropdownLinkClasses = ({ isActive }) =>
    `px-4 py-2 ${
      isActive ? "bg-blue-100 font-bold text-blue-600" : "hover:bg-gray-100"
    }`;

  const handleMobileLinkClick = () => setIsOpen(false);

  // Close when clicking outside the menu
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

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="md:px-12 px-3 flex justify-between p-2 items-center">
        {/* Logo */}
        <a href="/">
          <img
            src="/journal-logo.jpg"
            alt="Journal Logo"
            className="h-[70px]"
          />
        </a>
        <div className="font-bold text-md">
          {" "}
          International Journal of Media and Sustainable Development (IJMSD)
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center font-semibold">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/current-issues" className={linkClasses}>
            Current Issues
          </NavLink>
          <NavLink to="/archives" className={linkClasses}>
            Archives
          </NavLink>

          {/* About Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <span className="hover:text-blue-500">About</span>
            {aboutDropdown && (
              <div className="absolute top-4 flex flex-col bg-white shadow-lg rounded-md mt-2 w-52 z-10">
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
        </div>

        {/* Hamburger Icon for Mobile */}
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

      {/* Mobile Menu - Slide in + Click Outside Closes */}
      <div
        className={`md:hidden fixed top-0 right-0 w-[80%] h-full bg-white z-40 transform transition-transform duration-300 ease-in-out mobile-menu ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col text-lg text-center space-y-10 font-bold pt-20`}
      >
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
      </div>
    </nav>
  );
}
