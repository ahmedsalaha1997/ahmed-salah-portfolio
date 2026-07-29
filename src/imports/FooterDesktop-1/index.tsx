import svgPaths from "./svg-2tlu5snlin";
import { usePortfolioContent } from "../../app/ContentProvider";

function Copyright({ text }: { text: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px py-[16px] relative" data-name="Copyright @2024">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-white whitespace-nowrap [&>p:first-child]:hidden" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">© 2026 Ahmed Salah. All Rights Reserved.</p>
        <p className="leading-[24px] text-[16px]">{text}</p>
      </div>
    </div>
  );
}

function PersonalLogo() {
  return (
    <div className="h-[42.053px] relative shrink-0 w-[47px]" data-name="personal logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="42.0526" preserveAspectRatio="none" viewBox="0 0 47 42.0526" width="47">
        <g clipPath="url(#clip0_8_2698)" id="personal logo">
          <path d={svgPaths.p3c74e100} fill="var(--fill-0, #F5FBFF)" id="Vector" />
          <path d={svgPaths.p25546a00} fill="var(--fill-0, #F5FBFF)" id="Vector_2" />
          <path d={svgPaths.p38232b80} fill="var(--fill-0, #F5FBFF)" id="Vector_3" />
          <path d={svgPaths.p3bad8f00} fill="var(--fill-0, #F5FBFF)" id="Vector_4" />
          <path d={svgPaths.p3d544c00} fill="var(--fill-0, #F5FBFF)" id="Vector_5" />
          <path d={svgPaths.p3ac10d00} fill="var(--fill-0, #F5FBFF)" id="Vector_6" />
          <g id="Group">
            <path d={svgPaths.p87f9c80} fill="var(--fill-0, #838383)" id="Vector_7" />
            <path d={svgPaths.p3118b680} fill="var(--fill-0, #838383)" id="Vector_8" />
            <path d={svgPaths.p4a61800} fill="var(--fill-0, #838383)" id="Vector_9" />
            <path d={svgPaths.pfb73c00} fill="var(--fill-0, #838383)" id="Vector_10" />
            <path d={svgPaths.p21b0e430} fill="var(--fill-0, #838383)" id="Vector_11" />
            <path d={svgPaths.p3dd35d00} fill="var(--fill-0, #838383)" id="Vector_12" />
            <path d={svgPaths.pf6ddc00} fill="var(--fill-0, #838383)" id="Vector_13" />
            <path d={svgPaths.p2eaf5280} fill="var(--fill-0, #838383)" id="Vector_14" />
            <path d={svgPaths.p2ebe6ff0} fill="var(--fill-0, #838383)" id="Vector_15" />
            <path d={svgPaths.p72f1d00} fill="var(--fill-0, #838383)" id="Vector_16" />
            <path d={svgPaths.p7384800} fill="var(--fill-0, #838383)" id="Vector_17" />
            <path d={svgPaths.p1fccf300} fill="var(--fill-0, #838383)" id="Vector_18" />
            <path d={svgPaths.pa0e6300} fill="var(--fill-0, #838383)" id="Vector_19" />
            <path d={svgPaths.p4668600} fill="var(--fill-0, #838383)" id="Vector_20" />
            <path d={svgPaths.pe85f800} fill="var(--fill-0, #838383)" id="Vector_21" />
          </g>
          <path d={svgPaths.p2456e100} fill="var(--fill-0, #3876FC)" id="Vector_22" />
        </g>
        <defs>
          <clipPath id="clip0_8_2698">
            <rect fill="white" height="42.0526" width="47" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[5.371px] items-center relative shrink-0" data-name="logo">
      <PersonalLogo />
    </div>
  );
}

export default function FooterDesktop() {
  const { footer } = usePortfolioContent();
  return (
    <div className="relative size-full" data-name="Footer - Desktop">
      <div className="content-stretch flex h-full w-full max-w-[1040px] mx-auto items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-0 relative">
        <Copyright text={footer.copyright} />
        {footer.logo ? <img src={footer.logo} alt="Footer logo" className="h-[42px] max-w-[80px] object-contain" /> : <Logo />}
      </div>
      <div aria-hidden className="absolute border-[#0c2441] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}
