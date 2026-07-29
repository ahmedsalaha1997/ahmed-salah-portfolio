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
};

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
  experience: [], certifications: [], education: [], skills: [],
  languages: [{ id: "arabic", name: "Arabic", proficiency: "Native or bilingual proficiency" }, { id: "english", name: "English", proficiency: "Professional working proficiency" }],
  contact: { heading: "Let's create something amazing together.", description: "Have a product challenge, idea, or opportunity? I'd love to hear about it.", email: "ahmedsalaha1997@gmail.com", whatsAppNumber: "+20 101 594 9764", whatsAppLink: "https://wa.me/201015949764", linkedInUrl: "https://www.linkedin.com/in/ahmedsalah1997/", behanceUrl: "https://www.behance.net/ahmedsalaha1997/projects" },
  footer: { copyright: "© 2026 Ahmed Salah. All Rights Reserved.", logo: "" },
};

export function mergePortfolioContent(value: Partial<PortfolioContent>): PortfolioContent {
  return {
    ...defaultPortfolioContent,
    ...value,
    hero: { ...defaultPortfolioContent.hero, ...value.hero },
    about: { ...defaultPortfolioContent.about, ...value.about, socialLinks: { ...defaultPortfolioContent.about.socialLinks, ...value.about?.socialLinks } },
    contact: { ...defaultPortfolioContent.contact, ...value.contact },
    footer: { ...defaultPortfolioContent.footer, ...value.footer },
  };
}
