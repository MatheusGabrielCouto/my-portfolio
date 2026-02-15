"use client";

import { useLocale } from "../contexts/LocaleContext";

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center rounded-full border border-(--border) bg-(--card-bg) p-0.5">
      <button
        type="button"
        onClick={() => setLocale("pt")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
          locale === "pt"
            ? "bg-(--button-primary-bg) text-(--button-primary-text)"
            : "text-(--muted) hover:text-foreground"
        }`}
        aria-label="Português"
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
          locale === "en"
            ? "bg-(--button-primary-bg) text-(--button-primary-text)"
            : "text-(--muted) hover:text-foreground"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
