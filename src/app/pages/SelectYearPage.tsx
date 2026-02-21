import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useFeedback } from "../context/FeedbackContext";

export function SelectYearPage() {
  const navigate = useNavigate();
  const { setProgram, setYearLevel, setSemester } = useFeedback();

  const [programs, setPrograms] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [semesters, setSemesters] = useState<string[]>([]);

  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [selectedYearLevel, setSelectedYearLevel] = useState<string>("");
  const [selectedSemester, setSelectedSemester] = useState<string>("");

  useEffect(() => {
    const fetchPrograms = async () => {
      const snapshot = await getDocs(collection(db, "feedbackForms"));
      const programSet = new Set<string>();

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.program) programSet.add(data.program);
      });

      setPrograms(Array.from(programSet));
    };

    fetchPrograms();
  }, []);

  useEffect(() => {
    if (!selectedProgram) return;

    const fetchYears = async () => {
      const snapshot = await getDocs(collection(db, "feedbackForms"));
      const yearSet = new Set<string>();

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.program === selectedProgram && data.yearLevel) {
          yearSet.add(data.yearLevel);
        }
      });

      setYears(Array.from(yearSet));
    };

    fetchYears();
  }, [selectedProgram]);

  useEffect(() => {
    if (!selectedProgram || !selectedYearLevel) return;

    const fetchSemesters = async () => {
      const snapshot = await getDocs(collection(db, "feedbackForms"));
      const semesterSet = new Set<string>();

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (
          data.program === selectedProgram &&
          data.yearLevel === selectedYearLevel &&
          data.semester
        ) {
          semesterSet.add(data.semester);
        }
      });

      setSemesters(Array.from(semesterSet));
    };

    fetchSemesters();
  }, [selectedProgram, selectedYearLevel]);

  const handleContinue = () => {
  
    if (!selectedProgram || !selectedYearLevel || !selectedSemester) return;

    setProgram(selectedProgram);
    setYearLevel(selectedYearLevel);
    setSemester(selectedSemester);

    navigate("/select-course");
  };

  const isValid =
    selectedProgram && selectedYearLevel && selectedSemester;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#137fec] px-4">

      {/* White Card */}
      <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-2xl p-10 flex flex-col animate-fadeIn">

        <h1 className="font-['Lexend:Bold',sans-serif] font-bold text-[#0f172a] text-[26px] text-center mb-8">
          Select Program, Year & Semester
        </h1>

        {/* Program */}
        <label className="font-['Lexend:Regular',sans-serif] text-sm text-gray-600 mb-2">
          Select Program
        </label>
        <select
          value={selectedProgram}
          onChange={(e) => {
            setSelectedProgram(e.target.value);
            setSelectedYearLevel("");
            setSelectedSemester("");
          }}
          className="w-full px-5 py-4 rounded-2xl bg-gray-100 outline-none text-[#0f172a] text-[15px] shadow-sm focus:ring-4 focus:ring-[#137fec]/30 transition-all duration-300 mb-6"
        >
          <option value="">Choose Program</option>
          {programs.map((program) => (
            <option key={program}>{program}</option>
          ))}
        </select>

        {/* Year */}
        <label className="font-['Lexend:Regular',sans-serif] text-sm text-gray-600 mb-2">
          Select Year
        </label>
        <select
          value={selectedYearLevel}
          onChange={(e) => {
            setSelectedYearLevel(e.target.value);
            setSelectedSemester("");
          }}
          disabled={!selectedProgram}
          className="w-full px-5 py-4 rounded-2xl bg-gray-100 outline-none text-[#0f172a] text-[15px] shadow-sm focus:ring-4 focus:ring-[#137fec]/30 transition-all duration-300 mb-6 disabled:opacity-50"
        >
          <option value="">Choose Year</option>
          {years.map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>

        {/* Semester */}
        <label className="font-['Lexend:Regular',sans-serif] text-sm text-gray-600 mb-2">
          Select Semester
        </label>
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          disabled={!selectedYearLevel}
          className="w-full px-5 py-4 rounded-2xl bg-gray-100 outline-none text-[#0f172a] text-[15px] shadow-sm focus:ring-4 focus:ring-[#137fec]/30 transition-all duration-300 mb-8 disabled:opacity-50"
        >
          <option value="">Choose Semester</option>
          {semesters.map((semester) => (
            <option key={semester}>{semester}</option>
          ))}
        </select>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          disabled={!isValid}
          className={`w-full py-3 rounded-2xl
            font-['Lexend:Bold',sans-serif] font-bold text-[18px]
            transition-all duration-300 active:scale-95 shadow-md
            ${
              isValid
                ? "bg-[#137fec] text-white hover:bg-[#106cd1]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          Continue
        </button>

      </div>
    </div>
  );
}