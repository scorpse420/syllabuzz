import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useFeedback } from '../context/FeedbackContext';
import svgPaths from '../../imports/svg-pq3t30dd6f';

const questions = [
  'The learning objectives for this course were clearly stated.',
  "The instructor's delivery of the content was engaging and clear.",
  'The course materials (slides, readings, etc.) were of high quality.',
  'Assignments and tasks were directly relevant to the course objectives.',
  'The instructor was accessible and provided helpful feedback.',
];

export function FeedbackFormPage() {
  const navigate = useNavigate();
  const { state, setResponses } = useFeedback();
  const [ratings, setRatings] = useState<{ [key: number]: number }>({});
  const [comments, setComments] = useState('');

  const handleRatingChange = (questionIndex: number, rating: number) => {
    setRatings(prev => ({ ...prev, [questionIndex]: rating }));
  };

  const handleSubmit = () => {
    const allQuestionsAnswered = questions.every((_, index) => ratings[index] !== undefined);
    
    if (!allQuestionsAnswered) {
      alert('Please answer all questions before submitting.');
      return;
    }

    setResponses({
      q1: ratings[0],
      q2: ratings[1],
      q3: ratings[2],
      q4: ratings[3],
      q5: ratings[4],
      comments: comments || undefined,
    });

    navigate('/success');
  };

  const answeredQuestions = Object.keys(ratings).length;
  const totalQuestions = questions.length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="bg-[#f8fafc] min-h-screen relative pb-[120px]">
      {/* Sticky Header */}
      <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)] sticky top-0 w-full z-[3]">
        <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[13px] pt-[12px] px-[16px] max-w-[448px] mx-auto">
          {/* Back, Title, Progress */}
          <div className="content-stretch flex items-center justify-between w-full">
            <button
              onClick={() => navigate('/select-subject')}
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
                <p className="leading-[20px] whitespace-pre-wrap">Feedback</p>
              </div>
              <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] text-center mt-1">
                <p className="leading-[20px] whitespace-pre-wrap truncate max-w-[200px]">{state.subject}</p>
              </div>
            </div>

            <div className="flex flex-col items-end relative shrink-0 w-[48px]">
              <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#137fec] text-[12px] text-right">
                <p className="leading-[16px] whitespace-pre-wrap">{Math.round(progress)}%</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-[#f1f5f9] h-[4px] w-full relative rounded-[9999px] shrink-0">
            <div className="bg-[#137fec] h-full rounded-[9999px] transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[16px] py-[24px] max-w-[448px] mx-auto">
        <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
          {/* Intro Section */}
          <div className="content-stretch flex flex-col gap-[4px] items-start w-full">
            <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[20px] w-full">
              <p className="leading-[28px] whitespace-pre-wrap">Subject Evaluation</p>
            </div>
            <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-full whitespace-pre-wrap">
              <p className="mb-0">Please provide your honest feedback regarding this</p>
              <p className="mb-0">course. Your responses are anonymous and help us</p>
              <p>improve the curriculum.</p>
            </div>
          </div>

          {/* Questions */}
          <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
            {questions.map((question, index) => (
              <div key={index} className="bg-white relative rounded-[12px] w-full">
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
                  {/* Question Text */}
                  <div className="font-['Lexend:Medium',sans-serif] font-medium leading-[24px] text-[#1e293b] text-[16px] w-full">
                    {index + 1}. {question}
                  </div>

                  {/* Rating Buttons */}
                  <div className="content-stretch flex items-start justify-between w-full">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => handleRatingChange(index, rating)}
                        className={`content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch transition-all ${
                          ratings[index] === rating
                            ? 'bg-[#137fec]'
                            : 'bg-[#f8fafc] hover:bg-[#e2e8f0]'
                        }`}
                      >
                        <div
                          aria-hidden="true"
                          className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${
                            ratings[index] === rating ? 'border-[#137fec]' : 'border-[#e2e8f0]'
                          }`}
                        />
                        <div
                          className={`flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center ${
                            ratings[index] === rating ? 'text-white' : 'text-[#0f172a]'
                          }`}
                        >
                          <p className="leading-[20px] whitespace-pre-wrap">{rating}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Scale Labels - only show on first question */}
                  {index === 0 && (
                    <div className="content-stretch flex items-start justify-between w-full px-[4px]">
                      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] uppercase">
                        <p className="leading-[15px] whitespace-pre-wrap">Strongly Disagree</p>
                      </div>
                      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] uppercase">
                        <p className="leading-[15px] whitespace-pre-wrap">Strongly Agree</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Comments Section */}
          <div className="bg-white relative rounded-[12px] w-full">
            <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
              <div className="font-['Lexend:Semi_Bold',sans-serif] leading-[24px] text-[#0f172a] text-[16px] w-full">
                Additional Comments (Optional)
              </div>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Share any additional thoughts or suggestions..."
                className="w-full min-h-[100px] px-[16px] py-[12px] border border-[#e2e8f0] rounded-[8px] font-['Lexend:Regular',sans-serif] text-[14px] text-[#0f172a] outline-none focus:ring-2 focus:ring-[#137fec] resize-none placeholder:text-[#94a3b8]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Bottom Action Area */}
      <div className="fixed backdrop-blur-[10px] bg-[rgba(255,255,255,0.9)] bottom-0 left-0 right-0 z-[2]">
        <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start pb-[32px] pt-[17px] px-[16px] max-w-[448px] mx-auto">
          <button
            onClick={handleSubmit}
            disabled={answeredQuestions < totalQuestions}
            className="bg-[#137fec] relative rounded-[12px] w-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
          >
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.2),0px_4px_6px_-4px_rgba(19,127,236,0.2)]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[16px] relative w-full">
              <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white">
                <p className="leading-[24px] whitespace-pre-wrap">Submit Feedback</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
