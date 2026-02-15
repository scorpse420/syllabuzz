import { useNavigate } from "react-router-dom";
import svgPaths from "./svg-58nnttec27";


function Container2() {
  return (
    <div className="h-[45px] relative shrink-0 w-[55.078px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.0781 45">
        <g id="Container">
          <path d={svgPaths.ped1b300} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[96px]" data-name="Container">
      <div className="absolute bg-[rgba(19,127,236,0.1)] inset-0 rounded-[9999px]" data-name="Overlay" />
      <Container1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[128px] items-start pb-[32px] relative shrink-0 w-[96px] z-[2]" data-name="Margin">
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[30px] text-center tracking-[-0.75px] w-[312.52px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[36px]">{`Curriculum `}</span>
          <span className="font-['Lexend:Bold',sans-serif] font-bold leading-[36px] text-[#137fec]">Feedback</span>
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[11.25px] items-center relative shrink-0 z-[1]" data-name="Container">
      <Heading />
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[69px] justify-center leading-[22.75px] relative shrink-0 text-[#64748b] text-[14px] text-center w-[221.49px] whitespace-pre-wrap">
        <p className="mb-0">Help us shape the future of our</p>
        <p className="mb-0">curriculum. Your voice drives our</p>
        <p>academic excellence.</p>
      </div>
    </div>
  );
}

function TopBrandingSection() {
  return (
    <div className="content-stretch flex flex-col isolate items-center relative shrink-0 w-full" data-name="Top Branding Section">
      <Margin />
      <Container3 />
    </div>
  );
}

function TopBrandingSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full" data-name="Top Branding Section:margin">
      <TopBrandingSection />
    </div>
  );
}

function EducationFeedbackSystemIllustration() {
  return (
    <div className="flex-[1_0_0] h-[278px] min-h-px min-w-px mix-blend-overlay opacity-50 relative" data-name="Education feedback system illustration">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[47.938px] relative shrink-0 w-[39.938px]" data-name="Margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.9375 47.9375">
        <g id="Margin">
          <path d={svgPaths.p2e66b800} fill="var(--fill-0, #137FEC)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(19,127,236,0.6)] tracking-[1px] uppercase w-[175.06px]">
        <p className="leading-[15px] whitespace-pre-wrap">Continuous Improvement</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin1 />
        <Container5 />
      </div>
    </div>
  );
}

function MiddleDecorativeImageIllustration() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Middle Decorative Image / Illustration" style={{ backgroundImage: "linear-gradient(135deg, rgba(19, 127, 236, 0.05) 0%, rgba(19, 127, 236, 0.2) 100%)" }}>
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] w-full">
        <EducationFeedbackSystemIllustration />
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function MiddleDecorativeImageIllustrationMargin() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[280px] py-[32px] relative shrink-0 w-[280px]" data-name="Middle Decorative Image / Illustration:margin">
      <MiddleDecorativeImageIllustration />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[13.359px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3594 13.3594">
        <g id="Container">
          <path d={svgPaths.p1b4f320} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/login")}
      className="bg-[#137fec] content-stretch flex gap-[12px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full"
    >
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.25),0px_4px_6px_-4px_rgba(19,127,236,0.25)]" />
      <Container6 />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] text-[16px] text-center text-white w-[112.36px]">
        <p className="leading-[24px]">Student Login</p>
      </div>
    </button>
  );
}


function Container7() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1d9ada60} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}
function Button1() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/admin-login")}
      className="bg-white content-stretch flex gap-[12px] items-center justify-center px-[2px] py-[18px] relative rounded-[12px] shrink-0 w-full"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(19,127,236,0.2)] inset-0 pointer-events-none rounded-[12px]"
      />
      <Container7 />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[24px] justify-center text-[#137fec] text-[16px] text-center w-[101.09px]">
        <p className="leading-[24px]">Admin Login</p>
      </div>
    </button>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[11.648px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6484 11.6484">
        <g id="Container">
          <path d={svgPaths.p37373700} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container9 />
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[81.3px]">
        <p className="leading-[16px] whitespace-pre-wrap">About System</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[12.852px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 12.8516">
        <g id="Container">
          <path d={svgPaths.p2b15a000} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container10 />
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[81.08px]">
        <p className="leading-[16px] whitespace-pre-wrap">Privacy Policy</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <div className="bg-[#cbd5e1] rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <Link1 />
    </div>
  );
}

function ActionButtonsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[384px] relative shrink-0 w-full" data-name="Action Buttons Section">
      <Button />
      <Button1 />
      <Container8 />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[48px] px-[32px] relative w-full">
          <TopBrandingSectionMargin />
          <MiddleDecorativeImageIllustrationMargin />
          <ActionButtonsSection />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-[160.61px]">
        <p className="leading-[15px] whitespace-pre-wrap">v2.4.0 • Academic Portal</p>
      </div>
    </div>
  );
}

function FooterAreaHomeIndicatorSpace() {
  return (
    <div className="content-stretch flex flex-col items-center py-[24px] relative shrink-0 w-full" data-name="Footer Area / Home Indicator Space">
      <Container11 />
    </div>
  );
}

export default function CurriculumFeedbackHome() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex flex-col items-start relative size-full" data-name="Curriculum Feedback Home">
      <div className="h-[48px] shrink-0 w-full" data-name="iOS Status Bar Placeholder" />
      <Main />
      <FooterAreaHomeIndicatorSpace />
    </div>
  );
}