"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Scroll handler to show/hide header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 shadow-md bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="block w-24 md:w-28">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/65133096b0601610ce025f7d/1ad5d31c-efb5-4cfd-8f37-3cd1bf585783/Full_Logo_No_Bkgd.png?format=1500w"
            alt="Elegance Logo"
            width={56}
            height={26}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-semibold text-gray-700 items-center">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="hover:text-purple-600 transition"
            >
              {name}
            </Link>
          ))}

          {/* Book Appointment Button */}
          <Link
            href="/booking"
            className="ml-6 inline-block bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white overflow-hidden shadow-inner"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4 font-semibold text-gray-700">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={`#${href}`}
                    className="block hover:text-purple-600 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}

              {/* Book Appointment Button for mobile */}
              <li>
                <Link
                  href="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition text-center"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
