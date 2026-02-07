import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {

  const footerLinkSections = [
    {
      title: "Our Popular Training Programs",
      links: [
        "Best Summer Training for CS Students in Lucknow",
        "Best Summer Training for EC Students in Lucknow",
        "Best Summer Training for Electrical Students in Lucknow",
        "Best Summer Training for Mechanical Engineering Students in Lucknow",
        "Corporate Training Programs in Lucknow",
        "Best Apprenticeship Program in Lucknow",
        "Syllabus-Based Training in Lucknow",
        "On-Campus Training in Lucknow",
        "Top Company for Data Analytics Course in Lucknow",
        "Software Testing Training in Lucknow",
        "Best Company for MEAN Stack Training in Lucknow",
        "Best Company for MERN Stack Training in Lucknow",
        "Top Company for Summer Training on MERN Full Stack",
        "Best Fullstack NodeJS Training in Lucknow",
      ],
    },
    {
      title: "More Training Links in Lucknow",
      links: [
        "Winter Training in Lucknow",
        "Industrial Training in Lucknow",
        "Vocational Training in Lucknow",
        "PD & Skills Development in Lucknow",
        "JavaScript Training in Lucknow",
        "HTML & CSS Training in Lucknow",
        "MERN Apprenticeship Training",
        "MERN Fullstack Program in Lucknow",
        "Best Company for Dot Net Core Training in Lucknow",
        "100% Job Assistance Program in Lucknow",
        "Civil Engineering Summer Training",
        "Best Companies for Apprenticeship Training",
        "Best Company for MERN Stack Training in Lucknow",
        "Best Company for IOT Training in Lucknow",
        "Digital Marketing Training Course in Lucknow",
        "Best Company for Data Analytics Training in Lucknow",
      ],
    },
    {
      title: "Advanced Training Programs in Lucknow",
      links: [
        "Best Summer Training on MERN",
        "Best Summer Training on Python",
        "Best Summer Training on PHP Laravel",
        "Best Summer Training on Java",
        "Best Summer Training on DotNet",
        "MSSQL Training in Lucknow",
        "React JS Training in Lucknow",
        "Best Summer Training on Flutter",
        "Best Summer Training on Android",
        "AI Training in Lucknow",
        "Machine Learning in Lucknow",
        "Graphics Designing in Lucknow",
        "Data Science Training in Lucknow",
        "Web Designing Training in Lucknow",
        "Node JS Training in Lucknow",
        "Ethical Hacking Training in Lucknow",
        "Best Online Summer Training for CS Students",
        "Best Company for Online Apprenticeship Training",
      ],
    },
    {
      title: "Top Courses in Lucknow",
      links: [
        "Top Data Analytics Course in Lucknow",
        "Top Software Testing Course in Lucknow",
        "Top MEAN Stack Course in Lucknow",
        "Top Ethical Hacking Course in Lucknow",
        "Top MERN Stack Course in Lucknow",
        "Top Node JS Course in Lucknow",
        "Top JavaScript Course in Lucknow",
        "Top HTML & CSS Course in Lucknow",
        "Top Digital Marketing Course in Lucknow",
        "Top AI Course in Lucknow",
        "Top Machine Learning Course in Lucknow",
        "Top Graphics Designing Course in Lucknow",
        "Top Data Science Course in Lucknow",
        "Top Web Designing Course in Lucknow",
        "Top MSSQL Course in Lucknow",
        "Top React JS Course in Lucknow",
        "Top Flutter App Development Course in Lucknow",
      ],
    },
  ];


  return (
    <footer className="bg-gray-900 text-gray-300">

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


      {/* LINK SECTION */}
      <section className=" text-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerLinkSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold mb-4">
                {section.title}
              </h4>

              <ul className="space-y-2 text-sm text-gray-300">
                {section.links.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-[2px]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>



      {/* BOTTOM SECTION */}
      <div className="border-t border-gray-800" />
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
