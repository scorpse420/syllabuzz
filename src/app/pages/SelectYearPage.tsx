import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useFeedback } from "../context/FeedbackContext";

export function SelectYearPage() {
  const navigate = useNavigate();
  const { setProgram, setYearLevel } = useFeedback();

 
  const [programs, setPrograms] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [selectedYearLevel, setSelectedYearLevel] = useState<string>("");

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

  const handleContinue = () => {
    if (!selectedProgram || !selectedYearLevel) return;

    setProgram(selectedProgram);
    setYearLevel(selectedYearLevel);
    navigate("/select-course");
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-[448px] p-8 rounded-[16px] shadow-md border border-[#e2e8f0]">
        <h1 className="text-2xl font-bold text-[#0f172a] mb-6 text-center">
          Select Program & Year
        </h1>

        <div className="mb-6">
          <label className="block text-sm text-[#64748b] mb-2">
            Program
          </label>
          <select
            value={selectedProgram}
            onChange={(e) => {
              setSelectedProgram(e.target.value);
              setSelectedYearLevel("");
            }}
            className="w-full border border-[#e2e8f0] rounded-[8px] px-4 py-3 focus:ring-2 focus:ring-[#137fec] outline-none"
          >
            <option value="">Select Program</option>
            {programs.map((program) => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8">
          <label className="block text-sm text-[#64748b] mb-2">
            Year Level
          </label>
          <select
            value={selectedYearLevel}
            onChange={(e) => setSelectedYearLevel(e.target.value)}
            disabled={!selectedProgram}
            className="w-full border border-[#e2e8f0] rounded-[8px] px-4 py-3 focus:ring-2 focus:ring-[#137fec] outline-none disabled:opacity-50"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedProgram || !selectedYearLevel}
          className="bg-[#137fec] text-white w-full py-3 rounded-[12px] font-semibold disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
