import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useFeedback } from "../context/FeedbackContext";

export function SelectSubjectPage() {
  const navigate = useNavigate();
  const { setSubject, state } = useFeedback();

 
  const [subjects, setSubjects] = useState<string[]>([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      if (!state.program || !state.yearLevel || !state.course) return;

      const snapshot = await getDocs(collection(db, "feedbackForms"));

      console.log("STATE:", state);

      const subjectSet = new Set<string>();

      snapshot.forEach((doc) => {
        const data = doc.data();
        console.log("DOC:", data);

        if (
          data.program === state.program &&
          data.yearLevel === state.yearLevel &&
          data.course === state.course &&
          data.subject
        ) {
          subjectSet.add(data.subject);
        }
      });

      setSubjects(Array.from(subjectSet));
    };

    fetchSubjects();
  }, [state.program, state.yearLevel, state.course]); // ✅ precise dependency

  const handleSubjectSelect = (subjectName: string) => {
    setSubject(subjectName);
    navigate("/feedback-form");
  };

  return (
  <div className="min-h-screen bg-[#137fec] px-4 py-8 flex justify-center">

    <div className="w-full max-w-[420px]">

      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate("/select-course")}
          className="font-['Lexend:Regular',sans-serif] text-white/90 hover:opacity-80 transition"
        >
          Back
        </button>

        <span className="font-['Lexend:Regular',sans-serif] text-white/70 text-sm tracking-wide">
          SELECT SUBJECT
        </span>
      </div>

      {/* White Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 animate-fadeIn">

        {/* Course Title */}
        <h1 className="font-['Lexend:Bold',sans-serif] font-bold text-[24px] text-[#0f172a] mb-2">
          {state.course}
        </h1>

        {/* Semester Info */}
        <p className="font-['Lexend:Regular',sans-serif] text-gray-500 text-sm mb-6">
          {state.yearLevel} • {state.semester}
        </p>

        {/* Info Box */}
        <div className="bg-[#e6f0ff] border border-[#c7dcff] rounded-2xl p-4 mb-8">
          <p className="font-['Lexend:Regular',sans-serif] text-[#1d4ed8] text-sm">
            Select a subject to provide your feedback. Your responses help
            improve the quality of education.
          </p>
        </div>

        {/* Subject List */}
        <div className="flex flex-col gap-5">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => handleSubjectSelect(subject)}
              className="w-full flex items-center justify-between
                bg-gray-100 hover:bg-white
                rounded-2xl px-6 py-5
                transition-all duration-300
                border border-transparent hover:border-[#137fec]
                shadow-sm hover:shadow-md group"
            >
              <span className="font-['Lexend:Bold',sans-serif] text-[#0f172a] text-[16px]">
                {subject}
              </span>

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
