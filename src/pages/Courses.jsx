import { useState } from "react";
import { Link } from "react-router-dom";
import { coursesData, eLearningCourses } from "../data/coursesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("paid"); // 'paid' | 'free'
  const [search, setSearch] = useState("");

  // Filter logic
  const paidFiltered = coursesData.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  const freeFiltered = eLearningCourses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page Heading */}
          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
            Explore Our Courses
          </h1>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              className={`px-6 py-2 rounded-lg font-semibold border transition ${
                activeTab === "paid"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-green-600 border-green-300"
              }`}
              onClick={() => setActiveTab("paid")}
            >
              Paid Courses
            </button>

            <button
              className={`px-6 py-2 rounded-lg font-semibold border transition ${
                activeTab === "free"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-green-600 border-green-300"
              }`}
              onClick={() => setActiveTab("free")}
            >
              Free eLearning
            </button>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10">
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 border border-green-300 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === "paid" ? paidFiltered : freeFiltered).map(
              (course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
                >
                  {/* Image for free courses only */}
                  {course.image && (
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  )}

                  <h3 className="text-xl font-bold text-green-700 mb-2">
                    {course.name}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {course.shortDescription}
                  </p>

                  {/* Fees Badge (Paid Courses Only) */}
                  {course.fees && course.fees !== "FREE" && (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      Fees: {course.fees}
                    </span>
                  )}

                  {/* FREE Badge */}
                  {course.fees === "FREE" && (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      FREE Course
                    </span>
                  )}

                  <Link
                    to={`/courses/${course.id}`}
                    className="block mt-5 text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
                  >
                    View Details
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Courses;
