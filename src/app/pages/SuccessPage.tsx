import { useNavigate } from 'react-router';
import { useFeedback } from '../context/FeedbackContext';
import svgPaths from '../../imports/svg-4jffbhh5u2';

export function SuccessPage() {
  const navigate = useNavigate();
  const { resetState } = useFeedback();

  const handleProvideMoreFeedback = () => {
    resetState();
    navigate('/select-subject');
  };

  const handleGoHome = () => {
    resetState();
    navigate('/');
  };

  return (
    <div className="bg-[#f8fafc] content-stretch flex min-h-screen overflow-clip relative">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center size-full px-[16px] relative">
            <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full max-w-[448px]">
              {/* Success Icon */}
              <div className="bg-[#dcfce7] content-stretch flex flex-col items-center p-[24px] relative rounded-[100px] shrink-0">
                <div className="h-[80px] relative shrink-0 w-[80px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
                    <g id="Icon">
                      <path d={svgPaths.p1c09c780} fill="var(--fill-0, #10B981)" id="Vector" />
                      <path d={svgPaths.p2e3a2ca0} fill="var(--fill-1, #10B981)" id="Vector_2" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Success Message */}
              <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[28px] text-center w-full">
                  <p className="leading-[36px] whitespace-pre-wrap">Feedback Submitted!</p>
                </div>
                <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#64748b] text-[16px] text-center w-full whitespace-pre-wrap">
                  <p className="mb-0">Thank you for taking the time to provide your</p>
                  <p className="mb-0">feedback. Your input helps us improve the</p>
                  <p>quality of education.</p>
                </div>
              </div>

              {/* Confirmation Info */}
              <div className="bg-white relative rounded-[12px] w-full">
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="font-['Lexend:Medium',sans-serif] text-[14px] text-[#64748b]">
                      Submission Time
                    </div>
                    <div className="font-['Lexend:Semi_Bold',sans-serif] text-[14px] text-[#0f172a]">
                      {new Date().toLocaleString()}
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-[#e2e8f0]" />
                  <div className="flex items-center justify-between w-full">
                    <div className="font-['Lexend:Medium',sans-serif] text-[14px] text-[#64748b]">
                      Status
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                      <div className="font-['Lexend:Semi_Bold',sans-serif] text-[14px] text-[#10b981]">
                        Submitted
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <button
                  onClick={handleProvideMoreFeedback}
                  className="bg-[#137fec] relative rounded-[12px] w-full hover:shadow-lg transition-all"
                >
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.2),0px_4px_6px_-4px_rgba(19,127,236,0.2)]" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[16px] relative w-full">
                    <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white">
                      <p className="leading-[24px] whitespace-pre-wrap">Provide More Feedback</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={handleGoHome}
                  className="bg-white relative rounded-[12px] w-full hover:shadow-md transition-all"
                >
                  <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[16px] relative w-full">
                    <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#137fec] text-[16px] text-center">
                      <p className="leading-[24px] whitespace-pre-wrap">Return to Home</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
