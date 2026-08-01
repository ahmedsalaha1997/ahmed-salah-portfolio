import { ArrowUpRight, BookOpenText, Download, PackageOpen, Sparkles } from "lucide-react";
import { usePortfolioContent } from "./ContentProvider";
import { translateText, useLanguage } from "./LanguageProvider";

function ResourceIcon({ type }: { type: string }) {
  const normalized = type.toLowerCase();
  if (normalized.includes("article")) return <BookOpenText size={22} strokeWidth={1.7} />;
  if (normalized.includes("product")) return <PackageOpen size={22} strokeWidth={1.7} />;
  return <Download size={22} strokeWidth={1.7} />;
}

export default function ResourcesSection() {
  const { resources } = usePortfolioContent();
  const { language, isArabic } = useLanguage();
  const t = (value: string) => translateText(value, language);

  return (
    <section id="resources" className="mx-auto w-full max-w-[1040px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 xl:px-0" aria-labelledby="resources-title">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full border border-[#78b4ff]/20 bg-[#0a70ae]/10 px-3 py-1.5 font-['IBM_Plex_Sans',sans-serif] text-xs font-medium tracking-wide text-[#bfe1ff]">
          {t("Explore resources")}
        </span>
        <h2 id="resources-title" className="mt-4 font-['IBM_Plex_Sans',sans-serif] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t("Resources to help you build with clarity.")}
        </h2>
        <p className="mt-3 font-['IBM_Plex_Sans',sans-serif] text-sm leading-relaxed text-[#aebbc4] sm:text-base">
          {t("Useful templates, practical reading, and product tools made to support your next move.")}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
        {resources.map((resource) => {
          const hasLink = Boolean(resource.link && resource.link !== "#");
          const cardContent = <>
            <div className="flex items-start justify-between gap-4">
              <span className="resource-card-icon flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#79baff]/20 bg-[#0a70ae]/12 text-[#a8d8ff]">
                {resource.coverImage ? <img src={resource.coverImage} alt="" className="size-full object-cover" /> : <ResourceIcon type={resource.type} />}
              </span>
              <span className="inline-flex rounded-full border border-[#79baff]/20 bg-[#071727]/70 px-2.5 py-1 text-[11px] font-medium text-[#b7d8f4]">{resource.type}</span>
            </div>
            <h3 className="mt-6 font-['IBM_Plex_Sans',sans-serif] text-xl font-semibold leading-snug text-white">{resource.title}</h3>
            <p className="mt-2 flex-1 font-['IBM_Plex_Sans',sans-serif] text-sm leading-relaxed text-[#b7c5d0]">{resource.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#9fcefa]">
              {hasLink ? t("Open resource") : t("Coming soon")}
              {hasLink ? <ArrowUpRight className="resource-card-arrow size-4" aria-hidden="true" /> : <Sparkles className="size-4" aria-hidden="true" />}
            </span>
          </>;

          const className = "resource-card group flex min-h-[270px] flex-col rounded-2xl border border-[#79baff]/20 bg-[#102035]/65 p-6 text-start outline-none sm:p-7";
          return hasLink ? (
            <a key={resource.id} href={resource.link} target="_blank" rel="noreferrer" className={className} aria-label={`${resource.title} — ${t("Open resource")}`}>
              {cardContent}
            </a>
          ) : (
            <article key={resource.id} className={className} aria-label={resource.title}>
              {cardContent}
            </article>
          );
        })}
      </div>
      {isArabic && <span className="sr-only">الموارد متاحة باللغة العربية عند إضافتها من لوحة التحكم.</span>}
    </section>
  );
}
