import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="border p-4 rounded-lg shadow hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold">{course.name}</h2>
      <p className="text-gray-600 mt-2 line-clamp-3">{course.description}</p>

      {course.fees && (
        <p className="mt-3 font-bold text-green-600">Fees: {course.fees}</p>
      )}
    </Link>
  );
};

export default CourseCard;
