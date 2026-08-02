import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Gift, LoaderCircle, Sparkles, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { supabase } from "../lib/supabase";
import { captureAnalyticsEvent } from "../lib/posthog";

type Position = { x: number; y: number };
type GameState = "hidden" | "running" | "reward" | "success";

const CLAIMED_KEY = "portfolio-pixel-consultation-claimed";
const SPAWN_DELAY_MIN = 18000;
const SPAWN_DELAY_MAX = 36000;
const ESCAPE_DISTANCE = 118;
const REQUIRED_ESCAPES = 3;

const copy = {
  en: {
    catchMe: "Catch me!",
    caught: "You caught me!",
    title: "You unlocked a free 30-minute consultation.",
    description: "Leave your email or phone number and I’ll get in touch to arrange it.",
    placeholder: "Email address or phone number",
    claim: "Claim my consultation",
    cancel: "Maybe later",
    successTitle: "You’re on the list!",
    successDescription: "Thanks — I’ll be in touch soon to arrange your 30-minute consultation.",
    close: "Close",
    validation: "Please enter a valid email address or phone number.",
    error: "Something went wrong. Please try again shortly.",
  },
  ar: {
    catchMe: "أمسكني!",
    caught: "لقد أمسكت بي!",
    title: "ربحت استشارة مجانية لمدة 30 دقيقة.",
    description: "اكتب بريدك الإلكتروني أو رقم هاتفك وسأتواصل معك لتحديد الموعد.",
    placeholder: "البريد الإلكتروني أو رقم الهاتف",
    claim: "احجز استشارتي المجانية",
    cancel: "لاحقًا",
    successTitle: "تم تسجيل طلبك!",
    successDescription: "شكرًا لك — سأتواصل معك قريبًا لتحديد موعد الاستشارة لمدة 30 دقيقة.",
    close: "إغلاق",
    validation: "من فضلك أدخل بريدًا إلكترونيًا أو رقم هاتف صالحًا.",
    error: "حدث خطأ. حاول مرة أخرى بعد قليل.",
  },
};

function randomDelay() {
  return SPAWN_DELAY_MIN + Math.floor(Math.random() * (SPAWN_DELAY_MAX - SPAWN_DELAY_MIN));
}

function createPosition(previous?: Position): Position {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const minX = 24;
  const maxX = Math.max(minX, width - 108);
  const minY = Math.min(150, Math.max(24, height - 160));
  const maxY = Math.max(minY, height - 130);

  for (let attempt = 0; attempt < 12; attempt += 1) {
    const next = {
      x: minX + Math.round(Math.random() * (maxX - minX)),
      y: minY + Math.round(Math.random() * (maxY - minY)),
    };
    if (!previous || Math.hypot(next.x - previous.x, next.y - previous.y) > 210) return next;
  }

  return { x: maxX, y: minY };
}

function isValidContact(value: string) {
  const trimmed = value.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  const isPhone = /^[+()\d][\d\s()+-]{5,}$/.test(trimmed);
  return isEmail || isPhone;
}

export default function PixelCatchGame() {
  const { isArabic } = useLanguage();
  const language = isArabic ? "ar" : "en";
  const text = copy[language];
  const [state, setState] = useState<GameState>("hidden");
  const [position, setPosition] = useState<Position>({ x: -200, y: -200 });
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const positionRef = useRef(position);
  const stateRef = useRef(state);
  const escapeCount = useRef(0);
  const lastEscape = useRef(0);
  const spawnTimer = useRef<number | undefined>();
  const hoverFrame = useRef<number | undefined>();

  useEffect(() => { positionRef.current = position; }, [position]);
  useEffect(() => { stateRef.current = state; }, [state]);

  const scheduleSpawn = useCallback((delay = randomDelay()) => {
    window.clearTimeout(spawnTimer.current);
    spawnTimer.current = window.setTimeout(() => {
      if (sessionStorage.getItem(CLAIMED_KEY)) return;
      escapeCount.current = 0;
      setPosition(createPosition());
      setState("running");
      captureAnalyticsEvent("pixel_scout_appeared");
    }, delay);
  }, []);

  const escape = useCallback(() => {
    const now = Date.now();
    if (stateRef.current !== "running" || now - lastEscape.current < 450) return;
    lastEscape.current = now;
    escapeCount.current += 1;
    setPosition(createPosition(positionRef.current));
    captureAnalyticsEvent("pixel_scout_escaped", { escape_count: escapeCount.current });
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(CLAIMED_KEY)) return;
    scheduleSpawn(9000);
    return () => {
      window.clearTimeout(spawnTimer.current);
      window.cancelAnimationFrame(hoverFrame.current ?? 0);
    };
  }, [scheduleSpawn]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (stateRef.current !== "running" || hoverFrame.current) return;
      hoverFrame.current = window.requestAnimationFrame(() => {
        hoverFrame.current = undefined;
        const current = positionRef.current;
        const distance = Math.hypot(event.clientX - (current.x + 39), event.clientY - (current.y + 43));
        if (distance < ESCAPE_DISTANCE && escapeCount.current < REQUIRED_ESCAPES) escape();
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [escape]);

  const catchScout = () => {
    if (escapeCount.current < REQUIRED_ESCAPES && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      escape();
      return;
    }
    window.clearTimeout(spawnTimer.current);
    setState("reward");
    captureAnalyticsEvent("pixel_scout_caught", { escape_count: escapeCount.current });
  };

  const closeReward = () => {
    setState("hidden");
    setError("");
    setContact("");
    if (state !== "success") scheduleSpawn(60000);
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidContact(contact)) {
      setError(text.validation);
      return;
    }
    if (!supabase) {
      setError(text.error);
      return;
    }

    setSubmitting(true);
    setError("");
    const { error: submissionError } = await supabase
      .from("consultation_leads")
      .insert({ contact: contact.trim(), source: "pixel-catch-game" });
    setSubmitting(false);

    if (submissionError) {
      setError(text.error);
      return;
    }

    sessionStorage.setItem(CLAIMED_KEY, "true");
    setState("success");
    captureAnalyticsEvent("pixel_consultation_claimed");
  };

  return (
    <>
      {state === "running" && (
        <div className="pixel-scout-layer" aria-live="polite">
          <button
            type="button"
            className="pixel-scout"
            style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            onClick={catchScout}
            aria-label={text.catchMe}
          >
            <span className="pixel-scout__bubble">{text.catchMe}</span>
            <img className="pixel-scout__sprite" src="/pixel-scout.png" alt="" />
          </button>
        </div>
      )}

      {(state === "reward" || state === "success") && (
        <div className="pixel-scout-modal" role="dialog" aria-modal="true" aria-labelledby="pixel-scout-title">
          <button type="button" className="pixel-scout-modal__backdrop" aria-label={text.close} onClick={closeReward} />
          <div className="pixel-scout-modal__card" dir={isArabic ? "rtl" : "ltr"}>
            <button type="button" className="pixel-scout-modal__close" aria-label={text.close} onClick={closeReward}><X size={18} /></button>
            <div className="pixel-scout-modal__icon"><Gift size={24} /></div>
            {state === "success" ? (
              <>
                <h2 id="pixel-scout-title">{text.successTitle}</h2>
                <p>{text.successDescription}</p>
                <button type="button" className="pixel-scout-modal__button" onClick={closeReward}>{text.close}</button>
              </>
            ) : (
              <>
                <div className="pixel-scout-modal__eyebrow"><Sparkles size={14} /> {text.caught}</div>
                <h2 id="pixel-scout-title">{text.title}</h2>
                <p>{text.description}</p>
                <form onSubmit={submit}>
                  <label className="sr-only" htmlFor="pixel-scout-contact">{text.placeholder}</label>
                  <input
                    id="pixel-scout-contact"
                    value={contact}
                    onChange={(event) => setContact(event.target.value)}
                    placeholder={text.placeholder}
                    autoComplete="email tel"
                    inputMode="email"
                    maxLength={320}
                    autoFocus
                  />
                  {error && <p className="pixel-scout-modal__error" role="alert">{error}</p>}
                  <button type="submit" className="pixel-scout-modal__button" disabled={submitting}>
                    {submitting ? <LoaderCircle size={17} className="animate-spin" /> : <><span>{text.claim}</span><ArrowRight size={17} className={isArabic ? "rotate-180" : ""} /></>}
                  </button>
                </form>
                <button type="button" className="pixel-scout-modal__cancel" onClick={closeReward}>{text.cancel}</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
