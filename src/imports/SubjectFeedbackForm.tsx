import svgPaths from "./svg-pq3t30dd6f";

function Container1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.406px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.40625 12">
        <g id="Container">
          <path d={svgPaths.p1c24c780} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#137fec] text-[16px] text-center w-[39.31px]">
        <p className="leading-[24px] whitespace-pre-wrap">Back</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center tracking-[0.7px] uppercase w-[81.81px]">
        <p className="leading-[20px] whitespace-pre-wrap">Feedback</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="max-w-[180px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] pr-[9.85px] relative w-full">
          <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] text-center w-[170.15px]">
            <p className="leading-[20px] whitespace-pre-wrap">Programming Fund…</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[48px]" data-name="Container">
      <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#137fec] text-[12px] text-right w-[34.56px]">
        <p className="leading-[16px] whitespace-pre-wrap">100%</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative w-full">
        <Button />
        <Container3 />
        <Container5 />
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[#f1f5f9] h-[4px] max-w-[448px] relative rounded-[9999px] shrink-0 w-full" data-name="Progress Bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#137fec] flex-[1_0_0] min-h-px min-w-px w-full" data-name="Background" />
      </div>
    </div>
  );
}

function StickyHeader() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)] relative shrink-0 w-full z-[3]" data-name="Sticky Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[13px] pt-[12px] px-[16px] relative w-full">
        <Container />
        <ProgressBar />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#137fec] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[16px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.2),0px_4px_6px_-4px_rgba(19,127,236,0.2)]" data-name="Button:shadow" />
        <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[141.61px]">
          <p className="leading-[24px] whitespace-pre-wrap">Submit Feedback</p>
        </div>
      </div>
    </div>
  );
}

function FooterBottomActionArea() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.9)] bottom-0 content-stretch flex flex-col items-start left-0 pb-[32px] pt-[17px] px-[16px] right-0 z-[2]" data-name="Footer - Bottom Action Area">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <Button1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Subject Evaluation</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Please provide your honest feedback regarding this</p>
        <p className="mb-0">course. Your responses are anonymous and help us</p>
        <p>improve the curriculum.</p>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Intro Section">
      <Heading1 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[21px]" data-name="Container">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[48px] justify-center leading-[24px] relative shrink-0 text-[#1e293b] text-[16px] w-[260.7px] whitespace-pre-wrap">
        <p className="mb-0">1. The learning objectives for this</p>
        <p>course were clearly stated.</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.59px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.69px]">
        <p className="leading-[20px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8px]">
        <p className="leading-[20px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[9.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#137fec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[8.22px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[21px] right-[21px] top-[85px]" data-name="Container">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
      <Label4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] uppercase w-[109.97px]">
        <p className="leading-[15px] whitespace-pre-wrap">Strongly Disagree</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] uppercase w-[91.23px]">
        <p className="leading-[15px] whitespace-pre-wrap">Strongly Agree</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[21px] px-[4px] right-[21px] top-[139px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Question() {
  return (
    <div className="bg-white h-[175px] relative rounded-[12px] shrink-0 w-full" data-name="Question 1">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[48px] justify-center leading-[24px] relative shrink-0 text-[#1e293b] text-[16px] w-[257.39px] whitespace-pre-wrap">
          <p className="mb-0">{`2. The instructor's delivery of the`}</p>
          <p>content was engaging and clear.</p>
        </div>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.59px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.69px]">
        <p className="leading-[20px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8px]">
        <p className="leading-[20px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#137fec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[9.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8.22px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Label5 />
        <Label6 />
        <Label7 />
        <Label8 />
        <Label9 />
      </div>
    </div>
  );
}

function Question1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question 2">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[48px] justify-center leading-[24px] relative shrink-0 text-[#1e293b] text-[16px] w-[277.5px] whitespace-pre-wrap">
          <p className="mb-0">3. The course materials (slides,</p>
          <p>readings, etc.) were of high quality.</p>
        </div>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.59px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.69px]">
        <p className="leading-[20px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8px]">
        <p className="leading-[20px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[9.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Label14() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#137fec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[8.22px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Label10 />
        <Label11 />
        <Label12 />
        <Label13 />
        <Label14 />
      </div>
    </div>
  );
}

function Question2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question 3">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[48px] justify-center leading-[24px] relative shrink-0 text-[#1e293b] text-[16px] w-[306.11px] whitespace-pre-wrap">
          <p className="mb-0">4. Assignments and tasks were directly</p>
          <p>relevant to the course objectives.</p>
        </div>
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.59px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Label16() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.69px]">
        <p className="leading-[20px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#137fec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[8px]">
        <p className="leading-[20px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Label18() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[9.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Label19() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8.22px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Label15 />
        <Label16 />
        <Label17 />
        <Label18 />
        <Label19 />
      </div>
    </div>
  );
}

function Question3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question 4">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[48px] justify-center leading-[24px] relative shrink-0 text-[#1e293b] text-[16px] w-[283.83px] whitespace-pre-wrap">
          <p className="mb-0">5. The instructor was accessible and</p>
          <p>provided helpful feedback.</p>
        </div>
      </div>
    </div>
  );
}

function Label20() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.59px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Label21() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.69px]">
        <p className="leading-[20px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Label22() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8px]">
        <p className="leading-[20px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Label23() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[9.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Label24() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#137fec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[8.22px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Label20 />
        <Label21 />
        <Label22 />
        <Label23 />
        <Label24 />
      </div>
    </div>
  );
}

function Question4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question 5">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[48px] justify-center leading-[24px] relative shrink-0 text-[#1e293b] text-[16px] w-[286.75px] whitespace-pre-wrap">
          <p className="mb-0">6. The workload was appropriate for</p>
          <p>the course level.</p>
        </div>
      </div>
    </div>
  );
}

function Label25() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.59px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Label26() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.69px]">
        <p className="leading-[20px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Label27() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#137fec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[8px]">
        <p className="leading-[20px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Label28() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[9.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Label29() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8.22px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Label25 />
        <Label26 />
        <Label27 />
        <Label28 />
        <Label29 />
      </div>
    </div>
  );
}

function Question5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question 6">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[48px] justify-center leading-[24px] relative shrink-0 text-[#1e293b] text-[16px] w-[231.25px] whitespace-pre-wrap">
          <p className="mb-0">7. The pace of the course was</p>
          <p>manageable.</p>
        </div>
      </div>
    </div>
  );
}

function Label30() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.59px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Label31() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.69px]">
        <p className="leading-[20px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Label32() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8px]">
        <p className="leading-[20px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Label33() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#137fec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[9.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Label34() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8.22px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Label30 />
        <Label31 />
        <Label32 />
        <Label33 />
        <Label34 />
      </div>
    </div>
  );
}

function Question6() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question 7">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[48px] justify-center leading-[24px] relative shrink-0 text-[#1e293b] text-[16px] w-[284.95px] whitespace-pre-wrap">
          <p className="mb-0">8. The assessments (quizzes, exams)</p>
          <p>reflected what was taught.</p>
        </div>
      </div>
    </div>
  );
}

function Label35() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.59px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Label36() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.69px]">
        <p className="leading-[20px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Label37() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8px]">
        <p className="leading-[20px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Label38() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#137fec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[9.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Label39() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8.22px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Label35 />
        <Label36 />
        <Label37 />
        <Label38 />
        <Label39 />
      </div>
    </div>
  );
}

function Question7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question 8">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[48px] justify-center leading-[24px] relative shrink-0 text-[#1e293b] text-[16px] w-[292.81px] whitespace-pre-wrap">
          <p className="mb-0">9. Technology was used effectively to</p>
          <p>support learning.</p>
        </div>
      </div>
    </div>
  );
}

function Label40() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.59px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Label41() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.69px]">
        <p className="leading-[20px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Label42() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8px]">
        <p className="leading-[20px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Label43() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#137fec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[9.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Label44() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8.22px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Label40 />
        <Label41 />
        <Label42 />
        <Label43 />
        <Label44 />
      </div>
    </div>
  );
}

function Question8() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question 9">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[48px] justify-center leading-[24px] relative shrink-0 text-[#1e293b] text-[16px] w-[283.86px] whitespace-pre-wrap">
          <p className="mb-0">10. Overall, I would recommend this</p>
          <p>subject to other students.</p>
        </div>
      </div>
    </div>
  );
}

function Label45() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.59px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Label46() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[7.69px]">
        <p className="leading-[20px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Label47() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[8px]">
        <p className="leading-[20px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Label48() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center w-[9.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Label49() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px px-px py-[13px] relative rounded-[8px] self-stretch" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#137fec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[8.22px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Label45 />
        <Label46 />
        <Label47 />
        <Label48 />
        <Label49 />
      </div>
    </div>
  );
}

function Question9() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question 10">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Label50() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[16px] w-[254.67px]">
          <p className="leading-[24px] whitespace-pre-wrap">Additional Comments (Optional)</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] w-full whitespace-pre-wrap">
          <p className="mb-0">{`Share any other thoughts about the `}</p>
          <p>curriculum...</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-[316px]" data-name="Textarea">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center overflow-clip pb-[49px] pt-[9px] px-[13px] relative rounded-[inherit] w-full">
        <Container30 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function OptionalComments() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Optional Comments">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[21px] relative w-full">
        <Label50 />
        <Textarea />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[8.016px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.01562 10.5">
        <g id="Container">
          <path d={svgPaths.p21639480} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function SubmissionInfo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center pt-[15.5px] relative shrink-0 w-full" data-name="Submission Info">
      <Container31 />
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] text-center w-[311.03px]">
        <p className="leading-[16px] whitespace-pre-wrap">Your responses are securely and anonymously stored.</p>
      </div>
    </div>
  );
}

function FormQuestionsList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] relative shrink-0 w-full" data-name="Form - Questions List">
      <Question />
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <Question5 />
      <Question6 />
      <Question7 />
      <Question8 />
      <Question9 />
      <OptionalComments />
      <SubmissionInfo />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[448px] relative shrink-0 w-full z-[1]" data-name="Main">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] p-[16px] relative w-full">
        <IntroSection />
        <FormQuestionsList />
      </div>
    </div>
  );
}

export default function SubjectFeedbackForm() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex flex-col isolate items-start pb-[102px] relative size-full" data-name="Subject Feedback Form">
      <StickyHeader />
      <FooterBottomActionArea />
      <Main />
    </div>
  );
}