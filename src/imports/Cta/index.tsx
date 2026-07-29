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
      <div aria-hidden className="absolute border border-[#435772] border-solid inset-0 pointer-events-none rounded-[41px]" />
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
      <div aria-hidden className="absolute border border-[#202e40] border-solid inset-0 pointer-events-none rounded-[41px]" />
    </div>
  );
}

export default function Cta() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative size-full" data-name="CTA">
      <MainCta />
      <MainCta1 />
    </div>
  );
}