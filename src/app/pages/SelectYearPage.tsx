import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useFeedback } from "../context/FeedbackContext";
import AppHeader from "../components/AppHeader";

export function SelectYearPage() {
  const navigate = useNavigate();
  const { setProgram, setCourse } = useFeedback();

  const [programs, setPrograms] = useState<string[]>([]);
  const [courses, setCourses] = useState<string[]>([]);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
  const fetchPrograms = async () => {
    const snapshot = await getDocs(collection(db, "feedbackForms"));

    const mapData = new Map<string, string>();

    snapshot.forEach((doc) => {
      const data = doc.data();

      if (data.program) {
        const clean = data.program
          .trim()
          .replace(/\u00A0/g, " ")
          .replace(/\s+/g, " ");

        const normalized = clean.toLowerCase();

        if (!mapData.has(normalized)) {
          mapData.set(normalized, clean);
        }
      }
    });

    setPrograms(Array.from(mapData.values()));
  };

  fetchPrograms();
}, []);

  useEffect(() => {
  if (!selectedProgram) return;

  const fetchCourses = async () => {
    const snapshot = await getDocs(collection(db, "feedbackForms"));

    const mapData = new Map<string, string>();

    snapshot.forEach((doc) => {
      const data = doc.data();

      if (data.program === selectedProgram && data.course) {
        const clean = data.course
          .trim()
          .replace(/\u00A0/g, " ")
          .replace(/\s+/g, " ");

        const normalized = clean.toLowerCase();

        if (!mapData.has(normalized)) {
          mapData.set(normalized, clean);
        }
      }
    });

    setCourses(Array.from(mapData.values()));
  };

  fetchCourses();
}, [selectedProgram]);

  const isValid = selectedProgram && selectedCourse;

  const handleContinue = () => {
    if (!isValid) return;
    setProgram(selectedProgram);
    setCourse(selectedCourse);
    navigate("/select-course");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#137fec] px-4">
      <AppHeader />

      <div className="w-full max-w-[600px] bg-white rounded-3xl shadow-2xl p-14 flex flex-col items-center text-center animate-fadeIn">

        {/* Title */}
        <h1 className="font-bold text-[#0f172a] text-[34px] leading-[40px] mb-4">
          Select Program & Course
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-[15px] mb-10 max-w-[420px]">
          Choose your program and course to continue.
        </p>

        <div className="w-full text-left">

          {/* Program */}
          <label className="text-sm text-gray-600 mb-2 block">
            Select Program
          </label>
          <select
            value={selectedProgram}
            onChange={(e) => {
              setSelectedProgram(e.target.value);
              setSelectedCourse("");
            }}
            className="w-full px-6 py-4 rounded-2xl bg-gray-100 outline-none
                       text-[#0f172a] text-[16px] shadow-sm
                       focus:ring-4 focus:ring-[#137fec]/30
                       transition-all duration-300 mb-8"
          >
            <option value="">Choose Program</option>
            {programs.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>

          {/* Course */}
          <label className="text-sm text-gray-600 mb-2 block">
            Select Course
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            disabled={!selectedProgram}
            className="w-full px-6 py-4 rounded-2xl bg-gray-100 outline-none
                       text-[#0f172a] text-[16px] shadow-sm
                       focus:ring-4 focus:ring-[#137fec]/30
                       transition-all duration-300"
          >
            <option value="">Choose Course</option>
            {courses.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

        </div>

        {/* Button */}
        <button
          onClick={handleContinue}
          disabled={!isValid}
          className={`mt-10 w-full py-4 rounded-2xl
            flex items-center justify-center gap-2
            font-bold text-[20px]
            transition-all duration-300 active:scale-95 shadow-md
            ${
              isValid
                ? "bg-[#137fec] text-white hover:bg-[#106cd1] group"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          <span>Continue</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transition-transform duration-300 ${
              isValid ? "group-hover:translate-x-1" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </div>
  );
}