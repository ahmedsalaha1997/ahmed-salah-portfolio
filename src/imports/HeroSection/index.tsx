import imgPic2 from "./653777dd1729c34a905a5a46acbe3933f4685f95.png";
import imgDecorativeElement11 from "./345b08b460847af7815a3a78c1be01f3ba79c099.png";
import imgDecorativeElement1 from "./57c704d8e0fa34caea090fbf5b294385d9c6299b.png";

function HeroImage() {
  return (
    <div className="h-[215.53px] relative shrink-0 w-[180px]" data-name="hero image">
      <div className="absolute h-[215.53px] left-0 top-0 w-[180px]" data-name="pic 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPic2} />
      </div>
      <div className="absolute left-[150px] size-[12px] top-[180.58px]" data-name="online indicator">
        <div className="absolute inset-[33.33%]">
          <svg className="absolute block inset-0 size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 4 4" width="4">
            <circle cx="2" cy="2" fill="var(--fill-0, #33B50B)" fillOpacity="0.28" id="Ellipse 2" r="2" />
          </svg>
        </div>
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <circle cx="8" cy="8" fill="var(--fill-0, #33B50B)" id="Ellipse 1" r="7" stroke="var(--stroke-0, #0B121D)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MainCta() {
  return (
    <div className="bg-[rgba(56,118,252,0.2)] flex-[1_0_0] h-[52px] min-w-px relative rounded-[41px]" data-name="Main_CTA">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[9px] relative size-full">
          <p className="[word-break:break-word] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ahmed’s cv
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c9dfff] border-solid inset-0 pointer-events-none rounded-[41px]" />
    </div>
  );
}

function MainCta1() {
  return (
    <div className="bg-[rgba(184,184,184,0.2)] flex-[1_0_0] h-[52px] min-w-px relative rounded-[41px]" data-name="Main_CTA">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[9px] relative size-full">
          <p className="[word-break:break-word] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
            See work
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c9dfff] border-solid inset-0 pointer-events-none rounded-[41px]" />
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[334px]" data-name="CTA">
      <MainCta />
      <MainCta1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[862px]" data-name="CONTENT">
      <p className="[word-break:break-word] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[54px] text-center text-white w-[min-content]" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
        I Design Products That Impact.
      </p>
      <p className="[word-break:break-word] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#cdd6db] text-[20px] text-center w-[508px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Product and design engineer crafting scalable systems and experiences for complex workflows.
      </p>
      <Cta />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center py-[60px] relative size-full" data-name="hero_section">
      <HeroImage />
      <Content />
      <div className="absolute h-[103px] left-[1367px] top-[29.58px] w-[91px]" data-name="DECORATIVE ELEMENT-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDecorativeElement11} />
      </div>
      <div className="absolute h-[152px] left-[-44px] top-[127.58px] w-[159px]" data-name="DECORATIVE ELEMENT 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDecorativeElement1} />
      </div>
    </div>
  );
}