"use client";

import { motion } from "framer-motion";
import { GradientText } from "../ui/GradientText";
import { Button } from "../ui/Button";

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

export function Hero({ content }: HeroProps) {
  const t = content;
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16 pb-20 sm:px-6 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-4 inline-block rounded-full border border-(--border) bg-(--card-bg) px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-(--muted) sm:mb-6 sm:px-4 sm:py-1.5 sm:text-xs"
        >
          {t.badge}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-3 font-mono text-xs text-(--muted) sm:mb-4 sm:text-sm"
        >
          {t.greeting}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          <GradientText>{t.name}</GradientText>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-1 font-mono text-base sm:mt-2 sm:text-lg"
        >
          <GradientText>{t.surname}</GradientText>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-3 text-lg font-medium text-(--muted) sm:mt-4 sm:text-xl md:text-2xl"
        >
          {t.role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="mt-1 text-xs text-(--muted) sm:mt-2 sm:text-sm"
        >
          {t.location}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
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
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-10"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="block h-8 w-5 rounded-full border border-(--border-strong)"
          style={{ clipPath: "inset(50% 0 0 0)" }}
        />
      </motion.div>
    </section>
  );
}
