import imgPlaceholder from "./9b50c71c017b754c585bd1d41fa468cc3aa63894.png";
import imgLegusBackdrop from "./518b2de979902715cc619bb269718327fe8903fc.png";
import imgLegus from "./85101a4f0b2fb3c85fabd9851e45ee279cc15c41.png";
import imgKba from "./084e20ab7d69e0fbc7b7b974fbbb81b48d464bab.png";
import imgVitJohn from "./3577db176a1ca5a56de329b6cfda8ea7cc834c85.png";
import imgAtqan from "./f38fbad95ec68751bbbb3718f35292beeed2184f.png";
import imgPerforms from "./8aa4a2533bad03050ac8b27773417d24aa1666ef.png";
import { usePortfolioContent } from "../../app/ContentProvider";
import { translateText, useLanguage } from "../../app/LanguageProvider";

type Project = {
  title: string;
  tags: string[];
  images: string[];
};

const defaultProjects: Project[] = [
  {
    title: "Legus — The Ultimate Product for Managing Law Offices",
    tags: ["Product Design", "Web App", "Dashboard", "UI/UX", "SaaS"],
    images: [imgPlaceholder, imgLegusBackdrop, imgLegus],
  },
  {
    title: "Wasl — App for the Saudi Real Estate Market",
    tags: ["Product Design", "Mobile App", "Dashboard", "UI/UX", "2025"],
    images: [imgPlaceholder, imgLegusBackdrop],
  },
  {
    title: "Official Mobile App for the Kuwait Bar Association",
    tags: ["Product Design", "Mobile App", "Dashboard", "UI/UX", "2025"],
    images: [imgKba],
  },
  {
    title: "AI-Powered Dog Health Assistant Mobile App",
    tags: ["Product Design", "B2C", "Mobile App", "UI/UX", "2025"],
    images: [imgVitJohn],
  },
  {
    title: "Atqan — HR Management System",
    tags: ["Product Design", "B2B", "Dashboard", "UI/UX", "2025"],
    images: [imgAtqan],
  },
  {
    title: "Performs for Maximizing Athletic Potential",
    tags: ["Product Design", "B2B", "Dashboard", "UI/UX", "2022"],
    images: [imgAtqan, imgPerforms],
  },
];

function ProjectImage({ images, title }: Pick<Project, "images" | "title">) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#101b29]">
      {images.map((src, index) => (
        <img
          key={src}
          alt={index === images.length - 1 ? `${title} preview` : ""}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          src={src}
        />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();
  const localizedProject = {
    ...project,
    title: translateText(project.title, language),
    tags: project.tags.map((tag) => translateText(tag, language)),
  };
  return (
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
}

export default function Work() {
  const { projects: managedProjects } = usePortfolioContent();
  const { language } = useLanguage();
  const projects: Project[] = managedProjects.length
    ? managedProjects.map((project, index) => {
      const fallback = defaultProjects[index] || defaultProjects[0];
      const images = [project.coverImage, ...project.galleryImages].filter(Boolean);
      return { title: project.title, tags: project.tags, images: images.length ? images : fallback.images };
    })
    : defaultProjects;
  return (
    <section id="projects" className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-5 py-12 sm:gap-8 sm:px-8 sm:py-16 lg:px-10 xl:px-0" data-name="work">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-['IBM_Plex_Sans',sans-serif] text-xs font-medium tracking-wide text-[#cdd6db]">
          {translateText("Ahmed's Portfolio", language)}
        </span>
        <div className="flex flex-col items-center">
          <h2 className="font-['IBM_Plex_Sans',sans-serif] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {translateText("Selected work", language)}
          </h2>
          <p className="mt-1 max-w-xl font-['IBM_Plex_Sans',sans-serif] text-sm leading-relaxed text-[#aebbc4] sm:text-base">
            {translateText("Product experiences and scalable systems designed for complex workflows.", language)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 sm:gap-6 xl:gap-8" data-name="projects" data-reveal-stagger>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
