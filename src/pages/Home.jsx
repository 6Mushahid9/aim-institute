import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaFireExtinguisher, FaGraduationCap, FaEye } from "react-icons/fa";
import Gallery from "../components/gallery";
import { Link } from "react-router-dom";
import { coursesData, eLearningCourses } from "../data/coursesData";

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

  return (
    <div>
      <Navbar />
      {/* Intro */}
      <section className="w-full bg-white py-20 relative overflow-hidden">
        {/* Optional Gradient Background Blob */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-green-200 rounded-full blur-3xl opacity-30 z-0" />
        <div className="absolute -bottom-20 -right-40 w-[300px] h-[300px] bg-yellow-100 rounded-full blur-3xl opacity-20 z-0" />

        <motion.div
          className="max-w-[85%] sm:max-w-[75%] mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-2xl md:text-5xl font-extrabold text-green-900 mb-2 md:mb-4 tracking-wide">
            WELCOME TO
          </h2>
          <p className="text-xl md:text-2xl font-extrabold text-center text-green-700 mb-10">
            AIM INSTITUTE
            <br className="block md:hidden" /> OF SAFETY & HEALTH
            <br className="block md:hidden" />
            <a
              href="https://wa.me/919335521687"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-green-800 underline underline-offset-4 ml-0 md:ml-3">
                +91 93355 21687
              </span>
            </a>
          </p>

          <p className="text-justify text-lg text-gray-700 leading-relaxed mb-8">
            We are delighted to welcome you to{" "}
            <span className="font-semibold text-green-900">
              Aim Institute of Safety & Health
            </span>
            , a premier institute dedicated to shaping skilled and responsible
            safety professionals. Our mission is to empower individuals and
            organizations with{" "}
            <span className="text-green-800 font-medium">
              cutting-edge knowledge
            </span>
            ,
            <span className="text-green-800 font-medium">
              practical training
            </span>
            , and a deep understanding of workshop safety standards and
            regulations. At{" "}
            <span className="font-semibold text-green-900">AIOSH</span>, we
            believe safety is not just a requirement –{" "}
            <span className="italic">it’s a culture</span>.
          </p>

          <p className="text-justify text-lg text-gray-700 leading-relaxed mb-10">
            With a team of certified experts, state-of-the-art facilities, and
            internationally recognized programs, we ensure our students and
            clients are equipped to meet the demands of today’s dynamic
            industries.
          </p>

          <p className="font-bold text-green-900 text-xl text-center">
            We offer comprehensive safety education and placement support at a
            nominal cost, ensuring quality training is accessible to everyone.
          </p>
          <img
            src="/hero.jpg"
            alt="hero"
            className="md:hidden w-full rounded-sm mt-5 mb-[-70px]"
          />
        </motion.div>
      </section>

      {/* hero */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 font-sans p-4">
        {/* Left Images */}
        <div className="space-y-4 hidden md:block">
          <img
            src="/three.jpeg"
            alt="Left 1"
            className="w-full rounded-2xl shadow-md hover:scale-105 transition-transform"
          />
          <img
            src="/four.jpeg"
            alt="Left 2"
            className="w-full rounded-2xl shadow-md hover:scale-105 transition-transform"
          />
        </div>

        <div className="md:col-span-3 space-y-12 order-2 md:order-none">
          <section className="bg-white rounded-xl shadow-xl p-6 md:p-10 text-justify">
            <div className="text-center mb-6">
              <FaGraduationCap className="text-3xl md:text-4xl text-blue-600 mx-auto mb-2" />
              <h2 className="text-2xl md:text-4xl font-extrabold text-blue-900 tracking-wide">
                ABOUT
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Aim Institute of Safety & Health is a leading institute dedicated
              to training and developing skilled safety professionals for
              industries worldwide. Established with a vision to promote a
              culture of safety, we offer internationally recognized courses in
              occupational health and safety, industrial safety, fire safety,
              and environmental management. Our institute is backed by
              experienced faculty, modern training infrastructure, and a strong
              commitment to practical, hands-on learning. We prepare our
              students not just for certifications, but for real-world
              challenges in various sectors including construction, oil & gas,
              manufacturing, and logistics.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-xl p-6 md:p-10 text-center">
            <FaFireExtinguisher className="text-3xl md:text-4xl text-red-600 mx-auto mb-2" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-red-900 tracking-wide mb-4">
              OUR MISSION
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              To deliver high-quality safety training that meets global
              standards and supports a safer working world.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-xl p-6 md:p-10 text-center">
            <FaEye className="text-3xl md:text-4xl text-purple-600 mx-auto mb-2" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-purple-900 tracking-wide mb-4">
              OUR VISION
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              To be a center of excellence in safety education, recognized for
              producing competent safety leaders.
            </p>
          </section>
        </div>

        {/* Right Images */}
        <div className="space-y-4 hidden md:block">
          <img
            src="/one.jpg"
            alt="Right 1"
            className="w-full rounded-2xl shadow-md hover:scale-105 transition-transform"
          />
          <img
            src="/five.jpeg"
            alt="Right 2"
            className="w-full rounded-2xl shadow-md hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* image row*/}
      <section className="w-full py-16 bg-white">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-10">
          LEARNING PARTNER
        </h2>

        <div className="max-w-[90%] md:max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          <img
            src="/iosh.jpg"
            alt="iosh"
            className="w-full max-w-[250px] h-[150px] object-contain border rounded-lg shadow-md"
          />
          <img
            src="/nibosh.jpg"
            alt="nibosh"
            className="w-full max-w-[250px] h-[150px] object-contain border rounded-lg shadow-md"
          />
          <img
            src="/iasp.jpg"
            alt="iasp"
            className="w-full max-w-[250px] h-[150px] object-contain border rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* PAID COURSES SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full mt-5 py-20 bg-green-800 rounded-t-2xl"
      >
        <motion.div variants={fadeUp} className="max-w-[80%] mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Courses We <span className="text-amber-300">Provide</span>
          </h2>
          <p className="mt-4 text-gray-100 max-w-xl mx-auto">
            Our training programs empower individuals and teams with the
            knowledge to ensure safety in every situation.
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
        className="w-full py-16 bg-gradient-to-t from-green-100 to-green-4"
      >
        <motion.h2 variants={fadeUp} className="text-center text-3xl md:text-4xl font-bold text-black mb-12">
          FREE - <span className="text-green-600">COURSES</span>
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

      <div className="w-full md:px-72">
        <img src="/hse.jpg" alt="HSE" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
