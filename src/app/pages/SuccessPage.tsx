import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import {
  collection,
  doc,
  getDoc
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useNavigate, useLocation } from "react-router";
import { useFeedback } from "../context/FeedbackContext";
export function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { resetState } = useFeedback();

  const feedbackId = (location.state as any)?.feedbackId;

  const [submissionTime, setSubmissionTime] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!feedbackId) {
      setLoading(false);
      return;
    }

    const fetchFeedback = async () => {
      try {
        const docRef = doc(db, "feedback", feedbackId);
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          const data = snapshot.data();

          if (data.timestamp?.toDate) {
            setSubmissionTime(
              data.timestamp.toDate().toLocaleString()
            );
          }
        }
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, [feedbackId]);

  const handleProvideMoreFeedback = () => {
    navigate("/select-subject");
  };

  const handleGoHome = () => {
    resetState();
    navigate("/");
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex items-center justify-center px-[16px]">
      
      <div className="flex flex-col gap-[32px] w-full max-w-[448px]">

        {/* Success Icon */}
        <motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 260, damping: 20 }}
  className="mx-auto w-[88px] h-[88px] 
             rounded-full 
             bg-[#16a34a] 
             flex items-center justify-center 
             shadow-lg"
>
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.2 }}
  >
    <Check className="w-10 h-10 text-white" strokeWidth={3} />
  </motion.div>
</motion.div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-[28px] font-bold text-[#0f172a]">
            Feedback Submitted!
          </h1>
          <p className="text-[#64748b] mt-2 text-[16px]">
            Thank you for taking the time to provide your feedback.
            Your input helps us improve the quality of education.
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-[12px] border border-[#e2e8f0] shadow-sm p-[20px]">
          <div className="flex justify-between text-[14px]">
            <span className="text-[#64748b]">Submission Time</span>
            <span className="font-semibold text-[#0f172a]">
              {loading
                ? "Loading..."
                : submissionTime || "Just now"}
            </span>
          </div>

          <div className="w-full h-[1px] bg-[#e2e8f0] my-[12px]" />

          <div className="flex justify-between items-center text-[14px]">
            <span className="text-[#64748b]">Status</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span className="font-semibold text-[#10b981]">
                Submitted
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-[12px]">
          <button
            onClick={handleProvideMoreFeedback}
            className="bg-[#137fec] text-white font-bold py-[16px] rounded-[12px] hover:shadow-lg transition-all"
          >
            Provide More Feedback
          </button>

          <button
            onClick={handleGoHome}
            className="bg-white border border-[#e2e8f0] text-[#137fec] font-bold py-[16px] rounded-[12px] hover:shadow-md transition-all"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
