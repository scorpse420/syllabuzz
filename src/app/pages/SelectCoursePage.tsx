import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useFeedback } from "../context/FeedbackContext";

export function SelectCoursePage() {
  const navigate = useNavigate();
  const { setCourse, state } = useFeedback();

  const [courses, setCourses] = useState<string[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      if (!state.program || !state.yearLevel) return;

      const snapshot = await getDocs(collection(db, "feedbackForms"));

      const courseSet = new Set<string>();

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (
          data.program === state.program &&
          data.yearLevel === state.yearLevel &&
          data.course
        ) {
          courseSet.add(data.course);
        }
      });

      setCourses(Array.from(courseSet));
    };

    fetchCourses();
  }, [state.program, state.yearLevel]);

  const handleCourseSelect = (courseName: string) => {
    setCourse(courseName);
    navigate("/select-subject");
  };

  return (
    <div className="min-h-screen bg-[#137fec] flex justify-center px-4 py-10">

      <div className="w-full max-w-[420px]">

        {/* Back Button */}
        <button
          onClick={() => navigate("/select-year")}
          className="mb-6 font-['Lexend:Regular',sans-serif] text-white/90 hover:opacity-80 transition"
        >
          ← Back
        </button>

        {/* White Card Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 animate-fadeIn">

          {/* Title */}
          <h1 className="font-['Lexend:Bold',sans-serif] font-bold text-[28px] text-[#0f172a] mb-2">
  Select Your Course
</h1>
          {/* Subtitle */}
          <p className="font-['Lexend:Regular',sans-serif] text-gray-500 text-[14px] mb-8">
            Choose the course you are currently enrolled in.
          </p>

          {/* Course List */}
          <div className="flex flex-col gap-5">
            {courses.map((course) => (
              <button
                key={course}
                onClick={() => handleCourseSelect(course)}
                className="w-full flex items-center justify-between
                  bg-gray-100 hover:bg-white
                  rounded-2xl px-6 py-5
                  transition-all duration-300
                  border border-transparent hover:border-[#137fec]
                  shadow-sm hover:shadow-md group"
              >
                <div className="flex flex-col items-start">
                  <span className="font-['Lexend:Bold',sans-serif] text-[#0f172a] text-[16px]">
                    {course}
                  </span>
                </div>

                {/* Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400 group-hover:text-[#137fec] transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}