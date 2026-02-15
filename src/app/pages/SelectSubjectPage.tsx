import { useNavigate } from 'react-router';
import { useFeedback } from '../context/FeedbackContext';
import svgPaths from '../../imports/svg-6n48wc9hlk';

const subjects = [
  { id: 1, name: 'Programming Fundamentals', code: 'CS101', semester: 1 },
  { id: 2, name: 'Data Structures', code: 'CS102', semester: 1 },
  { id: 3, name: 'Database Management', code: 'CS103', semester: 1 },
  { id: 4, name: 'Web Technologies', code: 'CS104', semester: 1 },
  { id: 5, name: 'Operating Systems', code: 'CS105', semester: 1 },
  { id: 6, name: 'Computer Networks', code: 'CS106', semester: 1 },
];

export function SelectSubjectPage() {
  const navigate = useNavigate();
  const { setSubject, state } = useFeedback();

  const handleSubjectSelect = (subjectName: string) => {
    setSubject(subjectName);
    navigate('/feedback-form');
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen relative">
      {/* Sticky Header */}
      <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)] sticky top-0 w-full z-10">
        <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[13px] pt-[12px] px-[16px] max-w-[448px] mx-auto">
          {/* Back and Title */}
          <div className="content-stretch flex items-center justify-between w-full">
            <button
              onClick={() => navigate('/select-course')}
              className="content-stretch flex items-center relative shrink-0 hover:opacity-70 transition-opacity"
            >
              <div className="h-[12px] relative shrink-0 w-[7.406px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.40625 12">
                  <g id="Container">
                    <path d={svgPaths.p1c24c780} fill="var(--fill-0, #137FEC)" id="Icon" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#137fec] text-[16px] text-center ml-1">
                <p className="leading-[24px] whitespace-pre-wrap">Back</p>
              </div>
            </button>
            
            <div className="content-stretch flex flex-col items-center relative shrink-0">
              <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center tracking-[0.7px] uppercase">
                <p className="leading-[20px] whitespace-pre-wrap">Select Subject</p>
              </div>
            </div>

            <div className="w-[60px]"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[16px] py-[24px] max-w-[448px] mx-auto">
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          {/* Course Info */}
          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
            <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[24px] w-full">
              <p className="leading-[32px] whitespace-pre-wrap">{state.course || 'B.Sc Computer Science'}</p>
            </div>
            <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-full">
              <p className="whitespace-pre-wrap">Semester 1 • {state.academicYear || '2025-2026'}</p>
            </div>
          </div>

          {/* Intro Text */}
          <div className="content-stretch flex flex-col items-start w-full bg-[#eff6ff] border border-[#bfdbfe] rounded-[12px] p-[16px]">
            <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#1e40af] text-[14px] w-full whitespace-pre-wrap">
              <p>Select a subject to provide your feedback. Your responses help improve the quality of education.</p>
            </div>
          </div>

          {/* Subject List */}
          <div className="content-stretch flex flex-col gap-[12px] items-start w-full mt-[8px]">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => handleSubjectSelect(subject.name)}
                className="bg-white relative rounded-[12px] w-full hover:shadow-md hover:border-[#137fec] transition-all group"
              >
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] group-hover:border-[#137fec] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative w-full">
                  <div className="flex flex-col gap-[4px] items-start flex-1">
                    <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px]">
                      <p className="leading-[22px] whitespace-pre-wrap">{subject.name}</p>
                    </div>
                    <div className="flex flex-col font-['Lexend:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[13px]">
                      <p className="leading-[18px] whitespace-pre-wrap">{subject.code}</p>
                    </div>
                  </div>
                  <div className="h-[20px] relative shrink-0 w-[12px] ml-[16px]">
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
  );
}
