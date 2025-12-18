import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-2">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-white shadow">
              <img
                src="/logo.jpg"
                alt="AIOSH Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-green-500">AIOSH</h2>
          </div>

          <p className="leading-relaxed text-gray-400">
            SafeTrain is committed to providing expert-led safety training programs
            tailored for diverse industries. Our mission is to build a strong
            culture of safety and preparedness in every workplace.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-green-500 mb-4">
            Contact Information
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <span className="font-semibold text-gray-200">Location:</span>{" "}
              MDS Tower, Kursi Road, in front of Integral University Gate No. 1,
              Lucknow 226026
            </li>
            <li>
              <span className="font-semibold text-gray-200">Email:</span>{" "}
              aiminstitute687@gmail.com
            </li>
            <li>
              <span className="font-semibold text-gray-200">Phone:</span>{" "}
              +91 93355 21687
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800" />

      {/* BOTTOM SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        
        <p className="text-gray-400">
          © {new Date().getFullYear()} AIOSH. All rights reserved.
        </p>

        {/* SOCIALS */}
        <div className="flex items-center gap-5 text-green-500">
          <a
            href="https://www.instagram.com/aim__institute0999?igsh=MTMwOWcyZmNjYmV0eg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <RiInstagramFill
              size={28}
              className="hover:text-pink-400 transition"
            />
          </a>

          <a
            href="https://www.facebook.com/share/16eqri7A93/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook
              size={26}
              className="hover:text-blue-500 transition"
            />
          </a>

          <a
            href="https://youtube.com/@aiminstituteofsafetyandhealth?si=pkEm6AdNbEZfMst5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube
              size={30}
              className="hover:text-red-500 transition"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
