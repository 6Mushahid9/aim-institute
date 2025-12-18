import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaFacebook,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* TOP INFO BAR */}

      <div className="w-full bg-gradient-to-r from-green-900 to-green-700 text-white text-xs">
        <div className="max-w-[85%] mx-auto flex justify-between items-center py-1.5">

          {/* LEFT: PHONE + WHATSAPP */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <FaPhoneAlt className="text-[10px]" />
              <span className="font-medium">
                +91 93355 21687
              </span>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919335521687"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600 px-2.5 py-0.5 rounded-full font-semibold hover:bg-green-500 transition"
            >
              <FaWhatsapp className="text-[11px]" />
              WhatsApp
            </a>
          </div>

          {/* RIGHT: SOCIAL ICONS */}
          <div className="flex items-center gap-3 text-base">
            <RiInstagramFill className="hover:text-pink-300 transition cursor-pointer" />
            <FaFacebook className="hover:text-blue-300 transition cursor-pointer" />
            <FaYoutube className="hover:text-red-300 transition cursor-pointer" />
          </div>

        </div>
      </div>


      {/* MAIN NAVBAR */}
      <nav
        className={`w-full bg-white transition-shadow ${scrolled ? "shadow-lg" : "shadow-sm"
          }`}
      >
        <div className="max-w-[85%] mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border">
              <img
                src="/logo.jpg"
                alt="AIOSH Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xl font-extrabold text-green-800 leading-tight">
                AIOSH
              </p>
              <p className="text-xs text-gray-600 tracking-wide">
                Safety & Health Institute
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 relative">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative font-semibold text-gray-800"
                >
                  {link.name}

                  {/* Animated underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 h-[3px] w-full bg-green-700 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-green-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-green-50 border-t px-6 py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-center py-2 rounded-md font-semibold ${location.pathname === link.path
                    ? "bg-green-700 text-white"
                    : "text-green-800 hover:bg-green-100"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
