import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our services" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm ">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center">
          <div className=" w-5 h-5 bg-blue-600 rounded-full opacity-50 hover:opacity-100 transition-opacity"></div>
          <div className=" w-5 h-5 -ml-2 bg-red-600 rounded-full opacity-100 hover:opacity-50 transition-opacity"></div>
        </div>
        {/* mobile menu button */}
        <div cl>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <HiX className="size-6" />
            ) : (
              <HiMenu className="size-6" />
            )}
          </button>
        </div>
        {/* links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activeLink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-600 hover:text-gray-900"
              }}`}
            >
              {link.label}
            </a>
          ))}
          {/*  get in touch button */}
          <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all">
            {" "}
            Get in touch
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="container mx-auto px-4 space-y-3">
              {navLinks.map((link, index) => (
                <a
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block text-sm font-medium py-2 ${
                    activeLink === link.href
                      ? "text-orange-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all">
                {" "}
                Get in touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;