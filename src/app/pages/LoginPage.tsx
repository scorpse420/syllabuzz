import { useState } from "react";
import { useNavigate } from "react-router";
import { useFeedback } from "../context/FeedbackContext";

export function LoginPage() {
  const navigate = useNavigate();
  const { setStudentEmail } = useFeedback(); // we keep function name for now
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleLogin = () => {
    const trimmed = email.trim();

    if (!validateEmail(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setStudentEmail(trimmed); // storing email in existing state
    navigate("/select-year");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="bg-[#137fec] content-stretch flex min-h-screen overflow-clip relative">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center size-full px-[16px] relative">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[448px]">

              {/* Logo */}
              <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
                <div className="bg-white content-stretch flex flex-col items-center p-[20px] relative rounded-[100px] shrink-0">
                  <div className="h-[60px] w-[60px]" />
                </div>
              </div>

              {/* Title */}
              <div className="w-full text-center">
                <h1 className="font-bold text-[32px] text-white leading-[40px]">
                  Student Login
                </h1>
              </div>

              {/* Description */}
              <div className="w-full text-center">
                <p className="text-white text-[16px] leading-[24px]">
                  Enter your email to begin the feedback
                </p>
              </div>

              {/* Input */}
              <div className="bg-white relative rounded-[12px] shrink-0 w-full mt-[8px]">
                <div className="px-[20px] py-[16px]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="e.g., student@example.com"
                    className="w-full text-[16px] text-[#0f172a] outline-none bg-transparent placeholder:text-[#94a3b8]"
                    autoFocus
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="text-white text-sm mt-1">
                  {error}
                </div>
              )}

              {/* Start Feedback Button */}
              <button
                onClick={handleLogin}
                disabled={!email.trim()}
                className="bg-white rounded-[12px] w-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                <div className="py-[16px] flex items-center justify-center">
                  <span className="font-bold text-[#137fec] text-[16px]">
                    Start Feedback
                  </span>
                </div>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
