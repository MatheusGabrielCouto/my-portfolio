"use client";

import { motion } from "framer-motion";
import { GradientText } from "../ui/GradientText";
import { Button } from "../ui/Button";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

type HeroContent = {
  badge: string;
  greeting: string;
  name: string;
  surname: string;
  role: string;
  location: string;
  ctaExperience: string;
  ctaContact: string;
  ctaDownloadCv: string;
};

type HeroProps = {
  content: HeroContent;
};

const fast = { duration: 0.35, delay: 0.1 };
const slow = (delay: number) => ({ duration: 0.6, delay });

export function Hero({ content }: HeroProps) {
  const t = content;
  const reducedMotion = useReducedMotion();
  const t1 = reducedMotion ? fast : slow(0.2);
  const t2 = reducedMotion ? fast : { delay: 0.3 };
  const t3 = reducedMotion ? fast : { delay: 0.4 };
  const t4 = reducedMotion ? fast : slow(0.5);
  const t5 = reducedMotion ? fast : slow(0.65);
  const t6 = reducedMotion ? fast : slow(0.8);
  const t7 = reducedMotion ? fast : { delay: 0.95 };
  const t8 = reducedMotion ? fast : slow(1.05);
  const t9 = reducedMotion ? fast : { delay: 1.3 };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16 pb-20 sm:px-6 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={t1}
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={t2}
          className="mb-4 inline-block rounded-full border border-(--border) bg-(--card-bg) px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-(--muted) sm:mb-6 sm:px-4 sm:py-1.5 sm:text-xs"
        >
          {t.badge}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={t3}
          className="mb-3 font-mono text-xs text-(--muted) sm:mb-4 sm:text-sm"
        >
          {t.greeting}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t4}
          className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          <GradientText>{t.name}</GradientText>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t5}
          className="mt-1 font-mono text-base sm:mt-2 sm:text-lg"
        >
          <GradientText>{t.surname}</GradientText>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t6}
          className="mt-3 text-lg font-medium text-(--muted) sm:mt-4 sm:text-xl md:text-2xl"
        >
          {t.role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={t7}
          className="mt-1 text-xs text-(--muted) sm:mt-2 sm:text-sm"
        >
          {t.location}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t8}
          className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-14 sm:gap-3"
        >
          <Button href="#experiencia" variant="primary">
            {t.ctaExperience}
          </Button>
          <Button href="#contato">{t.ctaContact}</Button>
          <Button href="/Curriculum.pdf" target="_blank" rel="noopener noreferrer">
            {t.ctaDownloadCv}
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={t9}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-10"
      >
        <motion.span
          animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={reducedMotion ? {} : { repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="block h-8 w-5 rounded-full border border-(--border-strong)"
          style={{ clipPath: "inset(50% 0 0 0)" }}
        />
      </motion.div>
    </section>
  );
}
