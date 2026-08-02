import posthog from "posthog-js";

let isInitialized = false;

function canTrack() {
  return typeof window !== "undefined"
    && Boolean(import.meta.env.VITE_POSTHOG_KEY)
    && !window.location.pathname.startsWith("/admin");
}

export function initializePostHog() {
  if (!canTrack() || isInitialized) return;

  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com",
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
    person_profiles: "identified_only",
    disable_session_recording: true,
    respect_dnt: true,
  });

  isInitialized = true;

  const capturePageview = () => {
    posthog.capture("$pageview", { $current_url: window.location.href });
  };

  capturePageview();
  window.addEventListener("hashchange", capturePageview);
  window.addEventListener("popstate", capturePageview);
}

export function captureAnalyticsEvent(event: string, properties?: Record<string, unknown>) {
  if (isInitialized) posthog.capture(event, properties);
}
