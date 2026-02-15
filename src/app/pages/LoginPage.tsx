import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useFeedback } from '../context/FeedbackContext';


export function LoginPage() {
  const navigate = useNavigate();
  const { setStudentId } = useFeedback();
  const [studentIdInput, setStudentIdInput] = useState('');

  const handleLogin = () => {
    if (studentIdInput.trim()) {
      setStudentId(studentIdInput.trim());
      navigate('/select-year');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
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
                  <div className="h-[60px] relative shrink-0 w-[60px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
                      
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] relative shrink-0 text-[32px] text-center text-white w-full">
                  <p className="leading-[40px] whitespace-pre-wrap">Student Login</p>
                </div>
              </div>

              {/* Description */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[24px] justify-center leading-[24px] relative shrink-0 text-[16px] text-center text-white w-full whitespace-pre-wrap">
                  <p>Enter your Student ID to begin the feedback</p>
                </div>
              </div>

              {/* Input Field */}
              <div className="bg-white relative rounded-[12px] shrink-0 w-full mt-[8px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] py-[16px] relative w-full">
                  <input
                    type="text"
                    value={studentIdInput}
                    onChange={(e) => setStudentIdInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="e.g., STU12345"
                    className="flex-1 font-['Lexend:Regular',sans-serif] text-[16px] text-[#0f172a] outline-none bg-transparent placeholder:text-[#94a3b8]"
                    autoFocus
                  />
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleLogin}
                disabled={!studentIdInput.trim()}
                className="bg-white relative rounded-[12px] shrink-0 w-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[16px] relative w-full">
                  <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#137fec] text-[16px] text-center w-[76.45px]">
                    <p className="leading-[24px] whitespace-pre-wrap">Continue</p>
                  </div>
                </div>
              </button>

              {/* Admin Link */}
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full mt-[24px]">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}