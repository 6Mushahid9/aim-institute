import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaGlobeAsia,
  FaUserTie,
  FaBolt,
} from "react-icons/fa";
import Gallery from "../components/gallery";
import { Link } from "react-router-dom";
import { coursesData, eLearningCourses } from "../data/coursesData";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Home = () => {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const hasSeenBlogPopup = sessionStorage.getItem("blogPopupSeen");

    if (!hasSeenBlogPopup) {
      setOpen(true);
      sessionStorage.setItem("blogPopupSeen", "true");
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Navbar />
      <Hero />

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              className="absolute top-6 right-6 bg-white text-black rounded-full p-2 shadow hover:bg-gray-200 transition"
              aria-label="Close"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.button>

            {/* Image */}
            <motion.img
              src="/blog.jpeg"
              alt="Blog announcement"
              className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* intro */}
      <section className="w-full py-20 bg-gradient-to-r from-green-50 via-white to-green-50 overflow-hidden">
        <div className="max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-green-900 leading-tight">
                Shaping Safety <br />
                <span className="text-green-700">Professionals for Tomorrow</span>
              </h2>
              <div className="mt-3 h-1 w-24 bg-amber-400 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              <span className="font-semibold text-green-900">
                Aim Institute of Safety & Health
              </span>{" "}
              is a premier training institute dedicated to building skilled,
              certified, and industry-ready safety professionals. Our programs blend
              global standards with practical, hands-on learning.
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {[
                {
                  icon: <FaUserTie />,
                  title: "Expert Faculty",
                  text: "Industry certified trainers",
                },
                {
                  icon: <FaGlobeAsia />,
                  title: "Global Recognition",
                  text: "International certifications",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Enterprise Safety",
                  text: "Real-world risk training",
                },
                {
                  icon: <FaBolt />,
                  title: "Fast Placement",
                  text: "Career-focused programs",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
                >
                  <div className="text-green-700 text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/one.jpg"
              alt="Training"
              className="rounded-2xl shadow-lg object-cover h-56 w-full"
            />

            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/three.jpeg"
              alt="Workshop"
              className="rounded-2xl shadow-lg object-cover h-56 w-full"
            />

            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/four.jpeg"
              alt="Safety Practice"
              className="rounded-2xl shadow-lg object-cover h-56 w-full col-span-2"
            />
          </motion.div>
        </div>
      </section>


      {/* PAID COURSES SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full py-20 bg-green-800 rounded-t-[3rem]"
      >


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[80%] mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Courses We <span className="text-amber-300">Provide</span>
          </h2>
          <p className="mt-3 text-gray-200 max-w-xl mx-auto">
            Industry-recognized programs designed for real-world safety careers.
          </p>
          <p className="mt-2 text-sm text-green-200 tracking-wide">
            ✔ Placement Oriented · ✔ Global Standards · ✔ Practical Training
          </p>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {coursesData.slice(0, 3).map((course) => (
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
              key={course.id}
              className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-2">
                  {course.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                  {course.shortDescription}
                </p>
                {course.fees && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium text-sm">
                    Only At : {course.fees}
                  </span>
                )}
              </div>

              <motion.div whileTap={{ scale: 0.95 }} className="mt-4">
                <Link
                  to={`/courses/${course.id}`}
                  className="w-full px-5 py-2 sm:py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition text-sm sm:text-base"
                >
                  Enroll Now !
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-center mt-10">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              to="/courses"
              className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
            >
              View All Courses →
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FREE COURSES SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full py-16 bg-gradient-to-b from-white via-green-100 to-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-extrabold text-green-900 mb-14"
        >
          Free <span className="text-green-600">Skill Programs</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto px-4 space-y-10">
          {eLearningCourses.slice(0, 2).map((course) => (
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              key={course.id}
              className="flex flex-col md:flex-row items-center gap-6 p-6 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-1/3">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-52 object-cover rounded-xl"
                />
              </motion.div>

              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-black mb-2">{course.name}</h3>
                <p className="text-gray-700 text-base">{course.shortDescription}</p>

                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    to={`/courses/${course.id}`}
                    className="mt-4 inline-block px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                  >
                    Know More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl font-medium text-green-700 bg-green-100 px-4 py-3 rounded-xl shadow-sm"
          >
            🎯 <span className="font-bold text-green-800">JOB - Placement:</span>
            We proudly offer <span className="font-semibold">100% guaranteed job placement</span>.
          </motion.p>

          <motion.div whileTap={{ scale: 0.95 }} className="text-center mt-10">
            <Link
              to="/courses"
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Explore All Free Courses →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Gallery />
      <Testimonials />

      <div className="w-full md:px-72">
        <img src="/hse.jpg" alt="HSE" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
