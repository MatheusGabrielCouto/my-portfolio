"use client";

import { useState, useEffect } from "react";

/**
 * Returns true on mobile (≤768px) or when user prefers reduced motion.
 * Use to simplify animations and improve performance on low-power devices.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setReduced(mobile.matches || prefersReduced.matches);
    update();

    mobile.addEventListener("change", update);
    prefersReduced.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      prefersReduced.removeEventListener("change", update);
    };
  }, []);

  return reduced;
}
