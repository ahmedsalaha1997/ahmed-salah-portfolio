import { ArrowUpRight } from "lucide-react";
import { usePortfolioContent } from "./ContentProvider";
import { useLanguage } from "./LanguageProvider";

function ProductPreview({ image, name, index, isArabic }: { image?: string; name: string; index: number; isArabic: boolean }) {
  if (image) {
    return <img src={image} alt={isArabic ? `معاينة ${name}` : `${name} preview`} className="h-full w-full object-cover" loading="lazy" />;
  }

  return (
    <div className="h-full w-full bg-[#e9f0f8] p-3 sm:p-4" aria-hidden="true">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-[#cfdbea] bg-[#f8fbff] shadow-[0_12px_30px_rgba(14,39,75,0.12)]">
        <div className="flex h-7 shrink-0 items-center gap-1 border-b border-[#dbe5f1] bg-[#edf4fb] px-3">
          <i className="size-1.5 rounded-full bg-[#80a7d0]" /><i className="size-1.5 rounded-full bg-[#a4bed9]" /><i className="size-1.5 rounded-full bg-[#c1d2e3]" />
        </div>
        <div className="flex min-h-0 flex-1">
          <div className="flex w-[22%] flex-col gap-3 bg-[#102846] p-3">
            <div className="h-2 w-3/4 rounded-full bg-[#69b7f3]" />
            {[0, 1, 2, 3].map((item) => <div key={item} className="h-1.5 rounded-full bg-white/20" style={{ width: `${item % 2 ? 55 : 75}%` }} />)}
          </div>
          <div className="flex-1 p-4 sm:p-5">
            <div className="h-2 w-1/3 rounded-full bg-[#b7cce1]" />
            {index === 0 ? (
              <>
                <div className="mt-4 grid grid-cols-3 gap-2"><div className="h-12 rounded-md bg-[#e4eef8]" /><div className="h-12 rounded-md bg-[#e4eef8]" /><div className="h-12 rounded-md bg-[#e4eef8]" /></div>
                <div className="mt-3 flex h-[42%] items-end gap-2 rounded-md bg-[#eef4fa] px-4 pb-3">{[38, 63, 48, 76, 57, 84, 68].map((height, bar) => <div key={bar} className="flex-1 rounded-t bg-[#61a8e5]" style={{ height: `${height}%` }} />)}</div>
              </>
            ) : (
              <>
                <div className="mt-4 h-8 rounded-md border border-[#c8d9eb] bg-white" />
                <div className="mt-3 grid grid-cols-3 gap-2">{[0, 1, 2, 3, 4, 5].map((item) => <div key={item} className="aspect-[1.2] rounded-md bg-[#dfebf6] p-2"><div className="h-2/3 rounded bg-[#c2d7eb]" /><div className="mt-1 h-1 w-2/3 rounded bg-[#acc7e2]" /></div>)}</div>
              </>
            )}
          </div>
        </div>
      </div>
      <span className="sr-only">{isArabic ? "صورة توضيحية مؤقتة" : "Illustrative preview placeholder"}</span>
    </div>
  );
}

export default function BuiltProductsSection() {
  const { isArabic } = useLanguage();
  const { builtProducts: products } = usePortfolioContent();

  return (
    <section id="built-products" className="mx-auto w-full max-w-[1042px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 xl:px-0" aria-labelledby="built-products-title">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full border border-[#78b4ff]/20 bg-[#0a70ae]/10 px-3 py-1.5 text-xs font-medium tracking-wide text-[#bfe1ff]">
          {isArabic ? "فكرة · تصميم · إطلاق" : "DESIGN · BUILD · LAUNCH"}
        </span>
        <h2 id="built-products-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {isArabic ? "منتجات صممتها وطورتها" : "Products I Designed & Developed"}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[#aebbc4]">
          {isArabic ? "استكشف منتجات نقلتها من الفكرة إلى الإطلاق." : "Explore live products I took from concept to launch."}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6" data-reveal-stagger>
        {products.map((product, index) => (
          <article key={product.id} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:border-[#6d9ee8]/40 sm:p-4">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-[#101b29]">
              <ProductPreview image={product.coverImage} name={product.title} index={index} isArabic={isArabic} />
              {!product.coverImage && <span className="absolute bottom-3 left-3 rounded-full bg-[#102035]/85 px-3 py-1 text-xs text-white/90">{isArabic ? "معاينة مؤقتة" : "Preview placeholder"}</span>}
            </div>
            <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">{product.title}</h3>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-2.5 py-1 text-xs text-emerald-300"><span className="size-1.5 rounded-full bg-emerald-400" />{isArabic ? "مباشر" : "Live"}</span>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#b7c5d0] sm:text-base">{product.description}</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-[#cdd6db] sm:text-sm">
                {product.tags.map((tag) => <span key={tag} className="rounded-md border border-[#c9dfff]/20 px-2.5 py-1.5">{tag}</span>)}
              </div>
              <div className="mt-5 flex min-h-12 items-center justify-between gap-3 border-t border-white/10 pt-4">
                <span className="text-xs text-[#aebbc4] sm:text-sm">{isArabic ? "فكرة ← تصميم ← إطلاق" : "Concept → Design → Launch"}</span>
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#0a70ae] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1488cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8bbff4]">{isArabic ? "عرض المشروع" : "View project"}<ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
