import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white w-full min-h-[25vh] px-4 sm:px-8 md:px-[10vw] flex flex-col justify-between">
      {/* Top section with logo, nav, and social icons */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-center mt-7 gap-6">
        {/* Left - Logo */}
        <div className="mb-4 md:mb-0">
          <img
            src="/golden_logo.png"
            alt="Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Center - Navigation Menu */}
        <div className="mb-4 md:mb-0">
          <nav className="flex flex-wrap gap-4 md:gap-12 text-xs md:text-sm font-light text-footer-menu justify-center md:justify-start">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">Services</a>
            <a href="#services" className="hover:underline">Portfolio</a>
            <a href="#services" className="hover:underline">About Me</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>

        {/* Right - Social Buttons */}
        <div className="flex space-x-4 text-xl text-gray-700">
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Divider line */}
      <div className="w-full border-t border-footer-line my-4" />

      {/* Bottom - Copyright */}
      <div className="text-center text-sm text-footer-menu mb-7">
  © {new Date().getFullYear()} Hernix. All rights reserved.
</div>
    </footer>
  );
}
