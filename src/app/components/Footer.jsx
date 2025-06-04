"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-10 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="block w-28">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/65133096b0601610ce025f7d/1ad5d31c-efb5-4cfd-8f37-3cd1bf585783/Full_Logo_No_Bkgd.png?format=1500w"
            alt="Amethyst Boutique Logo"
            width={120}
            height={55}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6 mb-6 md:mb-0">
          <a href="/" className="hover:text-purple-300 transition">
            Home
          </a>
          <a href="#about" className="hover:text-purple-300 transition">
            About
          </a>
          <a href="#services" className="hover:text-purple-300 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-purple-300 transition">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-purple-400">
        &copy; {new Date().getFullYear()} Amethyst Boutique. All rights reserved.
      </div>
    </footer>
  );
}
