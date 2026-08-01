function MainCta({ label, href, secondary = false, openInNewTab = false }: { label: string; href: string; secondary?: boolean; openInNewTab?: boolean }) {
  const hasExternalDestination = openInNewTab && Boolean(href && href !== "#");

  return (
    <a
      href={href || "#"}
      target={hasExternalDestination ? "_blank" : undefined}
      rel={hasExternalDestination ? "noreferrer" : undefined}
      className={`${secondary ? "bg-[rgba(184,184,184,0.2)]" : "bg-[rgba(56,118,252,0.2)]"} flex-1 h-[52px] min-w-px relative rounded-[41px]`}
      data-name="Main_CTA"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[9px] relative size-full">
          <p className="[word-break:break-word] font-['IBM_Plex_Sans',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            {label}
          </p>
        </div>
      </div>
      <div aria-hidden className={`absolute border ${secondary ? "border-[#202e40]" : "border-[#435772]"} border-solid inset-0 pointer-events-none rounded-[41px]`} />
    </a>
  );
}

export default function Cta({ primaryLabel = "Ahmed's CV", primaryLink = "#", secondaryLabel = "See work", secondaryLink = "#projects" }: { primaryLabel?: string; primaryLink?: string; secondaryLabel?: string; secondaryLink?: string }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative w-full max-w-[334px]" data-name="CTA">
      <MainCta label={primaryLabel} href={primaryLink} openInNewTab />
      <MainCta label={secondaryLabel} href={secondaryLink} secondary />
    </div>
  );
}
