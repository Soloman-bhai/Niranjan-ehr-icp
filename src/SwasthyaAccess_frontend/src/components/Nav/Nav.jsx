import { useState } from "react";
import "./Nav.css"; // optional: use for overrides

export default function Nav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#solutions", label: "Solutions" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://storage.googleapis.com/a1aa/image/cee9e378-8df1-4965-8e20-dfe2c5da6be4.jpg"
            alt="HealthSafe ICP logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg sm:text-xl font-bold text-indigo-600">
            HealthSafe ICP
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium text-gray-700">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-indigo-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex space-x-2">
          <a
            href="#signup"
            className="px-4 py-2 text-sm font-semibold bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
          <a
            href="#login"
            className="px-4 py-2 text-sm font-semibold border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
          >
            Login
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-gray-700 hover:text-indigo-600 transition"
          onClick={() => setOpen(!open)}
        >
          <i className={`fas ${open ? "fa-times" : "fa-bars"} fa-lg`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          className="md:hidden bg-white border-t border-gray-200 shadow-sm rounded-b-xl"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block px-6 py-3 border-b border-gray-100 text-sm font-medium text-gray-700 hover:bg-indigo-50 transition"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#signup"
            className="block px-6 py-3 text-sm font-semibold text-indigo-600 hover:bg-indigo-100 transition"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
          <a
            href="#login"
            className="block px-6 py-3 text-sm font-semibold text-indigo-600 hover:bg-indigo-100 transition"
            onClick={() => setOpen(false)}
          >
            Login
          </a>
        </nav>
      )}
    </header>
  );
}
