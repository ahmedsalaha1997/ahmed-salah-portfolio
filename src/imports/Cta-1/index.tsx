import { ArrowUpRight, AtSign, BriefcaseBusiness, Linkedin, Mail, MessageCircle } from "lucide-react";
import { usePortfolioContent } from "../../app/ContentProvider";
import { translateText, useLanguage } from "../../app/LanguageProvider";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: typeof Mail;
  tone: string;
  wide?: boolean;
};

function ContactCard({ contact }: { contact: ContactLink }) {
  const Icon = contact.icon;

  return (
    <a
      className={`group flex min-w-0 items-center gap-3 rounded-2xl border p-4 transition duration-300 hover:-translate-y-0.5 ${contact.tone} ${contact.wide ? "sm:col-span-2" : ""}`}
      href={contact.href}
      rel="noreferrer"
      target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#071727]/70 text-[#cfe7ff]">
        <Icon size={20} strokeWidth={1.8} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-['IBM_Plex_Sans',sans-serif] text-xs font-medium text-[#9db0c0]">{contact.label}</span>
        <span className="block truncate font-['IBM_Plex_Sans',sans-serif] text-sm font-medium text-white sm:text-[15px]">{contact.value}</span>
      </span>
      <ArrowUpRight className="shrink-0 text-[#9db0c0] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" size={18} />
    </a>
  );
}

export default function Cta() {
  const { contact } = usePortfolioContent();
  const { language } = useLanguage();
  const contacts: ContactLink[] = [
    { label: translateText("Email", language), value: contact.email, href: `mailto:${contact.email}`, icon: Mail, tone: "bg-[#0a70ae]/15 border-[#58b6ed]/25 hover:border-[#58b6ed]/60", wide: true },
    { label: translateText("WhatsApp", language), value: contact.whatsAppNumber, href: contact.whatsAppLink, icon: MessageCircle, tone: "bg-[#33b50b]/10 border-[#55c933]/25 hover:border-[#55c933]/60" },
    { label: "LinkedIn", value: translateText("Connect with me", language), href: contact.linkedInUrl, icon: Linkedin, tone: "bg-[#3876fc]/10 border-[#6b9cff]/25 hover:border-[#6b9cff]/60" },
    { label: translateText("Behance", language), value: translateText("View my projects", language), href: contact.behanceUrl, icon: BriefcaseBusiness, tone: "bg-[#2156d9]/10 border-[#7d9dff]/25 hover:border-[#7d9dff]/60" },
  ];
  return (
    <section id="contact" className="mx-auto w-full max-w-[1040px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 xl:px-0" data-name="CTA">
      <div className="relative overflow-hidden rounded-3xl border border-[#71adff]/20 bg-[#081a2c] px-5 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.2)] sm:px-8 sm:py-10 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-12 lg:py-12">
        <div className="pointer-events-none absolute -left-28 -top-28 size-80 rounded-full bg-[#0a70ae]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 size-72 rounded-full bg-[#3876fc]/15 blur-3xl" />

        <div className="relative flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#78b4ff]/25 bg-[#0a70ae]/15 px-3 py-1.5 font-['IBM_Plex_Sans',sans-serif] text-xs font-medium text-[#cfe7ff]">
            <AtSign size={14} /> {translateText("Contact me", language)}
          </span>
          <h2 className="mt-5 max-w-md font-['IBM_Plex_Sans',sans-serif] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-md font-['IBM_Plex_Sans',sans-serif] text-sm leading-relaxed text-[#b7c5d0] sm:text-base">
            {contact.description}
          </p>
        </div>

        <div className="relative mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-0" aria-label="Contact options" data-reveal-stagger>
          {contacts.map((contact) => (
            <ContactCard contact={contact} key={contact.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
