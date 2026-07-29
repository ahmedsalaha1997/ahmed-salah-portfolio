import { useEffect, useState } from "react";
import imgPic2 from "@/imports/HeroSection/pic.png";
import imgDecorativeElement11 from "@/imports/HeroSection/345b08b460847af7815a3a78c1be01f3ba79c099.png";
import imgDecorativeElement1 from "@/imports/HeroSection/57c704d8e0fa34caea090fbf5b294385d9c6299b.png";
import CtaImport from "./Cta";
import { usePortfolioContent } from "./ContentProvider";

function HeroImage({ src }: { src: string }) {
  return (
    <div className="h-[215.53px] relative shrink-0 w-[180px] z-10" data-name="hero image">
      <div className="absolute h-[215.53px] left-0 top-0 w-[180px]" data-name="pic 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src || imgPic2} />
      </div>
      <div className="absolute left-[150px] size-[12px] top-[180.58px]" data-name="online indicator">
        <div className="absolute inset-[33.33%]">
          <svg className="absolute block inset-0 size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 4 4" width="4">
            <circle cx="2" cy="2" fill="var(--fill-0, #33B50B)" fillOpacity="0.28" id="Ellipse 2" r="2" />
          </svg>
        </div>
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <circle cx="8" cy="8" fill="var(--fill-0, #33B50B)" id="Ellipse 1" r="7" stroke="var(--stroke-0, #0B121D)" strokeWidth="2">
              <animate attributeName="r" values="7;5.5;7" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.6;1" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TypewriterWord({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[wordIndex] || "Impact.";
    let delay = isDeleting ? 35 : 60;

    if (!isDeleting && text === targetWord) {
      delay = 1200;
    } else if (isDeleting && text === "") {
      delay = 250;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && text === targetWord) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
        setIsDeleting(false);
      } else {
        setText((currentText) =>
          isDeleting ? currentText.slice(0, -1) : targetWord.slice(0, currentText.length + 1),
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, text, wordIndex, words]);

  return (
    <span className="inline-flex w-[8.5ch] items-baseline text-left" aria-label={words[wordIndex]}>
      <span>{text}</span>
      <span aria-hidden="true" className="ml-[0.04em] animate-[hero-cursor_1s_steps(1,end)_infinite] text-[#78b4ff]">|</span>
    </span>
  );
}

function Content({ title, words, subtitle, primaryLabel, primaryLink, secondaryLabel, secondaryLink }: { title: string; words: string[]; subtitle: string; primaryLabel: string; primaryLink: string; secondaryLabel: string; secondaryLink: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full max-w-[1040px] px-4 z-10" data-name="CONTENT">
      <p
        className="[word-break:break-word] font-['IBM_Plex_Sans',sans-serif] font-bold leading-[normal] w-full relative shrink-0 text-[28px] sm:text-[40px] md:text-[54px] lg:whitespace-nowrap text-center text-white"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {title} <TypewriterWord words={words} />
      </p>
      <p
        className="[word-break:break-word] font-['IBM_Plex_Sans',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#cdd6db] text-[15px] sm:text-[18px] md:text-[20px] text-center w-full max-w-[508px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {subtitle}
      </p>
      <CtaImport primaryLabel={primaryLabel} primaryLink={primaryLink} secondaryLabel={secondaryLabel} secondaryLink={secondaryLink} />
      <style>{`
        @keyframes hero-cursor {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[hero-cursor_1s_steps\\(1\\,end\\)_infinite\\] { animation: none; }
        }
      `}</style>
    </div>
  );
}

export default function HeroSectionWrapper() {
  const { hero } = usePortfolioContent();
  return (
    <div id="home" className="content-stretch flex flex-col gap-[24px] items-center justify-center py-[60px] relative size-full" data-name="hero_section">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="hero-space-stars absolute inset-0" />
        <div className="hero-shooting-star hero-shooting-star-one absolute h-px w-20" />
        <div className="hero-shooting-star hero-shooting-star-two absolute h-px w-16" />
      </div>
      <HeroImage src={hero.profileImage} />
      <Content title={hero.title} words={hero.words.length ? hero.words : ["Impact."]} subtitle={hero.subtitle} primaryLabel={hero.primaryCtaLabel} primaryLink={hero.primaryCtaLink || hero.cvLink} secondaryLabel={hero.secondaryCtaLabel} secondaryLink={hero.secondaryCtaLink} />
      <div className="hidden lg:block absolute h-[103px] right-0 top-[29.58px] w-[91px] z-10 animate-[hero-float-right_6s_ease-in-out_infinite]" data-name="DECORATIVE ELEMENT-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDecorativeElement11} />
      </div>
      <div className="hidden lg:block absolute h-[152px] left-0 top-[127.58px] w-[159px] z-10 animate-[hero-float-left_7s_ease-in-out_infinite]" data-name="DECORATIVE ELEMENT 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDecorativeElement1} />
      </div>
      <style>{`
        @keyframes hero-float-left {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-2deg); }
          50% { transform: translate3d(14px, -14px, 0) rotate(2deg); }
        }

        @keyframes hero-float-right {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(3deg); }
          50% { transform: translate3d(-12px, 16px, 0) rotate(-2deg); }
        }

        .hero-space-stars {
          opacity: 0.48;
          background-image:
            radial-gradient(circle at 8% 22%, rgba(214, 238, 255, 0.72) 0 1px, transparent 1.8px),
            radial-gradient(circle at 19% 68%, rgba(76, 150, 255, 0.58) 0 1px, transparent 1.8px),
            radial-gradient(circle at 34% 15%, rgba(210, 234, 255, 0.48) 0 1px, transparent 1.6px),
            radial-gradient(circle at 58% 29%, rgba(63, 137, 255, 0.52) 0 1px, transparent 1.7px),
            radial-gradient(circle at 72% 17%, rgba(220, 240, 255, 0.58) 0 1px, transparent 1.7px),
            radial-gradient(circle at 87% 56%, rgba(83, 158, 255, 0.46) 0 1px, transparent 1.7px),
            radial-gradient(circle at 93% 82%, rgba(224, 242, 255, 0.48) 0 1px, transparent 1.6px),
            radial-gradient(circle at 42% 86%, rgba(60, 135, 255, 0.38) 0 1px, transparent 1.7px);
          animation: hero-stars-breathe 9s ease-in-out infinite;
        }

        .hero-shooting-star {
          opacity: 0;
          transform: rotate(-24deg);
          background: linear-gradient(90deg, transparent, rgba(144, 202, 255, 0.92), transparent);
          filter: drop-shadow(0 0 5px rgba(75, 151, 255, 0.55));
          will-change: transform, opacity;
        }

        .hero-shooting-star-one {
          top: 24%;
          left: 12%;
          animation: hero-shoot-one 15s linear infinite;
        }

        .hero-shooting-star-two {
          top: 66%;
          right: 16%;
          animation: hero-shoot-two 19s linear infinite;
        }

        @keyframes hero-stars-breathe {
          0%, 100% { opacity: 0.34; }
          50% { opacity: 0.58; }
        }

        @keyframes hero-shoot-one {
          0%, 78% { opacity: 0; transform: translate3d(-20px, -12px, 0) rotate(-24deg); }
          80% { opacity: 0.72; }
          87% { opacity: 0; transform: translate3d(230px, 105px, 0) rotate(-24deg); }
          100% { opacity: 0; transform: translate3d(230px, 105px, 0) rotate(-24deg); }
        }

        @keyframes hero-shoot-two {
          0%, 68% { opacity: 0; transform: translate3d(20px, -10px, 0) rotate(-24deg); }
          70% { opacity: 0.62; }
          76% { opacity: 0; transform: translate3d(190px, 85px, 0) rotate(-24deg); }
          100% { opacity: 0; transform: translate3d(190px, 85px, 0) rotate(-24deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[hero-float-left_7s_ease-in-out_infinite\\],
          .animate-\\[hero-float-right_6s_ease-in-out_infinite\\],
          .hero-space-stars,
          .hero-shooting-star { animation: none; }
        }
      `}</style>
    </div>
  );
}
