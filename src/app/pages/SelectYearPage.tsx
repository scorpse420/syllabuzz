import { useNavigate } from 'react-router';
import { useFeedback } from '../context/FeedbackContext';
import svgPaths from '../../imports/svg-xmxeag9jel';

const academicYears = [
  '2025-2026',
  '2024-2025',
  '2023-2024',
  '2022-2023',
];

export function SelectYearPage() {
  const navigate = useNavigate();
  const { setAcademicYear } = useFeedback();

  const handleYearSelect = (year: string) => {
    setAcademicYear(year);
    navigate('/select-course');
  };

  return (
    <div className="bg-[#f8fafc] content-stretch flex min-h-screen overflow-clip relative">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center size-full px-[16px] py-[40px] relative">
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full max-w-[448px]">
              {/* Back Button */}
              <button
                onClick={() => navigate('/login')}
                className="content-stretch flex items-center relative shrink-0 hover:opacity-70 transition-opacity"
              >
                <div className="h-[12px] relative shrink-0 w-[7.406px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.40625 12">
                    <g id="Container">
                      <path d={svgPaths.p1c24c780} fill="var(--fill-0, #137FEC)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#137fec] text-[16px] text-center w-[39.31px] ml-1">
                  <p className="leading-[24px] whitespace-pre-wrap">Back</p>
                </div>
              </button>

              {/* Header */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[28px] w-full">
                  <p className="leading-[36px] whitespace-pre-wrap">Select Academic Year</p>
                </div>
                <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#64748b] text-[16px] w-full whitespace-pre-wrap">
                  <p>Choose the academic year for which you want to provide feedback.</p>
                </div>
              </div>

              {/* Year Options */}
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                {academicYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearSelect(year)}
                    className="bg-white relative rounded-[12px] shrink-0 w-full hover:shadow-md hover:border-[#137fec] transition-all group"
                  >
                    <div aria-hidden="true" className="absolute border border-[#e2e8f0] group-hover:border-[#137fec] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[20px] relative w-full">
                      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px]">
                        <p className="leading-[24px] whitespace-pre-wrap">{year}</p>
                      </div>
                      <div className="h-[20px] relative shrink-0 w-[12px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 20">
                          <path d="M1.5 18.5L10 10L1.5 1.5" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#137fec]" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
