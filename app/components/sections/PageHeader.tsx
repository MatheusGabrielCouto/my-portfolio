"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../ThemeToggle";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { Button } from "../ui/Button";
import { useTheme } from "@/app/contexts/ThemeContext";

const MENU_GLASS = {
  dark: "rgba(12, 12, 15, 0.3)",
  light: "rgba(250, 250, 250, 0.3)",
} as const;

type NavLink = { href: string; label: string };

type PageHeaderProps = {
  navLinks: NavLink[];
  downloadCvLabel: string;
};

export function PageHeader({ navLinks, downloadCvLabel }: PageHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(56);
  const headerRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const closeMenu = () => setMenuOpen(false);

  useLayoutEffect(() => {
    if (!headerRef.current) return;
    setHeaderHeight(headerRef.current.getBoundingClientRect().height);
  }, [menuOpen]);

  const menuPortal =
    typeof document !== "undefined" &&
    createPortal(
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-x-0 bottom-0 z-100 flex flex-col md:hidden"
            style={{ top: headerHeight }}
          >
            <div
              className="absolute inset-0 z-0 backdrop-blur-xl"
              style={{ backgroundColor: MENU_GLASS[theme] }}
              aria-hidden
            />
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative z-10 flex flex-col gap-1 px-4 py-6 text-foreground"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="min-h-[48px] flex items-center rounded-xl px-4 text-base font-medium text-foreground transition-colors hover:bg-(--hover-bg) active:bg-(--card-bg)"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 border-t border-(--border) pt-4">
                <Button
                  href="/Curriculum.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[48px] w-full items-center justify-center"
                >
                  {downloadCvLabel}
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <>
      {menuPortal}
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-(--border) bg-background/90 backdrop-blur-xl"
    >
      <nav className="relative z-10 mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground" onClick={closeMenu}>
          MG
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-4 md:flex lg:gap-6">
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

        {/* Mobile: hamburger + menu */}
        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-(--hover-bg)"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">{menuOpen ? "Fechar" : "Menu"}</span>
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </motion.header>
    </>
  );
}
