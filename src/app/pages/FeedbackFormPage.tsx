import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useFeedback } from "../context/FeedbackContext";
import svgPaths from "../../imports/svg-pq3t30dd6f";

const questions = [
  "The learning objectives for this course were clearly stated.",
  "The instructor's delivery of the content was engaging and clear.",
  "The course materials (slides, readings, etc.) were of high quality.",
  "Assignments and tasks were directly relevant to the course objectives.",
  "The instructor was accessible and provided helpful feedback.",
];

export function FeedbackFormPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { state } = useFeedback();

  const [ratings, setRatings] = useState<{ [key: number]: number }>({});
  const [comments, setComments] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleRatingChange = (questionIndex: number, rating: number) => {
    setRatings((prev) => ({ ...prev, [questionIndex]: rating }));
  };

  const handleSubmit = async () => {
    if (submitting) return;

    const allQuestionsAnswered = questions.every(
      (_, index) => ratings[index] !== undefined
    );

    if (!allQuestionsAnswered) {
      alert("Please answer all questions before submitting.");
      return;
    }

    if (!user?.email) {
      alert("User session expired. Please login again.");
      navigate("/");
      return;
    }

    if (!state.academicYear || !state.course || !state.subject) {
      alert("Missing academic details. Please restart the process.");
      navigate("/");
      return;
    }

    try {
      setSubmitting(true);

      const docRef = await addDoc(collection(db, "feedback"), {
        studentEmail: user.email,
        academicYear: state.academicYear,
        course: state.course,
        subject: state.subject,
        q1: ratings[0],
        q2: ratings[1],
        q3: ratings[2],
        q4: ratings[3],
        q5: ratings[4],
        comments: comments || "",
        timestamp: serverTimestamp(),
      });

      // Pass document ID to Success page
      navigate("/success", {
        state: { feedbackId: docRef.id },
        replace: true, // prevents back-button duplicate submission
      });

    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  const answeredQuestions = Object.keys(ratings).length;
  const totalQuestions = questions.length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="bg-[#f8fafc] min-h-screen relative pb-[120px]">

      {/* Sticky Header */}
      <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)] sticky top-0 w-full z-[3]">
        <div
          aria-hidden="true"
          className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none"
        />
        <div className="flex flex-col gap-[12px] pb-[13px] pt-[12px] px-[16px] max-w-[448px] mx-auto">

          <div className="flex items-center justify-between w-full">
            <button
              onClick={() => navigate("/select-subject")}
              className="flex items-center hover:opacity-70 transition-opacity"
            >
              <div className="h-[12px] w-[7.406px]">
                <svg viewBox="0 0 7.40625 12">
                  <path
                    d={svgPaths.p1c24c780}
                    fill="#137FEC"
                  />
                </svg>
              </div>
              <span className="ml-1 text-[#137fec] text-[16px] font-medium">
                Back
              </span>
            </button>

            <div className="text-center">
              <div className="text-[#64748b] text-[14px] uppercase tracking-wide">
                Feedback
              </div>
              <div className="text-[#0f172a] text-[16px] font-bold truncate max-w-[200px]">
                {state.subject}
              </div>
            </div>

            <div className="text-[#137fec] text-[12px] font-bold">
              {Math.round(progress)}%
            </div>
          </div>

          <div className="bg-[#f1f5f9] h-[4px] rounded-full">
            <div
              className="bg-[#137fec] h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="px-[16px] py-[24px] max-w-[448px] mx-auto">
        <div className="flex flex-col gap-[24px] w-full">

          {questions.map((question, index) => (
            <div key={index} className="bg-white rounded-[12px] w-full border border-[#e2e8f0] p-[21px]">
              <div className="font-medium text-[#1e293b] text-[16px] mb-4">
                {index + 1}. {question}
              </div>

              <div className="flex justify-between w-full">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleRatingChange(index, rating)}
                    className={`flex-1 py-[13px] rounded-[8px] transition-all ${
                      ratings[index] === rating
                        ? "bg-[#137fec] text-white"
                        : "bg-[#f8fafc] hover:bg-[#e2e8f0]"
                    }`}
                  >
                    {rating}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-white rounded-[12px] p-[21px] border border-[#e2e8f0]">
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Share any additional thoughts..."
              className="w-full min-h-[100px] border border-[#e2e8f0] rounded-[8px] p-[12px] outline-none focus:ring-2 focus:ring-[#137fec]"
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-[16px] py-[20px]">
        <div className="max-w-[448px] mx-auto">
          <button
            onClick={handleSubmit}
            disabled={answeredQuestions < totalQuestions || submitting}
            className="bg-[#137fec] w-full py-[16px] rounded-[12px] text-white font-bold disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>
      </div>

    </div>
  );
}
