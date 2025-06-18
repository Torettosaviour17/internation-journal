import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="md:px-12 px-3 flex justify-between p-2 items-center">
        {/* Logo */}
        <a href="/">
          <img
            src="/journal-logo.jpg"
            alt="Journal Logo"
            className="h-[100px]"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
            }
          >
            Home
          </NavLink>

          {/* View Journal Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="hover:text-blue-500">View Journal</span>
            {dropdownOpen && (
              <div className="absolute top-4 flex flex-col bg-white shadow-lg rounded-md mt-2 w-52 z-10">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-4 py-2 ${
                      isActive ? "bg-blue-100 font-bold" : "hover:bg-gray-100"
                    }`
                  }
                >
                  About Journal
                </NavLink>
                <NavLink
                  to="/guidelines"
                  className={({ isActive }) =>
                    `px-4 py-2 ${
                      isActive ? "bg-blue-100 font-bold" : "hover:bg-gray-100"
                    }`
                  }
                >
                  Authors' Guidelines
                </NavLink>
                <NavLink
                  to="/editorial-team"
                  className={({ isActive }) =>
                    `px-4 py-2 ${
                      isActive ? "bg-blue-100 font-bold" : "hover:bg-gray-100"
                    }`
                  }
                >
                  Editorial Team
                </NavLink>
                <NavLink
                  to="/privacy"
                  className={({ isActive }) =>
                    `px-4 py-2 ${
                      isActive ? "bg-blue-100 font-bold" : "hover:bg-gray-100"
                    }`
                  }
                >
                  Privacy Statement
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-4 py-2 ${
                      isActive ? "bg-blue-100 font-bold" : "hover:bg-gray-100"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/board"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
            }
          >
            Current Issue
          </NavLink>
          <NavLink
            to="/authors"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
            }
          >
            Archives
          </NavLink>
          <NavLink
            to="/process"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
            }
          >
            Register
          </NavLink>
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
          <NavLink to="/" className="block hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/about" className="block hover:text-blue-500">
            About Journal
          </NavLink>
          <NavLink to="/guidelines" className="block hover:text-blue-500">
            Authors' Guidelines
          </NavLink>
          <NavLink to="/editorial-team" className="block hover:text-blue-500">
            Editorial Team
          </NavLink>
          <NavLink to="/privacy" className="block hover:text-blue-500">
            Privacy Statement
          </NavLink>
          <NavLink to="/contact" className="block hover:text-blue-500">
            Contact
          </NavLink>
          <NavLink to="/board" className="block hover:text-blue-500">
            Current Issue
          </NavLink>
          <NavLink to="/authors" className="block hover:text-blue-500">
            Archives
          </NavLink>
          <NavLink to="/process" className="block hover:text-blue-500">
            Register
          </NavLink>
        </div>
      )}
    </nav>
  );
}
