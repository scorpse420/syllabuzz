import svgPaths from "./svg-9c0l0ctsq4";
import imgStudentsStudying from "figma:asset/699ac1321fb5a5675d1751399b7cf85f77649620.png";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-[28.09px]">
        <p className="leading-[20px] whitespace-pre-wrap">9:41</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[12.023px] relative shrink-0 w-[11.25px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 12.0234">
        <g id="Container">
          <path d={svgPaths.p8f9c800} fill="var(--fill-0, #1E293B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[11.663px] relative shrink-0 w-[16.523px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5234 11.6631">
        <g id="Container">
          <path d={svgPaths.pab7f300} fill="var(--fill-0, #1E293B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[14.977px] relative shrink-0 w-[7.523px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.52344 14.9766">
        <g id="Container">
          <path d={svgPaths.p3987de00} fill="var(--fill-0, #1E293B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function StatusBarMockup() {
  return (
    <div className="h-[48px] relative shrink-0 w-[342px]" data-name="Status Bar Mockup">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[16px] px-[40px] relative size-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[19.969px] relative shrink-0 w-[11.766px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7656 19.9688">
        <g id="Container">
          <path d={svgPaths.p32c89f00} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase w-[83.48px]">
        <p className="leading-[16px] whitespace-pre-wrap">Step 1 of 3</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <div className="bg-[#137fec] h-[4px] rounded-[9999px] shrink-0 w-[16px]" data-name="Background" />
      <div className="bg-[#e2e8f0] h-[4px] rounded-[9999px] shrink-0 w-[16px]" data-name="Background" />
      <div className="bg-[#e2e8f0] h-[4px] rounded-[9999px] shrink-0 w-[16px]" data-name="Background" />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container7 />
      <Margin />
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="relative shrink-0 w-[342px]" data-name="Header Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[24px] pr-[129.27px] py-[16px] relative w-full">
        <Button />
        <Container6 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold justify-center leading-[37.5px] relative shrink-0 text-[#0f172a] text-[30px] w-full whitespace-pre-wrap">
        <p className="mb-0">Select Your</p>
        <p className="text-[#137fec]">Course</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[#64748b] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Please identify the curriculum you</p>
        <p className="mb-0">are currently enrolled in to continue</p>
        <p>with your feedback.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 right-0 top-[-0.75px]" data-name="Container">
      <Heading />
      <Container10 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[205px] relative shrink-0 w-full" data-name="Margin">
      <Container9 />
    </div>
  );
}

function StudentsStudying() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mix-blend-multiply opacity-80 relative" data-name="Students studying">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.77%] left-0 max-w-none top-[-38.89%] w-full" src={imgStudentsStudying} />
      </div>
    </div>
  );
}

function IllustrationContainer() {
  return (
    <div className="bg-[rgba(19,127,236,0.05)] content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Illustration Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <StudentsStudying />
      </div>
    </div>
  );
}

function IllustrationContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Illustration Container:margin">
      <IllustrationContainer />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M7.2 9.6L12 14.4L16.8 9.6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-end justify-center left-0 overflow-clip pl-[244px] pr-[10px] py-[18px] top-0 w-[278px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Container12() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[22px] overflow-clip right-[50px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[16px] w-[141.27px]">
        <p className="leading-[24px] whitespace-pre-wrap">Choose a course...</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#f8fafc] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border-2 border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <ImageFill />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bottom-[30%] content-stretch flex flex-col items-start right-[16px] top-[30%]" data-name="Container">
      <div className="h-[7.406px] relative shrink-0 w-[12px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.40625">
          <path d={svgPaths.p122be600} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[36px]" data-name="Container">
      <Options />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[16.641px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6406 16.6406">
        <g id="Container">
          <path d={svgPaths.p11842440} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(19,127,236,0.2)] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-[126.97px]">
        <p className="leading-[20px] whitespace-pre-wrap">Why this matters?</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[80px] justify-center leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-[166px] whitespace-pre-wrap">
        <p className="mb-0">We tailor the feedback</p>
        <p className="mb-0">questions based on your</p>
        <p className="mb-0">specific curriculum and</p>
        <p>module structure.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[102px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] h-full items-start relative">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function InfoCard() {
  return (
    <div className="absolute bg-[rgba(19,127,236,0.05)] content-stretch flex gap-[16px] items-start left-0 p-[17px] right-0 rounded-[12px] top-[112px]" data-name="Info Card">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Overlay />
      <Container15 />
    </div>
  );
}

function CustomSelectDropdown() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Custom Select/Dropdown">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] left-[4px] not-italic text-[#334155] text-[14px] top-[10px] w-[134.23px]">
        <p className="leading-[20px] whitespace-pre-wrap">Academic Program</p>
      </div>
      <Container11 />
      <InfoCard />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[342px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] px-[32px] relative size-full">
        <Margin1 />
        <IllustrationContainerMargin />
        <CustomSelectDropdown />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[16.031px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0312 16.0312">
        <g id="Container">
          <path d={svgPaths.p26b3e2c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#137fec] content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.2),0px_4px_6px_-4px_rgba(19,127,236,0.2)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[71.72px]">
        <p className="leading-[24px] whitespace-pre-wrap">Continue</p>
      </div>
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#e2e8f0] h-[6px] rounded-[9999px] shrink-0 w-[128px]" data-name="iOS Home Indicator" />
    </div>
  );
}

function FixedFooterCta() {
  return (
    <div className="relative shrink-0 w-[342px]" data-name="Fixed Footer CTA">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[16px] px-[32px] relative w-full">
        <Button1 />
        <Container19 />
      </div>
    </div>
  );
}

function MobileScreenWrapperIPhoneProMaxRoughly() {
  return (
    <div className="bg-white h-[932px] max-w-[430px] relative rounded-[48px] shrink-0 w-full" data-name="Mobile Screen Wrapper (iPhone Pro Max roughly)">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <StatusBarMockup />
        <HeaderNavigation />
        <MainContent />
        <FixedFooterCta />
        <div className="-translate-x-1/2 absolute bg-[#e2e8f0] h-[28px] left-1/2 rounded-bl-[24px] rounded-br-[24px] top-[8px] w-[160px]" data-name="Decorative UI Element (Top Notch)" />
      </div>
      <div aria-hidden="true" className="absolute border-8 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function SelectYourCourse() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex flex-col items-center justify-center p-[16px] relative size-full" data-name="Select Your Course">
      <div className="absolute bg-[rgba(19,127,236,0.05)] blur-[32px] left-[-96px] rounded-[9999px] size-[384px] top-[-96px]" data-name="Background Elements" />
      <div className="absolute bg-[rgba(19,127,236,0.1)] blur-[32px] bottom-[82px] right-[-96px] rounded-[9999px] size-[384px]" data-name="Overlay+Blur" />
      <MobileScreenWrapperIPhoneProMaxRoughly />
    </div>
  );
}