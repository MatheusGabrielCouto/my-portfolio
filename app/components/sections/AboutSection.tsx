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
    <section id={SECTION_IDS.about} className="border-t border-(--border) px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <SectionHeader label={label} title={title} />
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="mt-10 max-w-2xl">
          <p className="text-[15px] leading-relaxed text-(--muted)">{paragraphs[0]}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-(--muted)">{paragraphs[1]}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
