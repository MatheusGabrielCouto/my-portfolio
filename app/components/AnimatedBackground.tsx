"use client";

import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export function AnimatedBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: isLight
            ? "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)"
            : "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Orbs: tema claro = neutro (slate), tema escuro = cyan */}
      <motion.div
        className={`absolute -top-1/2 -left-1/4 h-[80vh] w-[80vh] rounded-full blur-[100px] ${isLight ? "bg-slate-400/20" : "bg-cyan-500/15"}`}
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute top-1/2 -right-1/4 h-[70vh] w-[70vh] rounded-full blur-[120px] ${isLight ? "bg-slate-500/15" : "bg-cyan-600/12"}`}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-0 left-1/2 h-[50vh] w-[80vw] -translate-x-1/2 rounded-full blur-[80px] ${isLight ? "bg-slate-400/12" : "bg-cyan-500/10"}`}
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute h-1.5 w-1.5 rounded-full ${isLight ? "bg-slate-500/40" : "bg-cyan-400/40"}`}
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${15 + (i * 11) % 70}%`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 3 + (i % 3) * 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Top vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 80% 50% at 50% 0%, transparent 50%, rgba(250,250,250,0.5) 100%)"
            : "radial-gradient(ellipse 80% 50% at 50% 0%, transparent 50%, rgba(12,12,15,0.4) 100%)",
        }}
      />
    </div>
  );
}
