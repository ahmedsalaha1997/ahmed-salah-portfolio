import { translateText, useLanguage } from "./LanguageProvider";

export type PortfolioCardProject = {
  title: string;
  tags: string[];
  images: string[];
  link?: string;
};

function ProjectImage({ images, title }: Pick<PortfolioCardProject, "images" | "title">) {
  const preview = images.at(-1);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#101b29]">
      {preview ? (
        <img
          alt={`${title} preview`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          src={preview}
          width={1600}
          height={1200}
          loading="lazy"
          decoding="async"
        />
      ) : null}
    </div>
  );
}

function getProjectHref(link?: string) {
  const value = link?.trim().replace(/^#(?=(?:https?:\/\/|www\.))/i, "");
  if (!value || value === "#") return undefined;
  if (/^(https?:|mailto:|tel:)/i.test(value)) return value;
  return `https://${value.replace(/^\/+/, "")}`;
}

export default function PortfolioProjectCard({ project }: { project: PortfolioCardProject }) {
  const { language } = useLanguage();
  const href = getProjectHref(project.link);
  const localizedProject = {
    ...project,
    title: translateText(project.title, language),
    tags: project.tags.map((tag) => translateText(tag, language)),
  };
  const card = (
    <article className="group flex min-w-0 flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-[#6d9ee8]/50 hover:bg-white/[0.09] sm:p-4">
      <ProjectImage {...localizedProject} />
      <div className="flex flex-1 flex-col gap-4 px-1 pb-1 sm:gap-5">
        <h3 className="min-h-[3.5rem] font-['IBM_Plex_Sans',sans-serif] text-xl font-semibold leading-snug text-white sm:min-h-[4.25rem] sm:text-2xl">
          {localizedProject.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {localizedProject.tags.map((tag) => (
            <span
              className="rounded-md border border-[#c9dfff]/20 px-2.5 py-1.5 font-['IBM_Plex_Sans',sans-serif] text-xs leading-none text-[#cdd6db] sm:px-3 sm:text-sm"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${localizedProject.title} in a new tab`}
      className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d9ee8]"
    >
      {card}
    </a>
  ) : card;
}
