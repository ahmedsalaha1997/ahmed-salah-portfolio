import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { contentService } from "../lib/content-service";
import { defaultPortfolioContent, type PortfolioContent } from "../lib/portfolio-content";
import { localizeContent, useLanguage } from "./LanguageProvider";

const PortfolioContentContext = createContext<PortfolioContent>(defaultPortfolioContent);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState(defaultPortfolioContent);
  const { language } = useLanguage();

  useEffect(() => {
    contentService.getPublic().then(setContent).catch(() => {
      // The public site intentionally retains its bundled fallback when the local API is offline.
    });
  }, []);

  const localizedContent = useMemo(() => localizeContent(content, language), [content, language]);
  const publicContent = useMemo(() => {
    if (language === "ar" && content.arabic) return { ...content, ...content.arabic };
    return localizedContent;
  }, [content, language, localizedContent]);
  return <PortfolioContentContext.Provider value={publicContent}>{children}</PortfolioContentContext.Provider>;
}

export function usePortfolioContent() {
  return useContext(PortfolioContentContext);
}
