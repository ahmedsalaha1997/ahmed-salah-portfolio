import { ArrowUpRight, Code2, Compass, Lightbulb, PenTool } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

type Service = {
  title: string;
  description: string;
  icon: typeof PenTool;
};

const services: Service[] = [
  {
    title: "Digital Product Design",
    description: "Designing clear, scalable, and user-centered digital products from research and user flows to polished UI and design systems.",
    icon: PenTool,
  },
  {
    title: "Digital Product Management",
    description: "Helping teams define product direction, prioritize opportunities, align stakeholders, and turn ideas into actionable roadmaps.",
    icon: Compass,
  },
  {
    title: "0 to 1 Product Design & Management",
    description: "Taking early-stage ideas from discovery and validation through product strategy, UX, UI design, and launch planning.",
    icon: Lightbulb,
  },
  {
    title: "Vibe Coding & Product Consulting",
    description: "Using rapid prototyping and AI-assisted development to validate ideas, build product concepts, and provide practical product guidance.",
    icon: Code2,
  },
];

const arabic: Record<string, string> = {
  "What I do": "ماذا أقدم",
  "Services designed to move products forward.": "خدمات تساعد المنتجات على التقدم.",
  "From strategy and product discovery to design systems and delivery-ready experiences.": "من الاستراتيجية واكتشاف المنتج إلى أنظمة التصميم وتجارب جاهزة للتنفيذ.",
  "Digital Product Design": "تصميم المنتجات الرقمية",
  "Digital Product Management": "إدارة المنتجات الرقمية",
  "0 to 1 Product Design & Management": "تصميم وإدارة المنتجات من 0 إلى 1",
  "Vibe Coding & Product Consulting": "فايب كودينج واستشارات المنتجات",
  "Designing clear, scalable, and user-centered digital products from research and user flows to polished UI and design systems.": "تصميم منتجات رقمية واضحة وقابلة للتوسع تتمحور حول المستخدم، من البحث وتدفقات المستخدم إلى واجهات مصقولة وأنظمة تصميم.",
  "Helping teams define product direction, prioritize opportunities, align stakeholders, and turn ideas into actionable roadmaps.": "مساعدة الفرق على تحديد اتجاه المنتج، وترتيب الفرص، ومواءمة أصحاب المصلحة، وتحويل الأفكار إلى خرائط طريق قابلة للتنفيذ.",
  "Taking early-stage ideas from discovery and validation through product strategy, UX, UI design, and launch planning.": "نقل الأفكار المبكرة من الاكتشاف والتحقق إلى استراتيجية المنتج وتصميم تجربة وواجهة المستخدم وخطة الإطلاق.",
  "Using rapid prototyping and AI-assisted development to validate ideas, build product concepts, and provide practical product guidance.": "استخدام النمذجة السريعة والتطوير المدعوم بالذكاء الاصطناعي للتحقق من الأفكار وبناء مفاهيم المنتجات وتقديم إرشاد عملي للمنتج.",
};

export default function ServicesSection() {
  const { isArabic } = useLanguage();
  const t = (value: string) => isArabic ? arabic[value] ?? value : value;

  return (
    <section id="services" className="mx-auto w-full max-w-[1040px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 xl:px-0" aria-labelledby="services-title">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full border border-[#78b4ff]/20 bg-[#0a70ae]/10 px-3 py-1.5 font-['IBM_Plex_Sans',sans-serif] text-xs font-medium tracking-wide text-[#bfe1ff]">
          {t("What I do")}
        </span>
        <h2 id="services-title" className="mt-4 font-['IBM_Plex_Sans',sans-serif] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t("Services designed to move products forward.")}
        </h2>
        <p className="mt-3 font-['IBM_Plex_Sans',sans-serif] text-sm leading-relaxed text-[#aebbc4] sm:text-base">
          {t("From strategy and product discovery to design systems and delivery-ready experiences.")}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5" data-reveal-stagger>
        {services.map((service) => {
          const Icon = service.icon;
          const title = t(service.title);
          return (
            <a
              key={service.title}
              href="#contact"
              aria-label={`${title} — ${isArabic ? "تواصل لمناقشة الخدمة" : "Contact to discuss this service"}`}
              className="service-card group relative flex min-h-[218px] flex-col rounded-2xl border border-[#79baff]/20 bg-[#102035]/65 p-6 text-start outline-none sm:min-h-[238px] sm:p-7"
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-[#79baff]/20 bg-[#0a70ae]/12 text-[#a8d8ff]">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <h3 className="mt-5 font-['IBM_Plex_Sans',sans-serif] text-xl font-semibold text-white sm:text-[22px]">{title}</h3>
              <p className="mt-2 max-w-[34rem] font-['IBM_Plex_Sans',sans-serif] text-sm leading-relaxed text-[#b7c5d0] sm:text-[15px]">
                {t(service.description)}
              </p>
              <ArrowUpRight aria-hidden="true" className="service-card-arrow absolute bottom-6 right-6 size-5 text-[#8bbff4] sm:bottom-7 sm:right-7" strokeWidth={1.8} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
