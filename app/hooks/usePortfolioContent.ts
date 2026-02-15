"use client";

import { useMemo } from "react";
import { useLocale } from "../contexts/LocaleContext";
import { translations } from "../data/translations";
import {
  buildNavLinks,
  buildStats,
  buildExperiences,
} from "../data/portfolioData";

export function usePortfolioContent() {
  const { locale } = useLocale();

  return useMemo(() => {
    const t = translations[locale];
    return {
      t,
      navLinks: buildNavLinks(t),
      stats: buildStats(t),
      experiences: buildExperiences(t),
    };
  }, [locale]);
}
