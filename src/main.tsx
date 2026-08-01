
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import ResourcesPage from "./app/ResourcesPage.tsx";
  import AdminDashboard from "./app/AdminDashboard.tsx";
  import { ContentProvider } from "./app/ContentProvider.tsx";
  import { LanguageProvider } from "./app/LanguageProvider.tsx";
  import tabIcon from "./assets/logo-dak.svg";
  import "./styles/index.css";

  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (favicon) favicon.href = tabIcon;

  const isAdminRoute = window.location.pathname === "/admin" || window.location.pathname.startsWith("/admin/");
  const isResourcesRoute = window.location.pathname === "/resources" || window.location.pathname.startsWith("/resources/");

  createRoot(document.getElementById("root")!).render(
    isAdminRoute ? <AdminDashboard /> : <LanguageProvider><ContentProvider>{isResourcesRoute ? <ResourcesPage /> : <App />}</ContentProvider></LanguageProvider>,
  );
  
