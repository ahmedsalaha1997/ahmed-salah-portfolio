import Header from "@/imports/Header";
import HeroSectionWrapper from "./HeroSectionWrapper";
import WorkSamplesScroll from "./WorkSamplesScroll";
import Work from "@/imports/Work";
import InfiniteVerticalScroll from "./InfiniteVerticalScroll";
import SectionAbout from "@/imports/SectionAbout";
import Cta from "@/imports/Cta-1";
import FooterDesktop from "@/imports/FooterDesktop-1";
import ScrollReveal from "./ScrollReveal";
import SpaceshipCursor from "./SpaceshipCursor";
import { useLanguage } from "./LanguageProvider";
import ServicesSection from "./ServicesSection";

export default function App() {
  const { isArabic } = useLanguage();
  return (
    <div
      className="portfolio-site relative min-h-screen w-full overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
      style={{ background: "linear-gradient(to bottom, #0b121c, #041933)" }}
    >
      <div className="relative z-10">
        <SpaceshipCursor />
        <header className="w-full">
        <Header />
        </header>

        <ScrollReveal className="w-full" variant="hero">
        <HeroSectionWrapper />
        </ScrollReveal>

        <ScrollReveal className="w-full">
        <WorkSamplesScroll />
        </ScrollReveal>

        <ScrollReveal className="w-full [&_[data-name='work']]:h-auto [&_[data-name='projects']]:justify-center [&_[data-name='card']_[aria-hidden]]:hidden">
        <Work />
        </ScrollReveal>

        <ScrollReveal className="w-full">
        <InfiniteVerticalScroll />
        </ScrollReveal>

        <section id="about" className="w-full h-auto">
        <SectionAbout />
        </section>

        <ScrollReveal className="w-full">
        <ServicesSection />
        </ScrollReveal>

        <ScrollReveal className="w-full">
        <Cta />
        </ScrollReveal>

        <footer className="h-[72px] w-full">
        <FooterDesktop />
        </footer>
      </div>
    </div>
  );
}
