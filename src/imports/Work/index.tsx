import imgLegusBackdrop from "./518b2de979902715cc619bb269718327fe8903fc.webp";
import imgLegus from "./85101a4f0b2fb3c85fabd9851e45ee279cc15c41.webp";
import imgKba from "./084e20ab7d69e0fbc7b7b974fbbb81b48d464bab.webp";
import imgVitJohn from "./3577db176a1ca5a56de329b6cfda8ea7cc834c85.webp";
import imgAtqan from "./f38fbad95ec68751bbbb3718f35292beeed2184f.webp";
import imgPerforms from "./8aa4a2533bad03050ac8b27773417d24aa1666ef.webp";
import { usePortfolioContent } from "../../app/ContentProvider";
import { translateText, useLanguage } from "../../app/LanguageProvider";
import PortfolioProjectCard, { type PortfolioCardProject } from "../../app/PortfolioProjectCard";

const defaultProjects: PortfolioCardProject[] = [
  {
    title: "Legus — The Ultimate Product for Managing Law Offices",
    tags: ["Product Design", "Web App", "Dashboard", "UI/UX", "SaaS"],
    images: [imgLegus],
  },
  {
    title: "Wasl — App for the Saudi Real Estate Market",
    tags: ["Product Design", "Mobile App", "Dashboard", "UI/UX", "2025"],
    images: [imgLegusBackdrop],
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
    images: [imgPerforms],
  },
];

export default function Work() {
  const { projects: managedProjects } = usePortfolioContent();
  const { language } = useLanguage();
  const projects: PortfolioCardProject[] = managedProjects.length
    ? managedProjects.map((project, index) => {
      const fallback = defaultProjects[index] || defaultProjects[0];
      const images = [project.coverImage, ...project.galleryImages].filter(Boolean);
      return { title: project.title, tags: project.tags, images: images.length ? images : fallback.images, link: project.link };
    })
    : defaultProjects;
  return (
    <section id="projects" className="mx-auto flex w-full max-w-[1042px] flex-col gap-6 px-5 py-12 sm:gap-8 sm:px-8 sm:py-16 lg:px-10 xl:px-0" data-name="work">
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
          <PortfolioProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
