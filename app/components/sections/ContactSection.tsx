"use client";

import { AnimatedSection } from "../AnimatedSection";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { SECTION_IDS, CONTACT_LINKS } from "../../data/portfolioData";

type ContactSectionProps = {
  label: string;
  title: string;
  subtitle: string;
  emailLabel: string;
  phoneLabel: string;
  downloadCvPdfLabel: string;
};

export function ContactSection({
  label,
  title,
  subtitle,
  emailLabel,
  phoneLabel,
  downloadCvPdfLabel,
}: ContactSectionProps) {
  return (
    <section id={SECTION_IDS.contact} className="border-t border-(--border) px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <SectionHeader label={label} title={title} />
          <p className="mx-auto mt-4 max-w-md text-[15px] text-(--muted)">{subtitle}</p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button href={CONTACT_LINKS.email} variant="primary">
              {emailLabel}
            </Button>
            <Button href={CONTACT_LINKS.phone}>{phoneLabel}</Button>
            <Button href={CONTACT_LINKS.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </Button>
            <Button href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Button>
            <Button href={CONTACT_LINKS.cvPdf} target="_blank" rel="noopener noreferrer">
              {downloadCvPdfLabel}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
