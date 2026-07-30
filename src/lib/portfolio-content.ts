export type OrderedItem = { id: string };

export type PortfolioContentBase = {
  hero: { title: string; words: string[]; subtitle: string; profileImage: string; cvLink: string; primaryCtaLabel: string; primaryCtaLink: string; secondaryCtaLabel: string; secondaryCtaLink: string };
  navigation: Array<{ id: string; label: string; link: string }>;
  projects: Array<{ id: string; title: string; coverImage: string; galleryImages: string[]; description: string; tags: string[]; year: string; category: string; link: string }>;
  about: { profileImage: string; name: string; bio: string; socialLinks: { behance: string; linkedin: string; whatsapp: string } };
  experience: Array<{ id: string; logo: string; jobTitle: string; company: string; dates: string; employmentType: string; location: string; bulletPoints: string[] }>;
  certifications: Array<{ id: string; logo: string; title: string; issuer: string; credentialUrl: string }>;
  education: Array<{ id: string; logo: string; degree: string; institutionName: string }>;
  skills: Array<{ id: string; name: string; icon: string }>;
  languages: Array<{ id: string; name: string; proficiency: string }>;
  contact: { heading: string; description: string; email: string; whatsAppNumber: string; whatsAppLink: string; linkedInUrl: string; behanceUrl: string };
  footer: { copyright: string; logo: string };
};

export type PortfolioContent = PortfolioContentBase & {
  /** Arabic content is stored independently and selected by the public language switcher. */
  arabic?: PortfolioContentBase;
  /** Internal CMS metadata; it is never rendered on the public website. */
  syncState?: { websiteContentSyncedAt?: string };
};

/**
 * The portfolio originally shipped these sections as design-time content. Keeping
 * a structured copy here makes the same content available to the CMS without
 * replacing anything the owner has already added in Supabase.
 */
export const websiteContentBaseline = {
  experience: [
    { id: "creative-financial", logo: "", jobTitle: "SENIOR PRODUCT DESIGNER (UI UX)", company: "Creative Financial technology", dates: "Jan 2023 - Present", employmentType: "Full time", location: "Kuwait", bulletPoints: ["Led end-to-end UX/UI design for enterprise SaaS products across LegalTech and FinTech domains.", "Translated complex business requirements into scalable user flows, prototypes, and design solutions.", "Collaborated with developers, stakeholders, and product teams to define features, priorities, and delivery roadmap.", "Managed product delivery process using Jira by creating user stories and acceptance criteria.", "Designed legal management systems serving law firms and Kuwait Bar Association workflows."] },
    { id: "itqan", logo: "", jobTitle: "SENIOR PRODUCT DESIGNER (UI UX)", company: "ITQAN Gulf Arab Financial Technology", dates: "Fep 2023 - Present", employmentType: "Part time", location: "Saudi Arabia", bulletPoints: ["Led end-to-end design of enterprise SaaS products for finance, accounting, and facility management domains.", "Conducted requirement discovery sessions with stakeholders and domain experts to transform complex workflows into intuitive digital solutions.", "Designed scalable dashboards for accounting operations, financial tracking, and property management.", "Collaborated with accounting specialists to understand Saudi market requirements and translate regulations/business logic into product features.", "Created interactive prototypes and design documentation to improve alignment between business and engineering teams."] },
    { id: "cutting-edge", logo: "", jobTitle: "PRODUCT DESIGNER (UI UX)", company: "Cutting Edge", dates: "Sep 2022 - Jan 2023", employmentType: "Part time", location: "Egypt", bulletPoints: ["Owned the full product design lifecycle from discovery to developer handoff.", "Conducted competitor analysis and translated insights into product improvements.", "Created user flows, wireframes, prototypes, and high-fidelity interfaces.", "Collaborated with developers through Azure DevOps to track implementation and ensure design quality.", "Reviewed production builds and performed UX/UI quality assurance before release."] },
    { id: "freelance-product", logo: "", jobTitle: "PRODUCT DESIGNER (UI UX)", company: "Freelance", dates: "Jan 2021 - Sep 2022", employmentType: "Freelance", location: "", bulletPoints: ["Delivered end-to-end UX/UI solutions for clients across multiple industries.", "Conducted user research and usability testing to identify pain points and improve product experiences.", "Created information architecture, user flows, prototypes, and scalable UI systems.", "Collaborated with development teams to ensure accurate implementation.", "Managed multiple client projects from discovery to launch."] },
    { id: "freelance-graphic", logo: "", jobTitle: "Graphic Designer", company: "Freelance", dates: "July 2018 - Jan 2021", employmentType: "Freelance", location: "", bulletPoints: ["Designed visual identities and marketing assets for digital and print platforms.", "Developed strong foundations in typography, visual hierarchy, and brand consistency."] },
  ],
  certifications: [
    { id: "google-ux", logo: "", title: "User Experience Design Certificate", issuer: "Google", credentialUrl: "" },
    { id: "edraak-research", logo: "", title: "User Research Certificate", issuer: "Edraak", credentialUrl: "" },
    { id: "edraak-ux", logo: "", title: "User Experience Design Certificate", issuer: "Edraak", credentialUrl: "" },
  ],
  education: [{ id: "qena-university", logo: "", degree: "Engineering Bachelor Degree.", institutionName: "Qena University" }],
  skills: [
    { id: "product-design", name: "Product Design", icon: "PanelsTopLeft" }, { id: "user-experience", name: "User Experience Design", icon: "UsersRound" }, { id: "user-interface", name: "User Interface Design", icon: "PanelsTopLeft" }, { id: "design-systems", name: "Design Systems", icon: "CloudCog" }, { id: "ai-development", name: "AI, Developments", icon: "Atom" },
    { id: "user-research", name: "User Research", icon: "Search" }, { id: "prototyping", name: "Prototyping", icon: "PanelTop" }, { id: "usability-testing", name: "Usability Testing", icon: "ClipboardCheck" }, { id: "figma", name: "Figma", icon: "Figma" }, { id: "product-management", name: "Product Management", icon: "UserCog" },
  ],
} satisfies Pick<PortfolioContentBase, "experience" | "certifications" | "education" | "skills">;

export const defaultPortfolioContent: PortfolioContent = {
  hero: {
    title: "I Design Products That",
    words: ["Impact.", "Scale.", "Perform.", "Deliver.", "Convert.", "Grow."],
    subtitle: "Product and design engineer crafting scalable systems and experiences for complex workflows.",
    profileImage: "", cvLink: "#", primaryCtaLabel: "Ahmed's CV", primaryCtaLink: "#", secondaryCtaLabel: "See work", secondaryCtaLink: "#projects",
  },
  navigation: [
    { id: "home", label: "Home", link: "#home" }, { id: "projects", label: "Projects", link: "#projects" }, { id: "about", label: "About", link: "#about" }, { id: "services", label: "Services", link: "#services" }, { id: "contact", label: "Contact", link: "#contact" }, { id: "arabic", label: "Arabic", link: "#" },
  ],
  projects: [],
  about: { profileImage: "", name: "Ahmed Salah", bio: "Senior Product Designer (UI UX) with 4+ years of experience designing SaaS platforms across FinTech, LegalTech, and Property Management. Experienced in leading end-to-end product design from discovery and UX research to scalable design systems, prototypes, and developer handoff.", socialLinks: { behance: "https://www.behance.net/ahmedsalaha1997", linkedin: "https://www.linkedin.com/in/ahmedsalah1997/", whatsapp: "https://wa.me/201015949764" } },
  experience: websiteContentBaseline.experience, certifications: websiteContentBaseline.certifications, education: websiteContentBaseline.education, skills: websiteContentBaseline.skills,
  languages: [{ id: "arabic", name: "Arabic", proficiency: "Native or bilingual proficiency" }, { id: "english", name: "English", proficiency: "Professional working proficiency" }],
  contact: { heading: "Let's create something amazing together.", description: "Have a product challenge, idea, or opportunity? I'd love to hear about it.", email: "ahmedsalaha1997@gmail.com", whatsAppNumber: "+20 101 594 9764", whatsAppLink: "https://wa.me/201015949764", linkedInUrl: "https://www.linkedin.com/in/ahmedsalah1997/", behanceUrl: "https://www.behance.net/ahmedsalaha1997/projects" },
  footer: { copyright: "© 2026 Ahmed Salah. All Rights Reserved.", logo: "" },
};

export function mergePortfolioContent(value: Partial<PortfolioContent>): PortfolioContent {
  const useBaseline = <T,>(items: T[] | undefined, baseline: T[]) => items && items.length > 0 ? items : baseline;
  return {
    ...defaultPortfolioContent,
    ...value,
    hero: { ...defaultPortfolioContent.hero, ...value.hero },
    about: { ...defaultPortfolioContent.about, ...value.about, socialLinks: { ...defaultPortfolioContent.about.socialLinks, ...value.about?.socialLinks } },
    contact: { ...defaultPortfolioContent.contact, ...value.contact },
    footer: { ...defaultPortfolioContent.footer, ...value.footer },
    experience: useBaseline(value.experience, websiteContentBaseline.experience),
    certifications: useBaseline(value.certifications, websiteContentBaseline.certifications),
    education: useBaseline(value.education, websiteContentBaseline.education),
    skills: useBaseline(value.skills, websiteContentBaseline.skills),
  };
}
