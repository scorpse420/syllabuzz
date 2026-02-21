import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";

const questions = [
  "The learning objectives were clear.",
  "Instructor delivery was engaging.",
  "Course materials were high quality.",
  "Assignments were relevant.",
  "Instructor provided helpful feedback.",
];

export function FeedbackFormPage() {
  const navigate = useNavigate();
  const { state } = useFeedback();

  const [ratings, setRatings] = useState<{ [key: number]: number }>({});
  const [comments, setComments] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (submitting) return;

    const allAnswered = questions.every(
      (_, index) => ratings[index] !== undefined
    );

    if (!allAnswered) return alert("Answer all questions.");

    if (!state.studentEmail)
      return alert("Session expired. Restart.");

    setSubmitting(true);

    try {
      const duplicateQuery = query(
        collection(db, "feedback"),
        where("studentEmail", "==", state.studentEmail),
        where("subject", "==", state.subject)
      );

      const existing = await getDocs(duplicateQuery);
      if (!existing.empty) {
        alert("Feedback already submitted.");
        setSubmitting(false);
        return;
      }

      const docRef = await addDoc(collection(db, "feedback"), {
        studentEmail: state.studentEmail,
        program: state.program,
        yearLevel: state.yearLevel,
        course: state.course,
        subject: state.subject,
        q1: ratings[0],
        q2: ratings[1],
        q3: ratings[2],
        q4: ratings[3],
        q5: ratings[4],
        comments,
        timestamp: serverTimestamp(),
      });

      navigate("/success", {
        state: { feedbackId: docRef.id },
      });
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
      setSubmitting(false);
    }
  };

 const totalQuestions = questions.length;
const answeredCount = Object.keys(ratings).length;
const progress = Math.round((answeredCount / totalQuestions) * 100);
const allAnswered = questions.every(
  (_, index) => ratings[index] !== undefined
);

return (
  <div className="min-h-screen bg-[#137fec] px-4 py-8 flex justify-center">
    <div className="w-full max-w-[480px]">

      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-white/90 font-['Lexend:Regular',sans-serif]"
        >
          Back
        </button>

        <span className="text-white/70 text-sm tracking-wide">
          FEEDBACK
        </span>

        <span className="text-white font-semibold">
          {progress}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-white/30 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* White Container */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 animate-fadeIn">

        {/* Title */}
        <h1 className="font-['Lexend:Bold',sans-serif] font-bold text-[22px] text-[#0f172a] mb-2">
          Subject Evaluation
        </h1>

        <p className="text-gray-500 text-sm mb-8">
          Please provide your honest feedback. Your responses are anonymous.
        </p>

        {/* Questions */}
        <div className="flex flex-col gap-8">
          {questions.map((q, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 border">

              <p className="font-semibold text-[#0f172a] mb-4">
                {index + 1}. {q}
              </p>

              <div className="flex gap-3 justify-between">
                {[1, 2, 3, 4, 5].map((r) => (
                  <button
                    key={r}
                    onClick={() =>
                      setRatings((prev) => ({
                        ...prev,
                        [index]: r,
                      }))
                    }
                    className={`flex-1 py-3 rounded-xl border transition-all
                      ${
                        ratings[index] === r
                          ? "bg-[#137fec] text-white border-[#137fec]"
                          : "bg-white text-[#0f172a] border-gray-300 hover:border-[#137fec]"
                      }
                    `}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>Strongly Disagree</span>
                <span>Strongly Agree</span>
              </div>

            </div>
          ))}
        </div>

        {/* Comments */}
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Additional comments (optional)"
          className="w-full mt-8 p-4 border rounded-2xl focus:ring-2 focus:ring-[#137fec]/40 outline-none"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!allAnswered || submitting}
          className={`w-full mt-8 py-4 rounded-2xl text-lg font-bold transition-all
            ${
              allAnswered
                ? "bg-[#137fec] text-white hover:bg-[#106cd1]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          {submitting ? "Submitting..." : "Submit Feedback"}
        </button>

      </div>
    </div>
  </div>
);
}
