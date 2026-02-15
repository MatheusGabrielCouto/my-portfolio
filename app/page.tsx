"use client";

import { AnimatedBackground } from "./components/AnimatedBackground";
import { PageHeader } from "./components/sections/PageHeader";
import { Hero } from "./components/sections/Hero";
import { StatsSection } from "./components/sections/StatsSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/sections/Footer";
import { usePortfolioContent } from "./hooks/usePortfolioContent";
import { SKILLS_LIST } from "./data/portfolioData";

export default function Home() {
  const { t, navLinks, stats, experiences } = usePortfolioContent();

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />

      <div className="page-content">
        <PageHeader navLinks={navLinks} downloadCvLabel={t.nav.downloadCv} />

        <main className="relative">
          <Hero content={t.hero} />
          <StatsSection stats={stats} />
          <AboutSection
            label={t.about.label}
            title={t.about.title}
            paragraphs={[t.about.p1, t.about.p2]}
          />
          <ExperienceSection
            label={t.experience.label}
            title={t.experience.title}
            experiences={experiences}
          />
          <SkillsSection
            label={t.skills.label}
            title={t.skills.title}
            skills={SKILLS_LIST}
          />
          <ContactSection
            label={t.contact.label}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
            emailLabel={t.contact.email}
            phoneLabel={t.contact.phone}
            downloadCvPdfLabel={t.contact.downloadCvPdf}
          />
          <Footer text={t.footer} />
        </main>
      </div>
    </div>
  );
}
