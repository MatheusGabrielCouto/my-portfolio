"use client";

import { AnimatedSection } from "../AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { SECTION_IDS } from "../../data/portfolioData";

type AboutSectionProps = {
  label: string;
  title: string;
  paragraphs: [string, string];
};

export function AboutSection({ label, title, paragraphs }: AboutSectionProps) {
  return (
    <section id={SECTION_IDS.about} className="border-t border-(--border) px-4 py-16 sm:px-6 sm:py-20 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <SectionHeader label={label} title={title} />
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="mt-8 max-w-2xl sm:mt-10">
          <p className="text-sm leading-relaxed text-(--muted) sm:text-[15px]">{paragraphs[0]}</p>
          <p className="mt-3 text-sm leading-relaxed text-(--muted) sm:mt-4 sm:text-[15px]">{paragraphs[1]}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
