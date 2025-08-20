import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

const gallery = () => {
      const images = [
        "/gallery1.jpeg",
        "/gallery2.jpeg",
        "/gallery3.jpeg",
        "/gallery4.jpeg",
        "/gallery5.jpeg",
        "/gallery2.jpeg",
        "/gallery4.jpeg",
        "/gallery1.jpeg",
      ];
       const containerRef = useRef(null);

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

  return (
    <section className="w-full bg-white py-10 my-16">
  <div className="max-w-6xl mx-auto px-4">
    {/* Title */}
    <h2 className="text-3xl font-bold text-center text-black mb-10">
      Picture <span className="text-green-600">Gallery</span>
    </h2>

    <div className="relative">
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory px-4"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start transition-transform duration-300 px-2"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="rounded-xl shadow-lg object-cover h-48
                w-[88vw] sm:w-[75vw] md:w-[33.33vw] lg:w-[20vw]
                mx-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Left Button - only on laptops */}
      <button
        onClick={() => scroll("left")}
        className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800 p-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        aria-label="Scroll Left"
        type="button"
      >
        <FaArrowLeft size={22} />
      </button>

      {/* Right Button - only on laptops */}
      <button
        onClick={() => scroll("right")}
        className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800 p-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        aria-label="Scroll Right"
        type="button"
      >
        <FaArrowRight size={22} />
      </button>
    </div>
  </div>

  {/* Inline style to hide scrollbar */}
  <style>{`
    div::-webkit-scrollbar {
      display: none;
    }
  `}</style>
</section>
  )
}

export default gallery