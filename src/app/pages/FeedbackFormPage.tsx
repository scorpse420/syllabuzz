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

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center">
          {state.subject}
        </h1>

        {questions.map((q, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border">
            <p className="mb-3">{q}</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((r) => (
                <button
                  key={r}
                  onClick={() =>
                    setRatings((prev) => ({
                      ...prev,
                      [index]: r,
                    }))
                  }
                  className={`px-4 py-2 rounded ${
                    ratings[index] === r
                      ? "bg-[#137fec] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        ))}

        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Additional comments"
          className="w-full p-3 border rounded"
        />

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full bg-[#137fec] text-white p-3 rounded"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
