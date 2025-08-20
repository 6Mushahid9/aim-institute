import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-green-800 shadow-lg">
      <div className="sm:w-[90%] lg:w-[80%] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-md">
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-bold text-white">AIOSH</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Contact Button */}
          <Link
            to="/"
            className="relative text-white font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="relative text-white font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact Us
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-white text-xl">
            <a
              href="https://www.instagram.com/aim__institute0999?igsh=MTMwOWcyZmNjYmV0eg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <RiInstagramFill
                className="hover:text-pink-400 transition duration-200"
                size={30}
              />
            </a>
            <a
              href="https://www.facebook.com/share/16eqri7A93/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook
                className="hover:text-blue-500 transition duration-200"
                size={28}
              />
            </a>
            <a
              href="https://youtube.com/@aiminstituteofsafetyandhealth?si=pkEm6AdNbEZfMst5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube
                className="hover:text-red-500 transition duration-200"
                size={32}
              />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-green-700 px-6 py-4 space-y-4">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200"
          >
            Contact Us
          </Link>

          <div className="flex justify-center gap-6 text-white text-2xl">
            <a
              href="https://www.instagram.com/aim__institute0999?igsh=MTMwOWcyZmNjYmV0eg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <RiInstagramFill className="hover:text-pink-400 transition duration-200" />
            </a>
            <a
              href="https://www.facebook.com/share/16eqri7A93/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="hover:text-blue-500 transition duration-200" />
            </a>
            <a
              href="https://youtube.com/@aiminstituteofsafetyandhealth?si=pkEm6AdNbEZfMst5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="hover:text-red-500 transition duration-200" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
