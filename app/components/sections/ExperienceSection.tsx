"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { SECTION_IDS } from "../../data/portfolioData";

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
};

type ExperienceSectionProps = {
  label: string;
  title: string;
  experiences: ExperienceItem[];
};

export function ExperienceSection({
  label,
  title,
  experiences,
}: ExperienceSectionProps) {
  return (
    <section id={SECTION_IDS.experience} className="border-t border-(--border) px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <SectionHeader label={label} title={title} />
        </AnimatedSection>
        <div className="mt-14 space-y-8">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 0.1}>
              <motion.article
                className="group rounded-xl border border-(--border) bg-(--card-bg) p-6 transition-colors hover:bg-(--card-hover) sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                      {exp.company}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-(--muted)">{exp.role}</p>
                    <p className="mt-0.5 text-sm text-(--muted)">
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {exp.highlights.map((item, j) => (
                    <li key={j} className="flex gap-3 text-[15px] text-(--muted)">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-(--border) bg-(--card-bg) px-2.5 py-1 font-mono text-xs text-(--muted)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
