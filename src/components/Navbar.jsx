import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className=" mx-auto px-4 flex justify-around items-center">
        {/* Logo */}
        <a href="/">
          <img src="/journal-logo.jpg" alt="Journal Logo" className="h-[110px]" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/aims" className="hover:text-blue-500">
            Aims & Scope
          </Link>
          <Link to="/board" className="hover:text-blue-500">
            Editorial Board
          </Link>
          <Link to="/authors" className="hover:text-blue-500">
            Instructions for Authors
          </Link>
          <Link to="/process" className="hover:text-blue-500">
            Editorial Process
          </Link>
          <Link to="/charges" className="hover:text-blue-500">
            Author Charges
          </Link>
          <Link to="/license" className="hover:text-blue-500">
            License
          </Link>
          <Link to="/publisher" className="hover:text-blue-500">
            Publisher Info
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Contact Us
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-6 w-6"
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
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-blue-500">
            Home
          </Link>
          <Link to="/aims" className="block hover:text-blue-500">
            Aims & Scope
          </Link>
          <Link to="/board" className="block hover:text-blue-500">
            Editorial Board
          </Link>
          <Link to="/authors" className="block hover:text-blue-500">
            Instructions for Authors
          </Link>
          <Link to="/process" className="block hover:text-blue-500">
            Editorial Process
          </Link>
          <Link to="/charges" className="block hover:text-blue-500">
            Author Charges
          </Link>
          <Link to="/license" className="block hover:text-blue-500">
            License
          </Link>
          <Link to="/publisher" className="block hover:text-blue-500">
            Publisher Info
          </Link>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
