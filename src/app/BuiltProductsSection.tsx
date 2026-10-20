import { usePortfolioContent } from "./ContentProvider";
import { useLanguage } from "./LanguageProvider";
import PortfolioProjectCard from "./PortfolioProjectCard";

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

      <div className="mt-8 grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 sm:mt-10 sm:gap-6 xl:gap-8" data-reveal-stagger>
        {products.map((product) => (
          <PortfolioProjectCard
            key={product.id}
            project={{
              title: product.title,
              description: product.description,
              tags: product.tags,
              images: product.coverImage ? [product.coverImage] : [],
              link: product.link,
            }}
          />
        ))}
      </div>
    </section>
  );
}
