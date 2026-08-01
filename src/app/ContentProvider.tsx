import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { contentService } from "../lib/content-service";
import { defaultPortfolioContent, type PortfolioContent } from "../lib/portfolio-content";
import { supabase } from "../lib/supabase";
import { localizeContent, useLanguage } from "./LanguageProvider";

const PortfolioContentContext = createContext<PortfolioContent>(defaultPortfolioContent);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState(defaultPortfolioContent);
  const { language } = useLanguage();
  const refreshContent = useCallback(async () => {
    try {
      setContent(await contentService.getPublic());
    } catch {
      // The public site intentionally retains its bundled fallback when content is temporarily unavailable.
    }
  }, []);

  useEffect(() => {
    void refreshContent();

    // Keep an already-open portfolio tab in sync after an administrator saves.
    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") void refreshContent();
    };
    window.addEventListener("focus", refreshWhenVisible);
    document.addEventListener("visibilitychange", refreshWhenVisible);

    const channel = supabase
      ?.channel("portfolio-content-public-sync")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "portfolio_content", filter: "id=eq.primary" },
        () => { void refreshContent(); },
      )
      .subscribe();

    return () => {
      window.removeEventListener("focus", refreshWhenVisible);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
      if (channel) void supabase?.removeChannel(channel);
    };
  }, [refreshContent]);

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
