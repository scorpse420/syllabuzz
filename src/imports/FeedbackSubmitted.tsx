import svgPaths from "./svg-4jffbhh5u2";


function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[28.09px]">
        <p className="leading-[20px] whitespace-pre-wrap">9:41</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[10.688px] relative shrink-0 w-[10px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10.6875">
        <g id="Container">
          <path d={svgPaths.p99c9780} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[10.094px] relative shrink-0 w-[19.822px]" data-name="Margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8223 10.0938">
        <g id="Margin">
          <path d={svgPaths.p3f7b2400} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[13.313px] relative w-[6.688px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.6875 13.3125">
        <g id="Container">
          <path d={svgPaths.p138ad900} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ContainerCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center pl-[2px] py-[4px] relative shrink-0" data-name="Container:css-transform">
      <div className="flex h-[6.688px] items-center justify-center relative shrink-0 w-[13.313px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container2 />
      <Margin />
      <ContainerCssTransform />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="h-[44px] relative shrink-0 w-[359px]" data-name="Status Bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[24px] pr-[20px] pt-[16px] relative size-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[30px] text-center w-[171.94px]">
        <p className="leading-[36px] whitespace-pre-wrap">Thank You!</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[52px] justify-center leading-[26px] relative shrink-0 text-[#475569] text-[16px] text-center w-[287.08px] whitespace-pre-wrap">
        <p className="mb-0">Your curriculum feedback has been</p>
        <p>successfully submitted and recorded.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[291.04px] whitespace-pre-wrap">
        <p className="mb-0">Your input helps us shape a better learning</p>
        <p>experience for everyone.</p>
      </div>
    </div>
  );
}

function MessageGroup() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[16px] items-start left-1/2 top-[calc(50%-60px)]" data-name="Message Group">
      <Heading />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[25.195px] relative shrink-0 w-[33.469px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.4688 25.1953">
        <g id="Container">
          <path d={svgPaths.p258c2300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[96px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.3),0px_4px_6px_-4px_rgba(19,127,236,0.3)] size-[96px] top-0" data-name="Overlay+Shadow" />
      <Container6 />
    </div>
  );
}

function SuccessIconAnimationContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Success Icon Animation Container">
      <div className="absolute flex inset-[-4.8px] items-center justify-center">
        <div className="flex-none size-[105.6px]">
          <div className="bg-[rgba(19,127,236,0.2)] blur-[12px] rounded-[9999px] size-full" data-name="Overlay+Blur" />
        </div>
      </div>
      <Background />
    </div>
  );
}

function SuccessIconAnimationContainerMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[131.5px] pb-[32px] top-[7px]" data-name="Success Icon Animation Container:margin">
      <SuccessIconAnimationContainer />
    </div>
  );
}

function SuccessIllustration() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mix-blend-multiply opacity-80 relative rounded-[8px]" data-name="Success Illustration">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0"  />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[16px]" data-name="Background">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[24px] relative size-full">
          <div className="absolute bg-[rgba(19,127,236,0.1)] right-[-16px] rounded-[9999px] size-[80px] top-[-16px]" data-name="Overlay" />
          <div className="absolute bg-[rgba(19,127,236,0.05)] bottom-[-16px] left-[-16px] rounded-[9999px] size-[96px]" data-name="Overlay" />
          <SuccessIllustration />
        </div>
      </div>
    </div>
  );
}

function IllustrationDecorativeImage() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[200px] relative shrink-0 w-full" data-name="Illustration / Decorative Image">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Background1 />
      </div>
    </div>
  );
}

function IllustrationDecorativeImageMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[79.5px] max-w-[200px] pt-[48px] right-[79.5px] top-[303px]" data-name="Illustration / Decorative Image:margin">
      <IllustrationDecorativeImage />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[359px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MessageGroup />
        <SuccessIconAnimationContainerMargin />
        <IllustrationDecorativeImageMargin />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f1f5f9] h-[4px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#137fec] inset-[0_33.34%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[193.22px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16px]">{`Redirecting in `}</span>
          <span className="font-['Lexend:Medium',sans-serif] font-medium leading-[16px] text-[#137fec]">3</span>
          <span className="leading-[16px]">{` seconds`}</span>
        </p>
      </div>
    </div>
  );
}

function CountdownIndicator() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Countdown Indicator">
      <Background2 />
      <Margin1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[168.17px]">
        <p className="leading-[24px] whitespace-pre-wrap">Return to Dashboard</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[11.391px] relative shrink-0 w-[11.707px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.707 11.3906">
        <g id="Container">
          <path d={svgPaths.p16ce4a00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <Container8 />
    </div>
  );
}

function ButtonPrimaryAction() {
  return (
    <div className="bg-[#137fec] content-stretch flex items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button - Primary Action">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.25),0px_4px_6px_-4px_rgba(19,127,236,0.25)]" data-name="Button - Primary Action:shadow" />
      <Container7 />
      <Margin2 />
    </div>
  );
}

function BottomActions() {
  return (
    <div className="relative shrink-0 w-[359px]" data-name="Bottom Actions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
        <CountdownIndicator />
        <ButtonPrimaryAction />
      </div>
    </div>
  );
}

function IOsHomeIndicator() {
  return (
    <div className="relative shrink-0 w-[359px]" data-name="iOS Home Indicator">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[8px] relative w-full">
        <div className="bg-[#cbd5e1] h-[6px] rounded-[9999px] shrink-0 w-[128px]" data-name="Background" />
      </div>
    </div>
  );
}

function IOsPhoneFrameContainer() {
  return (
    <div className="bg-white h-[812px] max-w-[375px] relative rounded-[48px] shrink-0 w-[375px]" data-name="iOS Phone Frame Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <StatusBar />
        <MainContent />
        <BottomActions />
        <IOsHomeIndicator />
      </div>
      <div aria-hidden="true" className="absolute border-8 border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function FeedbackSubmitted() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex items-center justify-center py-[36px] relative size-full" data-name="Feedback Submitted">
      <IOsPhoneFrameContainer />
    </div>
  );
}