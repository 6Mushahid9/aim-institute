import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left: Logo and Description */}
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold text-green-500 mr-5">AIOSH</h2>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-md">
            <img src="/logo.jpg" alt="logo" className="w-full h-full object-cover" />
          </div>
          </div>
          <p className="text-gray-300">
            SafeTrain is committed to providing expert-led safety training programs tailored for diverse industries. Our mission is to build a culture of safety and preparedness in every workplace.
          </p>
        </div>

        {/* Right: Contact Info */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Location:</strong> MDS tower kursi road in front of integral university, gate no 1 Lucknow 226026
            </li>
            <li>
              <strong>Email:</strong> aiminstitute687@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 93355 21687
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} AIOSH. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-6 mt-4 text-green-500 text-sm">
  <a
    href="https://www.instagram.com/aim__institute0999?igsh=MTMwOWcyZmNjYmV0eg=="
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <RiInstagramFill
      className="hover:text-pink-400 transition duration-200"
      size={35}
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
      size={30}
    />
  </a>
  {/* <a
    href="https://www.linkedin.com/in/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin
      className="hover:text-blue-600 transition duration-200"
      size={32}
    />
  </a> */}
  <a
    href="https://youtube.com/@aiminstituteofsafetyandhealth?si=pkEm6AdNbEZfMst5"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube
      className="hover:text-red-500 transition duration-200"
      size={38}
    />
  </a>
</div>
        
      </div>
    </footer>
  );
};

export default Footer;
