import { useState } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "./svg-espo4fjubp";
import { usePortfolioContent } from "../../app/ContentProvider";
import { useLanguage } from "../../app/LanguageProvider";

function PersonalLogo() {
  return (
    <div className="h-[64.421px] relative shrink-0 w-[72px]" data-name="personal logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="64.4211" preserveAspectRatio="none" viewBox="0 0 72 64.4211" width="72">
        <g clipPath="url(#clip0_1_121)" id="personal logo">
          <path d={svgPaths.p144c6300} fill="var(--fill-0, #F5FBFF)" id="Vector" />
          <path d={svgPaths.p23b62d00} fill="var(--fill-0, #F5FBFF)" id="Vector_2" />
          <path d={svgPaths.p4de2c80} fill="var(--fill-0, #F5FBFF)" id="Vector_3" />
          <path d={svgPaths.p655e800} fill="var(--fill-0, #F5FBFF)" id="Vector_4" />
          <path d={svgPaths.p352db900} fill="var(--fill-0, #F5FBFF)" id="Vector_5" />
          <path d={svgPaths.p38ecea70} fill="var(--fill-0, #F5FBFF)" id="Vector_6" />
          <g id="Group">
            <path d={svgPaths.pa1a9e00} fill="var(--fill-0, #838383)" id="Vector_7" />
            <path d={svgPaths.pcd30100} fill="var(--fill-0, #838383)" id="Vector_8" />
            <path d={svgPaths.p1939ff00} fill="var(--fill-0, #838383)" id="Vector_9" />
            <path d={svgPaths.p7462d00} fill="var(--fill-0, #838383)" id="Vector_10" />
            <path d={svgPaths.pdde3280} fill="var(--fill-0, #838383)" id="Vector_11" />
            <path d={svgPaths.p232b9840} fill="var(--fill-0, #838383)" id="Vector_12" />
            <path d={svgPaths.p332efff1} fill="var(--fill-0, #838383)" id="Vector_13" />
            <path d={svgPaths.p17ea20b0} fill="var(--fill-0, #838383)" id="Vector_14" />
            <path d={svgPaths.p5720180} fill="var(--fill-0, #838383)" id="Vector_15" />
            <path d={svgPaths.p2e932d00} fill="var(--fill-0, #838383)" id="Vector_16" />
            <path d={svgPaths.p6f4cd00} fill="var(--fill-0, #838383)" id="Vector_17" />
            <path d={svgPaths.p1ae93000} fill="var(--fill-0, #838383)" id="Vector_18" />
            <path d={svgPaths.p2a030c00} fill="var(--fill-0, #838383)" id="Vector_19" />
            <path d={svgPaths.p2d994f00} fill="var(--fill-0, #838383)" id="Vector_20" />
            <path d={svgPaths.p375ab800} fill="var(--fill-0, #838383)" id="Vector_21" />
          </g>
          <path d={svgPaths.p37b02980} fill="var(--fill-0, #3876FC)" id="Vector_22" />
        </g>
        <defs>
          <clipPath id="clip0_1_121">
            <rect fill="white" height="64.4211" width="72" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[8.229px] items-center relative shrink-0" data-name="logo">
      <PersonalLogo />
    </div>
  );
}

function Navtabs({ items, onLanguageToggle }: { items: Array<{ id: string; label: string; link: string }>; onLanguageToggle: () => void }) {
  return (
    <div className="content-stretch flex gap-[24px] h-[21px] items-center relative shrink-0" data-name="navtabs">
      {items.map((item, index) => (
        <a className="content-stretch flex items-center justify-center relative shrink-0" data-name="navtab" href={item.link || "#"} key={item.id} onClick={(event) => { if (item.id === "arabic") { event.preventDefault(); onLanguageToggle(); } }}>
          <p className={`[word-break:break-word] font-['IBM_Plex_Sans:Regular',sans-serif] ${index === 0 ? "font-bold text-[#0a70ae]" : "font-normal text-[#cdd6db]"} leading-[normal] relative shrink-0 text-[20px] whitespace-nowrap`} style={{ fontVariationSettings: '"wdth" 100' }}>
            {item.label}
          </p>
        </a>
      ))}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { navigation } = usePortfolioContent();
  const { isArabic, toggleLanguage } = useLanguage();
  const navigationWithServices = (() => {
    if (navigation.some((item) => item.id === "services")) {
      if (navigation.some((item) => item.id === "resources")) return navigation;
      const contactIndex = navigation.findIndex((item) => item.id === "contact");
      const resourcesItem = { id: "resources", label: isArabic ? "الموارد" : "Resources", link: "#resources" };
      return contactIndex === -1
        ? [...navigation, resourcesItem]
        : [...navigation.slice(0, contactIndex), resourcesItem, ...navigation.slice(contactIndex)];
    }
    const servicesItem = { id: "services", label: isArabic ? "الخدمات" : "Services", link: "#services" };
    const contactIndex = navigation.findIndex((item) => item.id === "contact");
    return contactIndex === -1
      ? [...navigation, servicesItem]
      : [...navigation.slice(0, contactIndex), servicesItem, ...navigation.slice(contactIndex)];
  })();
  const navigationWithSections = (() => {
    if (navigationWithServices.some((item) => item.id === "resources")) return navigationWithServices;
    const contactIndex = navigationWithServices.findIndex((item) => item.id === "contact");
    const resourcesItem = { id: "resources", label: isArabic ? "الموارد" : "Resources", link: "#resources" };
    return contactIndex === -1
      ? [...navigationWithServices, resourcesItem]
      : [...navigationWithServices.slice(0, contactIndex), resourcesItem, ...navigationWithServices.slice(contactIndex)];
  })();

  return (
    <div className="relative w-full" data-name="Header">
      <div className="bg-[rgba(255,255,255,0)] flex items-center justify-between px-4 sm:px-12 md:px-[200px] py-[16px] w-full">
        <Logo />
        <div className="hidden lg:block">
          <Navtabs items={navigationWithSections} onLanguageToggle={toggleLanguage} />
        </div>
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(true)}
          aria-label={isArabic ? "فتح القائمة" : "Open menu"}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[75vw] max-w-[300px] bg-[#0b121c] flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <span className="text-white font-['IBM_Plex_Sans',sans-serif] text-[16px] font-semibold">{isArabic ? "القائمة" : "Menu"}</span>
          <button onClick={() => setOpen(false)} aria-label={isArabic ? "إغلاق القائمة" : "Close menu"} className="text-white">
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col mt-2">
          {navigationWithSections.map((item, i) => (
            <a
              href={item.link || "#"}
              key={item.id}
              className={`text-left px-6 py-4 text-[18px] font-['IBM_Plex_Sans',sans-serif] border-b border-white/10 last:border-0 transition-colors ${
                i === 0 ? "text-[#0a70ae] font-bold" : "text-[#cdd6db] font-normal"
              }`}
              onClick={(event) => { if (item.id === "arabic") { event.preventDefault(); toggleLanguage(); } setOpen(false); }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
