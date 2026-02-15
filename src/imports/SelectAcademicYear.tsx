import svgPaths from "./svg-xmxeag9jel";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[24.08px]">
        <p className="leading-[16px] whitespace-pre-wrap">9:41</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[8.016px] relative shrink-0 w-[7.5px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 8.01562">
        <g id="Container">
          <path d={svgPaths.p3eb59a00} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[7.57px] relative shrink-0 w-[10.367px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3667 7.57031">
        <g id="Container">
          <path d={svgPaths.p3ff75100} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[9.984px] relative shrink-0 w-[5.016px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.01562 9.98438">
        <g id="Container">
          <path d={svgPaths.p10357e00} fill="var(--fill-0, black)" id="Icon" />
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

function StatusBar() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[8px] pt-[16px] px-[32px] right-[8px] top-[8px]" data-name="Status Bar">
      <Container />
      <Container1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[18.973px] relative shrink-0 w-[10.84px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8398 18.9727">
        <g id="Container">
          <path d={svgPaths.p3eff8440} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Container5 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] w-[145.17px]">
        <p className="leading-[28px] whitespace-pre-wrap">Feedback Setup</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[8px] pl-[24px] pr-[98.42px] py-[16px] right-[8px] top-[40px]" data-name="Header">
      <Button />
      <Heading />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[16px] relative rounded-[12px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.16px_0_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Material_Icons_Round:Regular',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[36px] w-[35.844px]">
        <p className="leading-[40px] whitespace-pre-wrap">event_note</p>
      </div>
    </div>
  );
}

function BackgroundCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[192px] items-center justify-center mr-[-26.313px] pb-[56.644px] pt-[56.642px] relative shrink-0 z-[3]" data-name="Background:css-transform">
      <div className="flex h-[78.697px] items-center justify-center relative shrink-0 w-[74.998px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="-rotate-6 flex-none">
          <Background />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start opacity-50 p-[16px] relative rounded-[12px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.46px_0_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Material_Icons_Round:Regular',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-[rgba(19,127,236,0.4)] w-[36.456px]">
        <p className="leading-[40px] whitespace-pre-wrap">school</p>
      </div>
    </div>
  );
}

function BackgroundCssTransform1() {
  return (
    <div className="content-stretch flex flex-col h-[192px] items-center justify-center mr-[-26.313px] pb-[53.715px] pt-[53.72px] relative shrink-0 z-[2]" data-name="Background:css-transform">
      <div className="flex h-[84.659px] items-center justify-center relative shrink-0 w-[81.93px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-12">
          <Background1 />
        </div>
      </div>
    </div>
  );
}

function IllustrationVisualElement() {
  return (
    <div className="bg-[rgba(19,127,236,0.1)] h-[192px] relative rounded-[16px] shrink-0 w-full" data-name="Illustration / Visual Element">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center pl-[75.42px] pr-[98.569px] relative size-full">
          <BackgroundCssTransform />
          <BackgroundCssTransform1 />
          <div className="absolute inset-0 opacity-20 z-[1]" data-name="Gradient" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 278 192\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(26.908 0 0 26.908 139 230.4)\\'><stop stop-color=\\'rgba(19,127,236,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(19,127,236,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>\')" }} />
        </div>
      </div>
    </div>
  );
}

function IllustrationVisualElementMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] pt-[16px] px-[32px] right-[8px] top-[112px]" data-name="Illustration / Visual Element:margin">
      <IllustrationVisualElement />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[24px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">Academic Year</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[#64748b] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Choose your current year of study and</p>
        <p className="mb-0">the examination period you want to</p>
        <p>provide feedback for.</p>
      </div>
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

function Container8() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[50px] overflow-clip right-[42px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[16px] w-[87.02px]">
        <p className="leading-[24px] whitespace-pre-wrap">Select Year</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#f8fafc] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <ImageFill />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bottom-[30%] content-stretch flex flex-col items-start left-[16px] top-[30%]" data-name="Container">
      <div className="h-[22.031px] relative shrink-0 w-[19.969px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 22.0312">
          <path d={svgPaths.p1fa35b10} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bottom-[30%] content-stretch flex flex-col items-start right-[16px] top-[30%]" data-name="Container">
      <div className="h-[6.598px] relative shrink-0 w-[11.156px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1562 6.59766">
          <path d={svgPaths.p502aec0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[24px]" data-name="Container">
      <Options />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Dropdown1SelectYear() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Dropdown 1: Select Year">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-[4px] text-[#137fec] text-[12px] top-[7.5px] tracking-[0.6px] uppercase w-[111.5px]">
        <p className="leading-[16px] whitespace-pre-wrap">Academic Year</p>
      </div>
      <Container7 />
    </div>
  );
}

function Svg1() {
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

function ImageFill1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-end justify-center left-0 overflow-clip pl-[244px] pr-[10px] py-[18px] top-0 w-[278px]" data-name="image fill">
      <Svg1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[50px] overflow-clip right-[42px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#334155] text-[16px] w-[136.64px]">
        <p className="leading-[24px] whitespace-pre-wrap">Select Exam Type</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="bg-[#f8fafc] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <ImageFill1 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bottom-[30%] content-stretch flex flex-col items-start left-[16px] top-[30%]" data-name="Container">
      <div className="h-[20.016px] relative shrink-0 w-[18px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20.0156">
          <path d={svgPaths.pa751080} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bottom-[30%] content-stretch flex flex-col items-start right-[16px] top-[30%]" data-name="Container">
      <div className="h-[6.598px] relative shrink-0 w-[11.156px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1562 6.59766">
          <path d={svgPaths.p502aec0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[24px]" data-name="Container">
      <Options1 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Dropdown2ExamType() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Dropdown 2: Exam Type">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-[4px] text-[#137fec] text-[12px] top-[7.5px] tracking-[0.6px] uppercase w-[76.25px]">
        <p className="leading-[16px] whitespace-pre-wrap">Exam Type</p>
      </div>
      <Container11 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32.7px] relative shrink-0 w-full" data-name="Form">
      <Dropdown1SelectYear />
      <Dropdown2ExamType />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.3px] inset-[320px_8px_127.75px_8px] items-start pt-[40px] px-[32px]" data-name="Main Content">
      <Heading1 />
      <Container6 />
      <Form />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[65.03px]">
        <p className="leading-[24px] whitespace-pre-wrap">Proceed</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[8.859px] relative shrink-0 w-[9.105px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.10547 8.85938">
        <g id="Container">
          <path d={svgPaths.p1c15c148} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#137fec] content-stretch flex gap-[8.01px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.3),0px_4px_6px_-4px_rgba(19,127,236,0.3)]" data-name="Button:shadow" />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[32px] justify-center leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] text-center w-[250.56px] whitespace-pre-wrap">
        <p className="mb-0">You can change these settings later in your</p>
        <p>profile.</p>
      </div>
    </div>
  );
}

function FooterActionArea() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[8px] pb-[48px] pt-[32px] px-[32px] right-[8px] top-[716.25px]" data-name="Footer / Action Area">
      <Button1 />
      <Container17 />
    </div>
  );
}

function MobileContainerSimulatingPhoneFrame() {
  return (
    <div className="bg-white flex-[1_0_0] h-[844px] max-w-[448px] min-h-px min-w-px relative rounded-[48px]" data-name="Mobile Container (Simulating Phone Frame)">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <StatusBar />
        <Header />
        <IllustrationVisualElementMargin />
        <MainContent />
        <FooterActionArea />
        <div className="-translate-x-1/2 absolute bg-[#e2e8f0] bottom-[12px] h-[6px] left-1/2 rounded-[9999px] w-[128px]" data-name="iOS Home Indicator" />
      </div>
      <div aria-hidden="true" className="absolute border-8 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function SelectAcademicYear() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex items-center justify-center px-[16px] py-[20px] relative size-full" data-name="Select Academic Year">
      <MobileContainerSimulatingPhoneFrame />
    </div>
  );
}