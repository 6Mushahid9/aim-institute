import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery1.jpg",
  ];

  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const getVisibleCount = () => (window.innerWidth >= 1024 ? 5 : 3);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const visibleCount = getVisibleCount();
    const scrollAmount = container.offsetWidth / visibleCount;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  /* AUTO SCROLL */
  useEffect(() => {
    if (isHovered) return;

    intervalRef.current = setInterval(() => {
      scroll("right");
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 " />
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-green-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-14"
        >
          Picture <span className="text-green-600">Gallery</span>
        </motion.h2>

        {/* Gallery */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Scroll Container */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="flex-shrink-0 snap-start"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="rounded-2xl shadow-xl object-cover h-52
                  w-[85vw] sm:w-[70vw] md:w-[32vw] lg:w-[18vw]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute -left-10 top-1/2 -translate-y-1/2
            bg-white/80 backdrop-blur text-green-700 hover:text-green-900
            p-4 rounded-full shadow-lg hover:shadow-xl transition"
            aria-label="Scroll Left"
            type="button"
          >
            <FaArrowLeft size={20} />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute -right-10 top-1/2 -translate-y-1/2
            bg-white/80 backdrop-blur text-green-700 hover:text-green-900
            p-4 rounded-full shadow-lg hover:shadow-xl transition"
            aria-label="Scroll Right"
            type="button"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
