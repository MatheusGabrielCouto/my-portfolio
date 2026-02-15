"use client";

import { AnimatedSection } from "../AnimatedSection";

type Stat = { value: string; label: string };

type StatsSectionProps = {
  stats: Stat[];
};

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="border-y border-(--border) bg-(--card-bg) py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={`stat-${index}-${stat.value}`} className="text-center">
              <span className="block font-mono text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-0.5 block text-xs text-(--muted) sm:mt-1 sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
