"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "../ThemeToggle";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { Button } from "../ui/Button";
type NavLink = { href: string; label: string };

type PageHeaderProps = {
  navLinks: NavLink[];
  downloadCvLabel: string;
};

export function PageHeader({ navLinks, downloadCvLabel }: PageHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-(--border) bg-background/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
          MG
        </a>
        <ul className="flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-(--muted) transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
          </li>
          <li>
            <Button href="/Curriculum.pdf" target="_blank" rel="noopener noreferrer">
              {downloadCvLabel}
            </Button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
