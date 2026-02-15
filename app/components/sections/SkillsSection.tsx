"use client";

import { motion } from "framer-motion";
import { AnimatedSection, StaggerChildren, staggerItemVariants } from "../AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { SECTION_IDS } from "../../data/portfolioData";

type SkillsSectionProps = {
  label: string;
  title: string;
  skills: readonly string[];
};

export function SkillsSection({ label, title, skills }: SkillsSectionProps) {
  return (
    <section id={SECTION_IDS.skills} className="border-t border-(--border) px-4 py-16 sm:px-6 sm:py-20 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <SectionHeader label={label} title={title} />
        </AnimatedSection>
        <StaggerChildren className="mt-8 flex flex-wrap gap-2 sm:mt-10">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={staggerItemVariants}
              className="min-h-[44px] flex items-center justify-center rounded-full border border-(--border) bg-(--card-bg) px-3 py-2.5 text-xs text-(--muted) transition-colors hover:border-(--border-strong) hover:bg-(--hover-bg) hover:text-foreground sm:px-4 sm:py-2 sm:text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
