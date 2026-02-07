import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { X } from "lucide-react";

const Blog = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 bg-white text-black rounded-full p-2 shadow hover:bg-gray-200 transition"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Image */}
          <img
            src="/blog.jpeg"
            alt="Blog announcement"
            className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blog;
