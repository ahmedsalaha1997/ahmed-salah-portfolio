import Header from "@/imports/Header";
import Cta from "@/imports/Cta-1";
import FooterDesktop from "@/imports/FooterDesktop-1";
import ResourcesSection from "./ResourcesSection";
import ScrollReveal from "./ScrollReveal";
import SpaceshipCursor from "./SpaceshipCursor";
import { useLanguage } from "./LanguageProvider";
import PixelCatchGame from "./PixelCatchGame";

export default function ResourcesPage() {
  const { isArabic } = useLanguage();
  return (
    <div className="portfolio-site relative min-h-screen w-full overflow-hidden" dir={isArabic ? "rtl" : "ltr"} style={{ background: "linear-gradient(to bottom, #0b121c, #041933)" }}>
      <div className="relative z-10">
        <SpaceshipCursor />
        <PixelCatchGame />
        <header className="w-full"><Header /></header>
        <main>
          <ScrollReveal className="w-full" variant="hero"><ResourcesSection /></ScrollReveal>
          <ScrollReveal className="w-full"><Cta /></ScrollReveal>
        </main>
        <footer className="h-[72px] w-full"><FooterDesktop /></footer>
      </div>
    </div>
  );
}
