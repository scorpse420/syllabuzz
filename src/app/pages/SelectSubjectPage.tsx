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
    <div className="bg-[#f8fafc] min-h-screen relative">
      <div className="px-[16px] py-[24px] max-w-[448px] mx-auto">
        <div className="flex flex-col gap-[12px] w-full mt-[8px]">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => handleSubjectSelect(subject)}
              className="bg-white rounded-[12px] w-full hover:shadow-md hover:border-[#137fec] transition-all group"
            >
              <div className="flex items-center justify-between px-[20px] py-[16px] w-full">
                <div className="text-[#0f172a] text-[16px]">
                  {subject}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
