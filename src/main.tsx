
  import { lazy, Suspense } from "react";
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { ContentProvider } from "./app/ContentProvider.tsx";
  import { LanguageProvider } from "./app/LanguageProvider.tsx";
  import tabIcon from "./assets/logo-dak.svg";
  import "./styles/index.css";

  const ResourcesPage = lazy(() => import("./app/ResourcesPage.tsx"));
  const AdminDashboard = lazy(() => import("./app/AdminDashboard.tsx"));

  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (favicon) favicon.href = tabIcon;

  const isAdminRoute = window.location.pathname === "/admin" || window.location.pathname.startsWith("/admin/");
  const isResourcesRoute = window.location.pathname === "/resources" || window.location.pathname.startsWith("/resources/");

  // Analytics is not needed for the first paint. Loading it during idle time
  // keeps the public page responsive while preserving all tracking.
  const loadAnalytics = () => {
    void import("./lib/posthog.ts").then(({ initializePostHog }) => initializePostHog());
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadAnalytics, { timeout: 3000 });
  } else {
    window.setTimeout(loadAnalytics, 1500);
  }

  const routeLoadingFallback = <div className="min-h-screen bg-[#06101d]" aria-label="Loading" />;

  createRoot(document.getElementById("root")!).render(
    isAdminRoute ? (
      <Suspense fallback={routeLoadingFallback}><AdminDashboard /></Suspense>
    ) : (
      <LanguageProvider><ContentProvider>{isResourcesRoute ? <Suspense fallback={routeLoadingFallback}><ResourcesPage /></Suspense> : <App />}</ContentProvider></LanguageProvider>
    ),
  );
  
