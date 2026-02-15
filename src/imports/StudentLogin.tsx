import svgPaths from "./svg-898z18bcj4";

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
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.352px] relative shrink-0 w-[8.75px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 9.35156">
          <path d={svgPaths.p2b580700} fill="var(--fill-0, black)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.071px] relative shrink-0 w-[12.852px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8516 9.07129">
          <path d={svgPaths.p24631200} fill="var(--fill-0, black)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative w-[9.352px]" data-name="Container">
      <div className="h-[11.648px] relative shrink-0 w-[5.852px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.85156 11.6484">
          <path d={svgPaths.p33dbb200} fill="var(--fill-0, black)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="Container">
      <Container2 />
      <Container3 />
      <div className="flex items-center justify-center relative self-stretch shrink-0 w-[14px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-90">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function StatusBarAreaMock() {
  return (
    <div className="h-[48px] relative shrink-0 w-[317.98px]" data-name="Status Bar Area (Mock)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[16px] px-[32px] relative size-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.406px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.40625 12">
        <g id="Container">
          <path d={svgPaths.p3c441e80} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
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
      <Container5 />
      <Container6 />
    </div>
  );
}

function HeaderNavigationBar() {
  return (
    <div className="relative shrink-0 w-[317.98px]" data-name="Header - Navigation Bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[8px] relative w-full">
        <Button />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[36px] relative shrink-0 w-[44.063px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.0625 36">
        <g id="Container">
          <path d={svgPaths.p1eb43180} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(19,127,236,0.1)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[80px]" data-name="Overlay">
      <Container7 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[104px] items-start pb-[24px] relative shrink-0 w-[80px]" data-name="Margin">
      <Overlay />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[23.41px] pr-[23.4px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] relative shrink-0 text-[#64748b] text-[14px] text-center w-[207.17px] whitespace-pre-wrap">
        <p className="mb-0">Shape your education through</p>
        <p>valuable feedback</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7.375px] relative shrink-0" data-name="Margin">
      <Container8 />
    </div>
  );
}

function InstitutionalBranding() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Institutional Branding">
      <Margin />
      <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[24px] text-center w-[170.89px]">
        <p className="leading-[32px] whitespace-pre-wrap">Student Login</p>
      </div>
      <Margin1 />
    </div>
  );
}

function InstitutionalBrandingMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Institutional Branding:margin">
      <InstitutionalBranding />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">student@institution.edu</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[48px] pr-[16px] py-[17px] relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bottom-[23.08%] content-stretch flex flex-col items-start left-[16px] top-[23.08%]" data-name="Container">
      <div className="h-[13.359px] relative shrink-0 w-[16.641px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6406 13.3594">
          <path d={svgPaths.p71aaba0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[22px]" data-name="Container">
      <Input />
      <Container11 />
    </div>
  );
}

function EmailField() {
  return (
    <div className="h-[74px] relative shrink-0 w-full" data-name="Email Field">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] left-[4px] not-italic text-[#475569] text-[12px] top-[7.5px] tracking-[0.6px] uppercase w-[109.42px]">
        <p className="leading-[16px] whitespace-pre-wrap">Email Address</p>
      </div>
      <Container9 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] tracking-[0.6px] uppercase w-[74.42px]">
        <p className="leading-[16px] whitespace-pre-wrap">Password</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#137fec] text-[12px] text-center w-[45.75px]">
        <p className="leading-[16px] whitespace-pre-wrap">Forgot?</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[249.98px]" data-name="Container">
      <Label />
      <Button1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Enter your password</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[48px] pr-[16px] py-[17px] relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bottom-[23.08%] content-stretch flex flex-col items-start left-[16px] top-[23.08%]" data-name="Container">
      <div className="h-[17.5px] relative shrink-0 w-[13.359px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3594 17.5">
          <path d={svgPaths.p3306380} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[15.977px] relative shrink-0 w-[18.359px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3594 15.9766">
        <g id="Container">
          <path d={svgPaths.p354c5c50} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bottom-[34.64%] content-stretch flex flex-col items-center justify-center right-[16px] top-[34.64%]" data-name="Button">
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Container15 />
      <Button2 />
    </div>
  );
}

function PasswordField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end relative shrink-0 w-full" data-name="Password Field">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-[129.23px]">
        <p className="leading-[20px] whitespace-pre-wrap">Keep me logged in</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="bg-[#137fec] h-[20px] rounded-[9999px] shrink-0 w-[36px]" data-name="Background" />
      <Margin2 />
      <div className="absolute bg-white left-[18px] rounded-[9999px] size-[16px] top-[2px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function RememberMeToggle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Remember Me Toggle">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative w-full">
          <Label1 />
        </div>
      </div>
    </div>
  );
}

function LoginButton() {
  return (
    <div className="bg-[#137fec] content-stretch flex items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Login Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_20px_-2px_rgba(19,127,236,0.1)]" data-name="Login Button:shadow" />
      <div className="flex flex-col font-['Lexend:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[53.47px]">
        <p className="leading-[24px] whitespace-pre-wrap">Log In</p>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Login Form">
      <EmailField />
      <PasswordField />
      <RememberMeToggle />
      <LoginButton />
    </div>
  );
}

function LoginFormMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Login Form:margin">
      <LoginForm />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e2e8f0] h-[4px] relative rounded-[9999px] shrink-0 w-[96px]" data-name="Background">
      <div className="absolute bg-[#137fec] bottom-0 left-0 right-1/2 rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Lexend:Light',sans-serif] font-light h-[32px] justify-center leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] text-center w-[247.48px] whitespace-pre-wrap">
        <p className="mb-0">Portal Version 2.4.0 • Institutional Feedback</p>
        <p>System</p>
      </div>
    </div>
  );
}

function BottomIllustrationBranding() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pb-[32px] relative shrink-0 w-full" data-name="Bottom Illustration/Branding">
      <Background />
      <Container17 />
    </div>
  );
}

function BottomIllustrationBrandingMargin() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[92px] min-w-px pt-[62.5px] relative w-full" data-name="Bottom Illustration/Branding:margin">
      <BottomIllustrationBranding />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[317.98px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between pt-[32px] px-[32px] relative size-full">
        <InstitutionalBrandingMargin />
        <LoginFormMargin />
        <BottomIllustrationBrandingMargin />
      </div>
    </div>
  );
}

function HomeIndicatorMock() {
  return (
    <div className="h-[32px] relative shrink-0 w-[317.98px]" data-name="Home Indicator (Mock)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-center pb-[8px] relative size-full">
        <div className="bg-[#cbd5e1] h-[4px] rounded-[9999px] shrink-0 w-[128px]" data-name="Background" />
      </div>
    </div>
  );
}

function MobileContainerPhoneFormFactor() {
  return (
    <div className="bg-white flex-[1_0_0] h-full max-w-[390px] min-h-[700px] min-w-px relative rounded-[40px]" data-name="Mobile Container (Phone Form Factor)">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] min-h-[inherit] overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <StatusBarAreaMock />
        <HeaderNavigationBar />
        <MainContent />
        <HomeIndicatorMock />
      </div>
      <div aria-hidden="true" className="absolute border-8 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function StudentLogin() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex items-center justify-center p-[16px] relative size-full" data-name="Student Login">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <MobileContainerPhoneFormFactor />
      </div>
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center w-[24.02px]">
        <p className="leading-[24px] whitespace-pre-wrap">```</p>
      </div>
    </div>
  );
}