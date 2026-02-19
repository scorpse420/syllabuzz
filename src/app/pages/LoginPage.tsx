import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";

export function LoginPage() {
  const navigate = useNavigate();
  const { setStudentEmail } = useFeedback();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isValid = validateEmail(email.trim());

  const handleLogin = () => {
    const trimmed = email.trim();

    if (!validateEmail(trimmed)) {
      setError("Enter a valid email.");
      return;
    }

    setStudentEmail(trimmed);
    navigate("/select-year");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#137fec] px-4">

      {/* Main White Card */}
      <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center animate-fadeIn">

        {/* Student Icon Circle */}
        <div className="w-28 h-28 bg-[#137fec]/10 rounded-full mb-8 shadow-md animate-popIn flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-[#137fec]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
          </svg>
        </div>

        {/* Title */}
        <h1 className="font-['Lexend:Bold',sans-serif] font-bold text-[#0f172a] text-[30px] leading-[36px] mb-3 tracking-[-0.5px]">
          Student Login
        </h1>

        {/* Subtitle */}
        <p className="font-['Lexend:Regular',sans-serif] text-gray-600 text-[14px] leading-[22px] mb-8 max-w-[280px]">
          Enter your email to begin the feedback
        </p>

        {/* Input */}
        <div className="w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="e.g., student@example.com"
            className="w-full px-6 py-4 rounded-2xl bg-gray-100 outline-none text-[#0f172a] text-[16px] font-['Lexend:Regular',sans-serif] shadow-sm focus:ring-4 focus:ring-[#137fec]/30 transition-all duration-300"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="font-['Lexend:Regular',sans-serif] text-red-500 text-[13px] mt-3">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={!isValid}
          className={`mt-8 w-full py-3 rounded-2xl
            flex items-center justify-center gap-2
            font-['Lexend:Bold',sans-serif] font-bold text-[20px] tracking-[0.4px]
            transition-all duration-300 active:scale-95 shadow-md
            ${
              isValid
                ? "bg-[#137fec] text-white hover:bg-[#106cd1] group"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          <span>Get Started</span>

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
