import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useFeedback } from "../context/FeedbackContext";
import AppHeader from "../components/AppHeader";

export function SelectCoursePage() {
  const navigate = useNavigate();
  const { state, setYearLevel, setSemester } = useFeedback();

  const [years, setYears] = useState<string[]>([]);
  const [semesters, setSemesters] = useState<string[]>([]);

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  useEffect(() => {
  const fetchYears = async () => {
    if (!state.program || !state.course) return;

    const snapshot = await getDocs(collection(db, "feedbackForms"));

    const mapData = new Map<string, string>();

    snapshot.forEach((doc) => {
      const data = doc.data();

      if (
        data.program === state.program &&
        data.course === state.course &&
        data.yearLevel
      ) {
        const clean = data.yearLevel
          .trim()
          .replace(/\u00A0/g, " ")
          .replace(/\s+/g, " ");

        const normalized = clean.toLowerCase();

        if (!mapData.has(normalized)) {
          mapData.set(normalized, clean);
        }
      }
    });

    setYears(Array.from(mapData.values()));
  };

  fetchYears();
}, [state.program, state.course]);

  useEffect(() => {
  if (!selectedYear) return;

  const fetchSemesters = async () => {
    const snapshot = await getDocs(collection(db, "feedbackForms"));

    const mapData = new Map<string, string>();

    snapshot.forEach((doc) => {
      const data = doc.data();

      if (
        data.program === state.program &&
        data.course === state.course &&
        data.yearLevel === selectedYear &&
        data.semester
      ) {
        const clean = data.semester
          .trim()
          .replace(/\u00A0/g, " ")
          .replace(/\s+/g, " ");

        const normalized = clean.toLowerCase();

        if (!mapData.has(normalized)) {
          mapData.set(normalized, clean);
        }
      }
    });

    setSemesters(Array.from(mapData.values()));
  };

  fetchSemesters();
}, [selectedYear, state.program, state.course]);

  const isValid = selectedYear && selectedSemester;

  const handleContinue = () => {
    if (!isValid) return;

    setYearLevel(selectedYear);
    setSemester(selectedSemester);
    navigate("/select-subject");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#137fec] px-4">
      <AppHeader />

      <div className="w-full max-w-[600px] bg-white rounded-3xl shadow-2xl p-14 flex flex-col items-center text-center animate-fadeIn">

        {/* Title */}
        <h1 className="font-bold text-[#0f172a] text-[34px] leading-[40px] mb-4">
          Select Year & Semester
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-[15px] mb-10 max-w-[420px]">
          Choose your academic year and semester to proceed.
        </p>

        <div className="w-full text-left">

          {/* Year */}
          <label className="text-sm text-gray-600 mb-2 block">
            Select Year
          </label>
          <select
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setSelectedSemester("");
            }}
            className="w-full px-6 py-4 rounded-2xl bg-gray-100 outline-none
                       text-[#0f172a] text-[16px] shadow-sm
                       focus:ring-4 focus:ring-[#137fec]/30
                       transition-all duration-300 mb-8"
          >
            <option value="">Choose Year</option>
            {years.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>

          {/* Semester */}
          <label className="text-sm text-gray-600 mb-2 block">
            Select Semester
          </label>
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            disabled={!selectedYear}
            className="w-full px-6 py-4 rounded-2xl bg-gray-100 outline-none
                       text-[#0f172a] text-[16px] shadow-sm
                       focus:ring-4 focus:ring-[#137fec]/30
                       transition-all duration-300"
          >
            <option value="">Choose Semester</option>
            {semesters.map((semester) => (
              <option key={semester}>{semester}</option>
            ))}
          </select>

        </div>

        {/* Continue Button */}
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