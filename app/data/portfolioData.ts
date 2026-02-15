import { translations } from "./translations";

/** IDs das seções para navegação e âncoras */
export const SECTION_IDS = {
  about: "sobre",
  experience: "experiencia",
  skills: "skills",
  contact: "contato",
} as const;

/** Lista de tecnologias (sem tradução) */
export const SKILLS_LIST = [
  "React",
  "React Native",
  "Next.js",
  "NestJS",
  "TypeScript",
  "Node.js",
  "Kotlin",
  "Swift",
  "PostgreSQL",
  "Prisma",
  "AWS",
  "CI/CD",
  "SSL Pinning",
  "CodePush",
  "GitHub Actions",
] as const;

/** Tags por experiência (não traduzidas) */
export const EXPERIENCE_TAGS = {
  ica: [
    "React Native",
    "Next.js",
    "TypeScript",
    "NestJS",
    "AWS",
    "Kotlin",
    "Swift",
    "Prisma",
    "PostgreSQL",
  ],
  cigam: ["React", "TypeScript", "Redux", "REST APIs", "Styled Components", "Figma"],
} as const;

/** Links de contato externos */
export const CONTACT_LINKS = {
  email: "mailto:matheus.gabriel.couto@hotmail.com",
  phone: "tel:+5569999598313",
  github: "https://github.com/MatheusGabrielCouto",
  linkedin: "https://linkedin.com/in/matheus-gabriel-pereira-do-couto-1248611b3",
  cvPdf: "/Curriculum.pdf",
} as const;

export type TranslationLocale = (typeof translations)["pt"] | (typeof translations)["en"];

export function buildNavLinks(t: TranslationLocale) {
  return [
    { href: `#${SECTION_IDS.about}`, label: t.nav.about },
    { href: `#${SECTION_IDS.experience}`, label: t.nav.experience },
    { href: `#${SECTION_IDS.skills}`, label: t.nav.skills },
    { href: `#${SECTION_IDS.contact}`, label: t.nav.contact },
  ];
}

export function buildStats(t: TranslationLocale) {
  return [
    { value: "5+", label: t.stats.years },
    { value: "3", label: t.stats.apps },
    { value: "3", label: t.stats.dashboards },
    { value: "Full", label: t.stats.stack },
  ];
}

export function buildExperiences(t: TranslationLocale) {
  return [
    {
      company: "Grupo Ica",
      role: "Front-End Developer",
      period: t.experience.ica.period,
      location: t.experience.ica.location,
      highlights: [t.experience.ica.h1, t.experience.ica.h2, t.experience.ica.h3, t.experience.ica.h4],
      tags: [...EXPERIENCE_TAGS.ica],
    },
    {
      company: "CIGAM Software de Gestão",
      role: "Front-End Developer",
      period: t.experience.cigam.period,
      location: t.experience.cigam.location,
      highlights: [t.experience.cigam.h1, t.experience.cigam.h2, t.experience.cigam.h3],
      tags: [...EXPERIENCE_TAGS.cigam],
    },
  ];
}
