import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="md:px-12 px-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img
            src="/journal-logo.jpg"
            alt="Journal Logo"
            className="h-[110px]"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center font-semibold">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>

          {/* View Journal with hover dropdown wrapped in a container */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="hover:text-blue-500">View Journal</span>
            {dropdownOpen && (
              <div className="absolute top-4 flex flex-col bg-white shadow-lg rounded-md mt-2 w-52 z-10">
                <Link to="/about" className="px-4 py-2 hover:bg-gray-100">
                  About Journal
                </Link>
                <Link to="/guidelines" className="px-4 py-2 hover:bg-gray-100">
                  Authors' Guidelines
                </Link>
                <Link
                  to="/editorial-team"
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Editorial Team
                </Link>
                <Link to="/privacy" className="px-4 py-2 hover:bg-gray-100">
                  Privacy Statement
                </Link>
                <Link to="/contact" className="px-4 py-2 hover:bg-gray-100">
                  Contact
                </Link>
              </div>
            )}
          </div>

          <Link to="/board" className="hover:text-blue-500">
            Current Issue
          </Link>
          <Link to="/authors" className="hover:text-blue-500">
            Archives
          </Link>
          <Link to="/process" className="hover:text-blue-500">
            Register
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-semibold">
          <Link to="/" className="block hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="block hover:text-blue-500">
            About Journal
          </Link>
          <Link to="/guidelines" className="block hover:text-blue-500">
            Authors' Guidelines
          </Link>
          <Link to="/editorial-team" className="block hover:text-blue-500">
            Editorial Team
          </Link>
          <Link to="/privacy" className="block hover:text-blue-500">
            Privacy Statement
          </Link>
          <Link to="/contact" className="block hover:text-blue-500">
            Contact
          </Link>
          <Link to="/board" className="block hover:text-blue-500">
            Current Issue
          </Link>
          <Link to="/authors" className="block hover:text-blue-500">
            Archives
          </Link>
          <Link to="/process" className="block hover:text-blue-500">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
