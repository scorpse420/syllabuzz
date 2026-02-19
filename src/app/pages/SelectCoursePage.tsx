import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useFeedback } from "../context/FeedbackContext";

export function SelectCoursePage() {
  const navigate = useNavigate();
  const { setCourse, state } = useFeedback();

  // ✅ Explicitly typed
  const [courses, setCourses] = useState<string[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      if (!state.program || !state.yearLevel) return;

      const snapshot = await getDocs(collection(db, "feedbackForms"));

      console.log("STATE:", state);

      const courseSet = new Set<string>();

      snapshot.forEach((doc) => {
        const data = doc.data();
        console.log("DOC:", data);

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
    <div className="bg-[#f8fafc] flex min-h-screen">
      <div className="flex flex-1 flex-col items-center px-4 py-10">
        <div className="flex flex-col gap-8 w-full max-w-[448px]">

          <button
            onClick={() => navigate("/select-year")}
            className="flex items-center hover:opacity-70 transition-opacity"
          >
            <span className="ml-2 text-[#137fec] font-medium">
              Back
            </span>
          </button>

          <div className="flex flex-col gap-3 w-full">
            {courses.map((course) => (
              <button
                key={course}
                onClick={() => handleCourseSelect(course)}
                className="bg-white rounded-xl w-full hover:shadow-md hover:border-[#137fec] transition-all group relative"
              >
                <div className="absolute border border-[#e2e8f0] group-hover:border-[#137fec] inset-0 rounded-xl shadow-sm" />
                <div className="flex items-center justify-between px-6 py-5 relative">
                  <span className="text-[#0f172a] font-semibold">
                    {course}
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
