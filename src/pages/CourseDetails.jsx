import { useParams, Link } from "react-router-dom";
import { coursesData, eLearningCourses } from "../data/coursesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CourseDetails = () => {
  const { courseId } = useParams();

  // Find course inside both lists
  const course =
    coursesData.find((c) => c.id === courseId) ||
    eLearningCourses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-red-600">
        Course Not Found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">

          {/* Breadcrumb */}
          {/* <div className="mb-6 text-sm">
            <Link to="/courses" className="text-green-600 hover:underline">
              ← Back to Courses
            </Link>
          </div> */}

          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">

            {/* Image (Only for free courses) */}
            {course.image && (
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-72 object-cover rounded-xl mb-6"
              />
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold text-green-700 mb-4">
              {course.name}
            </h1>

            {/* Short Description */}
            <p className="text-lg text-gray-700 mb-6">
              {course.shortDescription}
            </p>

            {/* Fees badge */}
            {course.fees && course.fees !== "FREE" && (
              <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                Fees: {course.fees}
              </span>
            )}

            {course.fees === "FREE" && (
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                FREE Course
              </span>
            )}

            {/* Full description */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-3">
                About this Course
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {course.description}
              </p>
            </div>

            {/* Modules (Free courses only) */}
            {course.modules && (
              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">
                  Course Modules
                </h2>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  {course.modules.map((m, index) => (
                    <li key={index}>{m}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="mt-10 flex gap-4">
              <a
                href={course.link || "/contact"}
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {course.fees === "FREE" ? "Start Learning" : "Enroll Now"}
              </a>

              <Link
                to="/courses"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Back
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CourseDetails;
