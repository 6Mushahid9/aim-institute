import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-32 overflow-hidden">

      {/* BACKGROUND IMAGE CAROUSEL */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* DARK + GREEN OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-green-900/50 to-black/70" />
      </div>

      {/* DECORATIVE BLOBS */}
      <div className="absolute -top-24 -right-28 w-[420px] h-[420px] bg-pink-300/30 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -left-24 w-[380px] h-[380px] bg-yellow-200/30 rounded-full blur-3xl z-0" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >

        {/* BADGE */}
        <motion.div
          className="inline-block bg-white/90 text-green-800 px-5 py-1.5 rounded-full font-semibold text-sm shadow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          ISO Certified Safety Training Institute
        </motion.div>

        {/* HEADING */}
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
          Aim Institute of{" "}
          <span className="text-green-300">Safety & Health</span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200 leading-relaxed">
          Providing internationally recognized safety education, hands-on
          practical training, and 100% job placement to build tomorrow’s
          safety professionals.
        </p>

        {/* BUTTONS */}
        <motion.div
          className="mt-10 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/courses"
            className="px-7 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg font-semibold transition"
          >
            Explore Courses
          </Link>

          <a
            href="https://wa.me/919335521687"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 bg-white/90 text-green-800 rounded-xl shadow hover:bg-white transition font-semibold"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
