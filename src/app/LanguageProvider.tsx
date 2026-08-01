import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { PortfolioContent } from "../lib/portfolio-content";

export type SiteLanguage = "en" | "ar";

type LanguageContextValue = {
  language: SiteLanguage;
  isArabic: boolean;
  setLanguage: (language: SiteLanguage) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const resourceArabicText: Record<string, string> = {
  "Resources": "الموارد",
  "Explore resources": "استكشف الموارد",
  "Resources to help you build with clarity.": "موارد تساعدك على بناء منتجات أوضح.",
  "Useful templates, practical reading, and product tools made to support your next move.": "قوالب مفيدة، ومحتوى عملي، وأدوات منتجات تدعم خطوتك التالية.",
  "Download": "تحميل", "Article": "مقال", "Product": "منتج", "Open resource": "فتح المورد", "Coming soon": "قريبًا",
  "Product discovery checklist": "قائمة اكتشاف المنتج",
  "A practical checklist to help you frame the problem, align the team, and begin discovery with confidence.": "قائمة عملية تساعدك على تحديد المشكلة، ومواءمة الفريق، وبدء مرحلة الاكتشاف بثقة.",
  "Design systems in practice": "أنظمة التصميم في التطبيق",
  "A concise guide to creating scalable foundations, reusable components, and clearer product experiences.": "دليل مختصر لبناء أسس قابلة للتوسع، ومكونات قابلة لإعادة الاستخدام، وتجارب منتجات أوضح.",
  "Product thinking toolkit": "مجموعة أدوات التفكير بالمنتج",
  "A collection of prompts and frameworks for moving from an early idea to a focused product direction.": "مجموعة من الأسئلة والأطر العملية للانتقال من فكرة مبكرة إلى اتجاه منتج واضح.",
};

const arabicText: Record<string, string> = {
  "Home": "الرئيسية", "Projects": "المشاريع", "About": "نبذة عني", "Services": "الخدمات", "Contact": "تواصل معي", "Arabic": "العربية", "English": "الإنجليزية", "Menu": "القائمة",
  "I Design Products That": "أصمم منتجات تُحدث", "Impact.": "أثرًا.", "Scale.": "تتوسع.", "Perform.": "تؤدي بكفاءة.", "Deliver.": "تنجز.", "Convert.": "تحوّل.", "Grow.": "تنمو.",
  "Product and design engineer crafting scalable systems and experiences for complex workflows.": "مصمم منتجات وهندسة تصميم، أبني أنظمة وتجارب قابلة للتوسع لسير العمل المعقد.",
  "Ahmed's CV": "السيرة الذاتية", "See work": "عرض الأعمال", "Ahmed's Portfolio": "معرض أعمال أحمد", "Selected work": "أعمال مختارة", "Product experiences and scalable systems designed for complex workflows.": "تجارب منتجات وأنظمة قابلة للتوسع مصممة لسير العمل المعقد.",
  "Legus â€” The Ultimate Product for Managing Law Offices": "ليجس — المنصة المتكاملة لإدارة مكاتب المحاماة", "Legus — The Ultimate Product for Managing Law Offices": "ليجس — المنصة المتكاملة لإدارة مكاتب المحاماة", "Wasl â€” App for the Saudi Real Estate Market": "وصل — تطبيق للسوق العقاري السعودي", "Wasl — App for the Saudi Real Estate Market": "وصل — تطبيق للسوق العقاري السعودي", "Official Mobile App for the Kuwait Bar Association": "التطبيق الرسمي لجمعية المحامين الكويتية", "AI-Powered Dog Health Assistant Mobile App": "تطبيق مساعد صحي للكلاب مدعوم بالذكاء الاصطناعي", "Atqan â€” HR Management System": "إتقان — نظام إدارة الموارد البشرية", "Atqan — HR Management System": "إتقان — نظام إدارة الموارد البشرية", "Performs for Maximizing Athletic Potential": "بيرفورمز لتعظيم الأداء الرياضي",
  "Product Design": "تصميم المنتجات", "Web App": "تطبيق ويب", "Dashboard": "لوحة تحكم", "Mobile App": "تطبيق جوال", "User Research": "أبحاث المستخدم", "User Experience Design": "تصميم تجربة المستخدم", "User Interface Design": "تصميم واجهات المستخدم", "Design Systems": "أنظمة التصميم", "AI, Developments": "الذكاء الاصطناعي والتطوير", "Prototyping": "النماذج الأولية", "Usability Testing": "اختبار قابلية الاستخدام", "Product Management": "إدارة المنتجات",
  "Senior Product Designer (UI UX) with 4+ years of experience designing SaaS platforms across FinTech, LegalTech, and Property Management. Experienced in leading end-to-end product design from discovery and UX research to scalable design systems, prototypes, and developer handoff.": "مصمم منتجات أول (UI/UX) بخبرة تزيد على 4 سنوات في تصميم منصات SaaS ضمن التقنية المالية والقانونية وإدارة العقارات. أمتلك خبرة في قيادة دورة تصميم المنتج بالكامل، من الاكتشاف وأبحاث المستخدم إلى أنظمة التصميم القابلة للتوسع والنماذج الأولية وتسليم التطوير.",
  "Experience": "الخبرات", "Licences and Certifications": "التراخيص والشهادات", "Education": "التعليم", "Skills": "المهارات", "Languages": "اللغات", "Native or bilingual proficiency": "إتقان كلغة أم أو ثنائي اللغة", "Professional working proficiency": "إتقان مهني في العمل",
  "SENIOR PRODUCT DESIGNER (UI UX)": "مصمم منتجات أول (UI/UX)", "PRODUCT DESIGNER (UI UX)": "مصمم منتجات (UI/UX)", "Graphic Designer": "مصمم جرافيك", "Full time": "دوام كامل", "Part time": "دوام جزئي", "Freelance": "عمل حر", "Present": "حتى الآن", "Kuwait": "الكويت", "Saudi Arabia": "المملكة العربية السعودية", "Egypt": "مصر", "Jan 2023 - Present": "يناير 2023 - حتى الآن", "Fep 2023 - Present": "فبراير 2023 - حتى الآن", "Sep 2022 - Jan 2023": "سبتمبر 2022 - يناير 2023", "Jan 2021 - Sep 2022": "يناير 2021 - سبتمبر 2022", "July 2018 - Jan 2021": "يوليو 2018 - يناير 2021",
  "User Experience Design Certificate": "شهادة تصميم تجربة المستخدم", "User Research Certificate": "شهادة أبحاث المستخدم", "See Credential": "عرض الشهادة", "Engineering Bachelor Degree.": "بكالوريوس الهندسة.", "Qena University": "جامعة قنا",
  "Let's create something amazing together.": "لنصنع شيئًا رائعًا معًا.", "Have a product challenge, idea, or opportunity? I'd love to hear about it.": "لديك تحدٍ في منتج، فكرة، أو فرصة؟ يسعدني أن أسمع منك.", "Contact me": "تواصل معي", "Email": "البريد الإلكتروني", "WhatsApp": "واتساب", "Connect with me": "تواصل معي", "Behance": "بيهانس", "View my projects": "شاهد مشاريعي",
  "© 2026 Ahmed Salah. All Rights Reserved.": "© 2026 أحمد صلاح. جميع الحقوق محفوظة.", "آ© 2026 Ahmed Salah. All Rights Reserved.": "© 2026 أحمد صلاح. جميع الحقوق محفوظة.",
  "Led end-to-end UX/UI design for enterprise SaaS products.": "قدت تصميم تجربة وواجهة المستخدم بشكل متكامل لمنتجات SaaS المؤسسية.", "Translated complex requirements into scalable user flows.": "حوّلت المتطلبات المعقدة إلى تدفقات مستخدم قابلة للتوسع.",
  "Led end-to-end UX/UI design for enterprise SaaS products across LegalTech and FinTech domains.": "قدت تصميم تجربة وواجهة المستخدم بشكل متكامل لمنتجات SaaS المؤسسية في مجالات التقنية القانونية والمالية.", "Translated complex business requirements into scalable user flows, prototypes, and design solutions.": "حوّلت متطلبات الأعمال المعقدة إلى تدفقات مستخدم ونماذج أولية وحلول تصميم قابلة للتوسع.", "Collaborated with developers, stakeholders, and product teams to define features, priorities, and delivery roadmap.": "تعاونت مع المطورين وأصحاب المصلحة وفرق المنتجات لتحديد المزايا والأولويات وخارطة طريق التسليم.", "Managed product delivery process using Jira by creating user stories and acceptance criteria.": "أدرت عملية تسليم المنتج باستخدام Jira عبر إنشاء قصص المستخدم ومعايير القبول.", "Designed legal management systems serving law firms and Kuwait Bar Association workflows.": "صممت أنظمة إدارة قانونية تخدم مكاتب المحاماة وسير عمل جمعية المحامين الكويتية.",
  "Led end-to-end design of enterprise SaaS products for finance, accounting, and facility management domains.": "قدت التصميم المتكامل لمنتجات SaaS المؤسسية في مجالات المالية والمحاسبة وإدارة المرافق.", "Conducted requirement discovery sessions with stakeholders and domain experts to transform complex workflows into intuitive digital solutions.": "أجريت جلسات اكتشاف المتطلبات مع أصحاب المصلحة وخبراء المجال لتحويل سير العمل المعقد إلى حلول رقمية بديهية.", "Designed scalable dashboards for accounting operations, financial tracking, and property management.": "صممت لوحات تحكم قابلة للتوسع للعمليات المحاسبية والتتبع المالي وإدارة العقارات.", "Collaborated with accounting specialists to understand Saudi market requirements and translate regulations/business logic into product features.": "تعاونت مع مختصي المحاسبة لفهم متطلبات السوق السعودي وتحويل اللوائح ومنطق الأعمال إلى مزايا للمنتج.", "Created interactive prototypes and design documentation to improve alignment between business and engineering teams.": "أنشأت نماذج أولية تفاعلية ووثائق تصميم لتحسين المواءمة بين فرق الأعمال والهندسة.",
  "Owned the full product design lifecycle from discovery to developer handoff.": "قدت دورة حياة تصميم المنتج كاملة من الاكتشاف حتى تسليم التطوير.", "Conducted competitor analysis and translated insights into product improvements.": "أجريت تحليلًا للمنافسين وحوّلت النتائج إلى تحسينات للمنتج.", "Created user flows, wireframes, prototypes, and high-fidelity interfaces.": "أنشأت تدفقات المستخدم والإطارات السلكية والنماذج الأولية والواجهات عالية الدقة.", "Collaborated with developers through Azure DevOps to track implementation and ensure design quality.": "تعاونت مع المطورين عبر Azure DevOps لمتابعة التنفيذ وضمان جودة التصميم.", "Reviewed production builds and performed UX/UI quality assurance before release.": "راجعت نسخ الإنتاج ونفذت ضمان جودة تجربة وواجهة المستخدم قبل الإطلاق.",
  "Delivered end-to-end UX/UI solutions for clients across multiple industries.": "قدمت حلول تجربة وواجهة مستخدم متكاملة لعملاء في قطاعات متعددة.", "Conducted user research and usability testing to identify pain points and improve product experiences.": "أجريت أبحاث المستخدم واختبارات قابلية الاستخدام لتحديد نقاط الألم وتحسين تجارب المنتجات.", "Created information architecture, user flows, prototypes, and scalable UI systems.": "أنشأت هيكل المعلومات وتدفقات المستخدم والنماذج الأولية وأنظمة واجهات قابلة للتوسع.", "Collaborated with development teams to ensure accurate implementation.": "تعاونت مع فرق التطوير لضمان تنفيذ دقيق.", "Managed multiple client projects from discovery to launch.": "أدرت عدة مشاريع للعملاء من مرحلة الاكتشاف حتى الإطلاق.",
  "Designed visual identities and marketing assets for digital and print platforms.": "صممت هويات بصرية وأصولًا تسويقية للمنصات الرقمية والمطبوعة.", "Developed strong foundations in typography, visual hierarchy, and brand consistency.": "طورت أساسًا قويًا في الطباعة والتسلسل الهرمي البصري واتساق العلامة التجارية.",
};

export function translateText(value: string, language: SiteLanguage) {
  if (language !== "ar") return value;
  const normalized = value.replace(/\s+/g, " ").trim();
  return resourceArabicText[normalized] ?? resourceArabicText[value] ?? arabicText[normalized] ?? arabicText[value] ?? value;
}

export function localizeContent(content: PortfolioContent, language: SiteLanguage): PortfolioContent {
  if (language !== "ar") return content;
  const translate = (value: string) => translateText(value, language);
  return {
    ...content,
    hero: { ...content.hero, title: translate(content.hero.title), words: content.hero.words.map(translate), subtitle: translate(content.hero.subtitle), primaryCtaLabel: translate(content.hero.primaryCtaLabel), secondaryCtaLabel: translate(content.hero.secondaryCtaLabel) },
    navigation: content.navigation.map((item) => ({ ...item, label: item.id === "arabic" ? "English" : translate(item.label) })),
    projects: content.projects.map((project) => ({ ...project, title: translate(project.title), description: translate(project.description), category: translate(project.category), tags: project.tags.map(translate) })),
    about: { ...content.about, bio: translate(content.about.bio) },
    experience: content.experience.map((item) => ({ ...item, jobTitle: translate(item.jobTitle), dates: translate(item.dates), employmentType: translate(item.employmentType), location: translate(item.location), bulletPoints: item.bulletPoints.map(translate) })),
    certifications: content.certifications.map((item) => ({ ...item, title: translate(item.title), issuer: translate(item.issuer) })),
    education: content.education.map((item) => ({ ...item, degree: translate(item.degree), institutionName: translate(item.institutionName) })),
    skills: content.skills.map((item) => ({ ...item, name: translate(item.name) })),
    languages: content.languages.map((item) => ({ ...item, name: translate(item.name), proficiency: translate(item.proficiency) })),
    resources: content.resources.map((item) => ({ ...item, title: translate(item.title), description: translate(item.description), type: translate(item.type) })),
    contact: { ...content.contact, heading: translate(content.contact.heading), description: translate(content.contact.description) },
    footer: { ...content.footer, copyright: translate(content.footer.copyright) },
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>(() => localStorage.getItem("portfolio-language") === "ar" ? "ar" : "en");
  const isArabic = language === "ar";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    localStorage.setItem("portfolio-language", language);
  }, [isArabic, language]);

  const value = useMemo(() => ({ language, isArabic, setLanguage, toggleLanguage: () => setLanguage((current) => current === "ar" ? "en" : "ar") }), [isArabic, language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
